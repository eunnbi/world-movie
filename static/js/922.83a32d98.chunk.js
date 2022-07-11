"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[922],{1030:function(n,e,t){var i,r,o,a=t(168),s=t(5751),c=t(184),l=(0,s.iv)(i||(i=(0,a.Z)(["\n  max-width: 350px;\n  @media "," {\n    width: 200px;\n  }\n  @media "," {\n    width: 150px;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.mobile})),u=s.ZP.img(r||(r=(0,a.Z)(["\n  ","\n  height: auto;\n"])),l),d=s.ZP.div(o||(o=(0,a.Z)(["\n  ","\n  min-height: 300px;\n  height: 100%;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n  padding: 0 10px;\n"])),l);e.Z=function(n){var e=n.poster;return(0,c.jsx)(c.Fragment,{children:e?(0,c.jsx)(u,{src:"".concat("https://image.tmdb.org/t/p/w342").concat(e),alt:"poster"}):(0,c.jsx)(d,{children:"NOT AVAILABLE POSTER"})})}},7548:function(n,e,t){t.d(e,{Z:function(){return _}});var i,r=t(168),o=(t(2791),t(3504)),a=t(6871),s=t(6355),c=t(5751),l=t(184),u=c.ZP.button(i||(i=(0,r.Z)(["\n  color: #a20100;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 2rem;\n  background-color: transparent;\n  font-weight: bold;\n  z-index: 1;\n"])));var d,f,p,v=function(n){var e=n.like,t=n.onLike;return(0,l.jsx)(u,{onClick:t,children:e?(0,l.jsx)(s.$0H,{}):(0,l.jsx)(s.BgW,{})})},x=t(1030),h=t(1413),m=t(5987),g=t(8820),b=t(6412),j=["title","originalTitle","year","rating"],Z=c.ZP.div(d||(d=(0,r.Z)(["\n  visibility: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  padding: 0.5rem 1rem;\n  transition: all 0.3s linear;\n  transform: translateY(100%);\n"]))),k=c.ZP.div(f||(f=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .year {\n    font-size: 13px;\n  }\n"]))),w=c.ZP.p(p||(p=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  svg {\n    color: #f4c519;\n    margin-right: 3px;\n  }\n"])));var y,P=function(n){var e=n.title,t=n.originalTitle,i=n.year,r=n.rating,o=(0,m.Z)(n,j);return(0,l.jsxs)(Z,(0,h.Z)((0,h.Z)({},o),{},{children:[(0,l.jsx)("div",{children:(0,l.jsxs)(b.Z,{level:4,children:[e,e!==t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("br",{}),"(",t,")"]})]})}),(0,l.jsxs)(k,{children:[(0,l.jsx)("p",{className:"year",children:!isNaN(i)&&i}),0!==r&&(0,l.jsxs)(w,{children:[(0,l.jsx)(g.pHD,{}),(0,l.jsx)("span",{children:r})]})]})]}))},T=(t(1845),t(6535)),O=(0,c.ZP)(o.rU)(y||(y=(0,r.Z)(["\n  display: block;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  &:hover .MovieInfo {\n    visibility: visible;\n    transform: translateY(0);\n  }\n"]))),_=function(n){var e=n.movie,t=(0,a.TH)(),i=t.search,r=t.pathname,o=e.title,s=e.original_title,c=e.poster_path,u=e.id,d=e.vote_average,f=(0,T.U)(e),p=f.like,h=f.onLike;return(0,l.jsx)("li",{children:(0,l.jsxs)(O,{to:"/movie/".concat(u).concat(i).concat(i?"&":"?","from=").concat(r),children:[(0,l.jsx)(v,{like:p,onLike:h}),(0,l.jsx)(x.Z,{poster:c}),(0,l.jsx)(P,{title:o,originalTitle:s,year:parseInt(e.release_date),rating:d,className:"MovieInfo"})]})})}},4717:function(n,e,t){t.d(e,{OT:function(){return i.O},vO:function(){return r.v}});t(6535);var i=t(4843),r=t(8015)},6535:function(n,e,t){t.d(e,{U:function(){return a}});var i=t(8152),r=t(2791),o=t(1845),a=function(n){var e=(0,r.useContext)(o.Md),t=(0,r.useContext)(o.u8),a=t.addFavoriteMovie,s=t.removeFavoriteMovie,c=(0,r.useState)(!1),l=(0,i.Z)(c,2),u=l[0],d=l[1];return(0,r.useEffect)((function(){e.forEach((function(e){return e.id===n.id&&d(!0)}))}),[]),{like:u,onLike:function(e){e.preventDefault(),d(!u),u?s(n.id):a(n)}}}},8015:function(n,e,t){t.d(e,{v:function(){return r}});var i=t(2791),r=function(n){(0,i.useEffect)((function(){window.scrollTo({top:0})}),n)}},9922:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i,r=t(2791),o=t(2563),a=t(168),s=t(6412),c=t(3504),l=t(6355),u=t(5751),d=t(184),f=(0,u.ZP)(c.rU)(i||(i=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  h1 {\n    margin-right: 10px;\n    text-transform: uppercase;\n  }\n"])));var p,v=function(n){var e=n.path,t=n.title;return(0,d.jsxs)(f,{to:e,children:[(0,d.jsx)(s.Z,{children:t}),(0,d.jsx)(l.Dli,{})]})},x=t(7548),h=u.ZP.ul(p||(p=(0,a.Z)(["\n  display: flex;\n  gap: 1rem;\n  overflow-x: scroll;\n  padding-bottom: 1.5rem;\n  &::-webkit-scrollbar {\n    width: 6px;\n    height: 0.5rem;\n    display: block;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    transition: all 0.3s ease-in-out;\n    &:active {\n      background-color: rgba(0, 0, 0, 0.8);\n    }\n  }\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n"])));var m=function(n){var e=n.movies;return(0,d.jsx)(h,{children:e.map((function(n,e){return(0,d.jsx)(x.Z,{movie:n},e)}))})},g=t(4701),b=t(4717),j=function(){(0,b.vO)([]);var n=(0,r.useContext)(g.a),e=n.loading,t=n.movies;return e?(0,d.jsx)(o.Z,{}):(0,d.jsx)("main",{children:t&&Object.entries(t).map((function(n,e){return(0,d.jsxs)("section",{children:[(0,d.jsx)(v,{title:n[0].replace("_"," "),path:"/movies/".concat(n[0],"?page=1")}),(0,d.jsx)(m,{movies:n[1].slice(0,20)})]},e)}))})}}}]);
//# sourceMappingURL=922.83a32d98.chunk.js.map