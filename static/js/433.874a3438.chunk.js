"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[433],{1030:function(n,e,a){var i,s,_,m=a(168),o=a(5751),l=a(184),r=(0,o.iv)(i||(i=(0,m.Z)(["\n  width: auto;\n  @media "," {\n    width: 200px;\n  }\n  @media "," {\n    width: 150px;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.mobile})),t=o.ZP.img(s||(s=(0,m.Z)(["\n  ","\n  height: auto;\n"])),r),h=o.ZP.div(_||(_=(0,m.Z)(["\n  ","\n  min-height: 300px;\n  height: 100%;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n  padding: 0 10px;\n  @media "," {\n    min-height: 225px;\n  }\n"])),r,(function(n){return n.theme.device.mobile}));e.Z=function(n){var e=n.poster;return(0,l.jsx)(l.Fragment,{children:e?(0,l.jsx)(t,{src:"".concat("https://image.tmdb.org/t/p/w342").concat(e),alt:"poster"}):(0,l.jsx)(h,{children:"NOT AVAILABLE POSTER"})})}},4717:function(n,e,a){a.d(e,{OT:function(){return i.O},vO:function(){return s.v}});a(6535);var i=a(4843),s=a(8015)},6535:function(n,e,a){a.d(e,{U:function(){return m}});var i=a(8152),s=a(2791),_=a(1845),m=function(n){var e=(0,s.useContext)(_.Md),a=(0,s.useContext)(_.u8),m=a.addFavoriteMovie,o=a.removeFavoriteMovie,l=(0,s.useState)(!1),r=(0,i.Z)(l,2),t=r[0],h=r[1];return(0,s.useEffect)((function(){e.forEach((function(e){return e.id===n.id&&h(!0)}))}),[]),{like:t,onLike:function(e){e.preventDefault(),h(!t),t?o(n.id):m(n)}}}},5259:function(n,e,a){a.d(e,{W:function(){return s}});var i=a(6871),s=function(n,e){var a=(0,i.TH)().search,s=new URLSearchParams(a).get(n);return s||e}},8015:function(n,e,a){a.d(e,{v:function(){return s}});var i=a(2791),s=function(n){(0,i.useEffect)((function(){window.scrollTo({top:0})}),n)}},7433:function(n,e,a){a.r(e),a.d(e,{default:function(){return rn}});var i,s=a(8152),_=a(168),m=a(6871),o=a(1933),l=a(2563),r=a(1030),t=a(6412),h=a(5259),g=a(3853),u=a(5751),c=a(184),d=u.ZP.button(i||(i=(0,_.Z)(["\n  color: #fff;\n  background-color: ",";\n  text-transform: capitalize;\n  padding: 0.3rem;\n  border-radius: 5px;\n  margin: 2rem 0;\n  transition: all 0.3s ease-in-out;\n  svg {\n    font-size: 1.3rem;\n  }\n"])),(function(n){return n.theme.color.skyBlue}));var f,p,v=function(){var n=(0,m.s0)(),e=(0,h.W)("from"),a=(0,h.W)("page"),i=(0,h.W)("keyword"),s=e?"".concat(e).concat(a?"?page=".concat(a):i?"?keyword=".concat(i):""):-1;return(0,c.jsx)(d,{onClick:function(){return n(s)},children:(0,c.jsx)(g.YFh,{})})},x=u.ZP.ul(f||(f=(0,_.Z)(["\n  display: flex;\n  margin-bottom: 1.8rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n"]))),k=u.ZP.li(p||(p=(0,_.Z)(["\n  background-color: #fff;\n  color: ",";\n  padding: 0.3rem 0.6rem;\n  border-radius: 5px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);\n"])),(function(n){return n.theme.color.gray}));var b,w,y,j,Z,S=function(n){var e=n.genres;return 0!==e.length?(0,c.jsx)(x,{children:e.map((function(n,e){return(0,c.jsx)(k,{children:n.name},e)}))}):null},P=a(2791),z=a(753),C=u.ZP.a(b||(b=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: bold;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),T=u.ZP.img(w||(w=(0,_.Z)(["\n  width: 2rem;\n  height: 2rem;\n"]))),L=function(n){var e=n.videos,a=(0,P.useState)({link:"",type:""}),i=(0,s.Z)(a,2),_=i[0],m=i[1];return(0,P.useEffect)((function(){if(e){var n=function(n){for(var e="",a="",i=0;i<n.length;i++)if("youtube"===n[i].site.toLowerCase()&&(e="".concat("https://www.youtube.com/watch","?v=").concat(n[i].key),a=n[i].type,"trailer"===n[i].type.toLowerCase()))return{link:e,type:a};return{link:e,type:a}}(e);m(n)}}),[e]),""!==_.link?(0,c.jsxs)(C,{href:_.link,target:"_blank",rel:"noreferrer",children:[(0,c.jsx)(T,{src:z}),"Let's Go to See ",_.type]}):null},B=a(8820),K=u.ZP.div(y||(y=(0,_.Z)(["\n  margin-bottom: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n  letter-spacing: 1px;\n  p {\n    font-weight: 500;\n  }\n"]))),M=u.ZP.p(j||(j=(0,_.Z)(["\n  opacity: 0.9;\n  font-size: 1.2rem;\n  line-height: 2.3rem;\n  margin-bottom: 1rem;\n"]))),N=u.ZP.p(Z||(Z=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  svg {\n    color: #f4c519;\n  }\n"])));var A,F=function(n){return O.find((function(e){return e.iso_639_1===n}))},O=[{iso_639_1:"bi",english_name:"Bislama",name:""},{iso_639_1:"cs",english_name:"Czech",name:"\u010cesk\xfd"},{iso_639_1:"ba",english_name:"Bashkir",name:""},{iso_639_1:"ae",english_name:"Avestan",name:""},{iso_639_1:"av",english_name:"Avaric",name:""},{iso_639_1:"de",english_name:"German",name:"Deutsch"},{iso_639_1:"mt",english_name:"Maltese",name:"Malti"},{iso_639_1:"om",english_name:"Oromo",name:""},{iso_639_1:"rm",english_name:"Raeto-Romance",name:""},{iso_639_1:"so",english_name:"Somali",name:"Somali"},{iso_639_1:"ts",english_name:"Tsonga",name:""},{iso_639_1:"vi",english_name:"Vietnamese",name:"Ti\u1ebfng Vi\u1ec7t"},{iso_639_1:"gn",english_name:"Guarani",name:""},{iso_639_1:"ig",english_name:"Igbo",name:""},{iso_639_1:"it",english_name:"Italian",name:"Italiano"},{iso_639_1:"ki",english_name:"Kikuyu",name:""},{iso_639_1:"ku",english_name:"Kurdish",name:""},{iso_639_1:"la",english_name:"Latin",name:"Latin"},{iso_639_1:"ln",english_name:"Lingala",name:""},{iso_639_1:"lb",english_name:"Letzeburgesch",name:""},{iso_639_1:"ny",english_name:"Chichewa; Nyanja",name:""},{iso_639_1:"pl",english_name:"Polish",name:"Polski"},{iso_639_1:"si",english_name:"Sinhalese",name:"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"},{iso_639_1:"to",english_name:"Tonga",name:""},{iso_639_1:"az",english_name:"Azerbaijani",name:"Az\u0259rbaycan"},{iso_639_1:"ce",english_name:"Chechen",name:""},{iso_639_1:"cu",english_name:"Slavic",name:""},{iso_639_1:"da",english_name:"Danish",name:"Dansk"},{iso_639_1:"hz",english_name:"Herero",name:""},{iso_639_1:"ie",english_name:"Interlingue",name:""},{iso_639_1:"rw",english_name:"Kinyarwanda",name:"Kinyarwanda"},{iso_639_1:"mi",english_name:"Maori",name:""},{iso_639_1:"no",english_name:"Norwegian",name:"Norsk"},{iso_639_1:"pi",english_name:"Pali",name:""},{iso_639_1:"sk",english_name:"Slovak",name:"Sloven\u010dina"},{iso_639_1:"se",english_name:"Northern Sami",name:""},{iso_639_1:"sm",english_name:"Samoan",name:""},{iso_639_1:"uk",english_name:"Ukrainian",name:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0438\u0439"},{iso_639_1:"en",english_name:"English",name:"English"},{iso_639_1:"ay",english_name:"Aymara",name:""},{iso_639_1:"ca",english_name:"Catalan",name:"Catal\xe0"},{iso_639_1:"eo",english_name:"Esperanto",name:"Esperanto"},{iso_639_1:"ha",english_name:"Hausa",name:"Hausa"},{iso_639_1:"ho",english_name:"Hiri Motu",name:""},{iso_639_1:"hu",english_name:"Hungarian",name:"Magyar"},{iso_639_1:"io",english_name:"Ido",name:""},{iso_639_1:"ii",english_name:"Yi",name:""},{iso_639_1:"kn",english_name:"Kannada",name:"?????"},{iso_639_1:"kv",english_name:"Komi",name:""},{iso_639_1:"li",english_name:"Limburgish",name:""},{iso_639_1:"oj",english_name:"Ojibwa",name:""},{iso_639_1:"ru",english_name:"Russian",name:"P\u0443\u0441\u0441\u043a\u0438\u0439"},{iso_639_1:"sr",english_name:"Serbian",name:"Srpski"},{iso_639_1:"sv",english_name:"Swedish",name:"svenska"},{iso_639_1:"ty",english_name:"Tahitian",name:""},{iso_639_1:"zu",english_name:"Zulu",name:"isiZulu"},{iso_639_1:"ka",english_name:"Georgian",name:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"},{iso_639_1:"ch",english_name:"Chamorro",name:"Finu' Chamorro"},{iso_639_1:"be",english_name:"Belarusian",name:"\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f \u043c\u043e\u0432\u0430"},{iso_639_1:"br",english_name:"Breton",name:""},{iso_639_1:"kw",english_name:"Cornish",name:""},{iso_639_1:"fi",english_name:"Finnish",name:"suomi"},{iso_639_1:"sh",english_name:"Serbo-Croatian",name:""},{iso_639_1:"nn",english_name:"Norwegian Nynorsk",name:""},{iso_639_1:"tt",english_name:"Tatar",name:""},{iso_639_1:"tg",english_name:"Tajik",name:""},{iso_639_1:"vo",english_name:"Volap\xfck",name:""},{iso_639_1:"ps",english_name:"Pushto",name:"\u067e\u069a\u062a\u0648"},{iso_639_1:"mk",english_name:"Macedonian",name:""},{iso_639_1:"fr",english_name:"French",name:"Fran\xe7ais"},{iso_639_1:"bm",english_name:"Bambara",name:"Bamanankan"},{iso_639_1:"eu",english_name:"Basque",name:"euskera"},{iso_639_1:"fj",english_name:"Fijian",name:""},{iso_639_1:"id",english_name:"Indonesian",name:"Bahasa indonesia"},{iso_639_1:"mg",english_name:"Malagasy",name:""},{iso_639_1:"na",english_name:"Nauru",name:""},{iso_639_1:"xx",english_name:"No Language",name:"No Language"},{iso_639_1:"qu",english_name:"Quechua",name:""},{iso_639_1:"sq",english_name:"Albanian",name:"shqip"},{iso_639_1:"ti",english_name:"Tigrinya",name:""},{iso_639_1:"tw",english_name:"Twi",name:""},{iso_639_1:"wa",english_name:"Walloon",name:""},{iso_639_1:"ab",english_name:"Abkhazian",name:""},{iso_639_1:"bs",english_name:"Bosnian",name:"Bosanski"},{iso_639_1:"af",english_name:"Afrikaans",name:"Afrikaans"},{iso_639_1:"an",english_name:"Aragonese",name:""},{iso_639_1:"fy",english_name:"Frisian",name:""},{iso_639_1:"gu",english_name:"Gujarati",name:""},{iso_639_1:"ik",english_name:"Inupiaq",name:""},{iso_639_1:"ja",english_name:"Japanese",name:"\u65e5\u672c\u8a9e"},{iso_639_1:"ko",english_name:"Korean",name:"\ud55c\uad6d\uc5b4/\uc870\uc120\ub9d0"},{iso_639_1:"lg",english_name:"Ganda",name:""},{iso_639_1:"nl",english_name:"Dutch",name:"Nederlands"},{iso_639_1:"os",english_name:"Ossetian; Ossetic",name:""},{iso_639_1:"el",english_name:"Greek",name:"\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"},{iso_639_1:"bn",english_name:"Bengali",name:"\u09ac\u09be\u0982\u09b2\u09be"},{iso_639_1:"cr",english_name:"Cree",name:""},{iso_639_1:"km",english_name:"Khmer",name:""},{iso_639_1:"lo",english_name:"Lao",name:""},{iso_639_1:"nd",english_name:"Ndebele",name:""},{iso_639_1:"ne",english_name:"Nepali",name:""},{iso_639_1:"sc",english_name:"Sardinian",name:""},{iso_639_1:"sw",english_name:"Swahili",name:"Kiswahili"},{iso_639_1:"tl",english_name:"Tagalog",name:""},{iso_639_1:"ur",english_name:"Urdu",name:"\u0627\u0631\u062f\u0648"},{iso_639_1:"ee",english_name:"Ewe",name:"\xc8\u028begbe"},{iso_639_1:"aa",english_name:"Afar",name:""},{iso_639_1:"co",english_name:"Corsican",name:""},{iso_639_1:"et",english_name:"Estonian",name:"Eesti"},{iso_639_1:"is",english_name:"Icelandic",name:"\xcdslenska"},{iso_639_1:"ks",english_name:"Kashmiri",name:""},{iso_639_1:"kr",english_name:"Kanuri",name:""},{iso_639_1:"ky",english_name:"Kirghiz",name:"??????"},{iso_639_1:"kj",english_name:"Kuanyama",name:""},{iso_639_1:"nr",english_name:"Ndebele",name:""},{iso_639_1:"or",english_name:"Oriya",name:""},{iso_639_1:"wo",english_name:"Wolof",name:"Wolof"},{iso_639_1:"za",english_name:"Zhuang",name:""},{iso_639_1:"ar",english_name:"Arabic",name:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"},{iso_639_1:"cv",english_name:"Chuvash",name:""},{iso_639_1:"fo",english_name:"Faroese",name:""},{iso_639_1:"hr",english_name:"Croatian",name:"Hrvatski"},{iso_639_1:"ms",english_name:"Malay",name:"Bahasa melayu"},{iso_639_1:"nb",english_name:"Norwegian Bokm\xe5l",name:"Bokm\xe5l"},{iso_639_1:"rn",english_name:"Rundi",name:"Kirundi"},{iso_639_1:"sn",english_name:"Shona",name:""},{iso_639_1:"st",english_name:"Sotho",name:""},{iso_639_1:"tr",english_name:"Turkish",name:"T\xfcrk\xe7e"},{iso_639_1:"am",english_name:"Amharic",name:""},{iso_639_1:"fa",english_name:"Persian",name:"\u0641\u0627\u0631\u0633\u06cc"},{iso_639_1:"hy",english_name:"Armenian",name:""},{iso_639_1:"pa",english_name:"Punjabi",name:"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"},{iso_639_1:"as",english_name:"Assamese",name:""},{iso_639_1:"ia",english_name:"Interlingua",name:""},{iso_639_1:"lv",english_name:"Latvian",name:"Latvie\u0161u"},{iso_639_1:"lu",english_name:"Luba-Katanga",name:""},{iso_639_1:"mr",english_name:"Marathi",name:""},{iso_639_1:"mn",english_name:"Mongolian",name:""},{iso_639_1:"pt",english_name:"Portuguese",name:"Portugu\xeas"},{iso_639_1:"th",english_name:"Thai",name:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"},{iso_639_1:"tk",english_name:"Turkmen",name:""},{iso_639_1:"ve",english_name:"Venda",name:""},{iso_639_1:"dv",english_name:"Divehi",name:""},{iso_639_1:"gv",english_name:"Manx",name:""},{iso_639_1:"kl",english_name:"Kalaallisut",name:""},{iso_639_1:"kk",english_name:"Kazakh",name:"\u049b\u0430\u0437\u0430\u049b"},{iso_639_1:"lt",english_name:"Lithuanian",name:"Lietuvi\u0173"},{iso_639_1:"my",english_name:"Burmese",name:""},{iso_639_1:"sl",english_name:"Slovenian",name:"Sloven\u0161\u010dina"},{iso_639_1:"sd",english_name:"Sindhi",name:""},{iso_639_1:"cn",english_name:"Cantonese",name:"\u5e7f\u5dde\u8bdd / \u5ee3\u5dde\u8a71"},{iso_639_1:"hi",english_name:"Hindi",name:"\u0939\u093f\u0928\u094d\u0926\u0940"},{iso_639_1:"cy",english_name:"Welsh",name:"Cymraeg"},{iso_639_1:"ht",english_name:"Haitian; Haitian Creole",name:""},{iso_639_1:"iu",english_name:"Inuktitut",name:""},{iso_639_1:"jv",english_name:"Javanese",name:""},{iso_639_1:"mh",english_name:"Marshall",name:""},{iso_639_1:"sa",english_name:"Sanskrit",name:""},{iso_639_1:"ss",english_name:"Swati",name:""},{iso_639_1:"te",english_name:"Telugu",name:"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"},{iso_639_1:"kg",english_name:"Kongo",name:""},{iso_639_1:"ml",english_name:"Malayalam",name:""},{iso_639_1:"uz",english_name:"Uzbek",name:"ozbek"},{iso_639_1:"sg",english_name:"Sango",name:""},{iso_639_1:"xh",english_name:"Xhosa",name:""},{iso_639_1:"es",english_name:"Spanish",name:"Espa\xf1ol"},{iso_639_1:"su",english_name:"Sundanese",name:""},{iso_639_1:"ug",english_name:"Uighur",name:""},{iso_639_1:"yi",english_name:"Yiddish",name:""},{iso_639_1:"yo",english_name:"Yoruba",name:"\xc8d\xe8 Yor\xf9b\xe1"},{iso_639_1:"zh",english_name:"Mandarin",name:"\u666e\u901a\u8bdd"},{iso_639_1:"he",english_name:"Hebrew",name:"\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"},{iso_639_1:"bo",english_name:"Tibetan",name:""},{iso_639_1:"ak",english_name:"Akan",name:""},{iso_639_1:"mo",english_name:"Moldavian",name:""},{iso_639_1:"ng",english_name:"Ndonga",name:""},{iso_639_1:"dz",english_name:"Dzongkha",name:""},{iso_639_1:"ff",english_name:"Fulah",name:"Fulfulde"},{iso_639_1:"gd",english_name:"Gaelic",name:""},{iso_639_1:"ga",english_name:"Irish",name:"Gaeilge"},{iso_639_1:"gl",english_name:"Galician",name:"Galego"},{iso_639_1:"nv",english_name:"Navajo",name:""},{iso_639_1:"oc",english_name:"Occitan",name:""},{iso_639_1:"ro",english_name:"Romanian",name:"Rom\xe2n\u0103"},{iso_639_1:"ta",english_name:"Tamil",name:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"},{iso_639_1:"tn",english_name:"Tswana",name:""},{iso_639_1:"bg",english_name:"Bulgarian",name:"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a"}],E=function(n){var e=n.details,a=e.title,i=e.release_date,s=e.original_title,_=e.original_language,m=e.runtime,o=e.genres,l=e.overview,r=e.vote_average,h=e.videos,g=parseInt(i);return(0,c.jsxs)("article",{children:[(0,c.jsxs)(K,{children:[(0,c.jsx)(t.Z,{children:a}),a!==s&&(0,c.jsx)(t.Z,{level:3,children:s}),(0,c.jsx)("p",{children:!isNaN(g)&&g}),(0,c.jsxs)("p",{children:[m," Min | ",F(_).english_name]}),(0,c.jsxs)(N,{children:[(0,c.jsx)(B.pHD,{}),(0,c.jsx)("span",{children:r})]})]}),(0,c.jsx)(S,{genres:o}),(0,c.jsx)(M,{children:l}),(0,c.jsx)(L,{videos:h.results})]})},H=a(828),I=u.ZP.p(A||(A=(0,_.Z)(["\n  font-size: 1.8rem;\n  color: ",";\n  text-transform: capitalize;\n  display: flex;\n  align-items: center;\n  margin-bottom: 2rem;\n  svg {\n    margin: 3px 0 0 10px;\n  }\n"])),(function(n){return n.theme.color.blueBlack}));var G,R,W,q,D=function(){return(0,c.jsxs)(I,{children:["no reviews ",(0,c.jsx)(H.vK4,{})]})},U=a(4717),V=u.ZP.li(G||(G=(0,_.Z)(["\n  background-color: #fff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 2.5rem;\n  border-radius: 5px;\n  padding: 0.9rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  .username {\n    text-align: right;\n  }\n"]))),Y=u.ZP.p(R||(R=(0,_.Z)(["\n  opacity: 0.9;\n  line-height: 1.5;\n  a {\n    text-decoration: underline;\n  }\n  ","\n"])),(function(n){return n.close&&(0,u.iv)(W||(W=(0,_.Z)(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      white-space: normal;\n      -webkit-box-orient: vertical;\n    "])))})),J=u.ZP.p(q||(q=(0,_.Z)(["\n  color: ",";\n  text-transform: capitalize;\n  cursor: pointer;\n"])),(function(n){return n.theme.color.skyBlue}));var Q=function(n){var e=n.text,a=n.username,i=(0,U.OT)(!1),_=(0,s.Z)(i,2),m=_[0],o=_[1],l=(0,P.useState)(!1),r=(0,s.Z)(l,2),t=r[0],h=r[1],g=(0,P.useRef)();return(0,P.useEffect)((function(){g.current.innerHTML=e,g.current.scrollHeight>72&&h(!0)}),[]),(0,c.jsxs)(V,{children:[(0,c.jsx)(Y,{close:!m,ref:g}),t&&(0,c.jsx)(J,{onClick:o,children:m?"show less":"read more"}),(0,c.jsx)("p",{className:"username",children:a})]})};var X,$=function(n){var e=n.reviews;return(0,c.jsx)("ul",{children:e.map((function(n,e){return(0,c.jsx)(Q,{text:n.content,username:n.author_details.username},e)}))})},nn=a(6856),en=u.ZP.div(X||(X=(0,_.Z)(["\n  color: ",";\n  display: flex;\n  align-items: center;\n  font-size: 1.8rem;\n  letter-spacing: 1px;\n  margin-bottom: 2rem;\n  border-bottom: 1px solid ",";\n  padding-bottom: 0.6rem;\n  svg {\n    margin: 5px 0 0 8px;\n  }\n"])),(function(n){return n.theme.color.blueBlack}),(function(n){return n.theme.color.gray}));var an,sn,_n=function(n){var e=n.reviews;return(0,c.jsxs)("article",{children:[(0,c.jsxs)(en,{children:[(0,c.jsx)(t.Z,{children:"Reviews"}),(0,c.jsx)(nn.I8D,{})]}),0===e.length?(0,c.jsx)(D,{}):(0,c.jsx)($,{reviews:e})]})},mn=a(8685),on=u.ZP.main(an||(an=(0,_.Z)(["\n  margin-top: 0;\n  padding-top: 0;\n"]))),ln=u.ZP.div(sn||(sn=(0,_.Z)(["\n  display: flex;\n  gap: 2rem;\n  margin-bottom: 6rem;\n  @media screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n"]))),rn=function(){var n=(0,m.UO)().id,e=(0,o.useQueries)([{queryKey:["details",n],queryFn:mn.s_,refetchOnWindowFocus:!1},{queryKey:["reviews",n],queryFn:mn.Jh,refetchOnWindowFocus:!1}]),a=(0,s.Z)(e,2),i=a[0],_=i.isLoading,t=i.data,h=a[1],g=h.isLoading,u=h.data,d=_||g;return(0,U.vO)([]),d?(0,c.jsx)(l.Z,{}):(0,c.jsxs)(on,{children:[(0,c.jsx)(v,{}),(0,c.jsxs)(ln,{children:[(0,c.jsx)(r.Z,{poster:t.poster_path}),(0,c.jsx)(E,{details:t})]}),(0,c.jsx)(_n,{reviews:u})]})}},753:function(n,e,a){n.exports=a.p+"static/media/youtube-icon.6f9e32ba8209c71da075.png"}}]);
//# sourceMappingURL=433.874a3438.chunk.js.map