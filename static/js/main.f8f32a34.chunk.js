(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{146:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(75),l=a.n(r),o=(a(86),a(20)),c=a(76),s=a.n(c),m=a(4),u=a(43),d="\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27",h="About",p="\u0e2a\u0e01\u0e34\u0e25",E="Skill",f="\u0e01\u0e32\u0e23\u0e28\u0e36\u0e01\u0e29\u0e32",g="Education",b="\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c",v="Experiences",k="\u0e1c\u0e39\u0e49\u0e23\u0e31\u0e1a\u0e23\u0e2d\u0e07",w="Reference",y=(a(146),a(41)),S=a(19),C=(window.innerWidth,function(e){for(var t=e.isDarkMode,a=e.setIsDarkMode,r=e.isEnglish,l=e.setIsEnglish,c=[{title:r?h:d,index:0,path:"/profile/about",icon:i.a.createElement(y.b,{size:24})},{title:r?E:p,index:1,path:"/profile/skill",icon:i.a.createElement(S.d,{size:24})},{title:r?g:f,index:2,path:"/profile/education",icon:i.a.createElement(S.b,{size:24})},{title:r?v:b,index:3,path:"/profile/experiences",icon:i.a.createElement(S.a,{size:24})},{title:r?w:k,index:4,path:"/profile/reference",icon:i.a.createElement(S.e,{size:24})}],C=Object(m.g)(),I=0,N=0,P=c;N<P.length;N++){var z=P[N];C.pathname===z.path&&(I=z.index)}var x=Object(n.useState)(I),A=Object(o.a)(x,2),j=A[0],D=A[1],M=t?"#f2f2f2":"#222";return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"left-navbar"},i.a.createElement("img",{src:"https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.0-9/118520247_3322103017883628_7802174489436117407_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeHdCge8IFIBSXzkbz6-n_ABx6HMRBuM14THocxEG4zXhLyFzJpIDdxeU8z0KHa3s-DzUdM0X6hj566NC_v5E0IJ&_nc_ohc=aldlewPZgrYAX99eYPW&_nc_ht=scontent.fbkk2-8.fna&oh=5467a11f1a60b5f4cb31ba09430e9465&oe=5FB1D4AD",alt:"Profile"})),i.a.createElement("div",{className:"center-navbar"},i.a.createElement("ul",null,c.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(u.b,{style:{color:M,fontWeight:j===e.index?"bold":"200"},onClick:function(){return D(e.index)},to:e.path},i.a.createElement("div",{className:"text-icon"},e.title),i.a.createElement("div",{className:"icon"},e.icon)))})))),i.a.createElement("div",{className:"right-navbar"},i.a.createElement("img",{className:"language",src:r?"https://www.flaticon.com/svg/static/icons/svg/323/323310.svg":"https://www.flaticon.com/svg/static/icons/svg/323/323281.svg",onClick:function(){return l(!r)}}),i.a.createElement(s.a,{onChange:a,checked:t,size:50})))}),I=a(13),N=(a(150),function(){var e=[{name:"facebook",icon:i.a.createElement(I.b,{size:24,onClick:function(){return window.open("https://www.facebook.com/IPondNaKab")}})},{name:"linkIn",icon:i.a.createElement(I.c,{size:24,onClick:function(){return window.open("https://www.linkedin.com/in/kittipat-daengdee-0b26441b9/")}})},{name:"medium",icon:i.a.createElement(I.d,{size:24,onClick:function(){return window.open("https://medium.com/@kittipat_dd")}})}];return i.a.createElement("aside",{className:"socail-tab"},i.a.createElement("div",{className:"button-socail"},e.map((function(e){return e.icon}))))}),P=a(45);function z(e){var t=e.barWidth,a=e.backgroundColor,r=e.barColor,l=e.delayTime,c=e.showPercent,s=e.speedAnimation,m=e.height,u=e.width,d=e.borderRadius,h=(e.textAlign,e.color,e.textStyles),p=e.innerStyles,E=e.backgroundStyles,f=e.textInner,g=Object(n.useState)(0),b=Object(o.a)(g,2),v=b[0],k=b[1],w=Object(n.useState)(0),y=Object(o.a)(w,2),S=y[0],C=y[1];Object(n.useEffect)((function(){setInterval((function(){return k(Math.floor(t||50))}),l?1e3*l:200),setInterval((function(){return C(Math.floor(1))}),l?1500*l:1500)}),[]);var I=Object(P.a)({display:"flex",height:m||20,width:u||"100%",backgroundColor:a||"#e0e0de",borderRadius:d||"12px"},E),N=Object(P.a)({alignSelf:"center",height:"100%",width:"".concat(v,"%"),backgroundColor:r||"#69c7fe",borderRadius:d||"12px",transition:"width ".concat(s||1,"s ease-in-out"),display:"flex",justifyContent:"flex-end"},p),z=Object(P.a)({fontWeight:"bold",opacity:S},h);return i.a.createElement("div",{style:I},i.a.createElement("div",{style:N},i.a.createElement("span",{style:z},f||"",c?v+"%":"")))}var x=a(77),A=a(8),j=(a(151),function(e){var t=e.props,a=[{name:"HTML",percent:90,icon:i.a.createElement(y.a,{size:30})},{name:"CSS",percent:90,icon:i.a.createElement(x.a,{size:30})},{name:"SASS",percent:90,icon:i.a.createElement(A.g,{size:30})},{name:"JS",percent:90,icon:i.a.createElement(A.d,{size:30})},{name:"TS",percent:80,icon:i.a.createElement(A.h,{size:30})},{name:"Python",percent:75,icon:i.a.createElement(A.f,{size:30})},{name:"Java",percent:70,icon:i.a.createElement(A.c,{size:30})},{name:"C++",percent:60,icon:i.a.createElement(A.a,{size:30})}];return i.a.createElement("div",{className:"software-skill"},i.a.createElement("h1",{className:"header-skill"},t.isEnglish?" Programming skills":"\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21"),a.map((function(e){return i.a.createElement("div",{style:{display:"flex",alignItems:"center",width:"100%"}},e.icon,i.a.createElement(z,{barWidth:e.percent,delayTime:1,backgroundStyles:{padding:2,margin:10,height:16},borderRadius:"0",barColor:"#333",textInner:e.name,textStyles:{fontSize:12,marginRight:8,color:"#fff"}}))})))}),D=a(44),M=(a(152),function(e){var t=e.props,a=[{name:"React",icon:i.a.createElement(I.e,{size:40})},{name:"Angular",icon:i.a.createElement(I.a,{size:40})},{name:"NodeJS",icon:i.a.createElement(A.e,{size:40})},{name:"Deno",icon:i.a.createElement(A.b,{size:40})},{name:"Bootstrap",icon:i.a.createElement(D.a,{size:40})}];return i.a.createElement("div",{className:"framework"},i.a.createElement("h1",{className:"header-framework"},t.isEnglish?"Framework":"\u0e40\u0e1f\u0e23\u0e21\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e04"),i.a.createElement("div",{className:"icons-framework"},a.map((function(e){return i.a.createElement("div",null,e.icon,i.a.createElement("p",null,e.name))}))))}),T=(a(153),function(e){var t=e.props,a=[{name:"Arduino",icon:i.a.createElement(I.e,{size:40})},{name:"NodeMCU",icon:i.a.createElement(I.a,{size:40})},{name:"PLC",icon:i.a.createElement(A.e,{size:40})},{name:"JesonNano",icon:i.a.createElement(A.b,{size:40})},{name:"Raspberry Pi",icon:i.a.createElement(A.b,{size:40})}];return i.a.createElement("div",{className:"hardware"},i.a.createElement("h1",{className:"header-hardware"},t.isEnglish?"Hardware":"\u0e2e\u0e32\u0e23\u0e4c\u0e14\u0e41\u0e27\u0e23\u0e4c"),a.map((function(e){return i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,e.name)))})))}),K=(a(154),function(e){var t=e.props;return i.a.createElement("div",{className:"other-skills"},i.a.createElement("h1",{className:"header-other-skills"},t.isEnglish?"Other Skills":"\u0e2a\u0e01\u0e34\u0e25\u0e2d\u0e37\u0e48\u0e19\u0e46"),i.a.createElement("div",null,[{en:"Photography",th:"\u0e16\u0e48\u0e32\u0e22\u0e20\u0e32\u0e1e"},{en:"Graphic Design",th:"\u0e07\u0e32\u0e19\u0e01\u0e23\u0e32\u0e1f\u0e1f\u0e34\u0e01"},{en:"Video Edit",th:"\u0e15\u0e31\u0e14\u0e15\u0e48\u0e2d\u0e27\u0e35\u0e14\u0e35\u0e42\u0e2d"},{en:"Play Guitar",th:"\u0e40\u0e25\u0e48\u0e19\u0e01\u0e35\u0e15\u0e49\u0e32"},{en:"3D Printring",th:"\u0e1b\u0e23\u0e34\u0e49\u0e19 3 \u0e21\u0e34\u0e15\u0e34"},{en:"Solidworks",th:"Solidworks"}].map((function(e){return i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,t.isEnglish?e.en:e.th)))}))))});a(155);function O(e){return i.a.createElement("div",{className:"skill-page"},i.a.createElement("div",{className:"main-skills"},i.a.createElement(j,{props:e}),i.a.createElement("div",{className:"skill-right"},i.a.createElement(M,{props:e}),i.a.createElement(T,{props:e}))),i.a.createElement(K,{props:e}))}var B=a(181),_=a(188),R=a(184),F=a(186),W=a(187),H=a(185),U=a(182),J=a(183);function L(e){var t=e.isEnglish,a=[{label:t?"Primary School":"\u0e1b.1-6",place:t?"Mueang Mai Wittaya School":"\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e27\u0e34\u0e17\u0e22\u0e32"},{label:t?"Junior High School":"\u0e21.1 - 3",place:t?"Mueang Mai Wittaya School":"\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e27\u0e34\u0e17\u0e22\u0e32"},{label:t?"Senior High School":"\u0e21.4 - 6",place:t?"Si Bun Rueang Wittayakran School":"\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19\u0e28\u0e23\u0e35\u0e1a\u0e38\u0e0d\u0e40\u0e23\u0e37\u0e2d\u0e07\u0e27\u0e34\u0e17\u0e22\u0e32\u0e04\u0e32\u0e23"},{label:t?"Bachelor Degrees":"\u0e1b.\u0e15\u0e23\u0e35",place:t?"Khon Kaen University":"\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e02\u0e2d\u0e19\u0e41\u0e01\u0e48\u0e19"}];return i.a.createElement(B.a,{align:"alternate",style:{padding:0}},a.map((function(e,t){var n=t%2==0;return i.a.createElement("div",{key:t},i.a.createElement(_.a,null,i.a.createElement(U.a,null,i.a.createElement(J.a,{style:{color:!n&&"#777"}},n?e.place:e.label)),i.a.createElement(R.a,null,i.a.createElement(H.a,null),t===a.length-1?null:i.a.createElement(F.a,null)),i.a.createElement(W.a,{style:{color:n&&"#777"}},i.a.createElement(J.a,null,n?e.label:e.place))))})))}a(156);var G=a(79),X=a(78),Z=a.n(X);function Y(e){var t=e.isEnglish,a=[{name:"address",labelEn:"Address",labelTh:"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48",en:"42 m.2 MueangMai SiBunRueang NongBuaLamPhu 39180 (TH)",th:"\u0e1a\u0e49\u0e32\u0e19\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48 42 \u0e2b\u0e21\u0e39\u0e48 2 \u0e15.\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e2d.\u0e28\u0e23\u0e35\u0e1a\u0e38\u0e0d\u0e40\u0e23\u0e37\u0e2d\u0e07 \u0e08.\u0e2b\u0e19\u0e2d\u0e07\u0e1a\u0e31\u0e27\u0e25\u0e33\u0e20\u0e39 39180",icon:i.a.createElement(S.c,{size:30})},{name:"phone",labelEn:"Phone",labelTh:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c",en:"+66 893 759 808",th:"089 375 9808",icon:i.a.createElement(D.b,{size:30})},{name:"email",labelEn:"Email",labelTh:"\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e4c",en:"Kittipat_DD@kkumail.com",th:"Kittipat_DD@kkumail.com",icon:i.a.createElement(G.a,{size:30})}];return i.a.createElement("div",{className:"about-page"},i.a.createElement("div",{className:"left-about"},i.a.createElement("img",{src:Z.a,alt:"Profile"})),i.a.createElement("div",{className:"right-about"},i.a.createElement("div",{className:"about-me"},i.a.createElement("h2",null,t?"Kittipat Daengdee":"\u0e01\u0e34\u0e15\u0e15\u0e34\u0e1e\u0e31\u0e12\u0e19\u0e4c \u0e41\u0e14\u0e07\u0e14\u0e35"),i.a.createElement("p",null,t?"Hello, my name is Kitttipat Daengdee but you can call me Pond I'm a junior in Computer Engineering Khon Kaen University, I've programming skill and teamwork. I'm good at Web application development and Mobile application development.":"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a\u0e1c\u0e21\u0e0a\u0e37\u0e48\u0e2d \u0e1b\u0e2d\u0e19\u0e14\u0e4c \u0e40\u0e1b\u0e47\u0e19\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32\u0e0a\u0e31\u0e49\u0e19\u0e1b\u0e35\u0e17\u0e35\u0e48 3 \u0e04\u0e13\u0e30\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c \u0e2a\u0e32\u0e02\u0e32\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e02\u0e2d\u0e19\u0e41\u0e01\u0e48\u0e19 \u0e21\u0e35\u0e17\u0e31\u0e01\u0e29\u0e30\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21 \u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e1b\u0e31\u0e0d\u0e2b\u0e32 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e21 \u0e42\u0e14\u0e22\u0e16\u0e19\u0e31\u0e14\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e41\u0e2d\u0e1e\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e48\u0e19  \u0e41\u0e25\u0e30 \u0e42\u0e21\u0e1a\u0e32\u0e22\u0e41\u0e2d\u0e1e\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e48\u0e19")),i.a.createElement("div",{className:"about-me"},i.a.createElement("h3",null,t?"Career Objective":"\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e19\u0e43\u0e08"),i.a.createElement("p",null,"Full Stack Developer, Web Deverloper, Mobile Developer")),i.a.createElement("div",{className:"contact-me"},i.a.createElement("h3",null,t?"Contact":"\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d"),a.map((function(e,a){return i.a.createElement("div",{className:"contact-item",key:a},i.a.createElement("div",{className:"contact-item-label"},e.icon),i.a.createElement("p",{className:"contact-item-detail"},t?e.en:e.th))})))))}a(157);function q(e){var t=e.isEnglish;return i.a.createElement("div",{className:"experiences-page"},[{en:"Experiences",th:"\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c",data:[{en:"2018",th:"2018",data:[{en:"Course projects Fundamentals of computer programming an aplication using python languages.",th:"\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e47\u0e04\u0e23\u0e32\u0e22\u0e27\u0e34\u0e0a\u0e32 \u0e2b\u0e25\u0e31\u0e01\u0e21\u0e39\u0e25\u0e02\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c \u0e14\u0e49\u0e27\u0e22\u0e20\u0e32\u0e29\u0e32 Python"},{en:"I did the project of Advanced Computer Programming course to develop the Android application with Java language, and Android Studio IDE.",th:"\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e47\u0e04\u0e23\u0e32\u0e22\u0e27\u0e34\u0e0a\u0e32 \u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e02\u0e31\u0e49\u0e19\u0e2a\u0e39\u0e07 \u0e42\u0e14\u0e22\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e41\u0e2d\u0e1e\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e41\u0e2d\u0e19\u0e14\u0e23\u0e2d\u0e22\u0e14\u0e4c \u0e14\u0e49\u0e27\u0e22\u0e20\u0e32\u0e29\u0e32 Java \u0e41\u0e25\u0e30 Android Studio IDE"},{en:"I've joined the race a PLC Competition 14th by TPA",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e01\u0e32\u0e23\u0e41\u0e02\u0e48\u0e07\u0e02\u0e31\u0e19 PLC Competition \u0e04\u0e23\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48 14 \u0e08\u0e31\u0e14\u0e41\u0e02\u0e48\u0e07\u0e42\u0e14\u0e22\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e44\u0e17\u0e22\u0e0d\u0e35\u0e48\u0e1b\u0e38\u0e48\u0e19"}]},{en:"2019",th:"2019",data:[{en:"I've joined the race a '12\u0e40\u0e17\u0e1e\u0e2a\u0e32\u0e22 Dev \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e02\u0e2d\u0e19\u0e41\u0e01\u0e48\u0e19' by Innovation Hub KKU and ThaiBev",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e04\u0e0a\u0e47\u0e2d\u0e1b\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 '12\u0e40\u0e17\u0e1e\u0e2a\u0e32\u0e22 Dev \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e02\u0e2d\u0e19\u0e41\u0e01\u0e48\u0e19' \u0e08\u0e31\u0e14\u0e42\u0e14\u0e22 Innovation Hub \u0e23\u0e48\u0e27\u0e21\u0e01\u0e31\u0e1a \u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e44\u0e17\u0e22\u0e40\u0e1a\u0e1f\u0e40\u0e27\u0e2d\u0e40\u0e23\u0e08"},{en:"I've joined internship programs's Zercle Technology. Learn about website development and framework Angular",th:"\u0e44\u0e14\u0e49\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e1d\u0e36\u0e01\u0e07\u0e32\u0e19\u0e01\u0e31\u0e1a\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17 Zercle Technology \u0e42\u0e14\u0e22\u0e44\u0e14\u0e49\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e41\u0e25\u0e30\u0e40\u0e1f\u0e23\u0e21\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e04 Angular"},{en:"I joined with the contest of 15th PLC Competition operated by TPA.",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e01\u0e32\u0e23\u0e41\u0e02\u0e48\u0e07\u0e02\u0e31\u0e19 PLC Competition \u0e04\u0e23\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48 15 \u0e08\u0e31\u0e14\u0e41\u0e02\u0e48\u0e07\u0e42\u0e14\u0e22\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e44\u0e17\u0e22\u0e0d\u0e35\u0e48\u0e1b\u0e38\u0e48\u0e19"}]},{en:"2020",th:"2020",data:[{en:"I joined with the training program of A Getting Started with SCB API to learn about using SCB API.",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e04\u0e0a\u0e47\u0e2d\u0e1b\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 Getting started with SCB API \u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 SCB API \u0e08\u0e31\u0e14\u0e42\u0e14\u0e22 \u0e18\u0e19\u0e32\u0e04\u0e32\u0e23\u0e44\u0e17\u0e22\u0e1e\u0e32\u0e19\u0e34\u0e0a"},{en:"I joined with Robo Inovetor Challenge by Software Park Thailand about the robot competition of AI system.",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e01\u0e32\u0e23\u0e41\u0e02\u0e48\u0e07\u0e02\u0e31\u0e19\u0e2b\u0e38\u0e48\u0e19\u0e22\u0e19\u0e15\u0e4c\u0e23\u0e30\u0e1a\u0e1a AI \u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 Robo inovetor Challenge By Software Park Thailand "},{en:"The expert taught about IoT (Internet of Things), and the using of NodeMCU (ESP8266) in Smart camp.",th:"\u0e40\u0e1b\u0e47\u0e19\u0e27\u0e34\u0e17\u0e22\u0e32\u0e01\u0e23\u0e2a\u0e2d\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 IoT (Internet of things) \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 NodeMCU(ESP8266) \u0e02\u0e2d\u0e07\u0e04\u0e48\u0e32\u0e22 Smart Camp"},{en:"Web Application Development course, I've developed web application of Shopping Farmacro with React, Firebase, Google API, and Facebook API. (In process)",th:"\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e04\u0e23\u0e32\u0e22\u0e27\u0e34\u0e0a\u0e32\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e41\u0e2d\u0e1e\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19 \u0e42\u0e14\u0e22\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e41\u0e2d\u0e1e\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19 Farmacro \u0e14\u0e49\u0e27\u0e22\u0e40\u0e1f\u0e25\u0e21\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e04 React, Firebase, Google API \u0e41\u0e25\u0e30 Facebook API (\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32)"},{en:"System of Data-Base course, I've developed data-base with React and Firebase. (In process) ",th:"\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e04\u0e23\u0e32\u0e22\u0e27\u0e34\u0e0a\u0e32\u0e23\u0e30\u0e1a\u0e1a\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e42\u0e14\u0e22\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e14\u0e49\u0e27\u0e22 React \u0e41\u0e25\u0e30 Firebase (\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32)"},{en:"I've participated with NSC (National Software Contest). Now I'm going in process of the next round competition.",th:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 NSC (National Software Contest) \u0e43\u0e19\u0e02\u0e13\u0e30\u0e19\u0e35\u0e49\u0e1c\u0e48\u0e32\u0e19\u0e40\u0e02\u0e49\u0e32\u0e23\u0e2d\u0e1a\u0e04\u0e31\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01 (\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e41\u0e02\u0e48\u0e07)"}]}]},{en:"Other",th:"\u0e2d\u0e37\u0e48\u0e19\u0e46",data:[{en:"Student Union Khon Kaen Univerity (2018 - Present)",th:"\u0e17\u0e33\u0e07\u0e32\u0e19\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e32\u0e23\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32 (2018-\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19)"},{en:"Head of Mechatronics Club, Faculty of Engineering, Khon Kaen Unuversity (2019 - Present)",th:"\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19\u0e0a\u0e38\u0e21\u0e19\u0e38\u0e21\u0e41\u0e21\u0e47\u0e04\u0e04\u0e32\u0e17\u0e23\u0e2d\u0e19\u0e34\u0e01\u0e2a\u0e4c \u0e04\u0e13\u0e30\u0e27\u0e34\u0e28\u0e27\u0e01\u0e23\u0e23\u0e21\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e02\u0e2d\u0e19\u0e41\u0e01\u0e48\u0e19 (2019-\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19)"}]}].map((function(e,a){return i.a.createElement("div",{className:"exp-content",key:a},i.a.createElement("h1",null,t?e.en:e.th),e.data.map((function(e,a){return e.data?i.a.createElement("div",{className:"exp-container"},i.a.createElement("h2",null,t?e.en:e.th),i.a.createElement("ul",null,e.data.map((function(e){return i.a.createElement("li",null,t?e.en:e.th)})))):i.a.createElement("ul",null,i.a.createElement("li",null,t?e.en:e.th))})))})))}a(158);function V(){return i.a.createElement("div",{className:"reference-page"},i.a.createElement("ul",null,[{name:"Dr. Kanda Saikaew",position:"Associate Professor of Computer Engineering, Khon Kaen University"},{name:"Phattarajul Chantaramontree ",position:"Chief Design Officer & Co-founder Zercle Technology Co., Ltd."}].map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("div",null,i.a.createElement("h2",null,e.name),i.a.createElement("p",null,e.position)))}))))}a(159);var $=function(){var e=Object(n.useState)((function(){return!0})),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)((function(){return!0})),c=Object(o.a)(l,2),s=c[0],d=c[1];return document.body.style.backgroundColor=a?"#333":"#f2f2f2",document.body.style.color=a?"#f2f2f2":"#222",i.a.createElement(u.a,null,i.a.createElement(C,{isDarkMode:a,setIsDarkMode:r,isEnglish:s,setIsEnglish:d}),i.a.createElement("div",{className:"content"},i.a.createElement(m.d,null,i.a.createElement(m.b,{path:"/profile/experiences"},i.a.createElement(q,{isEnglish:s})),i.a.createElement(m.b,{path:"/profile/education"},i.a.createElement(L,{isEnglish:s})),i.a.createElement(m.b,{path:"/profile/skill"},i.a.createElement(O,{isEnglish:s})),i.a.createElement(m.b,{path:"/profile/reference"},i.a.createElement(V,{isEnglish:s})),i.a.createElement(m.b,{path:"/profile/about",strict:!0},i.a.createElement(Y,{isEnglish:s})),i.a.createElement(m.b,{path:"/profile/",strict:!0},i.a.createElement(Y,{isEnglish:s})),i.a.createElement(m.a,{to:"/profile/"}))),i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){e.exports=a.p+"static/media/Profile-square.d67f71b5.png"},81:function(e,t,a){e.exports=a(160)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.f8f32a34.chunk.js.map