(this["webpackJsonpgit-expert-app"]=this["webpackJsonpgit-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),i=(n(15),n(2)),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(c.useState)("Hola mundo"),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Agregar categoria"}),Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&t((function(e){return[a].concat(Object(s.a)(e))}))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){console.log(e.target.value),o(e.target.value)}})})]})},j=n(10),l=n(6),b=n.n(l),d=n(8),p=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:n,title:t,alt:t}),Object(u.jsx)("p",{children:t})]})},O=function(e){var t=e.category,n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],s=r[1],o=function(){var e=Object(d.a)(b.a.mark((function e(){var n,c,r,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=nabEvNFal0I2DuN6XHyuNwHxn9yvKcn1&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,a=r.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(i),s(i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("div",{className:"cardGrid",children:Object(u.jsx)("ol",{children:a.map((function(e){return Object(u.jsx)(p,Object(j.a)({},e),e.id)}))})})]})},h=function(){var e=Object(c.useState)(["one punch"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GitExpertApp"}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))})]})};a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2e9cf0c6.chunk.js.map