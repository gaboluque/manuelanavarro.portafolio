_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{I83T:function(e,s,c){"use strict";var n=c("nKUr");c("Jq7D");s.a=function(e){var s=e.steps;return Object(n.jsx)("div",{className:"process",children:s.map((function(e){var s=e.content,c=e.id;return Object(n.jsx)("div",{className:"process-item",children:Object(n.jsx)("div",{className:"process-item-content",children:s})},c)}))})}},XH0h:function(e,s,c){"use strict";c.r(s);var n=c("nKUr"),a=c("YFqc"),t=c.n(a),r=(c("VmMg"),c("ovOQ")),i=c("I83T");s.default=function(){return Object(n.jsxs)("div",{className:"page twins-page",children:[Object(n.jsx)(t.a,{href:"/",children:Object(n.jsx)("button",{className:"back-button",children:"Volver"})}),Object(n.jsxs)("section",{className:"row project-description mb-50",children:[Object(n.jsxs)("div",{className:"project-info col-xs-24 col-md-10",children:[Object(n.jsx)("h3",{className:"title",children:"TWINS"}),Object(n.jsx)("p",{children:"Twins es un emprendimiento de pasteler\xeda saludable enfocado en mejorar la salud de las personas. Este negocio busca concientizar a las personas sobre el consumo de az\xfacar sin privarlos de postres ni antojos."}),Object(n.jsx)("a",{href:"https://www.instagram.com/twinstortasycupcakes/",children:"instagram.com/twinstortasycupcakes"}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsxs)("p",{children:["A\xf1o: ",Object(n.jsx)("span",{className:"number",children:"2020"})]}),Object(n.jsxs)("p",{children:["Empresa: ",Object(n.jsx)("span",{children:"rem agencia creativa"})]}),Object(n.jsxs)("p",{children:["Rol: ",Object(n.jsx)("span",{children:"CEO"})]})]})]}),Object(n.jsx)("div",{className:"col-12 moodboard",children:Object(n.jsx)("img",{src:"/static/images/twins/moodboard.png",alt:"moodboard"})})]}),Object(n.jsx)("section",{className:"tools"}),Object(n.jsxs)("section",{className:"process-container",children:[Object(n.jsx)("h4",{className:"title",children:"Proceso"}),Object(n.jsx)(i.a,{steps:r.twinsProcessSteps})]}),Object(n.jsxs)("section",{className:"evidence row mb-30",children:[Object(n.jsxs)("div",{className:"col-xs-24 col-lg-7 logo",children:[Object(n.jsx)("h4",{className:"title",children:"LOGO PRINCIPAL"}),Object(n.jsx)("img",{src:"/static/images/twins/logoPrincipal.png",alt:"logo",className:"principal-logo"})]}),Object(n.jsxs)("div",{className:"col-xs-24 col-lg-17 logo-variations",children:[Object(n.jsx)("h4",{className:"title",children:"VARIACIONES DE LOGO"}),Object(n.jsxs)("div",{className:"logos",children:[Object(n.jsxs)("div",{className:"logo-with-title",children:[Object(n.jsx)("img",{src:"/static/images/twins/logoRedondo.png",alt:"logo",className:"principal-logo"}),Object(n.jsx)("p",{children:"Redondo"})]}),Object(n.jsxs)("div",{className:"logo-with-title",children:[Object(n.jsx)("img",{src:"/static/images/twins/logoSimbolico.png",alt:"logo",className:"principal-logo"}),Object(n.jsx)("p",{children:"Simb\xf3lico"})]}),Object(n.jsxs)("div",{className:"logo-with-title",children:[Object(n.jsx)("img",{src:"/static/images/twins/logoSencillo.png",alt:"logo",className:"principal-logo"}),Object(n.jsx)("p",{children:"Sencillo"})]})]})]})]}),Object(n.jsxs)("section",{className:"graphics-container",children:[Object(n.jsx)("h4",{className:"title",children:"APERTURA GR\xc1FICA"}),Object(n.jsx)("div",{className:"graphics",children:[1,2,3,4,5,6,7].map((function(e){return Object(n.jsx)("img",{src:"/static/images/twins/graphics".concat(e,".png"),alt:"graphic".concat(e)},e)}))})]}),Object(n.jsxs)("section",{className:"pattern",children:[Object(n.jsx)("h4",{className:"title",children:"PATR\xd3N"}),Object(n.jsx)("img",{src:"/static/images/twins/pattern.png",alt:"pattern"})]})]})}},YFqc:function(e,s,c){e.exports=c("cTJO")},cTJO:function(e,s,c){"use strict";var n=c("J4zp"),a=c("284h");s.__esModule=!0,s.default=void 0;var t=a(c("q1tI")),r=c("elyg"),i=c("nOHt"),o=c("vNVm"),l={};function d(e,s,c,n){if(e&&(0,r.isLocalURL)(s)){e.prefetch(s,c,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[s+"%"+c+(a?"%"+a:"")]=!0}}var u=function(e){var s=!1!==e.prefetch,c=(0,i.useRouter)(),a=c&&c.pathname||"/",u=t.default.useMemo((function(){var s=(0,r.resolveHref)(a,e.href,!0),c=n(s,2),t=c[0],i=c[1];return{href:t,as:e.as?(0,r.resolveHref)(a,e.as):i||t}}),[a,e.href,e.as]),p=u.href,j=u.as,m=e.children,h=e.replace,f=e.shallow,b=e.scroll,g=e.locale;"string"===typeof m&&(m=t.default.createElement("a",null,m));var v=t.Children.only(m),O=v&&"object"===typeof v&&v.ref,x=(0,o.useIntersection)({rootMargin:"200px"}),N=n(x,2),w=N[0],y=N[1],E=t.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,t.useEffect)((function(){var e=y&&s&&(0,r.isLocalURL)(p),n="undefined"!==typeof g?g:c&&c.locale,a=l[p+"%"+j+(n?"%"+n:"")];e&&!a&&d(c,p,j,{locale:n})}),[j,p,y,g,s,c]);var I={ref:E,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,s,c,n,a,t,i,o){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(c))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),s[a?"replace":"push"](c,n,{shallow:t,locale:o,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,c,p,j,h,f,b,g)},onMouseEnter:function(e){(0,r.isLocalURL)(p)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),d(c,p,j,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var L="undefined"!==typeof g?g:c&&c.locale,_=c&&c.isLocaleDomain&&(0,r.getDomainLocale)(j,L,c&&c.locales,c&&c.domainLocales);I.href=_||(0,r.addBasePath)((0,r.addLocale)(j,L,c&&c.defaultLocale))}return t.default.cloneElement(v,I)};s.default=u},ovOQ:function(e,s,c){"use strict";c.r(s),c.d(s,"twinsProcessSteps",(function(){return a}));var n=c("nKUr"),a=(c("q1tI"),[{id:1,content:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:"Workshop de propuesta de valor"}),"Se hizo un taller en el cual a trav\xe9s del Canvas de propuesta de valor, la pir\xe1mide de valores y ejercicios como los cinco por qu\xe9 se definieron los valores de la marca, c\xf3mo quer\xeda ser vista por sus clientes y c\xf3mo quer\xeda sentirse."]})},{id:2,content:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:"Benchmark"}),"Se hizo un benchmark de emprendimientos que estuvieran haciendo cosas parecidas y tambi\xe9n se estructuraron la visi\xf3n y misi\xf3n de la marca.",Object(n.jsx)("h4",{children:"Mood board"}),"Se hizo un mood board para entender como se quer\xeda sentir la marca."]})},{id:3,content:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:"Logo"}),"Se dise\xf1aron tres propuestas de logo que cumplieran con los valores y objetivos de la marca para que el cliente escogiera con cual de los dise\xf1os se identificaba hacerle modificaciones y sacar el logo principal."]})},{id:4,content:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:"Apertura gr\xe1fica"}),"Se dise\xf1aron diferentes variaciones de logo y tambi\xe9n se cre\xf3 un universo gr\xe1fico que acompa\xf1ara la imagen de la pasteler\xeda."]})},{id:5,content:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:"Aplicaciones de marca"}),"Al ser un emprendimiento digital, se crearon plantillas para instagram de forma que pudieran ser usadas varias veces y siguieran un lineamiento de marca."]})},{id:6,content:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:"Manual de marca"}),"Se cre\xf3 un manual de marca explicando las aplicaciones del logo, las aplicaciones de la apertura gr\xe1fica , la paleta de color y por supuesto los valores, misi\xf3n y visi\xf3n."]})}]);s.default=function(){return Object(n.jsx)(n.Fragment,{})}},spx8:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/branding/twins",function(){return c("XH0h")}])},vNVm:function(e,s,c){"use strict";var n=c("J4zp");s.__esModule=!0,s.useIntersection=function(e){var s=e.rootMargin,c=e.disabled||!r,o=(0,a.useRef)(),l=(0,a.useState)(!1),d=n(l,2),u=d[0],p=d[1],j=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),c||u||e&&e.tagName&&(o.current=function(e,s,c){var n=function(e){var s=e.rootMargin||"",c=i.get(s);if(c)return c;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var s=n.get(e.target),c=e.isIntersecting||e.intersectionRatio>0;s&&c&&s(c)}))}),e);return i.set(s,c={id:s,observer:a,elements:n}),c}(c),a=n.id,t=n.observer,r=n.elements;return r.set(e,s),t.observe(e),function(){r.delete(e),t.unobserve(e),0===r.size&&(t.disconnect(),i.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:s}))}),[c,s,u]);return(0,a.useEffect)((function(){if(!r&&!u){var e=(0,t.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,t.cancelIdleCallback)(e)}}}),[u]),[j,u]};var a=c("q1tI"),t=c("0G5g"),r="undefined"!==typeof IntersectionObserver;var i=new Map}},[["spx8",0,1,2,3]]]);