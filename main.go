package main

import (
	"flag"
	"fmt"
	"html/template"
	"io"
	"io/ioutil"
	"log"
	"mime"
	"net"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"sort"
	"strings"
	"time"

	blackfriday "gopkg.in/russross/blackfriday.v2"
)

var (
	addr = flag.String("addr", "0.0.0.0:8080", "Server address")
)

type generator struct{}

func (g generator) createTemplates() (*template.Template, error) {
	return template.ParseGlob("*.tmpl")
}

type item struct {
	Title       string
	Description string
	Src, Dst    string
	ModTime     time.Time
}

type byModTime []item

func (a byModTime) Len() int           { return len(a) }
func (a byModTime) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a byModTime) Less(i, j int) bool { return a[i].ModTime.After(a[j].ModTime) }

type index struct {
	Title string
	Posts []item
}

type post struct {
	Markdown template.HTML
}

func (g *generator) listPostfiles() ([]string, error) {
	return filepath.Glob("posts/*.md")
}

type httpError struct {
	msg  string
	code int
}

func (e httpError) Error() string { return fmt.Sprintf("%s %d", e.msg, e.code) }

func (g *generator) genIndex() (*os.File, error) {
	const target = "index.html"

	postfiles, err := g.listPostfiles()
	if err != nil {
		return nil, err
	}

	var posts []item
	for _, p := range postfiles {
		fi, err := os.Stat(p)
		if err != nil {
			return nil, err
		}

		// TODO: better ast parsing...
		input, err := ioutil.ReadFile("posts/" + fi.Name())
		if err != nil {
			return nil, err
		}

		r := blackfriday.NewHTMLRenderer(
			blackfriday.HTMLRendererParameters{
				Flags: blackfriday.CommonHTMLFlags,
			},
		)
		parser := blackfriday.New(
			blackfriday.WithRenderer(r),
			blackfriday.WithExtensions(blackfriday.CommonExtensions),
		)
		ast := parser.Parse(input)

		var title, desc string
		var isHeading, isParagraph bool
		ast.Walk(func(node *blackfriday.Node, entering bool) blackfriday.WalkStatus {
			isHeading = entering && node.Type == blackfriday.Heading && title == "" || isHeading
			isParagraph = entering && node.Type == blackfriday.Paragraph && desc == "" || isParagraph

			if isHeading && node.Type == blackfriday.Text {
				title = string(node.Literal)
				isHeading = false
			}
			if isParagraph && node.Type == blackfriday.Text {
				desc = string(node.Literal)
				isParagraph = false
			}
			return blackfriday.GoToNext
		})

		posts = append(posts, item{
			Title:       title,
			Description: desc,
			Src:         p,
			Dst:         strings.Replace(p, ".md", ".html", 1),
			ModTime:     fi.ModTime(),
		})
	}

	sort.Sort(byModTime(posts))

	index := index{
		Title: "Blog Edward McFarlane",
		Posts: posts,
	}

	f, err := os.Create(target)
	if err != nil {
		return nil, err
	}

	tmpls, err := g.createTemplates()
	if err != nil {
		return nil, err
	}

	if err := tmpls.ExecuteTemplate(f, "index.tmpl", index); err != nil {
		return nil, err
	}

	fmt.Println("wrote", f.Name())
	//return os.Open(name)
	if _, err := f.Seek(0, io.SeekStart); err != nil {
		return nil, err
	}
	return f, nil

}

func (g *generator) genMD(src, dst string) (*os.File, error) {
	fmt.Printf("%s -> %s\n", src, dst)

	input, err := ioutil.ReadFile(src)
	if err != nil {
		return nil, err
	}

	output := blackfriday.Run(input)

	f, err := os.Create(dst)
	if err != nil {
		return nil, err
	}

	post := post{
		Markdown: template.HTML(output),
	}

	tmpls, err := g.createTemplates()
	if err != nil {
		return nil, err
	}

	if err := tmpls.ExecuteTemplate(f, "post.tmpl", post); err != nil {
		return nil, err
	}

	if _, err := f.Seek(0, io.SeekStart); err != nil {
		return nil, err
	}
	return f, nil
}

func (g *generator) mux(name string) (*os.File, error) {
	switch {
	case name == "", name == "/", name == "/index.html":
		return g.genIndex()

	case filepath.Ext(name) == ".html":
		dst := filepath.Join("./", path.Clean("/"+name))
		src := dst[:len(dst)-len(".html")] + ".md"
		return g.genMD(src, dst)

	default:
		dst := filepath.Join("./", path.Clean("/"+name))
		return os.Open(dst)
	}
}

// serveHTTP implements a simple fileserver.
func (g *generator) serveHTTP(w http.ResponseWriter, r *http.Request) error {
	name := r.URL.Path

	f, err := g.mux(name)
	if err != nil {
		return err
	}
	defer f.Close()

	w.Header().Set("Content-Type", mime.TypeByExtension(filepath.Ext(f.Name())))
	if _, err := io.Copy(w, f); err != nil {
		return err
	}
	return nil
}

func (g *generator) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	upath := r.URL.Path
	if !strings.HasPrefix(upath, "/") {
		upath = "/" + upath
		r.URL.Path = upath
	}

	log.Printf("%s %s\n", r.Method, upath)
	if err := g.serveHTTP(w, r); err != nil {
		var (
			msg  string
			code int
		)

		switch v := err.(type) {
		case httpError:
			msg, code = v.msg, v.code
		default:
			msg, code = fmt.Sprintf("internal server error: %s", err), http.StatusInternalServerError
		}
		http.Error(w, msg, code)
		log.Println(err)
		return
	}
}

func run() error {
	//mux := http.NewServeMux()
	addr := *addr
	hdlr := &generator{}

	//mux.Handle("/",

	l, err := net.Listen("tcp", addr)
	if err != nil {
		return err
	}

	log.Printf("serving %s", addr)
	return http.Serve(l, hdlr)
}

func main() {
	if err := run(); err != nil {
		log.Fatal(err)
	}
}
