(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),s=a.n(i),o=a(8),c=a(1);var m=function(){return r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))},l=a(17),u=a.n(l),p=a(30),v=a(10),d=a(11),y=a(13),E=a(12),g=a(31),h=a.n(g),b=a(4),f=a.n(b);a(60);function _(e){var t=e.year,a=e.title,n=e.summary,i=e.poster,s=e.genres;return r.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{year:t,title:a,summary:n,poster:i,genres:s}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:i,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"genres"},s.map((function(e,t){return r.a.createElement("li",{className:"movie__genres",key:t},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,140),"..."))))}_.prototype={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var N=_,j=(a(61),function(e){Object(y.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0},e.getMovies=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__test"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));var O=function(){return r.a.createElement("span",null,"About this page: I built it because I love movies.")},k=function(e){Object(y.a)(a,e);var t=Object(E.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0==t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);var q=function(){return r.a.createElement(o.a,null,r.a.createElement(m,null),r.a.createElement(c.a,{path:"/",exact:!0,component:j}),r.a.createElement(c.a,{path:"/about",component:O}),r.a.createElement(c.a,{path:"/movie-detail",component:k}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5b702b6f.chunk.js.map