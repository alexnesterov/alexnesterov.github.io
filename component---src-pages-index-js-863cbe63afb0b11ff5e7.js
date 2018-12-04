(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(146);n.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Richard Hamming on Luck"),r.a.createElement("div",null,r.a.createElement("p",null,"From Richard Hamming’s classic and must-read talk, “",r.a.createElement("a",{href:"http://www.cs.virginia.edu/~robins/YouAndYourResearch.html"},"You and Your Research"),"”."),r.a.createElement("blockquote",null,r.a.createElement("p",null,"There is indeed an element of luck, and no, there isn’t. The prepared mind sooner or later finds something important and does it. So yes, it is luck."," ",r.a.createElement("em",null,"The particular thing you do is luck, but that you do something is not.")))),r.a.createElement("p",null,"Posted April 09, 2011")))}},142:function(e,n,t){var a;e.exports=(a=t(145))&&a.default||a},143:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return f}),t.d(n,"StaticQueryContext",function(){return m}),t.d(n,"StaticQuery",function(){return p});var a=t(0),r=t.n(a),i=t(4),o=t.n(i),l=t(140),c=t.n(l);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return l.withPrefix}),t.d(n,"navigate",function(){return l.navigate}),t.d(n,"push",function(){return l.push}),t.d(n,"replace",function(){return l.replace}),t.d(n,"navigateTo",function(){return l.navigateTo});var u=t(142),s=t.n(u);t.d(n,"PageRenderer",function(){return s.a});var d=t(35);t.d(n,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e){e.exports={data:{site:{siteMetadata:{title:"ALEX NESTEROV"}}}}},145:function(e,n,t){"use strict";t.r(n);t(33);var a=t(0),r=t.n(a),i=t(4),o=t.n(i),l=t(53),c=t(2),u=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=u},146:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(141),o=t(4),l=t.n(o),c=t(144),u=t(147),s=t.n(u),d=t(143),m=t(149),p=t.n(m),f=t(151),h=(t(75),t(49),t(150),t(48),{phone:576,mobile:768,tablet:992,desktop:1200});Object.keys(h).reduce(function(e,n){return e[n]=function(){return Object(i.b)(["@media (max-width:","px){",";}"],h[n],i.b.apply(void 0,arguments))},e},{}),Object.keys(h).reduce(function(e,n){return e[n]=function(){return Object(i.b)(["@media (min-width:","px){",";}"],h[n],i.b.apply(void 0,arguments))},e},{});function y(){var e=p()(["\n  /* Reset the box-sizing, position and others */\n  html {\n    box-sizing: border-box;\n    min-width: 320px;\n    transform: translate(0, 0, 0);\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n    /* Fix some resize in flexbox elements */\n    min-width: 0;\n    min-height: 0;\n  }\n\n  ::selection {\n    color: #fff;\n    /* Fix Chrome selection */\n    background: ",";\n  }\n\n  ::-moz-selection {\n    color: #fff;\n    background: #333;\n  }\n\n  *:focus {\n    outline: none;\n  }\n\n  body {\n    /* background: #fff;\n    color: #000;\n    font-family: ",";\n    font-size: 16px;\n    line-height: 1.6;\n    font-weight: 400; */\n    /* -webkit-font-smoothing: antialiased; */\n  }\n\n\n  /* Links */\n  /* a {\n    color: blue;\n    text-decoration: underline;\n\n    &:hover {\n      text-decoration: none;\n    }\n  } */\n"]);return y=function(){return e},e}var g=Object(i.a)(y(),Object(f.a)("#333",.99),'"Fira Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'),b=i.c.div.withConfig({displayName:"LayoutBlock",componentId:"sc-17vi2ls-0"})([""]),E=function(e){var n=e.children;return r.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"ru"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700",rel:"stylesheet"})),r.a.createElement(b,null,n))},data:c})};E.propTypes={children:l.a.node.isRequired};var v=E,w=i.c.div.withConfig({displayName:"HeaderBlock",componentId:"sc-9eu2yh-0"})([""]),x=function(e){e.siteTitle;return r.a.createElement(w,null,"Header")},k=i.c.div.withConfig({displayName:"FooterBlock",componentId:"sc-1xqajj9-0"})([""]),q=function(e){e.siteTitle;return r.a.createElement(k,null,"Footer")},R=i.c.div.withConfig({displayName:"MainLayoutBlock",componentId:"sc-14uipae-0"})(["display:flex;flex-direction:column;min-height:100vh;"]),C=i.c.header.withConfig({displayName:"MainLayoutHeader",componentId:"sc-14uipae-1"})([""]),M=i.c.main.withConfig({displayName:"MainLayoutContent",componentId:"sc-14uipae-2"})(["flex:1 1 100%;"]),T=i.c.footer.withConfig({displayName:"MainLayoutFooter",componentId:"sc-14uipae-3"})([""]),j=function(e){var n=e.children;return r.a.createElement(v,null,r.a.createElement(R,null,r.a.createElement(C,null,r.a.createElement(x,null)),r.a.createElement(M,null,n),r.a.createElement(T,null,r.a.createElement(q,null))))};j.propTypes={children:l.a.node.isRequired};n.a=j}}]);
//# sourceMappingURL=component---src-pages-index-js-863cbe63afb0b11ff5e7.js.map