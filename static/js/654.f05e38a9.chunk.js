"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[654],{654:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(885),a=n(791),c=n(501),o=n(871),s=n(70),u={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(u),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function f(e){return e&&e.map((function(e,t){return a.createElement(e.tag,l({key:t},e.attr),f(e.child))}))}function h(e){return function(t){return a.createElement(m,l({attr:l({},e.attr)},t),f(e.child))}}function m(e){var t=function(t){var n,r=e.attr,c=e.size,o=e.title,s=p(e,["attr","size","title"]),u=c||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return t(e)})):t(u)}function g(e){return h({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"}}]})(e)}var _={Searchbar:"MoviesPage_Searchbar__AFiXG",SearchForm:"MoviesPage_SearchForm__nt4X-",Searchbutton:"MoviesPage_Searchbutton__gc8ib",button__label:"MoviesPage_button__label__1W3nN",ImageGallery:"MoviesPage_ImageGallery__Z5Y8Z",ImageGalleryItem:"MoviesPage_ImageGalleryItem__f-zJq",ImageGalleryItemImage:"MoviesPage_ImageGalleryItemImage__UDHfB",App:"MoviesPage_App__ji+YS",Link:"MoviesPage_Link__xg+iu"},d=n(184);function v(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],u=t[1],i=(0,a.useState)([]),l=(0,r.Z)(i,2),p=l[0],f=l[1],h=(0,c.lr)(),m=(0,r.Z)(h,2),v=m[0],y=m[1],b=(0,o.TH)(),x=v.get("query");(0,a.useEffect)((function(){x&&w()}),[x]);var w=function(){(0,s.Ai)(n).then((function(e){f(e.results)}))};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("header",{className:_.Searchbar,children:(0,d.jsxs)("form",{className:_.SearchForm,children:[(0,d.jsxs)("button",{type:"submit",className:_.Searchbutton,children:[(0,d.jsx)(g,{}),(0,d.jsx)("span",{className:_.button__label,children:"Search"})]}),(0,d.jsx)("input",{className:_.input,type:"text",autoComplete:"off",autoFocus:!0,value:n,onChange:function(e){u(e.currentTarget.value.toLowerCase()),y({query:e.currentTarget.value})},placeholder:"Search images and photos"})]})}),(0,d.jsx)("ul",{className:_.ImageGallery,children:p&&p.map((function(e){return(0,d.jsx)("li",{className:_.ImageGalleryItem,children:(0,d.jsxs)(c.rU,{to:"".concat(e.id),state:{from:b},className:_.Link,children:[(0,d.jsx)("img",{className:_.ImageGalleryItemImage,width:100,src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):"https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png"}),(0,d.jsx)("h3",{children:e.original_title})]})},e.id)}))})]})}},70:function(e,t,n){n.d(t,{Ai:function(){return l},Hx:function(){return _},Wg:function(){return f},ZP:function(){return u},xc:function(){return m}});var r=n(861),a=n(757),c=n.n(a),o="https://api.themoviedb.org/3",s="3bcb9c362d567dc87ce4f986b1e52bec";function u(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/trending/movie/day?api_key=").concat(s)).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&language=en-US&include_adult=false")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US&include_adult=false")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s)).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&include_adult=false")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=654.f05e38a9.chunk.js.map