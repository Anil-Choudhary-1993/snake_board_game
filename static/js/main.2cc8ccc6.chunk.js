(this.webpackJsonpsapp=this.webpackJsonpsapp||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r,o=t(0),a=t.n(o),i=t(3),c=t.n(i),u=(t(9),t(10),t(1)),s={x:0,y:0};window.addEventListener("keydown",(function(e){switch(e.key){case"ArrowUp":if(0!==r.y)break;s={x:0,y:-1};break;case"ArrowDown":if(0!==r.y)break;s={x:0,y:1};break;case"ArrowLeft":if(0!==r.x)break;s={x:-1,y:0};break;case"ArrowRight":if(0!==r.x)break;s={x:1,y:0}}}));var d=[{x:11,y:11}],l=0;function f(e){!function(){for(var e=0;e<l;e++)d.push(Object(u.a)({},d[d.length-1]));l=0}();for(var n=(r=s,s),t=d.length-2;t>=0;t--)d[t+1]=Object(u.a)({},d[t]);d[0].x+=n.x,d[0].y+=n.y}function m(){return d[0]}function w(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.ignoreHead,r=void 0!==t&&t;return d.some((function(n,t){return(!r||0!==t)&&h(n,e)}))}function h(e,n){return e.x===n.x&&e.y===n.y}var y={x:18,y:19};function v(e){w(y)&&(l+=b,y=function(){for(var e=null;null===e||w(e);)e={x:Math.floor(Math.random()*k)+1,y:Math.floor(Math.random()*k)+1};return e}())}var p=0,g=4,x=null,k=21,b=1,E=!1;function L(e){if(E)return alert("Game Over"),void(window.location="/");window.requestAnimationFrame(L),(e-p)/1e3<1/g||(p=e,console.log("Rendering Board"),E=!(!w(m(),{ignoreHead:!0})&&!function(){var e=m();return e.x<1||e.x>k||e.y<1||e.y>k}()),f(),v(),x.innerHTML="",function(e){var n;d.forEach((function(t){(n=document.createElement("div")).style.gridRowStart=t.y,n.style.gridColumnStart=t.x,n.classList.add("snake"),e.appendChild(n)}))}(x),function(e){var n=document.createElement("div");n.style.gridRowStart=y.y,n.style.gridColumnStart=y.x,n.classList.add("food"),e.appendChild(n)}(x))}var M=function(){return a.a.useEffect((function(){!function(){x=document.querySelector("#game-board");var e=prompt("Please enter snake spped (Low, Medium, High)");g=e&&"medium"===e.toLowerCase()?5:e&&"high"===e.toLowerCase()?8:2,b=prompt("Please enter expansion rate for the snake",1),window.requestAnimationFrame(L)}()}),[]),a.a.createElement("div",{id:"game-board"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.2cc8ccc6.chunk.js.map