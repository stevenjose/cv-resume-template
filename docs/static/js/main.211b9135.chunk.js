(this["webpackJsonpcv-template"]=this["webpackJsonpcv-template"]||[]).push([[0],{22:function(e,s,c){},26:function(e,s,c){"use strict";c.r(s);var t=c(4),a=c.n(t),i=c(15),n=c.n(i),l=(c(22),c(7)),r=c(12),j=c(13),o=c.n(j),d=c(16),b=c(8),h=c(1),m=function(e){var s=e.bio;return Object(h.jsx)("section",{id:"about",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"three columns",children:Object(h.jsx)("img",{className:"profile-pic",src:s.avatar,alt:"Jose Lopez"})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsx)("p",{children:s.bio}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"columns contact-details",children:[Object(h.jsx)("h2",{children:"Contact Details"}),Object(h.jsxs)("p",{className:"address",children:[Object(h.jsx)("span",{children:s.name}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[s.address,Object(h.jsx)("br",{}),"Zip ",s.zip]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:s.tlf}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:s.email})]})]}),Object(h.jsx)("div",{className:"columns download",children:Object(h.jsx)("p",{children:Object(h.jsxs)("a",{href:s.resumeDownload,target:"_blank",className:"button",children:[Object(h.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})},O=function(e){var s=e.bio,c=s.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,target:"_blank",children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsxs)("header",{id:"home",children:[Object(h.jsxs)("nav",{id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",className:"nav",children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})})]})]}),Object(h.jsx)("div",{className:"row banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsxs)("h1",{className:"responsive-headline",children:["I'm ",s.name,"."]}),Object(h.jsxs)("h3",{children:["Profesi\xf3n ",Object(h.jsx)("span",{children:s.profession}),". ",s.bio,"."]}),Object(h.jsx)("hr",{}),Object(h.jsx)("ul",{className:"social",children:c})]})}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(h.jsx)("i",{className:"icon-down-circle"})})})]})},x=c(17),u=(c(27),x.a.initializeApp({apiKey:"AIzaSyDWT_gwkS_Z0IZJoU6G9xrL3G5Ggjvc-Qw",authDomain:"hojavida-4d351.firebaseapp.com",projectId:"hojavida-4d351",storageBucket:"hojavida-4d351.appspot.com",messagingSenderId:"271802464646",appId:"1:271802464646:web:7666e2a1597d446d2e9407"}).firestore()),p=c.p+"static/media/jgla.3bfc2ac0.jpeg",f=c.p+"static/media/cv.329829d0.pdf",v=function(e){var s=e.person;if(s.education&&s.experience&&s.skills)var c=s.education,t=s.experience,a=s.skills,i=c.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{}),Object(h.jsxs)("p",{className:"info",children:[e.degree," ",Object(h.jsx)("span",{children:"\u2022"}),Object(h.jsx)("em",{className:"date",children:e.endDate})]})]},e.id)})),n=t.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.company}),Object(h.jsxs)("p",{className:"info",children:[e.title,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsxs)("em",{className:"date",children:[e.startDate," : ",e.endDate]})]}),Object(h.jsx)("p",{children:e.jobDescription})]},e.company)})),l=a.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{style:{width:e.percentage},className:s}),Object(h.jsx)("em",{children:e.name})]},e.name)}));return Object(h.jsxs)("section",{id:"resume",children:[Object(h.jsxs)("div",{className:"row education",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Education"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsx)("div",{className:"row item",children:Object(h.jsx)("div",{className:"twelve columns",children:i})})})]}),Object(h.jsxs)("div",{className:"row work",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Work"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:n})]}),Object(h.jsxs)("div",{className:"row skill",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Skills"})})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("p",{children:"Here you can create a short write-up of your skills to show off to employers"}),Object(h.jsx)("div",{className:"bars",children:Object(h.jsx)("ul",{className:"skills",children:l})})]})]})]})},N=function(e){var s=e.portafolio;if(s)var c=s.map((function(e){e.image;return Object(h.jsx)("div",{className:"columns portfolio-item",children:Object(h.jsx)("div",{className:"item-wrap",children:Object(h.jsxs)("a",{href:e.url,title:e.name,target:"_blank",children:[Object(h.jsx)("img",{alt:e.name,src:e.img}),Object(h.jsx)("div",{className:"overlay",children:Object(h.jsxs)("div",{className:"portfolio-item-meta",children:[Object(h.jsx)("h5",{children:e.name}),Object(h.jsx)("p",{children:e.category})]})}),Object(h.jsx)("div",{className:"link-icon",children:Object(h.jsx)("i",{className:"fa fa-link"})})]})})},e.name)}));return Object(h.jsx)("section",{id:"portfolio",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns collapsed",children:[Object(h.jsx)("h1",{children:"Check Out Some of My Works."}),Object(h.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:c})]})})})},g=function(e){var s=e.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,target:"_blank",children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("ul",{className:"social-links",children:s}),Object(h.jsxs)("ul",{className:"copyright",children:[Object(h.jsx)("li",{children:"\xa9 Copyright 2021 Jose Lopez"}),Object(h.jsxs)("li",{children:["Design by"," Jose G Lopez"]})]})]}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})})},w=function(e){return function(e){e=e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsxs)("blockquote",{children:[Object(h.jsx)("p",{children:e.text}),Object(h.jsx)("cite",{children:e.user})]})},e.user)}));return Object(h.jsx)("section",{id:"testimonials",children:Object(h.jsx)("div",{className:"text-container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"two columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Client Testimonials"})})}),Object(h.jsx)("div",{className:"ten columns flex-container",children:Object(h.jsx)("ul",{className:"slides",children:e})})]})})})}(e.testimonials)};var k=function(){var e,s=Object(t.useState)([]),c=Object(b.a)(s,2),a=c[0],i=c[1],n=Object(t.useState)([]),j=Object(b.a)(n,2),x=j[0],k=j[1],S=Object(t.useState)([]),y=Object(b.a)(S,2),D=y[0],I=y[1],z=Object(t.useState)([]),C=Object(b.a)(z,2),J=C[0],L=C[1],T=Object(t.useState)([]),_=Object(b.a)(T,2),A=_[0],B=_[1],E=Object(t.useState)([]),F=Object(b.a)(E,2),G=F[0],H=F[1],W=Object(t.useState)([]),M=Object(b.a)(W,2),P=M[0],Z=M[1],q=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R("education",i),R("experience",k),R("certificate",I),R("skills",L),R("portafolio",B),R("perfil",H),R("testimonials",Z);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e,s){localStorage.getItem(e)?s(JSON.parse(localStorage.getItem(e))):u.collection(e).onSnapshot((function(c){var t=[];c.forEach((function(e){t.push(Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id}))})),s(t),localStorage.setItem(e,JSON.stringify(t))}))};Object(t.useEffect)((function(){q()}),[]);var K=(e={avatar:p,resumeDownload:f,name:G&&G[0]?G[0].name:"",profession:G&&G[0]?G[0].profession:"",bio:G&&G[0]?G[0].bio:"",email:G&&G[0]?G[0].email:"",address:G&&G[0]?G[0].address:"",tlf:G&&G[0]?G[0].tlf:"",zip:G&&G[0]?G[0].zip:"",social:[{name:"github",url:"https://github.com/stevenjose/"},{name:"linkedin",url:"https://www.linkedin.com/in/joselopezarias/"}]},Object(l.a)(e,"social",[{name:"linkedin",url:"https://www.linkedin.com/in/joselopezarias/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/stevenjose/",className:"fa fa-github"}]),Object(l.a)(e,"experience",x),Object(l.a)(e,"portafolio",A),Object(l.a)(e,"education",a),Object(l.a)(e,"certificate",D),Object(l.a)(e,"skills",J),Object(l.a)(e,"testimonials",P),e);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{bio:K}),Object(h.jsx)(m,{bio:K}),Object(h.jsx)(v,{person:K}),Object(h.jsx)(N,{portafolio:K.portafolio}),Object(h.jsx)(w,{testimonials:K.testimonials}),Object(h.jsx)(g,{social:K.social})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,i=s.getLCP,n=s.getTTFB;c(e),t(e),a(e),i(e),n(e)}))};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),S()}},[[26,1,2]]]);
//# sourceMappingURL=main.211b9135.chunk.js.map