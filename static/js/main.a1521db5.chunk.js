(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),o=n(9),s=n.n(o),b=n(2),i=n(4),u=(n(15),n(16),n(3)),l=n.n(u),f=function(e){var t=e.x,n=e.y,r=(e.id,e.openHandler),a=e.open,o=e.bomb,s=e.bombNumber,b=e.numberColor,i=e.flag;return Object(c.jsxs)(c.Fragment,{children:[a?Object(c.jsx)("button",{type:"button",className:"".concat(l.a.squer," ").concat(l.a.squerOpen),style:{top:"".concat(n,"%"),left:"".concat(t,"%"),color:"".concat(b)},onClick:function(){return r(t,n)},children:s}):Object(c.jsx)("button",{type:"button",className:l.a.squer,style:{top:"".concat(n,"%"),left:"".concat(t,"%")},onClick:function(){return r(t,n)}}),o&&a&&Object(c.jsx)("button",{type:"button",className:"".concat(l.a.squer," ").concat(l.a.squerBomb),style:{top:"".concat(n,"%"),left:"".concat(t,"%")},onClick:function(){return r(t,n)},children:Object(c.jsx)("i",{className:"fas fa-bomb"})}),i&&Object(c.jsx)("button",{type:"button",className:"".concat(l.a.squer," ").concat(l.a.squerFlag),style:{top:"".concat(n,"%"),left:"".concat(t,"%")},onClick:function(){return r(t,n)},children:Object(c.jsx)("i",{className:"fas fa-flag"})})]})},j=n(6),m=n.n(j),d=function(e){var t=e.labelText,n=e.startHandler,r=e.hideStart;return Object(c.jsx)(c.Fragment,{children:!r&&Object(c.jsx)("div",{className:m.a.wrapper,children:Object(c.jsx)("button",{type:"button",className:m.a.start,onClick:function(){return n()},children:t})})})},O=n(20),x=function(e){for(var t=[],n=function(){var e=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());t.find((function(t){return t[0]===10*e&&t[1]===10*n}))||t.push([10*e,10*n])};t.length<e;)n();return t},h=(n(17),function(e){var t=e.flagSwitchHandler,n=e.checkedSwitch;return Object(c.jsxs)("div",{className:"switch--box",children:[Object(c.jsx)("i",{className:"fas fa-bomb"}),Object(c.jsxs)("label",{className:"switch",children:[Object(c.jsx)("input",{type:"checkbox",onClick:function(){return t()},checked:n}),Object(c.jsx)("span",{className:"slider round"})]}),Object(c.jsx)("i",{className:"fas fa-flag"})]})}),p=function(e){var t=e.restartHandler;return Object(c.jsx)("button",{type:"button",onClick:function(){return t()},className:m.a.restarButton,children:Object(c.jsx)("i",{className:"fas fa-sync"})})},g=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),s=Object(i.a)(o,2),u=s[0],l=s[1],j=Object(r.useState)(0),m=Object(i.a)(j,2),g=m[0],v=m[1],N=Object(r.useState)(!1),y=Object(i.a)(N,2),_=y[0],k=y[1],S=Object(r.useState)(!1),q=Object(i.a)(S,2),w=q[0],C=q[1],F=Object(r.useState)(!1),H=Object(i.a)(F,2),B=H[0],M=H[1];console.log({flags:_}),Object(r.useEffect)((function(){T(),v(0)}),[w]);var T=function(){a(function(e){for(var t=[],n={id:"1",x:0,y:0,open:!1,flag:!1,bomb:!1,bombNumber:0,color:"red"},c=0;c<=e-1;c++)for(var r=0;r<=e-1;r++)n={id:Object(O.a)(),x:10*r,y:10*c,open:!1,bomb:!1,flag:!1,bombNumber:0,color:"red"},t.push(n);return t}(10))},Y=function(){V(),G(),M(!B),E()},E=function(){var e=n.filter((function(e){return!0===e.bomb})),t=n.filter((function(e){return!0===e.flag}));v(e.length-t.length)},J=function(){var e=n.length-10;if(n.filter((function(e){return!0===e.open})).length===e){l("You Win!");var t=Object(b.a)(n);t.map((function(e){e.open=!0,a(t)}))}},L=function(e,t){Object(b.a)(n).map((function(n){for(var c=-1;c<2;c++)for(var r=-1;r<2;r++)n.x===e+10*c&&n.y===t+10*r&&!1===n.bomb&&(n.open=!0)}))},D=function(){var e=Object(b.a)(n),t=n.filter((function(e){return 0===e.bombNumber&&!0===e.open}));n.map((function(n){t.map((function(t){for(var c=-1;c<2;c++)for(var r=-1;r<2;r++)n.x===t.x+10*c&&n.y===t.y+10*r&&!1===n.bomb&&(n.open=!0,a(e))}))}))},I=function(){if(!_)for(var e=0;e<20;e++)D()},P=function(){l("You Loese");var e=Object(b.a)(n);e.map((function(t){t.open=!0,a(e)}))},V=function(){var e=x(10);console.log(x(10));var t=Object(b.a)(n);t.map((function(t){for(var n=0;n<e.length;n++)t.x===e[n][0]&&t.y===e[n][1]&&!1===t.bomb&&(t.bomb=!0)})),a(t);var c=Object(b.a)(n);n.map((function(t){for(var n=0;n<e.length;n++)for(var c=-1;c<2;c++)for(var r=-1;r<2;r++)t.x===e[n][0]+10*c&&t.y===e[n][1]+-10*r&&(t.bombNumber+=1)})),a(c)},G=function(){var e=Object(b.a)(n);n.map((function(t){t.color=function(e){var t="red";switch(e){case 0:t="rgb(201, 201, 201, 0)";break;case 1:t="rgb(0, 4, 212)";break;case 2:t="rgb(0, 177, 59)";break;case 3:t="rgb(177, 130, 0)";break;case 4:t="rgb(0, 142, 177)";break;case 5:t="rgb(121, 0, 177)";break;case 6:t="rgb(177, 0, 147)";break;case 7:t="rgb(177, 0, 0)";break;case 8:t="rgb(0, 0, 0)"}return t}(t.bombNumber),a(e)}))};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-offset-3 col-md-6 col-xs-12",children:Object(c.jsx)("h2",{children:u})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-md-offset-3 col-md-6 col-xs-12",children:[Object(c.jsx)("div",{className:"top--menu",children:Object(c.jsx)(p,{restartHandler:function(){return Object(b.a)(n),a([]),C(!w),M(!B),void Y()}})}),Object(c.jsxs)("div",{className:"counter",children:[Object(c.jsx)("h2",{children:"0:00"}),Object(c.jsx)(h,{flagSwitchHandler:function(){k(!_)},checkedSwitch:_}),Object(c.jsxs)("div",{className:"counter--bombs",children:[Object(c.jsx)("i",{className:"fas fa-bomb"}),Object(c.jsx)("h2",{children:g})]})]}),Object(c.jsxs)("div",{className:"game--grid",children:[Object(c.jsx)(d,{labelText:"Start",startHandler:function(){return Y()},hideStart:B}),n.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(f,{x:e.x,y:e.y,id:e.id,openHandler:function(t,c){return function(e,t){var c=Object(b.a)(n);c.map((function(n){n.x===e&&n.y===t&&_?(n.flag=!n.flag,n.open=!1):n.x===e&&n.y===t&&(n.open=!0,n.bomb&&P(),0===n.bombNumber&&L(e,t))})),a(c),I(),J(),E()}(e.x,e.y)},open:e.open,bomb:e.bomb,bombNumber:e.bombNumber,numberColor:e.color,flag:e.flag})},e.id)}))]})]})})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()},3:function(e,t,n){e.exports={squer:"field_squer__362V1",squerOpen:"field_squerOpen__2t6UD",squerBomb:"field_squerBomb__1EsGs",squerFlag:"field_squerFlag__1NasY"}},6:function(e,t,n){e.exports={start:"buttons_start__1QSVO",wrapper:"buttons_wrapper__JrlH_",restarButton:"buttons_restarButton__1XwYn"}}},[[18,1,2]]]);
//# sourceMappingURL=main.a1521db5.chunk.js.map