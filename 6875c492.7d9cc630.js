(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(102),l=t(111),s=t(96),m=t(101);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{allTagsPath:o,name:i,count:d}=a;return r.a.createElement(c.a,{title:`Posts tagged "${i}"`,description:`Blog | Tagged "${i}"`,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,d," ",function(e,a){return e>1?`${a}s`:a}(d,"post"),' tagged with "',i,'"'),r.a.createElement(s.a,{href:o},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map((({content:e})=>r.a.createElement(l.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null)))))))))}},99:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(20),l=t(94);a.a=function(e){const{onChange:a,className:t,checked:s}=e,[m,o]=Object(n.useState)(!s),{isClient:i}=Object(c.default)();return i?r.a.createElement("div",{onClick:e=>{o(!m),a(e)},className:Object(l.a)(t,"navbar__link","header-sunmoon","header-logo"),"aria-label":"Dark mode toggle",checked:m}):r.a.createElement("span",e)}}}]);