_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),c=t("elyg"),s=t("nOHt"),i=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),o=t&&t.pathname||"/",d=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],s=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):s||a}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,j=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=a.Children.only(h),x=g&&"object"===typeof g&&g.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),y=r(O,2),N=y[0],w=y[1],E=a.default.useCallback((function(e){N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,N]);(0,a.useEffect)((function(){var e=w&&n&&(0,c.isLocalURL)(f),r="undefined"!==typeof m?m:t&&t.locale,o=l[f+"%"+p+(r?"%"+r:"")];e&&!o&&u(t,f,p,{locale:r})}),[p,f,w,m,n,t]);var _={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,s,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,t,f,p,j,v,b,m)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(t,f,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var M="undefined"!==typeof m?m:t&&t.locale,L=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,M,t&&t.locales,t&&t.domainLocales);_.href=L||(0,c.addBasePath)((0,c.addLocale)(p,M,t&&t.defaultLocale))}return a.default.cloneElement(g,_)};n.default=d},i9FY:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=t("YFqc"),a=t.n(o);t("WC0D");n.default=function(){return Object(r.jsxs)("div",{className:"page dolls-page",children:[Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("button",{className:"back-button",children:"Volver"})}),Object(r.jsxs)("section",{className:"project-description",children:[Object(r.jsxs)("div",{className:"project-info",children:[Object(r.jsx)("h3",{className:"title",children:"MU\xd1ECAS"}),Object(r.jsxs)("div",{className:"info",children:[Object(r.jsxs)("p",{children:["A\xf1o: ",Object(r.jsx)("span",{className:"number",children:"2020"})]}),Object(r.jsxs)("p",{children:["Empresa: ",Object(r.jsx)("span",{children:"Proyecto personal"})]}),Object(r.jsxs)("p",{children:["Rol: ",Object(r.jsx)("span",{children:"Ilustradora"})]})]})]}),Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{children:"Estas son algunas mujeres que ilustr\xe9 seg\xfan el mood que ten\xeda. Cada una representa reflexiones, sentimientos o expectativas de momentos. Gracias a este trabajo logr\xe9 hacer una catarsis de momentos dif\xedciles y reflexivos que tuve al principio de la pandemia. Me reconozco en cada uno de estos dibujos."}),Object(r.jsx)("p",{children:"Son yo y yo soy ellos."}),Object(r.jsx)("a",{href:"https://www.instagram.com/manunavarroilust/",children:"instagram.com/manunavarroilust"})]})]}),Object(r.jsx)("section",{className:"dolls-images",children:[1,2,3,4,5,6,7,8,9].map((function(e){return Object(r.jsx)("img",{src:"/static/images/dolls/dolls".concat(e,".png"),alt:"dolls".concat(e)},e)}))}),Object(r.jsx)("div",{className:"right-aligned mt-20",children:Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("button",{className:"back-button",children:"Volver"})})})]})}},uAgJ:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/illustration/dolls",function(){return t("i9FY")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),d=u[0],f=u[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||d||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return(0,o.useEffect)((function(){if(!c&&!d){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[p,d]};var o=t("q1tI"),a=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var s=new Map}},[["uAgJ",0,1,2,3]]]);