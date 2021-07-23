(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),a=(n(0),n(93)),i={slug:"webapps",title:"A Web App Framework"},p={permalink:"/webapps",editUrl:"https://github.com/emcfarlane/emcfarlane.github.io/edit/master/blog/2021-06-01-webapps.md",source:"@site/blog/2021-06-01-webapps.md",description:"This is documentation, for me essentially, on how to deploy a web application.",date:"2021-06-01T00:00:00.000Z",tags:[],title:"A Web App Framework",readingTime:5.51,truncated:!0,nextItem:{title:"Goldfish Memory",permalink:"/goldfish"}},s=[{value:"NextJS Guide",id:"nextjs-guide",children:[{value:"Setup Next.js",id:"setup-nextjs",children:[]},{value:"Setup Typescript",id:"setup-typescript",children:[]},{value:"Setup PWA",id:"setup-pwa",children:[]},{value:"Setup Tailwindcss",id:"setup-tailwindcss",children:[]},{value:"Setup Darkmode",id:"setup-darkmode",children:[]}]},{value:"Firebase",id:"firebase",children:[]},{value:"API",id:"api",children:[{value:"Larking",id:"larking",children:[]},{value:"Protoc",id:"protoc",children:[]}]},{value:"Layout",id:"layout",children:[]},{value:"Deployment",id:"deployment",children:[]}],l={toc:s};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is documentation, for me essentially, on how to deploy a web application.\nIt's opinionated and will change over time. Here are the buzz words:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Next.js"),Object(a.b)("li",{parentName:"ul"},"Typescript"),Object(a.b)("li",{parentName:"ul"},"Progressive Web App (PWA)"),Object(a.b)("li",{parentName:"ul"},"Go"),Object(a.b)("li",{parentName:"ul"},"Google Cloud Run (Serverless)"),Object(a.b)("li",{parentName:"ul"},"Firebase")),Object(a.b)("h2",{id:"nextjs-guide"},"NextJS Guide"),Object(a.b)("h3",{id:"setup-nextjs"},"Setup Next.js"),Object(a.b)("p",null,"Nextjs make react simple and configurable to set up. Docs are ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nextjs.org/docs"}),"here"),"."),Object(a.b)("h3",{id:"setup-typescript"},"Setup Typescript"),Object(a.b)("p",null,"Docs are ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nextjs.org/docs/basic-features/typescript"}),"here"),"\nYou will want to install the types as dev dependencies:\n",Object(a.b)("inlineCode",{parentName:"p"},"npm install --save-dev typescript @types/react"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "compilerOptions": {\n    "target": "es5",\n    "lib": ["dom", "dom.iterable", "esnext"],\n    "allowJs": true,\n    "skipLibCheck": true,\n    "strict": false,\n    "forceConsistentCasingInFileNames": true,\n    "noEmit": true,\n    "esModuleInterop": true,\n    "module": "esnext",\n    "moduleResolution": "node",\n    "resolveJsonModule": true,\n    "isolatedModules": true,\n    "jsx": "preserve"\n  },\n  "exclude": ["node_modules"],\n  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]\n}\n')),Object(a.b)("h3",{id:"setup-pwa"},"Setup PWA"),Object(a.b)("p",null,"Progressive Web Apps. Docs are ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/next-pwa"}),"here"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'const withPWA = require("next-pwa");\n\nmodule.exports = withPWA({\n  pwa: {\n    dest: "public",\n  },\n  async rewrites() {\n    return [\n      {\n        source: "/api/:path*",\n        destination: "http://localhost:8000/:path*", // Proxy to Backend\n      },\n    ];\n  },\n});\n')),Object(a.b)("p",null,"The important part is the local ",Object(a.b)("inlineCode",{parentName:"p"},"/api")," redirect for developement.\nThis redirects all ",Object(a.b)("inlineCode",{parentName:"p"},"/api")," calls to your local backend service."),Object(a.b)("h3",{id:"setup-tailwindcss"},"Setup Tailwindcss"),Object(a.b)("p",null,"Docs are ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://tailwindcss.com/docs/guides/nextjs"}),"here"),".\nYou need to create the  ",Object(a.b)("inlineCode",{parentName:"p"},"tailwind.config.js")," and ",Object(a.b)("inlineCode",{parentName:"p"},"postcss.config.js")," files."),Object(a.b)("p",null,"I recommend to keep the global ",Object(a.b)("inlineCode",{parentName:"p"},"styles.css")," so you can still bundle classes together."),Object(a.b)("h3",{id:"setup-darkmode"},"Setup Darkmode"),Object(a.b)("p",null,"Support for dark mode is nice.\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/next-themes"}),Object(a.b)("inlineCode",{parentName:"a"},"next-themes"))," provides this out of the box."),Object(a.b)("p",null,"Ensure your ",Object(a.b)("inlineCode",{parentName:"p"},"tailwind.config.js")," adds support via the darkmode class:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'module.exports = {\n  ...\n  darkMode: "class",\n  ...\n}\n')),Object(a.b)("p",null,"Add ",Object(a.b)("inlineCode",{parentName:"p"},"color-scheme")," support to your ",Object(a.b)("inlineCode",{parentName:"p"},"styles.css"),". More info on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.dev/color-scheme/"}),"web.dev")),Object(a.b)("h2",{id:"firebase"},"Firebase"),Object(a.b)("p",null,"Firebase is a useful application framework. It has good support for mobile apps to.\nThe web sdks are nice. The main benefit I see is for authentication."),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("p",null,"I'm a big fan of protobuffers and gRPC. It's well defined and simple with a lot\nof best practises built in. However it's typically not been usefull for any\nfront end work as the internal protocol of gRPC is based on binary HTTP2 with\ntrailing headers that aren't supported in the browser. Although now there are\na couple options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"gRPC Web"),Object(a.b)("li",{parentName:"ul"},"REST Transcoding")),Object(a.b)("p",null,"My preferred is transcoding. It gives a nice ",Object(a.b)("em",{parentName:"p"},"RESTful")," style api that doesn't feel like a generated API."),Object(a.b)("h3",{id:"larking"},"Larking"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/emcfarlane/larking"}),"Larking")," is my transcoding project.\nIt uses the new ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://blog.golang.org/protobuf-apiv2"}),"protobuf apiv2")," to\nparse the http options, generating the REST bindings.\nThe best part is that it does this on the fly.\nNo extra ",Object(a.b)("inlineCode",{parentName:"p"},"protoc")," options or dealing with the generated runtime code.\nIt can do this via server side reflection too, making it a proxy that adapts to the server changes without having to reboot.\nAlthough the most useful case I've had is for the server to run both the gRPC service and the http REST service."),Object(a.b)("p",null,"Below is my function that serves on the listener until failure:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'func (s *Server) Serve(l net.Listener) error {\n    sigChan := make(chan os.Signal, 1)\n    signal.Notify(sigChan, os.Interrupt, syscall.SIGTERM)\n\n    m := cmux.New(l)\n\n    grpcL := m.Match(cmux.HTTP2HeaderField("content-type", "application/grpc"))\n    httpL := m.Match(cmux.Any())\n\n    zgl := zapgrpc.NewLogger(s.log)\n    grpclog.SetLoggerV2(zgl)\n\n    gs := grpc.NewServer(grpc.UnaryInterceptor(s.unaryInterceptor))\n    pb.RegisterAppServer(gs, s)\n    longrunning.RegisterOperationsServer(gs, s)\n\n    hd := &larking.Handler{\n        UnaryInterceptor: s.unaryInterceptor,\n    }\n    if err := hd.RegisterServiceByName("app.api.Services", s); err != nil {\n        return err\n    }\n    if err := hd.RegisterServiceByName("google.longrunning.Operations", s); err != nil {\n        return err\n    }\n\n    mux := http.NewServeMux()\n    if s.debug {\n        s.log.Info("debug enabled", zap.String("path", "/debug/pprof/"))\n        mux.HandleFunc("/debug/pprof/", pprof.Index)\n        mux.HandleFunc("/debug/pprof/cmdline", pprof.Cmdline)\n        mux.HandleFunc("/debug/pprof/profile", pprof.Profile)\n        mux.HandleFunc("/debug/pprof/symbol", pprof.Symbol)\n        mux.HandleFunc("/debug/pprof/trace", pprof.Trace)\n    }\n    mux.Handle("/api/", http.StripPrefix("/api/", hd)) // Firebase hosting restrictions\n    mux.Handle("/", hd)\n    hs := &http.Server{\n        Handler: mux,\n    }\n\n    errs := make(chan error, 3)\n\n    go func() { errs <- gs.Serve(grpcL) }()\n    defer gs.Stop()\n\n    go func() { errs <- hs.Serve(httpL) }()\n    defer hs.Close()\n\n    go func() { errs <- m.Serve() }()\n\n    s.log.Info("listening", zap.String("address", l.Addr().String()))\n    select {\n    case err := <-errs:\n        return err\n    case _ = <-sigChan:\n        return nil\n    }\n}\n')),Object(a.b)("h3",{id:"protoc"},"Protoc"),Object(a.b)("p",null,"Protoc build command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"protoc --go_out=paths=source_relative:. --go-grpc_out=paths=source_relative:. --ts_proto_out=. --ts_proto_opt=esModuleInterop=true,useDate=string apipb/*.proto\n")),Object(a.b)("p",null,"To keep the frontend in-sync with the backend I use a typescript integration from ",Object(a.b)("inlineCode",{parentName:"p"},"ts_proto"),".\nDocs ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stephenh/ts-proto"}),"here"),".\nOne unsolved problem is the generation of calling code.\nI don't have autogenerated handlers for calling the API yet."),Object(a.b)("h2",{id:"layout"},"Layout"),Object(a.b)("p",null,"I like flat layouts. Specially for small projects. I think it greatly simplifies it.\nEverything is visible, nothing is hidden away in the depths.\nIt's realy not a big deal how things are laid out but it helps to have a structure.\nWeb app projects are tightly integrated between the frontend and backend.\nThe API is used to \"decouple\" the two, but if you want to change the API you need to ensure both still work.\nI've found it nice to have the backend/frontend code living close together."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),".firebase\n.firebaserc\n.git\n.gitignore\n.next\nREADME.md\napipb\n\u251c\u2500\u2500 api.pb.go\n\u251c\u2500\u2500 api.proto\n\u251c\u2500\u2500 api.ts\n\u2514\u2500\u2500 api_grpc.pb.go\n$APP\n\u251c\u2500\u2500 server.go (go application files)\n\u251c\u2500\u2500 resources.go\n\u251c\u2500\u2500 resources_test.go\n\u251c\u2500\u2500 resources.tsx (javascript code resources API)\n\u2514\u2500\u2500 ...\ncmd\n\u2514\u2500\u2500 appname\n    \u2514\u2500\u2500 main.go\ncomponents\n\u251c\u2500\u2500 Button.tsx\n\u2514\u2500\u2500 ...\nfirebase.json\nfirestore-debug.log\nfirestore.rules\ngo.mod\ngo.sum\nnext.config.js\nnode_modules\npackage.json\npages\n\u251c\u2500\u2500 _document.tsx (html document settings)\n\u251c\u2500\u2500 _app.tsx (app settings)\n\u251c\u2500\u2500 ...\n\u2514\u2500\u2500 index.tsx (home page)\npostcss.config.js\npublic\n\u2514\u2500\u2500 ... (images, etc)\nstyles\n\u2514\u2500\u2500 global.css\ntailwind.config.js\ntsconfig.json\n")),Object(a.b)("h2",{id:"deployment"},"Deployment"),Object(a.b)("p",null,"Googles ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/google/ko"}),Object(a.b)("inlineCode",{parentName:"a"},"ko"))," is great!\nOne command deployment to gcloud run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"gcloud --project $PROJECT run deploy --image=$(KO_DOCKER_REPO=gcr.io/$PROJECT/$APP ko publish ./cmd/$APP) --platform managed $APP\n")),Object(a.b)("p",null,"I've used bazel before and wanted to reuse it in projects.\nHowever, most of the time I find it gets in the way more than anything.\nIt doesn't play nicely with the localy tools so editors and bazel constantly rebuild your code.\nProtoc support works, but I've had it break constantly on multiple upgrades.\nBazel server isn't light either.\nI'm working with an older mac that needs all the ram it can get.\nSo for now I've been happy with ",Object(a.b)("inlineCode",{parentName:"p"},"ko"),"."),Object(a.b)("p",null,"For projects that require ",Object(a.b)("inlineCode",{parentName:"p"},"cgo")," I use ",Object(a.b)("inlineCode",{parentName:"p"},"zig"),".\nDocs ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://dev.to/kristoff/zig-makes-go-cross-compilation-just-work-29ho"}),"here"),".\nI've then been using bazel for only building the container iamges and deploying them.\nThis is sub optimal.\nSo I have a new project ",Object(a.b)("inlineCode",{parentName:"p"},"laze"),"!\n",Object(a.b)("inlineCode",{parentName:"p"},"laze")," is a local tool friendly, build graph exectutor.\nIt tries to be a simple version of bazel.\nDocs for it ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/emcfarlane/laze"}),"here"),".\nI'll do a writeup once I get some more core features added."),Object(a.b)("p",null,"For the frontend:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run export && firebase deploy\n")),Object(a.b)("p",null,"Firebase code need to know about the proxy."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"firebase.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "hosting": {\n    "public": "out/",\n    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],\n    "rewrites": [\n      {\n        "source": "/api/**",\n        "run": {\n          "serviceId": "$APP",\n          "region": "europe-west1"\n        }\n      },\n      {\n        "source": "/login",\n        "destination": "/login.html"\n      }\n    ]\n  },\n  "firestore": {\n    "rules": "firestore.rules"\n  },\n  "emulators": {\n    "hosting": {\n      "port": 5000\n    },\n    "firestore": {\n      "port": "8080"\n    },\n    "ui": {\n      "enabled": true,\n      "host": "0.0.0.0",\n      "port": 4000\n    }\n  }\n}\n')))}c.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=r,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(h,p(p({ref:t},l),{},{components:n})):o.a.createElement(h,p({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);