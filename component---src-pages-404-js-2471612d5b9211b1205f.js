(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(e,n,t){"use strict";t.r(n);var i=t(1),a=t.n(i),o=t(172),c=t(171),r=t(158),l=t(161),d=t(165),u=t(159),p=t(191),s=t.n(p),g=r.c.div.withConfig({displayName:"NotFoundBlock",componentId:"kgrmcc-0"})(["position:relative;display:flex;flex-direction:column;align-items:center;margin-top:-50px;padding:0 30px;&:before{content:'';position:absolute;left:-1px;top:0;z-index:1;width:1px;height:100%;background:",";}&:after{content:'';position:absolute;left:15px;top:0;z-index:1;width:1px;height:100%;background:",";}"],u.a.white,u.a.secondary),m=r.c.img.withConfig({displayName:"NotFoundImage",componentId:"kgrmcc-1"})(["display:block;margin:0;width:300px;height:auto;"]),I=r.c.div.withConfig({displayName:"NotFoundMessage",componentId:"kgrmcc-2"})(["margin-bottom:30px;font-size:1.125rem;line-height:1.6;text-align:center;text-transform:uppercase;letter-spacing:4px;text-shadow:0 4px 4px ",";"],Object(d.a)(u.a.dark,.2)),M=r.c.div.withConfig({displayName:"NotFoundEmoji",componentId:"kgrmcc-3"})(["margin-bottom:30px;font-size:1.5rem;"]),f=r.c.div.withConfig({displayName:"NotFoundAction",componentId:"kgrmcc-4"})(["text-transform:uppercase;letter-spacing:1px;"]),h=function(){return a.a.createElement(g,null,a.a.createElement(m,{src:s.a}),a.a.createElement(I,null,"Cтраница не найдена"),a.a.createElement(M,null,a.a.createElement("span",{role:"img","aria-label":"Eyes"},"👀")),a.a.createElement(f,null,a.a.createElement(l.Link,{to:"/"},"На главную")))};n.default=function(){return a.a.createElement(o.a,null,a.a.createElement(c.a,{title:"Ошибка"},a.a.createElement(h,null)))}},159:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return o}),t.d(n,"c",function(){return r});t(81),t(53),t(175),t(52);var i=t(158),a={primary:"#0B0B0F",secondary:"#D0CFD5",accent:"#b32027",dark:"#0B0B0F",light:"#FFFFFF",black:"#000",white:"#FFF"},o={primary:'"Fira Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',secondary:'"Exo 2", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif'},c={phone:576,mobile:768,tablet:992,desktop:1200},r=Object.keys(c).reduce(function(e,n){return e[n]=function(){return Object(i.b)(["@media (max-width:","px){",";}"],c[n],i.b.apply(void 0,arguments))},e},{});Object.keys(c).reduce(function(e,n){return e[n]=function(){return Object(i.b)(["@media (min-width:","px){",";}"],c[n],i.b.apply(void 0,arguments))},e},{})},161:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return m}),t.d(n,"StaticQueryContext",function(){return s}),t.d(n,"StaticQuery",function(){return g});var i=t(1),a=t.n(i),o=t(6),c=t.n(o),r=t(160),l=t.n(r);t.d(n,"Link",function(){return l.a}),t.d(n,"withPrefix",function(){return r.withPrefix}),t.d(n,"navigate",function(){return r.navigate}),t.d(n,"push",function(){return r.push}),t.d(n,"replace",function(){return r.replace}),t.d(n,"navigateTo",function(){return r.navigateTo});var d=t(163),u=t.n(d);t.d(n,"PageRenderer",function(){return u.a});var p=t(39);t.d(n,"parsePath",function(){return p.a});var s=a.a.createContext({}),g=function(e){return a.a.createElement(s.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},162:function(e,n,t){"use strict";var i=t(1),a=t.n(i),o=t(158),c=t(6),r=t.n(c),l=o.c.div.withConfig({displayName:"ContainerBlock",componentId:"k375wy-0"})(["max-width:970px;margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;"]),d=function(e){var n=e.className,t=e.children;return a.a.createElement(l,{className:n},t)};d.propTypes={className:r.a.string,children:r.a.node.isRequired},n.a=d},163:function(e,n,t){var i;e.exports=(i=t(167))&&i.default||i},166:function(e){e.exports={data:{site:{siteMetadata:{title:"ALEX NESTEROV"}}}}},167:function(e,n,t){"use strict";t.r(n);t(37);var i=t(1),a=t.n(i),o=t(6),c=t.n(o),r=t(59),l=t(4),d=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return a.a.createElement(r.a,Object.assign({location:n,pageResources:t},t.json))};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=d},168:function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA1MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjM3MTggMjMuNjk1OUw5LjI0MTg4IDI1LjkyMDlMMCAxNi40Mjc3TDkuMjQxODggNi45MzQ0OUwxMS4zNzE4IDkuMTc4TDQuMzE0MDggMTYuNDI3N0wxMS4zNzE4IDIzLjY5NTlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTEuMzcxOCAyMy42OTU5TDkuMjQxODggMjUuOTIwOUwwIDE2LjQyNzdMOS4yNDE4OCA2LjkzNDQ5TDExLjM3MTggOS4xNzhMNC4zMTQwOCAxNi40Mjc3TDExLjM3MTggMjMuNjk1OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTExLjM3MTggMjMuNjk1OUw5LjI0MTg4IDI1LjkyMDlMMCAxNi40Mjc3TDkuMjQxODggNi45MzQ0OUwxMS4zNzE4IDkuMTc4TDQuMzE0MDggMTYuNDI3N0wxMS4zNzE4IDIzLjY5NTlaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0zMC42MzE4IDBMMzMuNDExNiAxLjQwOTE1TDE5LjU4NDggMzBMMTYuODA1MSAyOC41OTA5TDMwLjYzMTggMFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zMC42MzE4IDBMMzMuNDExNiAxLjQwOTE1TDE5LjU4NDggMzBMMTYuODA1MSAyOC41OTA5TDMwLjYzMTggMFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcikiLz4KPHBhdGggZD0iTTMwLjYzMTggMEwzMy40MTE2IDEuNDA5MTVMMTkuNTg0OCAzMEwxNi44MDUxIDI4LjU5MDlMMzAuNjMxOCAwWiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIvPgo8cGF0aCBkPSJNNDUuNjg1OSAxNi40Mjc3TDM4LjYxMDEgOS4xNzhMNDAuNzU4MSA2LjkzNDQ5TDUwIDE2LjQyNzdMNDAuNzU4MSAyNS45MjA5TDM4LjYxMDEgMjMuNjk1OUw0NS42ODU5IDE2LjQyNzdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNDUuNjg1OSAxNi40Mjc3TDM4LjYxMDEgOS4xNzhMNDAuNzU4MSA2LjkzNDQ5TDUwIDE2LjQyNzdMNDAuNzU4MSAyNS45MjA5TDM4LjYxMDEgMjMuNjk1OUw0NS42ODU5IDE2LjQyNzdaIiBmaWxsPSJ1cmwoI3BhaW50NF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik00NS42ODU5IDE2LjQyNzdMMzguNjEwMSA5LjE3OEw0MC43NTgxIDYuOTM0NDlMNTAgMTYuNDI3N0w0MC43NTgxIDI1LjkyMDlMMzguNjEwMSAyMy42OTU5TDQ1LjY4NTkgMTYuNDI3N1oiIGZpbGw9InVybCgjcGFpbnQ1X2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSIwIiB4Mj0iNTEuNDE5NiIgeTI9IjI3LjMyODkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0U3MzA1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIwIiB5MT0iMCIgeDI9IjUxLjQxOTYiIHkyPSIyNy4zMjg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3Atb3BhY2l0eT0iMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyRTMwNjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iMCIgeTE9IjAiIHgyPSI1MS40MTk2IiB5Mj0iMjcuMzI4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRTczMDVFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhciIgeDE9IjAiIHkxPSIwIiB4Mj0iNTEuNDE5NiIgeTI9IjI3LjMyODkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1vcGFjaXR5PSIwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJFMzA2MCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NF9saW5lYXIiIHgxPSIwIiB5MT0iMCIgeDI9IjUxLjQxOTYiIHkyPSIyNy4zMjg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFNzMwNUUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDVfbGluZWFyIiB4MT0iMCIgeTE9IjAiIHgyPSI1MS40MTk2IiB5Mj0iMjcuMzI4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLW9wYWNpdHk9IjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkUzMDYwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="},169:function(e,n,t){e.exports=t.p+"static/man-with-phone_500-6370f282bbfd53fdb7de763fc710b307.jpg"},170:function(e,n,t){e.exports=t.p+"static/man-with-phone_glitch-e0938d4231e611726f50425903810440.gif"},171:function(e,n,t){"use strict";var i=t(1),a=t.n(i),o=t(158),c=t(159),r=t(162),l=o.c.section.withConfig({displayName:"SectionBlock",componentId:"sc-3lfkv3-0"})([""]),d=Object(o.c)(r.a).withConfig({displayName:"SectionInner",componentId:"sc-3lfkv3-1"})(["position:relative;padding-top:80px;padding-bottom:80px;&:before{content:'';position:absolute;left:14px;top:0;width:1px;height:100%;background:",";}"],c.a.secondary),u=o.c.h2.withConfig({displayName:"SectionTitle",componentId:"sc-3lfkv3-2"})(["margin:0 0 80px;padding-left:30px;font-size:0.875rem;font-weight:500;text-transform:uppercase;letter-spacing:4px;&:after{content:'';display:block;width:100px;height:1px;margin:15px 0 0 -30px;background:",";}"],c.a.secondary),p=o.c.div.withConfig({displayName:"SectionBody",componentId:"sc-3lfkv3-3"})([""]);n.a=function(e){var n=e.title,t=e.children;return a.a.createElement(l,null,a.a.createElement(d,null,n&&a.a.createElement(u,null,n),a.a.createElement(p,null,t)))}},172:function(e,n,t){"use strict";var i=t(1),a=t.n(i),o=t(158),c=t(6),r=t.n(c),l=t(166),d=t(173),u=t.n(d),p=t(161),s=t(164),g=t.n(s),m=t(165),I=t(159);function M(){var e=g()(["\n  /* Reset the box-sizing, position and others */\n  html {\n    /* box-sizing: border-box; */\n    min-width: 320px;\n  }\n\n  *,\n  *:before,\n  *:after {\n    /* box-sizing: inherit; */\n    /* Fix some resize in flexbox elements */\n    min-width: 0;\n    min-height: 0;\n  }\n\n  /* ::selection {\n    color: #fff;\n    background: ",";\n  }\n\n  ::-moz-selection {\n    color: #fff;\n    background: #333;\n  } */\n\n  /* *:focus {\n    outline: none;\n  } */\n\n  body {\n    /* background: #fff;\n    color: #000;\n    font-family: ",";\n    font-size: 16px;\n    line-height: 1.6;\n    font-weight: 400; */\n    -webkit-font-smoothing: antialiased;\n  }\n\n\n  /* Links */\n  /* a {\n    color: blue;\n    text-decoration: underline;\n\n    &:hover {\n      text-decoration: none;\n    }\n  } */\n"]);return M=function(){return e},e}var f=Object(o.a)(M(),Object(m.a)("#333",.99),I.b.primary),h=o.c.div.withConfig({displayName:"LayoutBlock",componentId:"sc-17vi2ls-0"})([""]),b=function(e){var n=e.children;return a.a.createElement(p.StaticQuery,{query:"755544856",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},a.a.createElement("html",{lang:"ru"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700",rel:"stylesheet"})),a.a.createElement(h,null,n))},data:l})};b.propTypes={children:r.a.node.isRequired};var x=b,N=t(162),y=t(168),w=t.n(y),j=o.c.div.withConfig({displayName:"CodeBlock",componentId:"sc-1ouduwp-0"})([""]),k=o.c.img.withConfig({displayName:"CodeImage",componentId:"sc-1ouduwp-1"})(["display:inline-block;vertical-align:top;margin:0;"]),z=function(){return a.a.createElement(j,null,a.a.createElement(k,{src:w.a,alt:"Code brackets"}))},E=Object(o.c)(p.Link).withConfig({displayName:"LogoBlock",componentId:"sc-1rahkvg-0"})(["position:relative;display:inline-block;vertical-align:top;padding:0.3125em 0.625em;color:",";font-size:1.25rem;line-height:1;font-weight:400;text-transform:uppercase;text-decoration:none;text-align:center;letter-spacing:2px;cursor:pointer;&:hover{color:",";}&:before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:",";}span{font-weight:700;}"],I.a.light,I.a.light,I.a.dark),D=o.c.div.withConfig({displayName:"LogoWrap",componentId:"sc-1rahkvg-1"})(["position:relative;z-index:1;"]),v=function(){return a.a.createElement(E,{to:"/"},a.a.createElement(D,null,a.a.createElement("span",null,"Alex"),"Nesterov"))},C=o.c.div.withConfig({displayName:"HeaderBlock",componentId:"sc-1r6rb97-0"})(["margin-bottom:-80px;"]),T=Object(o.c)(N.a).withConfig({displayName:"HeaderInner",componentId:"sc-1r6rb97-1"})(["position:relative;display:flex;flex-direction:column;align-items:center;padding-top:80px;padding-bottom:80px;&:before{content:'';position:absolute;left:14px;top:0;width:1px;height:100%;background:",";}"],I.a.secondary),S=o.c.div.withConfig({displayName:"HeaderCode",componentId:"sc-1r6rb97-2"})(["margin-bottom:45px;"]),L=o.c.div.withConfig({displayName:"HeaderLogo",componentId:"sc-1r6rb97-3"})([""]),G=function(e){e.siteTitle;return a.a.createElement(C,null,a.a.createElement(T,null,a.a.createElement(S,null,a.a.createElement(z,null)),a.a.createElement(L,null,a.a.createElement(v,null))))},F=t(169),A=t.n(F),W=t(170),O=t.n(W);function P(){var e=g()(["\n    margin-right: 40%;\n  "]);return P=function(){return e},e}var B=Object(o.d)(["0%{opacity:0;}25%{opacity:0;}26%{opacity:0.4;}36%{opacity:0;}89%{opacity:0;}90%{opacity:0.4;}100%{opacity:0;}"]),Z=o.c.div.withConfig({displayName:"FooterBlock",componentId:"sc-1g0xvwb-0"})(["position:relative;padding:80px 0;text-align:center;"]),Y=Object(o.c)(N.a).withConfig({displayName:"FooterInner",componentId:"sc-1g0xvwb-1"})([""]),V=o.c.div.withConfig({displayName:"FooterCopyright",componentId:"sc-1g0xvwb-2"})(["font-size:0.875rem;text-transform:uppercase;",";"],I.c.mobile(P())),R=Object(o.c)(p.Link).withConfig({displayName:"FooterName",componentId:"sc-1g0xvwb-3"})(["cursor:pointer;color:",";&:hover{color:",";}span{font-weight:700;}"],I.a.dark,I.a.accent),Q=o.c.div.withConfig({displayName:"FooterImage",componentId:"sc-1g0xvwb-4"})(["position:absolute;right:0;bottom:0;z-index:-1;max-width:80%;transform:rotateY(180deg);&:before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:url(",") no-repeat center;background-size:cover;opacity:0;animation:"," 12s infinite;}&:after{content:'';position:absolute;left:0;top:0;width:100%;height:100%;border-top:20px solid #fff;border-right:30px solid #fff;border-bottom:30px solid transparent;}img{display:block;margin:0;max-width:100%;}"],O.a,B),U=function(){return a.a.createElement(Z,null,a.a.createElement(Y,null,a.a.createElement(V,null,"©"," ",a.a.createElement(R,{to:"/"},a.a.createElement("span",null,"Alex"),"Nesterov"),", 2018")),a.a.createElement(Q,null,a.a.createElement("img",{src:A.a,alt:"Man with phone"})))},H=o.c.div.withConfig({displayName:"MainLayoutBlock",componentId:"sc-14uipae-0"})(["display:flex;flex-direction:column;min-height:100vh;"]),X=o.c.header.withConfig({displayName:"MainLayoutHeader",componentId:"sc-14uipae-1"})([""]),J=o.c.main.withConfig({displayName:"MainLayoutContent",componentId:"sc-14uipae-2"})(["flex:1 1 100%;"]),K=o.c.footer.withConfig({displayName:"MainLayoutFooter",componentId:"sc-14uipae-3"})([""]),q=function(e){var n=e.children;return a.a.createElement(x,null,a.a.createElement(H,null,a.a.createElement(X,null,a.a.createElement(G,null)),a.a.createElement(J,null,n),a.a.createElement(K,null,a.a.createElement(U,null))))};q.propTypes={children:r.a.node.isRequired};n.a=q},191:function(e,n,t){e.exports=t.p+"static/404-ce9474a606e043c3abebff6d9a9a44b6.gif"}}]);
//# sourceMappingURL=component---src-pages-404-js-2471612d5b9211b1205f.js.map