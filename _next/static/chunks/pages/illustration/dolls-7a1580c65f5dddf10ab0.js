_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),s=t("elyg"),c=t("nOHt"),i=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,s.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,s.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,m=e.children,v=e.replace,j=e.shallow,h=e.scroll,b=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var g=a.Children.only(m),x=g&&"object"===typeof g&&g.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),y=r(O,2),w=y[0],N=y[1],E=a.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,a.useEffect)((function(){var e=N&&n&&(0,s.isLocalURL)(d),r="undefined"!==typeof b?b:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(t,d,p,{locale:r})}),[p,d,N,b,n,t]);var _={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,t,d,p,v,j,h,b)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var M="undefined"!==typeof b?b:t&&t.locale,I=t&&t.isLocaleDomain&&(0,s.getDomainLocale)(p,M,t&&t.locales,t&&t.domainLocales);_.href=I||(0,s.addBasePath)((0,s.addLocale)(p,M,t&&t.defaultLocale))}return a.default.cloneElement(g,_)};n.default=f},i9FY:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=(t("WC0D"),t("qWPt"));n.default=function(){return Object(r.jsxs)("div",{className:"page dolls-page",children:[Object(r.jsx)(o.a,{menuItem:"illustration"}),Object(r.jsxs)("section",{className:"project-description",children:[Object(r.jsxs)("div",{className:"project-info",children:[Object(r.jsx)("h3",{className:"title",children:"MU\xd1ECAS"}),Object(r.jsxs)("div",{className:"info",children:[Object(r.jsxs)("p",{children:["A\xf1o: ",Object(r.jsx)("span",{className:"number",children:"2020"})]}),Object(r.jsxs)("p",{children:["Empresa: ",Object(r.jsx)("span",{children:"Proyecto personal"})]}),Object(r.jsxs)("p",{children:["Rol: ",Object(r.jsx)("span",{children:"Ilustradora"})]})]})]}),Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{children:"Estas son algunas mujeres que ilustr\xe9 seg\xfan el mood que ten\xeda. Cada una representa reflexiones, sentimientos o expectativas de momentos. Gracias a este trabajo logr\xe9 hacer una catarsis de momentos dif\xedciles y reflexivos que tuve al principio de la pandemia. Me reconozco en cada uno de estos dibujos."}),Object(r.jsx)("p",{children:"Son yo y yo soy ellos."}),Object(r.jsx)("a",{href:"https://www.instagram.com/manunavarroilust/",children:"instagram.com/manunavarroilust"})]})]}),Object(r.jsx)("section",{className:"dolls-images",children:[1,2,3,4,5,6,7,8,9].map((function(e){return Object(r.jsx)("img",{src:"/static/images/dolls/dolls".concat(e,".png"),alt:"dolls".concat(e)},e)}))}),Object(r.jsx)("div",{className:"right-aligned mt-20",children:Object(r.jsx)(o.a,{menuItem:"illustration"})})]})}},qWPt:function(e,n,t){"use strict";var r=t("nKUr"),o=t("YFqc"),a=t.n(o);n.a=function(e){var n=e.menuItem;return Object(r.jsx)(a.a,{href:"/?open=1&menu-item="+n,children:Object(r.jsx)("button",{className:"back-button",children:"Volver"})})}},uAgJ:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/illustration/dolls",function(){return t("i9FY")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,i=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,s=r.elements;return s.set(e,n),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!s&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),a=t("0G5g"),s="undefined"!==typeof IntersectionObserver;var c=new Map}},[["uAgJ",0,1,2,3]]]);