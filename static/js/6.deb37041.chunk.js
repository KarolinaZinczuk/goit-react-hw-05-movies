"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{418:function(t,e,n){n.d(e,{Hg:function(){return o},IQ:function(){return h},Jh:function(){return d},s_:function(){return f},yA:function(){return i},z1:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="92be59e0090ddfe5570b8756c403476a",i="https://image.tmdb.org/t/p/w500",o=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},6:function(t,e,n){n.r(e);var r=n(433),a=n(439),u=n(791),c=n(689),s=n(87),i=n(418),o=n(184);e.default=function(){var t=c.TH,e=(0,u.useState)(null),n=(0,a.Z)(e,2),p=n[0],f=n[1],h=(0,u.useState)(""),d=(0,a.Z)(h,2),v=d[0],l=d[1];return(0,u.useEffect)((function(){(0,i.Hg)().then((function(t){return f((0,r.Z)(t))})).catch((function(t){return l(t.message)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Tranding today"}),(0,o.jsx)("ul",{children:p&&p.map((function(e){var n=e.id,r=e.title;return(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"/movies/".concat(n),state:{from:t},children:(0,o.jsx)("p",{children:r})})},n)}))}),v&&(0,o.jsx)("p",{children:" Something went wrong, please try again."})]})}}}]);
//# sourceMappingURL=6.deb37041.chunk.js.map