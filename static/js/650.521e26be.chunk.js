"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[650],{1030:function(n,e,t){var i,r,o,a=t(168),s=t(5751),c=t(184),l=(0,s.iv)(i||(i=(0,a.Z)(["\n  max-width: 350px;\n  @media "," {\n    width: 200px;\n  }\n  @media "," {\n    width: 150px;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.mobile})),u=s.ZP.img(r||(r=(0,a.Z)(["\n  ","\n  height: auto;\n"])),l),d=s.ZP.div(o||(o=(0,a.Z)(["\n  ","\n  min-height: 300px;\n  height: 100%;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n  padding: 0 10px;\n"])),l);e.Z=function(n){var e=n.poster;return(0,c.jsx)(c.Fragment,{children:e?(0,c.jsx)(u,{src:"".concat("https://image.tmdb.org/t/p/w342").concat(e),alt:"poster"}):(0,c.jsx)(d,{children:"NOT AVAILABLE POSTER"})})}},7548:function(n,e,t){t.d(e,{Z:function(){return T}});var i,r=t(168),o=(t(2791),t(3504)),a=t(6871),s=t(6355),c=t(5751),l=t(184),u=c.ZP.button(i||(i=(0,r.Z)(["\n  color: #a20100;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 2rem;\n  background-color: transparent;\n  font-weight: bold;\n  z-index: 1;\n"])));var d,f,p,x=function(n){var e=n.like,t=n.onLike;return(0,l.jsx)(u,{onClick:t,children:e?(0,l.jsx)(s.$0H,{}):(0,l.jsx)(s.BgW,{})})},m=t(1030),v=t(1413),h=t(5987),g=t(8820),j=t(6412),Z=["title","originalTitle","year","rating"],b=c.ZP.div(d||(d=(0,r.Z)(["\n  visibility: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  padding: 0.5rem 1rem;\n  transition: all 0.3s linear;\n  transform: translateY(100%);\n"]))),k=c.ZP.div(f||(f=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .year {\n    font-size: 13px;\n  }\n"]))),y=c.ZP.p(p||(p=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  svg {\n    color: #f4c519;\n    margin-right: 3px;\n  }\n"])));var w,P=function(n){var e=n.title,t=n.originalTitle,i=n.year,r=n.rating,o=(0,h.Z)(n,Z);return(0,l.jsxs)(b,(0,v.Z)((0,v.Z)({},o),{},{children:[(0,l.jsx)("div",{children:(0,l.jsxs)(j.Z,{level:4,children:[e,e!==t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("br",{}),"(",t,")"]})]})}),(0,l.jsxs)(k,{children:[(0,l.jsx)("p",{className:"year",children:!isNaN(i)&&i}),0!==r&&(0,l.jsxs)(y,{children:[(0,l.jsx)(g.pHD,{}),(0,l.jsx)("span",{children:r})]})]})]}))},C=(t(1845),t(6535)),_=(0,c.ZP)(o.rU)(w||(w=(0,r.Z)(["\n  display: block;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  &:hover .MovieInfo {\n    visibility: visible;\n    transform: translateY(0);\n  }\n"]))),T=function(n){var e=n.movie,t=(0,a.TH)(),i=t.search,r=t.pathname,o=e.title,s=e.original_title,c=e.poster_path,u=e.id,d=e.vote_average,f=(0,C.U)(e),p=f.like,v=f.onLike;return(0,l.jsx)("li",{children:(0,l.jsxs)(_,{to:"/movie/".concat(u).concat(i).concat(i?"&":"?","from=").concat(r),children:[(0,l.jsx)(x,{like:p,onLike:v}),(0,l.jsx)(m.Z,{poster:c}),(0,l.jsx)(P,{title:o,originalTitle:s,year:parseInt(e.release_date),rating:d,className:"MovieInfo"})]})})}},9147:function(n,e,t){var i,r=t(168),o=(t(2791),t(7548)),a=t(5751),s=t(184),c=a.ZP.ul(i||(i=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: center;\n"])));e.Z=function(n){var e=n.movies;return(0,s.jsx)(c,{children:e.map((function(n){return(0,s.jsx)(o.Z,{movie:n},n.id)}))})}},6535:function(n,e,t){t.d(e,{U:function(){return a}});var i=t(8152),r=t(2791),o=t(1845),a=function(n){var e=(0,r.useContext)(o.Md),t=(0,r.useContext)(o.u8),a=t.addFavoriteMovie,s=t.removeFavoriteMovie,c=(0,r.useState)(!1),l=(0,i.Z)(c,2),u=l[0],d=l[1];return(0,r.useEffect)((function(){e.forEach((function(e){return e.id===n.id&&d(!0)}))}),[]),{like:u,onLike:function(e){e.preventDefault(),d(!u),u?s(n.id):a(n)}}}},5259:function(n,e,t){t.d(e,{W:function(){return r}});var i=t(6871),r=function(n,e){var t=(0,i.TH)().search,r=new URLSearchParams(t).get(n);return r||e}},8015:function(n,e,t){t.d(e,{v:function(){return r}});var i=t(2791),r=function(n){(0,i.useEffect)((function(){window.scrollTo({top:0})}),n)}},6650:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var i,r=t(8152),o=t(168),a=t(2791),s=t(6871),c=t(6412),l=t(3853),u=t(5751),d=t(184),f=u.ZP.div(i||(i=(0,o.Z)(["\n  position: relative;\n  margin-bottom: 3rem;\n  text-transform: capitalize;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg {\n    font-size: 2rem;\n    position: absolute;\n    left: 0;\n    z-index: 2;\n    cursor: pointer;\n  }\n"])));var p,x,m,v=function(n){var e=n.type,t=(0,s.s0)();return(0,d.jsxs)(f,{className:"movies__title",children:[(0,d.jsx)(l.YFh,{onClick:function(){return t("/")}}),(0,d.jsxs)(c.Z,{children:[e.replace("_"," ")," movies"]})]})},h=t(9147),g=t(6355),j=u.ZP.nav(p||(p=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n  gap: 1.3rem;\n"]))),Z=u.ZP.button(x||(x=(0,o.Z)(["\n  color: #fff;\n  background: #000;\n  padding: 0.7rem;\n  border-radius: 5px;\n  flex-basis: 2rem;\n  transition: all 0.3s ease-in-out;\n  &:hover {\n    background-color: ",";\n  }\n  &[disabled] {\n    cursor: auto;\n    background: rgba(0, 0, 0, 0.5);\n  }\n  &[aria-current] {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.skyBlue}),(function(n){return n.theme.color.skyBlue})),b=function(n){var e=n.total,t=n.limit,i=n.page,o=n.setPage,s=Math.ceil(e/t),c=(0,a.useRef)(5),l=(0,a.useState)(0),u=(0,r.Z)(l,2),f=u[0],p=u[1];return(0,a.useEffect)((function(){i>f+c.current?p(f+c.current):i===f&&p(f-c.current)}),[i]),(0,d.jsxs)(j,{children:[(0,d.jsx)(Z,{onClick:function(){return o(i-1)},disabled:1===i,children:(0,d.jsx)(g.bUI,{})}),Array(s).fill().slice(f,c.current+f).map((function(n,e){return(0,d.jsx)(Z,{onClick:function(){return o(e+f+1)},"aria-current":i===f+e+1?"page":null,children:e+f+1},e+1+f)})),(0,d.jsx)(Z,{onClick:function(){return o(i+1)},disabled:i===s,children:(0,d.jsx)(g.Dli,{})})]})},k=t(4701),y=t(5259),w=t(8015),P=u.ZP.main(m||(m=(0,o.Z)(["\n  width: 90vw;\n  padding: 2.5rem 0;\n"]))),C=function(){var n=(0,y.W)("page",1),e=(0,s.s0)(),t=(0,s.UO)().type,i=(0,a.useContext)(k.a).movies[t],o=(0,a.useState)(Number(n)),c=(0,r.Z)(o,2),l=c[0],u=c[1],f=12*(l-1);return(0,w.v)([l]),(0,a.useEffect)((function(){e("?page=".concat(l))}),[l]),(0,d.jsxs)(P,{children:[t&&(0,d.jsx)(v,{type:t}),i&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h.Z,{movies:i.slice(f,f+12)}),(0,d.jsx)(b,{total:i.length,limit:12,page:l,setPage:u})]})]})}}}]);
//# sourceMappingURL=650.521e26be.chunk.js.map