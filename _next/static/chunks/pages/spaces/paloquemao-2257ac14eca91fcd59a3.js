_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"4iuv":function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spaces/paloquemao",function(){return r("xX2g")}])},YFqc:function(e,n,r){e.exports=r("cTJO")},cTJO:function(e,n,r){"use strict";var o=r("J4zp"),a=r("284h");n.__esModule=!0,n.default=void 0;var t=a(r("q1tI")),c=r("elyg"),s=r("nOHt"),i=r("vNVm"),l={};function u(e,n,r,o){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,r,o).catch((function(e){0}));var a=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[n+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var n=!1!==e.prefetch,r=(0,s.useRouter)(),a=r&&r.pathname||"/",d=t.default.useMemo((function(){var n=(0,c.resolveHref)(a,e.href,!0),r=o(n,2),t=r[0],s=r[1];return{href:t,as:e.as?(0,c.resolveHref)(a,e.as):s||t}}),[a,e.href,e.as]),f=d.href,p=d.as,v=e.children,b=e.replace,h=e.shallow,m=e.scroll,j=e.locale;"string"===typeof v&&(v=t.default.createElement("a",null,v));var g=t.Children.only(v),y=g&&"object"===typeof g&&g.ref,x=(0,i.useIntersection)({rootMargin:"200px"}),O=o(x,2),w=O[0],N=O[1],E=t.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);(0,t.useEffect)((function(){var e=N&&n&&(0,c.isLocalURL)(f),o="undefined"!==typeof j?j:r&&r.locale,a=l[f+"%"+p+(o?"%"+o:"")];e&&!a&&u(r,f,p,{locale:o})}),[p,f,N,j,n,r]);var _={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,r,o,a,t,s,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==s&&(s=o.indexOf("#")<0),n[a?"replace":"push"](r,o,{shallow:t,locale:i,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,r,f,p,b,h,m,j)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(r,f,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var L="undefined"!==typeof j?j:r&&r.locale,M=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(p,L,r&&r.locales,r&&r.domainLocales);_.href=M||(0,c.addBasePath)((0,c.addLocale)(p,L,r&&r.defaultLocale))}return t.default.cloneElement(g,_)};n.default=d},vNVm:function(e,n,r){"use strict";var o=r("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,i=(0,a.useRef)(),l=(0,a.useState)(!1),u=o(l,2),d=u[0],f=u[1],p=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||d||e&&e.tagName&&(i.current=function(e,n,r){var o=function(e){var n=e.rootMargin||"",r=s.get(n);if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return s.set(n,r={id:n,observer:a,elements:o}),r}(r),a=o.id,t=o.observer,c=o.elements;return c.set(e,n),t.observe(e),function(){c.delete(e),t.unobserve(e),0===c.size&&(t.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,d]);return(0,a.useEffect)((function(){if(!c&&!d){var e=(0,t.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,t.cancelIdleCallback)(e)}}}),[d]),[p,d]};var a=r("q1tI"),t=r("0G5g"),c="undefined"!==typeof IntersectionObserver;var s=new Map},xX2g:function(e,n,r){"use strict";r.r(n);var o=r("nKUr"),a=r("YFqc"),t=r.n(a);r("xNl7");n.default=function(){return Object(o.jsxs)("div",{className:"page trackway-page",children:[Object(o.jsx)(t.a,{href:"/",children:Object(o.jsx)("button",{className:"back-button",children:"Volver"})}),Object(o.jsxs)("section",{className:"row project-description",children:[Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("h3",{className:"title",children:"PALOQUEMAO"}),Object(o.jsx)("p",{children:"A la orden, qu\xe9 se le ofrece... es un proyecto hecho para poner en el mapa a quienes en Colombia hacen una labor incre\xedble vendiendo y cultivando diferentes productos para poder poner en la mesa de los hogares colombianos la comida del d\xeda a d\xeda. A trav\xe9s de diferentes estrategias logramos construir toda una experiencia que reconociera las labores de los trabajadores de Paloquemao y tambi\xe9n a trav\xe9s de sus productos construimos un desfile hecho en el antiguo Bronx bogotano, un lugar que paso de ser un espacio donde Los habitantes de calle se reun\xedan a vender, comprar y consumir drogas a ser un espacio art\xedstico en el cual todos los ciudadanos pueden recorrer y experimentar arte. Todo este proyecto fue posible gracias a ser la ganadora de la beca creativa Bronx distrito Creativo, la cual me dio los recursos econ\xf3micos para construir esta experiencia que a m\xed me cambi\xf3 la vida y la visi\xf3n de Bogot\xe1."}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("p",{children:["A\xf1o: ",Object(o.jsx)("span",{className:"number",children:"2018"})]}),Object(o.jsxs)("p",{children:["Beca: ",Object(o.jsx)("span",{children:"El desfiladero, Bronx distrito creativo"})]}),Object(o.jsxs)("p",{children:["Rol: ",Object(o.jsx)("span",{children:"Creadora de proyecto"})]})]})]}),Object(o.jsx)("div",{className:"description"})]})]})}}},[["4iuv",0,1,2,3]]]);