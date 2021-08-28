(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);m&&m(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({detail:"detail"}[e]||e)+"."+{detail:"97badc99"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={detail:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({detail:"detail"}[e]||e)+"."+{detail:"50ad5244"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],m.parentNode.removeChild(m),n(i)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/movie-app/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0fae":function(e,t,n){"use strict";n("93d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("034f"),n("2877")),u={},s=Object(i["a"])(u,o,a,!1,null,null,null),c=s.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("MovieList",{attrs:{title:"popular",movie:e.$store.state.movie.popularMovie}}),n("MovieList",{attrs:{title:"Now-playing",movie:e.$store.state.movie.nowPlayingMovie}}),n("MovieList",{attrs:{title:"Upcoming",movie:e.$store.state.movie.upComingMovie}})],1)},m=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"movie"},[n("h1",[e._v(e._s(e.title))]),n("ul",{staticClass:"movie-list"},e._l(e.movie,(function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:"/detail/"+t.id}},[n("img",{attrs:{src:e.getImage(t.poster_path),alt:""}}),n("p",[e._v(e._s(t.title))]),n("p",[e._v(e._s(t.release_date))])])],1)})),0)])},v=[],d={props:{title:String,movie:Array},watch:{movie:function(e,t){console.log(e,t)}},methods:{getImage:function(e){return"https://image.tmdb.org/t/p/w300".concat(e)}}},g=d,h=(n("0fae"),Object(i["a"])(g,f,v,!1,null,"315ab728",null)),_=h.exports,b={name:"Movie",components:{MovieList:_},mounted:function(){this.getInitMovie()},methods:{getInitMovie:function(){this.$store.dispatch("movie/getPopularMovie"),this.$store.dispatch("movie/getNowPlayingMovie"),this.$store.dispatch("movie/getUpcomingMovie")}}},w=b,y=Object(i["a"])(w,p,m,!1,null,null,null),M=y.exports;r["a"].use(l["a"]);var O=[{path:"/",name:"Movie",component:M},{path:"/detail/:movie_id",name:"Detail",component:function(){return n.e("detail").then(n.bind(null,"c84b"))}}],E=new l["a"]({mode:"history",base:"/movie-app/",routes:O}),P=E,I=n("2f62"),S=n("1da1"),j=(n("96cf"),n("bc3a")),x=n.n(j),T=x.a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b30bf4513060923037b45f2402075645",language:"ko-KR"}}),k={namespaced:!0,state:{popualarMovie:[],nowPlayingMovie:[],upComingMovie:[],movieDetail:[]},mutations:{SET_POPULAR_MOVIE:function(e,t){e.popularMovie=t},SET_NOW_PLAYING_MOVIE:function(e,t){e.nowPlayingMovie=t},SET_UPCOMING_MOVIE:function(e,t){e.upComingMovie=t},SET_DETAIL_MOVIE:function(e,t){e.movieDetail=t}},actions:{getPopularMovie:function(e){return Object(S["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,T("/movie/popular",{params:{page:"1"}});case 3:r=t.sent,200===r.status&&(console.log(r.data.results),n("SET_POPULAR_MOVIE",r.data.results));case 5:case"end":return t.stop()}}),t)})))()},getNowPlayingMovie:function(e){return Object(S["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,T("/movie/now_playing");case 3:r=t.sent,200===r.status&&n("SET_NOW_PLAYING_MOVIE",r.data.results);case 5:case"end":return t.stop()}}),t)})))()},getUpcomingMovie:function(e){return Object(S["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,T("/movie/upcoming");case 3:r=t.sent,200===r.status&&n("SET_UPCOMING_MOVIE",r.data.results);case 5:case"end":return t.stop()}}),t)})))()},getDetailMovie:function(e,t){return Object(S["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,T("/movie/"+t,{params:{append_to_response:"videos"}});case 3:o=n.sent,console.log(o),200===o.status&&r("SET_DETAIL_MOVIE",o.data);case 6:case"end":return n.stop()}}),n)})))()}}};r["a"].use(I["a"]);var L=new I["a"].Store({modules:{movie:k}});r["a"].config.productionTip=!1,new r["a"]({router:P,store:L,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){},"93d7":function(e,t,n){}});
//# sourceMappingURL=app.abcb4a95.js.map