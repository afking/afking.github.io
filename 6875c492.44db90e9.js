(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(123),l=t(130),o=t(120);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:n,name:s,count:i}=a;return c.a.createElement(r.a,{title:`Posts tagged "${s}"`,description:`Blog | Tagged "${s}"`},c.a.createElement("div",{className:"container margin-vert--lg"},c.a.createElement("div",{className:"row"},c.a.createElement("main",{className:"col col--8 col--offset-2"},c.a.createElement("h1",null,i," ",function(e,a){return e>1?a+"s":a}(i,"post"),' tagged with "',s,'"'),c.a.createElement(o.a,{href:n},"View All Tags"),c.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>c.a.createElement(l.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},c.a.createElement(e,null))))))))}},122:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(117),l=t(119);a.a=function(e){var a=e.onChange,t=e.className,o=e.checked,s=Object(n.useState)(!o),i=s[0],m=s[1];return Object(r.a)().isClient?c.a.createElement("div",{onClick:function(e){m(!i),a(e)},className:Object(l.a)(t,"navbar__link","header-sunmoon","header-logo"),"aria-label":"Dark mode toggle",checked:i}):c.a.createElement("span",e)}}}]);