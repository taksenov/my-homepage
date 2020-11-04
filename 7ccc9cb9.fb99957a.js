(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return i}));var a=t(2),r=t(9),o=(t(0),t(186)),c={id:"channelsInEcmaScript",title:'\u041a\u0430\u043d\u0430\u043b\u044b \u0432 JS - \u044d\u0442\u043e \u043a\u043e\u0433\u0434\u0430 "\u0442\u0435\u0431\u0435" \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043d\u043e\u043f\u043e\u0447\u043a\u0438 "\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c"',author:"Timofey Aksenov",author_title:"Front End Developer",author_url:"https://github.com/taksenov",author_image_url:"https://avatars3.githubusercontent.com/u/4538701?s=400&v=4",tags:["lodash","go","golang","programming","redux-saga","channel","javascript","typescript","either monad","functional programming","contracts","contracts programming"]},l={permalink:"/my-homepage/blog/channelsInEcmaScript",source:"@site/blog/2020-11-04-channelsInEcmaScript.md",description:"\u0420\u0430\u0431\u043e\u0442\u0430\u043b \u044f \u043a\u0430\u043a-\u0442\u043e \u0441\u0432\u043e\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435",date:"2020-11-04T00:00:00.000Z",tags:[{label:"lodash",permalink:"/my-homepage/blog/tags/lodash"},{label:"go",permalink:"/my-homepage/blog/tags/go"},{label:"golang",permalink:"/my-homepage/blog/tags/golang"},{label:"programming",permalink:"/my-homepage/blog/tags/programming"},{label:"redux-saga",permalink:"/my-homepage/blog/tags/redux-saga"},{label:"channel",permalink:"/my-homepage/blog/tags/channel"},{label:"javascript",permalink:"/my-homepage/blog/tags/javascript"},{label:"typescript",permalink:"/my-homepage/blog/tags/typescript"},{label:"either monad",permalink:"/my-homepage/blog/tags/either-monad"},{label:"functional programming",permalink:"/my-homepage/blog/tags/functional-programming"},{label:"contracts",permalink:"/my-homepage/blog/tags/contracts"},{label:"contracts programming",permalink:"/my-homepage/blog/tags/contracts-programming"}],title:'\u041a\u0430\u043d\u0430\u043b\u044b \u0432 JS - \u044d\u0442\u043e \u043a\u043e\u0433\u0434\u0430 "\u0442\u0435\u0431\u0435" \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043d\u043e\u043f\u043e\u0447\u043a\u0438 "\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c"',readingTime:4.895,truncated:!1,nextItem:{title:"\u041a\u043e\u0433\u0434\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u0442\u043e \u0445\u043e\u0440\u043e\u0448\u043e, \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0438 \u043d\u0443\u0436\u043d\u043e",permalink:"/my-homepage/blog/whenFPIsAwesome"}},s=[],p={rightToc:s};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,'\u0420\u0430\u0431\u043e\u0442\u0430\u043b \u044f \u043a\u0430\u043a-\u0442\u043e \u0441\u0432\u043e\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435: "\u0440\u0438\u0441\u043e\u0432\u0430\u043b \u043a\u043d\u043e\u043f\u043e\u0447\u043a\u0438 \u043d\u0430 \u0440\u0435\u0430\u043a\u0442\u0435" \u0438 \u0432\u0434\u0440\u0443\u0433 \u0431\u0430\u0445! \u0422\u0438\u043c\u043b\u0438\u0434 \u043c\u043d\u0435 \u0433\u043e\u0432\u043e\u0440\u0438\u0442:'),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u0422\u0438\u043c\u043e\u0444\u0435\u0439\u0447\u0438\u043a, \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u0440\u043e\u0447\u043d\u043e \u0432 \u043f\u0440\u043e\u0435\u043a\u0442 \u0437\u0430\u043a\u0430\u0442\u0438\u0442\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 web sockets \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0440\u0430\u0437\u043d\u044b\u0445 web socket \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 \u0438 \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0443 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u0432\u043d\u0443\u0442\u0440\u0438 web socket \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0430 \u0442\u0430\u043a \u0436\u0435 \u043d\u0443\u0436\u043d\u043e \u043a\u0430\u043a-\u0442\u043e \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u043a\u0430\u043d\u0430\u043b\u0430\u043c\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c, gracefull stopping \u0438\u043c, \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u0434\u0440\u0443\u0433 \u043e\u0442 \u0434\u0440\u0443\u0433\u0430, \u0434\u0435\u043b\u0430\u0442\u044c \u0438 \u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0437\u0430 \u0438\u0445 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0438 \u0442.\u0434. \u0438 \u0442.\u043f. \u0418 \u0434\u0430, \u0432\u043e\u0442 \u043c\u044b \u0442\u0443\u0442 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u043b\u0438 \u0441\u0435\u0440\u0432\u0430\u043a \u043d\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 centrifuge. \u0421\u0434\u0435\u043b\u0430\u0439 \u043a\u0440\u0430\u0441\u0438\u0432\u043e, \u0432 \u043e\u0431\u0449\u0435\u043c.")),Object(o.b)("p",null,"\u0414\u0435\u043b\u0430\u0442\u044c \u043d\u0435\u0447\u0435\u0433\u043e, \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c."),Object(o.b)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u044f \u0443\u0447\u0438\u043b\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441\u0430\u0445 \u043f\u043e ",Object(o.b)("inlineCode",{parentName:"p"},"Golang"),", \u0430 \u0434\u0430 \u0435\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0432 \u043a\u0443\u0440\u0441\u0435, \u0442\u043e \u044f \u043f\u0440\u043e\u0448\u0435\u043b \u043a\u0443\u0440\u0441\u044b \u043d\u0430 \u0441\u0442\u0435\u043f\u0438\u043a\u0435 \u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0445 \u0441\u0434\u0430\u043b \u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u0430\u043b\u043b."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://stepik.org/cert/288192"}),"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u043d\u0430 Go - \u043e\u0441\u043d\u043e\u0432\u044b \u044f\u0437\u044b\u043a\u0430 / \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 100%")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://stepik.org/cert/371396"}),"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u043d\u0430 Golang, \u0447\u0430\u0441\u0442\u044c 2 / \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 100%")),Object(o.b)("p",null,"\u0412 \u043e\u0431\u0449\u0435\u043c \u043d\u0430 \u044d\u0442\u0438\u0445 \u043a\u0443\u0440\u0441\u0430\u0445 \u0438\u0437\u0443\u0447\u0430\u044f, \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0433\u043e\u0440\u0443\u0442\u0438\u043d\u044b \u0438 \u043f\u0438\u0448\u0443\u0442\u0441\u044f \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u044b, \u044f \u0443\u0437\u043d\u0430\u043b \u043f\u0440\u043e \u043a\u0430\u043d\u0430\u043b\u044b, \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043b \u0438\u0445 \u0432 \u0414\u0417 \u0438 \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u043b, \u0447\u0442\u043e \u043a\u0430\u043d\u0430\u043b\u044b \u0432\u0435\u0449\u044c \u043d\u0443\u0436\u043d\u0430\u044f \u0438 \u043f\u043e\u043b\u0435\u0437\u043d\u0430\u044f."),Object(o.b)("p",null,"\u0418 \u0432\u043e\u0442 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043c\u043e\u0437\u0433\u043e\u0432\u043e\u0433\u043e \u0448\u0442\u0443\u0440\u043c\u0430, \u044f \u0432\u0441\u043f\u043e\u043c\u043d\u0438\u043b, \u0447\u0442\u043e \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043a ",Object(o.b)("inlineCode",{parentName:"p"},"redux-saga")," \u0447\u0438\u0442\u0430\u043b \u043f\u0440\u043e ",Object(o.b)("inlineCode",{parentName:"p"},"eventChannels")," \u0438 \u0442\u0430\u043c \u0431\u044b\u043b \u043f\u0440\u0438\u043c\u0435\u0440 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u0430\u043d\u0430\u043b\u0430 \u0434\u043b\u044f web sockets \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 ",Object(o.b)("inlineCode",{parentName:"p"},"socket.io client"),'. \u041e \u0434\u0430, \u0435\u0441\u043b\u0438 \u0431\u044b \u043d\u0435 \u043a\u0443\u0440\u0441\u044b \u043f\u043e \u0433\u043e\u0448\u0435\u0447\u043a\u0435, \u0442\u043e \u044f \u0431\u044b \u044d\u0442\u0443 \u0447\u0430\u0441\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b \u0438 \u043f\u043e\u0448\u0435\u043b \u0434\u0430\u043b\u044c\u0448\u0435 \u044d\u043a\u0448\u0435\u043d\u0430\u043c\u0438 \u0432 \u0441\u0442\u043e\u0440 \u043f\u0443\u043b\u044f\u0442\u044c\u0441\u044f... \u043e\u0439 "\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043e\u0447\u043a\u0438 \u043d\u0430 \u0440\u0435\u0430\u043a\u0442\u0435" \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0436\u0435.'),Object(o.b)("p",null,"\u0418\u0437\u0443\u0447\u0438\u0432 \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0437 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 ",Object(o.b)("inlineCode",{parentName:"p"},"redux-saga"),", \u044f \u043f\u043e\u043d\u044f\u043b, \u0447\u0442\u043e ",Object(o.b)("inlineCode",{parentName:"p"},"eventChannels")," \u044d\u0442\u043e \u0442\u043e \u0447\u0442\u043e \u043c\u043d\u0435 \u043d\u0443\u0436\u043d\u043e. \u041d\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u043a\u043e\u0434, \u0447\u0442\u043e\u0431\u044b \u0443\u0447\u0435\u0441\u0442\u044c \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c web sockets (\u043e\u0431\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u0430\u043d\u0430\u043b)"),Object(o.b)("li",{parentName:"ol"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c \u043a\u0430\u043d\u0430\u043b\u0430\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 web sockets (\u043e\u0431\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u0430\u043d\u0430\u043b)"),Object(o.b)("li",{parentName:"ol"},"\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a \u043a\u0430\u043d\u0430\u043b\u043e\u0432"),Object(o.b)("li",{parentName:"ol"},"\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u0430\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u0430\u043d\u0430\u043b\u043e\u0432"),Object(o.b)("li",{parentName:"ol"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043a\u0430\u043d\u0430\u043b\u043e\u0432")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u0434\u0443\u043c\u0430\u043d\u043d\u043e\u0433\u043e:")),Object(o.b)("p",null,"\u0412 \u0444\u0430\u0439\u043b\u0435 ",Object(o.b)("inlineCode",{parentName:"p"},"chanSaga.ts")," \u044f \u0441\u043e\u0437\u0434\u0430\u043b 5 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u043b\u0430\u0434\u0430\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u0449\u0435\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * \u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043a\u0430\u043d\u0430\u043b \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0441\u043e\u043a\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0443\n *\n * @param {{ data: any; socket: any }} { data, socket }\n * @returns\n */\nexport function createSocketChannel({\n  data,\n  socket,\n  outerCallback,\n}: {\n  data: any;\n  socket: any;\n  outerCallback: (params: any) => void;\n}) {\n  const { token, channel } = data;\n\n  return eventChannel((emit: any) => {\n    socket.setToken(token);\n\n    // NB: \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0443 \u043a\u043e\u0434\u0430 `outerCallback({ message, emit });` \u0431\u0443\u0434\u0435\u0442 \u0431\u043e\u043d\u0443\u0441\n    const publishHandlerFunction = (message: any) => {\n      outerCallback({ message, emit });\n    };\n\n    const subscribeErrorHandlerFunction = (errorEvent: any) => {\n      emit(new Error(errorEvent.reason));\n    };\n\n    const subscription = socket.subscribe(channel);\n\n    subscription.on('publish', publishHandlerFunction);\n    subscription.on('error', subscribeErrorHandlerFunction);\n\n    socket.connect();\n\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    socket.on('disconnect', (_context: any) => {\n      emit(END);\n    });\n\n    // unsubscribe\n    return () => {\n      socket.disconnect();\n    };\n  });\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0441\u043e\u043a\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438\u0437 \u0410\u041f\u0418,\n * \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0441\u043e\u043a\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c\n *\n * @export\n * @param {IPayload} payload\n * @returns {(Generator<CallEffect<Promise<AxiosResponse<any>> | null>, IInitData, IRes>)}\n */\nexport function* initSocketConnection(\n  payload: IPayload,\n): Generator<CallEffect<Promise<AxiosResponse<any>> | null>, IInitData, IRes> {\n  const { userToken: token, path } = payload;\n  const socketInitData: IRes = yield call(socketAPI.postDataInitSocket, {\n    token,\n    path,\n  });\n  const { data } = socketInitData;\n  const contractStatus = socketInitDataContract.decode(data);\n\n  if (E.isLeft(contractStatus)) {\n    console.log('Socket init: contract error, path:', path);\n    return { status: InitStatusEnum.ERROR };\n  }\n\n  return { status: InitStatusEnum.SUCCESS, data };\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0441\u043e\u043a\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0443.\n *\n * \u041a\u043b\u0438\u0435\u043d\u0442 \u0441\u043e\u043a\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: Centrifuge\n *\n * @export\n * @param {IData} data\n * @returns\n */\nexport function createSocketConnection(data: IData) {\n  const { socket } = data;\n  const { proto, host, port } = socket;\n  const suffix = environment.WEB_SOCKET_SUFFIX;\n  const centrifuge = new Centrifuge(`${proto}${host}:${port}${suffix}`);\n\n  return centrifuge;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * \u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0441\u043e\u043a\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0430 \u0442\u0430\u043a \u0436\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u043d\u0430\u043b `eventChannel`\n *\n * @export\n * @param {string} socketChanName\n */\nexport function* terminateSocketChan(socketChanName: string) {\n  const scktSelector = yield select(socketSelector);\n  const centrifuge =\n    get(scktSelector, `${socketChanName}`, 'NO_CHAN') || 'NO_CHAN';\n\n  if (centrifuge === 'NO_CHAN') {\n    return null;\n  }\n\n  centrifuge.disconnect();\n\n  const tmpScktData = omit(scktSelector, `${socketChanName}`);\n\n  yield put({\n    type: socketSaveSocket.toString(),\n    payload: {\n      ...tmpScktData,\n    },\n  });\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * \u0412\u043e\u0442\u0447\u0435\u0440.\n *\n * \u0421\u043b\u0435\u0434\u0438\u0442 \u0437\u0430 \u043a\u0430\u043d\u0430\u043b\u043e\u043c \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0442 \u0441\u043e\u043a\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0430.\n *\n * \u041f\u0440\u0435\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 terminateSocketChan \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0430\u0433:\n * `yield call(terminateSocketChan, `${channelName}`);`\n *\n * @export\n * @param {} chanName\n */\nexport function* watchSocketChan(chanName: any) {\n  while (true) {\n    try {\n      const action = yield take(chanName);\n      yield put(action);\n      yield fork(terminateSocketChan, '');\n    } catch (err) {\n      console.log('socket error:', err);\n      chanName.close();\n    }\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u0434\u0443\u043c\u0430\u043d\u043d\u043e\u0433\u043e:")),Object(o.b)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u044f \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043b \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0432 \u0444\u0430\u0439\u043b\u0435 ",Object(o.b)("inlineCode",{parentName:"p"},"chanSaga.ts"),", \u0442\u0435\u043f\u0435\u0440\u044c \u044f \u043c\u043e\u0433\u0443 \u0432 \u043b\u044e\u0431\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u0435\u043b\u0430\u0442\u044c \u0432\u043e\u0442 \u0442\u0430\u043a:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// \u0412\u044b\u0431\u0435\u0440\u0435\u043c \u043d\u0443\u0436\u043d\u044b\u0439 \u0441\u043e\u043a\u0435\u0442 \u043a\u0430\u043d\u0430\u043b\nconst scktSelector: any = yield select(socketSelector);\n\n// \u041f\u0440\u0435\u0440\u0432\u0435\u043c \u0435\u0433\u043e, \u0435\u0441\u043b\u0438 \u043e\u043d \u0432\u0434\u0440\u0443\u0433 \u043e\u0441\u0442\u0430\u043b\u0441\u044f \u0437\u0430\u043f\u0443\u0449\u0435\u043d,\nyield call(terminateSocketChan, SUPPORT_MESSAGES_CHAN);\n\nyield put({\n  type: socketSaveSocket.toString(),\n  payload: {},\n});\n\n// \u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0441\u043e\u043a\u0435\u0442\nconst socket = yield call(createSocketConnection, data);\n\n// \u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u0430\u043d\u0430\u043b \u0434\u043b\u044f \u0441\u043e\u043a\u0435\u0442\u0430\n// NB: \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0443 \u043a\u043e\u0434\u0430 `outerCallback: chatListSupportSocketCallback,` \u0431\u0443\u0434\u0435\u0442 \u0431\u043e\u043d\u0443\u0441\nconst channel = yield call(createSocketChannel, {\n  data,\n  socket,\n  outerCallback: chatListSupportSocketCallback,\n});\n\nyield put({\n  type: socketSaveSocket.toString(),\n  payload: {\n    ...scktSelector,\n    [SUPPORT_MESSAGES_CHAN]: socket,\n  },\n});\n\n// \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u0432\u043e\u0442\u0447\u0435\u0440, \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0449\u0438\u0439 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u043a\u0430\u043d\u0430\u043b \u043e\u0442 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e web socket \u0441\u0435\u0440\u0432\u0435\u0440\u0430\nyield call(watchSocketChan, channel);\n")),Object(o.b)("p",null,"\u041a\u043e\u0434 \u0432\u044b\u0448\u0435, \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u043a\u0440\u0430\u0442\u043d\u043e \u043f\u0440\u043e\u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u0411\u043e\u043d\u0443\u0441 \u043f\u0440\u043e \u0437\u0443\u0431\u043e\u0434\u0440\u043e\u0431\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 \u0437\u0430\u043c\u044b\u043a\u0430\u043d\u0438\u0435\u043c:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'/**\n * \u041a\u043e\u043b\u043b\u0431\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u0432 event \u043a\u0430\u043d\u0430\u043b \u0441 \u0441\u043e\u043a\u0435\u0442\u0430\u043c\u0438,\n * \u0433\u0434\u0435 \u043f\u0440\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u0438 \u043e\u0442 \u0441\u043e\u043a\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 `publish`\n * "\u0432\u044b\u0442\u044f\u0433\u0438\u0432\u0430\u0435\u0442" emit (\u044d\u043c\u0438\u0442\u0442\u0435\u0440) \u0432 \u0437\u0430\u043c\u044b\u043a\u0430\u043d\u0438\u0435.\n * \u042d\u043c\u0438\u0442\u0442\u0435\u0440 (emit) \u044d\u0442\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043a\u043e\u043b\u043b\u0431\u0435\u043a\u0430 \u0438\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 `eventChannel` \u043f\u0430\u043a\u0435\u0442\u0430 redux-saga:\n *\n * `eventChannel((emit: any) => {...}`\n *\n * \u042d\u043c\u0438\u0442\u0442\u0435\u0440 \u043d\u0443\u0436\u0435\u043d, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0442\u043e\u043c "\u0434\u0435\u0440\u043d\u0443\u0442\u044c" \u044d\u043a\u0448\u0435\u043d \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432 \u0435\u0433\u043e `payload`\n * \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u043e\u0442 \u0441\u043e\u043a\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\n *\n * @param {IParams} params\n * @param message any;\n * @param emit (input: any) => void;\n */\nexport const socketCallback = (params: IParams) => {\n  const { message } = params;\n  const { data } = message;\n\n  checkContract({\n    contract: soketServerMsgContract,\n    data,\n    direction: DIRECTION.B_F,\n  });\n\n  params.emit({\n    type: socketSupportClearBeforeRes.toString(),\n  });\n\n  params.emit({\n    type: chatListSupportResMsgFromSocket.toString(),\n    payload: data,\n  });\n};\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u041a\u043e\u0442\u0438\u043a\u0438 \u043b\u044e\u0431\u044f\u0442 \u043a\u0430\u043d\u0430\u043b\u044b, \u0432\u0441\u0435 \u043b\u044e\u0431\u044f\u0442 \u043a\u0430\u043d\u0430\u043b\u044b")," \ud83d\udc31"))}i.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),i=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=i(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=i(t),u=a,g=b["".concat(c,".").concat(u)]||b[u]||m[u]||o;return t?r.a.createElement(g,l(l({ref:n},p),{},{components:t})):r.a.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);