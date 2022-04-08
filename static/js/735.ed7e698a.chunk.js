"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[735,369],{369:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(504),o="MoviesGallery_Gallery__60X86",a="MoviesGallery_Link__Acb-E",s="MoviesGallery_Image__PeK2c",i="MoviesGallery_Title__TSPFd",c="MoviesGallery_Item__9VqF+",u=n(184);function l(e){var t=e.movies;return(0,u.jsx)("ul",{className:o,children:t&&t.map((function(e){return(0,u.jsx)("li",{className:c,children:(0,u.jsxs)(r.rU,{to:"".concat(e.id),className:a,children:[(0,u.jsx)("img",{className:s,src:e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:"".concat("https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png"),alt:e.title}),(0,u.jsx)("h3",{className:i,children:e.title})]})},e.id)}))})}},70:function(e,t,n){n.d(t,{Ai:function(){return l},Hx:function(){return h},Wg:function(){return d},ZP:function(){return c},xc:function(){return m}});var r=n(861),o=n(757),a=n.n(o),s="https://api.themoviedb.org/3",i="3bcb9c362d567dc87ce4f986b1e52bec";function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/trending/movie/day?api_key=").concat(i)).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US&include_adult=false")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US&include_adult=false")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i)).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&include_adult=false")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},735:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var r=n(152),o=n(791),a=n(871);function s(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=s(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function i(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=s(e))&&(r&&(r+=" "),r+=t);return r}var c=n(164);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function f(e){return"number"===typeof e&&!isNaN(e)}function d(e){return"boolean"===typeof e}function p(e){return"string"===typeof e}function m(e){return"function"===typeof e}function v(e){return p(e)||m(e)?e:null}function h(e){return 0===e||e}var g=!("undefined"===typeof window||!window.document||!window.document.createElement);function y(e){return(0,o.isValidElement)(e)||p(e)||m(e)||f(e)}var b={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},E={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function T(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,s=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,p=a?t+"--"+s:t,m=a?n+"--"+s:n,v=(0,o.useRef)(),h=(0,o.useRef)(0);function g(e){if(e.target===f.current){var t=f.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",g),t.removeEventListener("animationcancel",g),0===h.current&&(t.className=v.current)}}function y(){var e=f.current;e.removeEventListener("animationend",y),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()}return(0,o.useLayoutEffect)((function(){!function(){var e=f.current;v.current=e.className,e.className+=" "+p,e.addEventListener("animationend",g),e.addEventListener("animationcancel",g)}()}),[]),(0,o.useEffect)((function(){d||(c?y():function(){h.current=1;var e=f.current;e.className+=" "+m,e.addEventListener("animationend",y)}())}),[d]),o.createElement(o.Fragment,null,r)}}var _={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.list.has(e)&&this.list.get(e).forEach((function(n){var o=setTimeout((function(){n.apply(void 0,r)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(o)}))}},O=["delay","staleId"];function C(e){var t=(0,o.useReducer)((function(e){return e+1}),0)[1],n=(0,o.useState)([]),r=n[0],a=n[1],s=(0,o.useRef)(null),i=(0,o.useRef)(new Map).current,c=function(e){return-1!==r.indexOf(e)},u=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:c,getToast:function(e){return i.get(e)}}).current;function g(e){var t=e.containerId;!u.props.limit||t&&u.containerId!==t||(u.count-=u.queue.length,u.queue=[])}function b(e){a((function(t){return h(e)?t.filter((function(t){return t!==e})):[]}))}function E(){var e=u.queue.shift();C(e.toastContent,e.toastProps,e.staleId)}function T(e,n){var r=n.delay,a=n.staleId,c=l(n,O);if(y(e)&&!function(e){return!s.current||u.props.enableMultiContainer&&e.containerId!==u.props.containerId||i.has(e.toastId)&&null==e.updateId}(c)){var g=c.toastId,T=c.updateId,_=c.data,w=u.props,x=function(){return b(g)},I=null==T;I&&u.count++;var N,L,k={toastId:g,updateId:T,isLoading:c.isLoading,theme:c.theme||w.theme,icon:null!=c.icon?c.icon:w.icon,isIn:!1,key:c.key||u.toastKey++,type:c.type,closeToast:x,closeButton:c.closeButton,rtl:w.rtl,position:c.position||w.position,transition:c.transition||w.transition,className:v(c.className||w.toastClassName),bodyClassName:v(c.bodyClassName||w.bodyClassName),style:c.style||w.toastStyle,bodyStyle:c.bodyStyle||w.bodyStyle,onClick:c.onClick||w.onClick,pauseOnHover:d(c.pauseOnHover)?c.pauseOnHover:w.pauseOnHover,pauseOnFocusLoss:d(c.pauseOnFocusLoss)?c.pauseOnFocusLoss:w.pauseOnFocusLoss,draggable:d(c.draggable)?c.draggable:w.draggable,draggablePercent:c.draggablePercent||w.draggablePercent,draggableDirection:c.draggableDirection||w.draggableDirection,closeOnClick:d(c.closeOnClick)?c.closeOnClick:w.closeOnClick,progressClassName:v(c.progressClassName||w.progressClassName),progressStyle:c.progressStyle||w.progressStyle,autoClose:!c.isLoading&&(N=c.autoClose,L=w.autoClose,!1===N||f(N)&&N>0?N:L),hideProgressBar:d(c.hideProgressBar)?c.hideProgressBar:w.hideProgressBar,progress:c.progress,role:c.role||w.role,deleteToast:function(){i.delete(g);var e=u.queue.length;if(u.count=h(g)?u.count-1:u.count-u.displayedToast,u.count<0&&(u.count=0),e>0){var n=h(g)?1:u.props.limit;if(1===e||1===n)u.displayedToast++,E();else{var r=n>e?e:n;u.displayedToast=r;for(var o=0;o<r;o++)E()}}else t()}};m(c.onOpen)&&(k.onOpen=c.onOpen),m(c.onClose)&&(k.onClose=c.onClose),k.closeButton=w.closeButton,!1===c.closeButton||y(c.closeButton)?k.closeButton=c.closeButton:!0===c.closeButton&&(k.closeButton=!y(w.closeButton)||w.closeButton);var P=e;(0,o.isValidElement)(e)&&!p(e.type)?P=(0,o.cloneElement)(e,{closeToast:x,toastProps:k,data:_}):m(e)&&(P=e({closeToast:x,toastProps:k,data:_})),w.limit&&w.limit>0&&u.count>w.limit&&I?u.queue.push({toastContent:P,toastProps:k,staleId:a}):f(r)&&r>0?setTimeout((function(){C(P,k,a)}),r):C(P,k,a)}}function C(e,t,n){var r=t.toastId;n&&i.delete(n),i.set(r,{content:e,props:t}),a((function(e){return[].concat(e,[r]).filter((function(e){return e!==n}))}))}return(0,o.useEffect)((function(){return u.containerId=e.containerId,_.cancelEmit(3).on(0,T).on(1,(function(e){return s.current&&b(e)})).on(5,g).emit(2,u),function(){return _.emit(3,u)}}),[]),(0,o.useEffect)((function(){u.isToastActive=c,u.displayedToast=r.length,_.emit(4,r.length,e.containerId)}),[r]),(0,o.useEffect)((function(){u.props=e})),{getToastToRender:function(t){var n=new Map,r=Array.from(i.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:c}}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function x(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function I(e){var t=(0,o.useState)(!1),n=t[0],r=t[1],a=(0,o.useState)(!1),s=a[0],i=a[1],c=(0,o.useRef)(null),u=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=(0,o.useRef)(e),f=e.autoClose,d=e.pauseOnHover,p=e.closeToast,v=e.onClick,h=e.closeOnClick;function g(t){if(e.draggable){u.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",_),document.addEventListener("touchmove",T),document.addEventListener("touchend",_);var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=w(t.nativeEvent),u.y=x(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(){if(u.boundingRect){var t=u.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&u.x>=o&&u.x<=a&&u.y>=n&&u.y<=r?E():b()}}function b(){r(!0)}function E(){r(!1)}function T(t){var r=c.current;u.canDrag&&r&&(u.didMove=!0,n&&E(),u.x=w(t),u.y=x(t),"x"===e.draggableDirection?u.delta=u.x-u.start:u.delta=u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),r.style.transform="translate"+e.draggableDirection+"("+u.delta+"px)",r.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function _(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",_);var t=c.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,o.useEffect)((function(){l.current=e})),(0,o.useEffect)((function(){return c.current&&c.current.addEventListener("d",b,{once:!0}),m(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=l.current;m(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||E();window.addEventListener("focus",b),window.addEventListener("blur",E)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",E))}}),[e.pauseOnFocusLoss]);var O={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return f&&d&&(O.onMouseEnter=E,O.onMouseLeave=b),h&&(O.onClick=function(e){v&&v(e),u.canCloseOnClick&&p()}),{playToast:b,pauseToast:E,isRunning:n,preventExitTransition:s,toastRef:c,eventHandlers:O}}function N(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return(0,o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},(0,o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},(0,o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(e){var t,n,r=e.delay,a=e.isRunning,s=e.closeToast,c=e.type,l=e.hide,f=e.className,d=e.style,p=e.controlledProgress,v=e.progress,h=e.rtl,g=e.isIn,y=e.theme,b=u({},d,{animationDuration:r+"ms",animationPlayState:a?"running":"paused",opacity:l?0:1});p&&(b.transform="scaleX("+v+")");var E=i("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+y,"Toastify__progress-bar--"+c,((t={})["Toastify__progress-bar--rtl"]=h,t)),T=m(f)?f({rtl:h,type:c,defaultClassName:E}):i(E,f),_=((n={})[p&&v>=1?"onTransitionEnd":"onAnimationEnd"]=p&&v<1?null:function(){g&&s()},n);return(0,o.createElement)("div",Object.assign({role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:T,style:b},_))}L.defaultProps={type:E.DEFAULT,hide:!1};var k=["theme","type"],P=function(e){var t=e.theme,n=e.type,r=l(e,k);return(0,o.createElement)("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var S={info:function(e){return(0,o.createElement)(P,Object.assign({},e),(0,o.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return(0,o.createElement)(P,Object.assign({},e),(0,o.createElement)("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return(0,o.createElement)(P,Object.assign({},e),(0,o.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return(0,o.createElement)(P,Object.assign({},e),(0,o.createElement)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return(0,o.createElement)("div",{className:"Toastify__spinner"})}},R=function(e){var t,n,r=I(e),a=r.isRunning,s=r.preventExitTransition,c=r.toastRef,u=r.eventHandlers,l=e.closeButton,f=e.children,d=e.autoClose,v=e.onClick,h=e.type,g=e.hideProgressBar,y=e.closeToast,b=e.transition,E=e.position,T=e.className,_=e.style,O=e.bodyClassName,C=e.bodyStyle,w=e.progressClassName,x=e.progressStyle,N=e.updateId,k=e.role,P=e.progress,R=e.rtl,j=e.toastId,M=e.deleteToast,B=e.isIn,A=e.isLoading,D=e.icon,F=e.theme,z=i("Toastify__toast","Toastify__toast-theme--"+F,"Toastify__toast--"+h,((t={})["Toastify__toast--rtl"]=R,t)),H=m(T)?T({rtl:R,position:E,type:h,defaultClassName:z}):i(z,T),U=!!P,q=S[h],G={theme:F,type:h},Z=q&&q(G);return!1===D?Z=void 0:m(D)?Z=D(G):(0,o.isValidElement)(D)?Z=(0,o.cloneElement)(D,G):p(D)?Z=D:A&&(Z=S.spinner()),(0,o.createElement)(b,{isIn:B,done:M,position:E,preventExitTransition:s,nodeRef:c},(0,o.createElement)("div",Object.assign({id:j,onClick:v,className:H},u,{style:_,ref:c}),(0,o.createElement)("div",Object.assign({},B&&{role:k},{className:m(O)?O({type:h}):i("Toastify__toast-body",O),style:C}),Z&&(0,o.createElement)("div",{className:i("Toastify__toast-icon",(n={},n["Toastify--animate-icon Toastify__zoom-enter"]=!A,n))},Z),(0,o.createElement)("div",null,f)),function(e){if(e){var t={closeToast:y,type:h,theme:F};return m(e)?e(t):(0,o.isValidElement)(e)?(0,o.cloneElement)(e,t):void 0}}(l),(d||U)&&(0,o.createElement)(L,Object.assign({},N&&!U?{key:"pb-"+N}:{},{rtl:R,theme:F,delay:d,isRunning:a,isIn:B,closeToast:y,hide:g,type:h,style:x,className:w,controlledProgress:U,progress:P}))))},j=T({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),M=function(e){var t=C(e),n=t.getToastToRender,r=t.containerRef,a=t.isToastActive,s=e.className,c=e.style,l=e.rtl,f=e.containerId;function d(e){var t,n=i("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=l,t));return m(s)?s({position:e,rtl:l,defaultClassName:n}):i(n,v(s))}return(0,o.createElement)("div",{ref:r,className:"Toastify",id:f},n((function(e,t){var n=t.length?u({},c):u({},c,{pointerEvents:"none"});return(0,o.createElement)("div",{className:d(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return(0,o.createElement)(R,Object.assign({},n,{isIn:a(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?N:n.closeButton}),t)})))})))};M.defaultProps={position:b.TOP_RIGHT,transition:j,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:N,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var B,A,D,F=new Map,z=[],H=!1;function U(){return Math.random().toString(36).substring(2,9)}function q(e){return e&&(p(e.toastId)||f(e.toastId))?e.toastId:U()}function G(e,t){return F.size>0?_.emit(0,e,t):(z.push({content:e,options:t}),H&&g&&(H=!1,A=document.createElement("div"),document.body.appendChild(A),(0,c.render)((0,o.createElement)(M,Object.assign({},D)),A))),t.toastId}function Z(e,t){return u({},t,{type:t&&t.type||e,toastId:q(t)})}function Q(e){return function(t,n){return G(t,Z(e,n))}}function V(e,t){return G(e,Z(E.DEFAULT,t))}V.loading=function(e,t){return G(e,Z(E.DEFAULT,u({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},V.promise=function(e,t,n){var r,o=t.pending,a=t.error,s=t.success;o&&(r=p(o)?V.loading(o,n):V.loading(o.render,u({},n,o)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=u({type:e},i,n,{data:o}),s=p(t)?{render:t}:t;return r?V.update(r,u({},a,s)):V(s.render,u({},a,s)),o}V.dismiss(r)},l=m(e)?e():e;return l.then((function(e){return c("success",s,e)})).catch((function(e){return c("error",a,e)})),l},V.success=Q(E.SUCCESS),V.info=Q(E.INFO),V.error=Q(E.ERROR),V.warning=Q(E.WARNING),V.warn=V.warning,V.dark=function(e,t){return G(e,Z(E.DEFAULT,u({theme:"dark"},t)))},V.dismiss=function(e){return _.emit(1,e)},V.clearWaitingQueue=function(e){return void 0===e&&(e={}),_.emit(5,e)},V.isActive=function(e){var t=!1;return F.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},V.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=F.get(n||B);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=u({},r,t,{toastId:t.toastId||e,updateId:U()});a.toastId!==e&&(a.staleId=e);var s=a.render||o;delete a.render,G(s,a)}}),0)},V.done=function(e){V.update(e,{progress:1})},V.onChange=function(e){return m(e)&&_.on(4,e),function(){m(e)&&_.off(4,e)}},V.configure=function(e){void 0===e&&(e={}),H=!0,D=e},V.POSITION=b,V.TYPE=E,_.on(2,(function(e){B=e.containerId||e,F.set(B,e),z.forEach((function(e){_.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){F.delete(e.containerId||e),0===F.size&&_.off(0).off(1).off(5),g&&A&&document.body.removeChild(A)}));var W={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Y=o.createContext&&o.createContext(W),X=function(){return X=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},X.apply(this,arguments)},K=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function J(e){return e&&e.map((function(e,t){return o.createElement(e.tag,X({key:t},e.attr),J(e.child))}))}function $(e){return function(t){return o.createElement(ee,X({attr:X({},e.attr)},t),J(e.child))}}function ee(e){var t=function(t){var n,r=e.attr,a=e.size,s=e.title,i=K(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.createElement("svg",X({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:n,style:X(X({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&o.createElement("title",null,s),e.children)};return void 0!==Y?o.createElement(Y.Consumer,null,(function(e){return t(e)})):t(W)}function te(e){return $({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(e)}var ne="Searchbar_Searchbar__tYV4W",re="Searchbar_SearchForm__4QoPw",oe="Searchbar_Button__Y+IZw",ae="Searchbar_Input__uWhPl",se=n(184);function ie(e){var t=e.onSubmit,n=(0,o.useState)(""),a=(0,r.Z)(n,2),s=a[0],i=a[1];return(0,se.jsx)("header",{className:ne,children:(0,se.jsxs)("form",{className:re,onSubmit:function(e){if(e.preventDefault(),""===s.trim())return V.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430");t(s),i("")},children:[(0,se.jsx)("button",{type:"submit",className:oe,children:(0,se.jsx)(te,{style:{width:15,height:15}})}),(0,se.jsx)("input",{className:ae,type:"text",value:s,onChange:function(e){i(e.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})}var ce=n(369),ue=n(70);function le(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],i=(0,o.useState)(null),c=(0,r.Z)(i,2),u=c[0],l=c[1],f=((0,a.s0)(),(0,a.TH)()),d=new URLSearchParams(f.search).get("query");(0,o.useEffect)((function(){n&&(s(""),(0,ue.Ai)(n).then((function(e){if(console.log("results",e),0===e.results.length)return V.error("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),l(null);l(e.results)})))}),[n,d]);return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(ie,{onSubmit:function(e){s(e)}}),u&&(0,se.jsx)(ce.default,{movies:u}),(0,se.jsx)(M,{})]})}}}]);
//# sourceMappingURL=735.ed7e698a.chunk.js.map