_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/vUB":function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),a=t("YFqc"),c=t.n(a);t("iZs+");n.default=function(){var e=[1,2,3,4,5,6];return Object(r.jsxs)("div",{className:"page leporelo-page",children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("button",{className:"back-button",children:"Volver"})}),Object(r.jsxs)("section",{className:"project-description",children:[Object(r.jsxs)("div",{className:"project-info",children:[Object(r.jsx)("h3",{className:"title",children:"LEPORELO"}),Object(r.jsxs)("div",{className:"info",children:[Object(r.jsxs)("p",{children:["A\xf1o: ",Object(r.jsx)("span",{className:"number",children:"2018"})]}),Object(r.jsxs)("p",{children:["Empresa: ",Object(r.jsx)("span",{children:"Proyecto personal"})]}),Object(r.jsxs)("p",{children:["Rol: ",Object(r.jsx)("span",{children:"Ilustradora"})]})]})]}),Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{children:"Reinterpretaci\xf3n de La serpiente Arco\xedris, una leyenda australiana de la creaci\xf3n. A trav\xe9s de una experiencia editorial diferente, hice estas ilustraciones contando la historia del origen del mundo y logrando plasmar a trav\xe9s de un leporelo dibujos surreales y llenos de magia."}),Object(r.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.behance.net/manuelanavarro1",children:["behance.net/manuelanavarro",Object(r.jsx)("span",{className:"number",children:"1"})]})]})]}),Object(r.jsxs)("section",{className:"leporelo-images",children:[Object(r.jsx)("div",{className:"leporelo-segmented",children:e.map((function(e){return Object(r.jsx)("img",{src:"/static/images/leporelo/leporelo".concat(e,".png"),alt:"leporelo".concat(e)},e)}))}),Object(r.jsx)("div",{className:"leporelo-line",children:e.map((function(e){return Object(r.jsx)("img",{src:"/static/images/leporelo/leporelo".concat(e,".png"),alt:"leporelo".concat(e)},e)}))})]}),Object(r.jsx)("div",{className:"right-aligned mt-20",children:Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("button",{className:"back-button",children:"Volver"})})})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),a=t("284h");n.__esModule=!0,n.default=void 0;var c=a(t("q1tI")),o=t("elyg"),s=t("nOHt"),l=t("vNVm"),i={};function u(e,n,t,r){if(e&&(0,o.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),a=t&&t.pathname||"/",d=c.default.useMemo((function(){var n=(0,o.resolveHref)(a,e.href,!0),t=r(n,2),c=t[0],s=t[1];return{href:c,as:e.as?(0,o.resolveHref)(a,e.as):s||c}}),[a,e.href,e.as]),f=d.href,p=d.as,h=e.children,j=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var O=c.Children.only(h),g=O&&"object"===typeof O&&O.ref,x=(0,l.useIntersection)({rootMargin:"200px"}),y=r(x,2),N=y[0],w=y[1],E=c.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);(0,c.useEffect)((function(){var e=w&&n&&(0,o.isLocalURL)(f),r="undefined"!==typeof m?m:t&&t.locale,a=i[f+"%"+p+(r?"%"+r:"")];e&&!a&&u(t,f,p,{locale:r})}),[p,f,w,m,n,t]);var _={ref:E,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,c,s,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:c,locale:l,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,t,f,p,j,v,b,m)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(t,f,p,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var L="undefined"!==typeof m?m:t&&t.locale,k=t&&t.isLocaleDomain&&(0,o.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);_.href=k||(0,o.addBasePath)((0,o.addLocale)(p,L,t&&t.defaultLocale))}return c.default.cloneElement(O,_)};n.default=d},hdpH:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/illustration/leporelo",function(){return t("/vUB")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,l=(0,a.useRef)(),i=(0,a.useState)(!1),u=r(i,2),d=u[0],f=u[1],p=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||d||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,c=r.observer,o=r.elements;return o.set(e,n),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return(0,a.useEffect)((function(){if(!o&&!d){var e=(0,c.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[d]),[p,d]};var a=t("q1tI"),c=t("0G5g"),o="undefined"!==typeof IntersectionObserver;var s=new Map}},[["hdpH",0,1,2,3]]]);