(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{117:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(138),m=t(141),c=t(136);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:r,name:o,count:s}=a;return n.a.createElement(l.a,{title:`Posts tagged "${o}"`,description:`Blog | Tagged "${o}"`},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,s," ",function(e,a){return e>1?`${a}s`:a}(s,"post"),' tagged with "',o,'"'),n.a.createElement(c.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>n.a.createElement(m.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},n.a.createElement(e,null))))))))}},141:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(137),m=t.n(l),c=t(134),o=t(136),s=t(142),i=t(93),u=t.n(i);const g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:l,isBlogPostPage:i=!1}=e,{date:d,permalink:E,tags:h}=r,{author:v,title:p}=t,N=t.author_url||t.authorURL,b=t.author_title||t.authorTitle,f=t.author_image_url||t.authorImageURL;return n.a.createElement("article",{className:i?void 0:"margin-bottom--xl"},(()=>{const e=i?"h1":"h2",a=d.substring(0,10).split("-"),t=a[0],r=g[parseInt(a[1],10)-1],l=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:m()("margin-bottom--sm",u.a.blogPostTitle)},i?p:n.a.createElement(o.a,{to:E},p)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:d,className:u.a.blogPostDate},r," ",l,", ",t)),n.a.createElement("div",{className:"avatar margin-vert--md"},f&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:N,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:f,alt:v})),n.a.createElement("div",{className:"avatar__intro"},v&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:N,target:"_blank",rel:"noreferrer noopener"},v)),n.a.createElement("small",{className:"avatar__subtitle"},b)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(c.a,{components:s.a},a)),(h.length>0||l)&&n.a.createElement("footer",{className:"row margin-vert--lg"},h.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),h.map(({label:e,permalink:a})=>n.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:r.permalink,"aria-label":`Read more about ${p}`},n.a.createElement("strong",null,"Read More")))))}}}]);