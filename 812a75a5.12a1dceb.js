(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,g=m["".concat(l,".").concat(b)]||m[b]||s[b]||o;return n?a.a.createElement(g,c(c({ref:t},p),{},{components:n})):a.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(126)),l=["components"],c={slug:"goodbyeCleanCode",title:"\u041f\u0440\u043e\u0449\u0430\u0439 \u0447\u0438\u0441\u0442\u044b\u0439 \u043a\u043e\u0434!",author:"Timofey Aksenov",author_title:"Front End Developer",author_url:"https://github.com/taksenov",author_image_url:"https://avatars3.githubusercontent.com/u/4538701?s=400&v=4",tags:["DRY","Dan Abramov","programming","\u043d\u0430\u0440\u0443\u0448\u0438\u0442\u0435\u043b\u0438","\u0443 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0434\u0436\u0443\u043d\u043e\u0432 \u0431\u043e\u043c\u0431\u0430\u043d\u0435\u0442"]},i={permalink:"/my-homepage/blog/goodbyeCleanCode",source:"@site/blog/2020-02-24-goodbyeCleanCode.md",description:"\u0414\u0435\u043d \u0410\u0431\u0440\u0430\u043c\u043e\u0432 \u0432 \u0441\u0432\u043e\u0435\u043c \u0431\u043b\u043e\u0433\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043b \u043a\u0440\u0430\u0439\u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0443\u044e \u0441\u0442\u0430\u0442\u044c\u044e \u043e \u0442\u043e\u043c, \u043a\u043e\u0433\u0434\u0430 \u0438 \u043f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b \u043d\u0430\u0440\u0443\u0448\u0430\u043b\u0438, \u043d\u0430\u0440\u0443\u0448\u0430\u0435\u043c \u0438 \u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0440\u0443\u0448\u0430\u0442\u044c \u043f\u0440\u0438\u043d\u0446\u0438\u043f DRY.",date:"2020-02-24T00:00:00.000Z",tags:[{label:"DRY",permalink:"/my-homepage/blog/tags/dry"},{label:"Dan Abramov",permalink:"/my-homepage/blog/tags/dan-abramov"},{label:"programming",permalink:"/my-homepage/blog/tags/programming"},{label:"\u043d\u0430\u0440\u0443\u0448\u0438\u0442\u0435\u043b\u0438",permalink:"/my-homepage/blog/tags/\u043d\u0430\u0440\u0443\u0448\u0438\u0442\u0435\u043b\u0438"},{label:"\u0443 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0434\u0436\u0443\u043d\u043e\u0432 \u0431\u043e\u043c\u0431\u0430\u043d\u0435\u0442",permalink:"/my-homepage/blog/tags/\u0443-\u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445-\u0434\u0436\u0443\u043d\u043e\u0432-\u0431\u043e\u043c\u0431\u0430\u043d\u0435\u0442"}],title:"\u041f\u0440\u043e\u0449\u0430\u0439 \u0447\u0438\u0441\u0442\u044b\u0439 \u043a\u043e\u0434!",readingTime:.515,truncated:!1,prevItem:{title:"\u041d\u0435\u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0432\u044b\u0431\u043e\u0440 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u044f",permalink:"/my-homepage/blog/hardSimple"}},p=[],u={toc:p};function m(e){var t=e.components,n=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u0414\u0435\u043d \u0410\u0431\u0440\u0430\u043c\u043e\u0432 \u0432 \u0441\u0432\u043e\u0435\u043c \u0431\u043b\u043e\u0433\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043b \u043a\u0440\u0430\u0439\u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0443\u044e ",Object(o.b)("a",{parentName:"p",href:"https://overreacted.io/goodbye-clean-code/"},"\u0441\u0442\u0430\u0442\u044c\u044e")," \u043e \u0442\u043e\u043c, \u043a\u043e\u0433\u0434\u0430 \u0438 \u043f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b \u043d\u0430\u0440\u0443\u0448\u0430\u043b\u0438, \u043d\u0430\u0440\u0443\u0448\u0430\u0435\u043c \u0438 \u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0440\u0443\u0448\u0430\u0442\u044c \u043f\u0440\u0438\u043d\u0446\u0438\u043f DRY."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u041a\u043e\u0434 \u0434\u043b\u044f \u043f\u0440\u0438\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let { top, bottom, left, right } = Directions;\n\nfunction createHandle(directions) {\n  // 20 lines of code\n}\n\nlet fourCorners = [\n  createHandle([top, left]),\n  createHandle([top, right]),\n  createHandle([bottom, left]),\n  createHandle([bottom, right]),\n];\nlet fourSides = [\n  createHandle([top]),\n  createHandle([left]),\n  createHandle([right]),\n  createHandle([bottom]),\n];\nlet twoSides = [createHandle([left]), createHandle([right])];\n\nfunction createBox(shape, handles) {\n  // 20 lines of code\n}\n\nlet Rectangle = createBox(Shapes.Rectangle, fourCorners);\nlet Oval = createBox(Shapes.Oval, fourSides);\nlet Header = createBox(Shapes.Rectangle, twoSides);\nlet TextBox = createBox(Shapes.Rectangle, fourCorners);\n")))}m.isMDXComponent=!0}}]);