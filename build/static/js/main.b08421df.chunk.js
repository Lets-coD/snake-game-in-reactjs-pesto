(this["webpackJsonpreact-snake"]=this["webpackJsonpreact-snake"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),u=n.n(c),i=n(5),o=n(1);n(11);var l=[500,500],f=[[8,7],[8,8]],s=[8,3],b={38:[0,-1],40:[0,1],37:[-1,0],39:[1,0]},p=function(){var e=Object(r.useRef)(),t=Object(r.useState)(f),n=Object(o.a)(t,2),c=n[0],u=n[1],p=Object(r.useState)(s),v=Object(o.a)(p,2),O=v[0],d=v[1],x=Object(r.useState)([0,-1]),j=Object(o.a)(x,2),m=j[0],h=j[1],E=Object(r.useState)(null),y=Object(o.a)(E,2),g=y[0],S=y[1],w=Object(r.useState)(!1),k=Object(o.a)(w,2),R=k[0],I=k[1];!function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){return M()}),g);var J=function(){return O.map((function(e,t){return Math.floor(Math.random()*(l[t]/40))}))},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;if(40*e[0]>=l[0]||e[0]<0||40*e[1]>=l[1]||e[1]<0)return!0;var n,r=Object(i.a)(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(e[0]===a[0]&&e[1]===a[1])return!0}}catch(u){r.e(u)}finally{r.f()}return!1},M=function(){var e=JSON.parse(JSON.stringify(c)),t=[e[0][0]+m[0],e[0][1]+m[1]];e.unshift(t),C(t)&&(S(null),I(!0)),function(e){if(e[0][0]===O[0]&&e[0][1]===O[1]){for(var t=J();C(t,e);)t=J();return d(t),!0}return!1}(e)||e.pop(),u(e)};return Object(r.useEffect)((function(){var t=e.current.getContext("2d");t.setTransform(40,0,0,40,0,0),t.clearRect(0,0,window.innerWidth,window.innerHeight),t.fillStyle="pink",c.forEach((function(e){var n=Object(o.a)(e,2),r=n[0],a=n[1];return t.fillRect(r,a,1,1)})),t.fillStyle="lightblue",t.fillRect(O[0],O[1],1,1)}),[c,O,R]),a.a.createElement("div",{role:"button",tabIndex:"0",onKeyDown:function(e){return function(e){var t=e.keyCode;return t>=37&&t<=40&&h(b[t])}(e)},style:{margin:"0px 0px 0px 30vw "}},a.a.createElement("canvas",{style:{border:"10px solid orange",borderRadius:"10px"},ref:e,width:"".concat(l[0],"px"),height:"".concat(l[1],"px")}),a.a.createElement("br",null),a.a.createElement("br",null),R&&a.a.createElement("div",{style:{margin:"0px 0px 0px 200px "}},"GAME OVER!"),a.a.createElement("button",{className:"button1",onClick:function(){u(f),d(s),h([0,-1]),S(150),I(!1)},style:{margin:"0px 0px 0px 200px "}},"Start Game"))};u.a.render(a.a.createElement(p,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.b08421df.chunk.js.map