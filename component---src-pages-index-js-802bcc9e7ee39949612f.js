(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(155),r=t(150),c=t.n(r),l=t(143),u=l.c.a.withConfig({displayName:"LogoBlock",componentId:"sc-1rahkvg-0"})(["display:inline-block;color:#fff;font-size:20px;line-height:1;font-weight:400;text-transform:uppercase;text-decoration:none;text-align:center;letter-spacing:2px;span{font-weight:700;}"]),s=function(){return i.a.createElement(u,null,"Alex",i.a.createElement("span",null,"Nesterov"))},d=t(4),m=t.n(d),p=l.c.div.withConfig({displayName:"ContainerBlock",componentId:"k375wy-0"})(["max-width:970px;margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;"]),f=function(e){var n=e.className,t=e.children;return i.a.createElement(p,{className:n},t)};f.propTypes={className:m.a.string,children:m.a.node.isRequired};var h=f,g=t(174),b=t.n(g),x=t(175),y=t.n(x),v=t(176),w=t.n(v),E=t(146),k=l.c.div.withConfig({displayName:"SocialBlock",componentId:"sc-5r5vdf-0"})([""]),z=l.c.a.withConfig({displayName:"SocialLink",componentId:"sc-5r5vdf-1"})(["display:inline-block;color:",";font-size:14px;line-height:1;font-weight:500;text-transform:uppercase;text-decoration:none;margin-right:30px;margin-bottom:15px;letter-spacing:1px;&:last-child{margin-right:0;}&:hover{color:",";}"],E.a.white,E.a.accent),C=function(){return i.a.createElement(k,null,i.a.createElement(z,{href:"https://github.com/alexnesterov",target:"_blank"},"GitHub"),i.a.createElement(z,{href:"https://www.instagram.com/a.lexnesterov/",target:"_blank"},"Instagram"),i.a.createElement(z,{href:"https://t.me/alexnesterov",target:"_blank"},"Telegram"),i.a.createElement(z,{href:"mailto:ialexnesterov@gmail.com"},"ialexnesterov@gmail.com"))};function N(){var e=c()(["\n    padding: 0 15px;\n  "]);return N=function(){return e},e}var I=Object(l.d)(["0%{z-index:-1;}25%{z-index:-1;}26%{z-index:1;}46%{z-index:-1;}89%{z-index:-1;}90%{z-index:1;}100%{z-index:-1;}"]),q=l.c.div.withConfig({displayName:"WelcomeBlock",componentId:"sc-1u2668z-0"})(["position:relative;display:flex;flex-direction:column;overflow:hidden;min-height:100vh;background:#000 url(",") no-repeat center;background-size:cover;color:#fff;",";:before,:after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;opacity:0.2;animation:"," 12s infinite;}:before{background:url(",") no-repeat center;animation-delay:0.5s;}:after{background:url(",") no-repeat center;}"],b.a,E.c.tablet(N()),I,y.a,w.a),j=l.c.div.withConfig({displayName:"WelcomeCover",componentId:"sc-1u2668z-1"})(["position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;background:#000;opacity:0.2;"]),R=Object(l.c)(h).withConfig({displayName:"WelcomeInner",componentId:"sc-1u2668z-2"})(["z-index:2;flex:1 1 0%;display:flex;flex-direction:column;width:100%;height:100%;"]),S=l.c.header.withConfig({displayName:"WelcomeHeader",componentId:"sc-1u2668z-3"})([""]),F=l.c.div.withConfig({displayName:"WelcomeLogo",componentId:"sc-1u2668z-4"})(["padding:80px 0;text-align:left;"]),T=l.c.div.withConfig({displayName:"WelcomeMain",componentId:"sc-1u2668z-5"})(["flex:1 1 0%;display:flex;flex-direction:column;justify-content:center;"]),M=l.c.div.withConfig({displayName:"WelcomeTitle",componentId:"sc-1u2668z-6"})(["margin-bottom:35px;font-size:24px;line-height:1.2;font-weight:500;text-transform:uppercase;"]),O=l.c.div.withConfig({displayName:"WelcomeText",componentId:"sc-1u2668z-7"})(["max-width:600px;font-size:20px;line-height:1.5;"]),W=l.c.div.withConfig({displayName:"WelcomeSocial",componentId:"sc-1u2668z-8"})(["padding:80px 0;"]),L=function(){return i.a.createElement(q,null,i.a.createElement(j,null),i.a.createElement(R,null,i.a.createElement(S,null,i.a.createElement(F,null,i.a.createElement(s,null))),i.a.createElement(T,null,i.a.createElement(M,null,"Привет. Я Александр, веб-разработчик."),i.a.createElement(O,null,"Cпециализируюсь на фронтенде.",i.a.createElement("br",null),"Верстаю, адаптивно, валидно и кроссбраузерно, делаю несложные сайты.",i.a.createElement("br",null),"Перфекционист, люблю веб и минимализм."),i.a.createElement(W,null,i.a.createElement(C,null)))))};n.default=function(){return i.a.createElement(o.a,null,i.a.createElement(L,null))}},144:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return f}),t.d(n,"StaticQueryContext",function(){return m}),t.d(n,"StaticQuery",function(){return p});var a=t(0),i=t.n(a),o=t(4),r=t.n(o),c=t(142),l=t.n(c);t.d(n,"Link",function(){return l.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var u=t(145),s=t.n(u);t.d(n,"PageRenderer",function(){return s.a});var d=t(33);t.d(n,"parsePath",function(){return d.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},145:function(e,n,t){var a;e.exports=(a=t(148))&&a.default||a},146:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return o}),t.d(n,"c",function(){return c});t(75),t(49),t(153),t(48);var a=t(143),i={primary:"#2253A2",secondary:"#372A56",accent:"#D43C43",dark:"#152140",light:"#D9D6D8",black:"#111",white:"#FFF"},o={primary:'"Fira Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',secondary:'"Exo 2", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif'},r={phone:576,mobile:768,tablet:992,desktop:1200},c=Object.keys(r).reduce(function(e,n){return e[n]=function(){return Object(a.b)(["@media (max-width:","px){",";}"],r[n],a.b.apply(void 0,arguments))},e},{});Object.keys(r).reduce(function(e,n){return e[n]=function(){return Object(a.b)(["@media (min-width:","px){",";}"],r[n],a.b.apply(void 0,arguments))},e},{})},147:function(e){e.exports={data:{site:{siteMetadata:{title:"ALEX NESTEROV"}}}}},148:function(e,n,t){"use strict";t.r(n);t(34);var a=t(0),i=t.n(a),o=t(4),r=t.n(o),c=t(50),l=t(2),u=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json))};u.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},n.default=u},149:function(e,n,t){"use strict";var a=t(147),i=t(0),o=t.n(i),r=t(4),c=t.n(r),l=t(151),u=t.n(l),s=t(144),d=(t(152),t(150)),m=t.n(d),p=t(143),f=t(154),h=t(146);function g(){var e=m()(["\n  /* Reset the box-sizing, position and others */\n  html {\n    box-sizing: border-box;\n    min-width: 320px;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n    /* Fix some resize in flexbox elements */\n    min-width: 0;\n    min-height: 0;\n  }\n\n  ::selection {\n    color: #fff;\n    /* Fix Chrome selection */\n    background: ",";\n  }\n\n  ::-moz-selection {\n    color: #fff;\n    background: #333;\n  }\n\n  *:focus {\n    outline: none;\n  }\n\n  body {\n    background: #fff;\n    color: #000;\n    font-family: ",";\n    font-size: 16px;\n    line-height: 1.6;\n    font-weight: 400;\n    -webkit-font-smoothing: antialiased;\n  }\n\n\n  /* Links */\n  a {\n    color: blue;\n    text-decoration: underline;\n\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"]);return g=function(){return e},e}var b=Object(p.a)(g(),Object(f.a)("#333",.99),h.b.primary),x=function(e){var n=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),o.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"ru"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700",rel:"stylesheet"})),o.a.createElement("div",null,n))},data:a})};x.propTypes={children:c.a.node.isRequired};n.a=x},155:function(e,n,t){"use strict";var a=t(0),i=t.n(a),o=t(4),r=t.n(o),c=t(149),l=function(e){var n=e.children;return i.a.createElement(c.a,null,n)};l.propTypes={children:r.a.node.isRequired},n.a=l},174:function(e,n,t){e.exports=t.p+"static/back-d4a1b21c9873ee154ff63a5db36d670e.jpg"},175:function(e,n,t){e.exports=t.p+"static/back2-d21d20846cf532c546a4b5a5e49f4511.png"},176:function(e,n,t){e.exports=t.p+"static/back3-0b1a6386e3feb30c1f7b0e6bf95ba39b.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-802bcc9e7ee39949612f.js.map