(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){},26:function(e,a,t){e.exports=t(43)},35:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),i=t.n(l),c=t(2),s=t(16),o=t(15),m={show:!1,setExperiense:"future",resume:{experiense:{},generalInfo:{EDUCATION:{},TECHNICAL_SKILLS:{},LANGUAGES:[],ADDITIONAL_EDUCATION:{},CONTACTS:{email:"adiletkub@gmail.com",github:"github.com/AdiKub",phone_number:"+996 550 054450"}}}},u=Object(o.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_EXPERIENSE":return Object(s.a)({},e,{setExperiense:a.title});case"SHOW_ALL":return Object(s.a)({},e,{show:a.title});case"SET_RESUME":return Object(s.a)({},e,{resume:a.title});default:return e}}),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var E=t(9),f=t(1),_=(t(35),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header-wrapper"},r.a.createElement(E.b,{to:"/"},r.a.createElement("div",{className:"header-title"},r.a.createElement("div",{className:"header-title-logo"},r.a.createElement("img",{className:"header-title-logo__img",src:"/adiletkub.com/images/logo.svg",alt:"logo"})),r.a.createElement("h1",{className:"header-title__text"},"ADILET Kubatbek Uulu"))),r.a.createElement("ul",{className:"header-navs"},r.a.createElement("li",null,r.a.createElement("a",{className:"header-navs__link header-navs__link_resume",href:"/adiletkub.comAdiletKub_CV_ENG.pdf",download:!0},"download the resume")),r.a.createElement(E.b,{to:"/about-me"},r.a.createElement("li",null,r.a.createElement("span",{className:"header-navs__link"},"about me"))),r.a.createElement(E.b,{to:"/contacts"},r.a.createElement("li",null,r.a.createElement("span",{className:"header-navs__link"},"contacts"))),r.a.createElement(E.b,{to:"/about-me"},r.a.createElement("li",null,r.a.createElement("span",{className:"header-navs__link"},"works")))))))}),v=(t(37),function(){var e=Object(c.c)(function(e){return e.resume.generalInfo.CONTACTS});return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer-wrapper"},r.a.createElement("ul",{className:"footer-contacts"},Object.keys(e).map(function(a){return r.a.createElement("li",{className:"footer-contacts__info",key:a},e[a])})))))}),N=t(23),g=(t(38),function(e){var a=e.experienseList,t=Object.keys(a).sort(function(e,t){return a[t].id-a[e].id}),l=Object(c.c)(function(e){return e.show}),i=Object(n.useState)("FRONTEND-DEV"),s=Object(N.a)(i,2),o=s[0],m=s[1],u=Object(n.useState)(!1),p=Object(N.a)(u,2),d=p[0],E=p[1],f=Object(c.b)(),_=l?[]:t;return Object(n.useEffect)(function(){f({type:"SHOW_ALL",title:d}),f({type:"CHANGE_EXPERIENSE",title:o})}),r.a.createElement("div",{className:"navigator"},r.a.createElement("span",{className:"navigator-title__text"},"experience"),r.a.createElement("div",{className:"navigator-buttons"},r.a.createElement("div",{onClick:function(){_.indexOf(o)>0?m(_[_.indexOf(o)-1]):m(_[_.length-1])},className:"navigator__arrow__up"}),r.a.createElement("div",{className:"navigator-wrapper"},r.a.createElement("div",{id:"first",className:"navigator-radio"},r.a.createElement("div",{onClick:function(){return m("future")},className:"navigator-radio__back"}),"future"===o&&r.a.createElement("div",{className:"navigator-radio__front"},r.a.createElement("span",{className:"navigator-radio__front__text"},o),r.a.createElement("div",{className:"navigator-radio__front__point"}," "))),_.map(function(e){return r.a.createElement("div",{key:e,className:"navigator-wrapper navigator-wrapper_dinamic"},r.a.createElement("div",{className:"navigator-radio__line"}," "),r.a.createElement("div",{className:"navigator-radio"},r.a.createElement("div",{onClick:function(e){return m(e.target.id)},id:e,className:"navigator-radio__back"}),o===e&&r.a.createElement("div",{className:"navigator-radio__front"},r.a.createElement("span",{className:"navigator-radio__front__text"},a[e].period),r.a.createElement("div",{className:"navigator-radio__front__point"}," "))))})),r.a.createElement("div",{onClick:function(){_.indexOf(o)<_.length-1?m(_[_.indexOf(o)+1]):m(_[0])},className:"navigator__arrow__down"})),r.a.createElement("span",{onClick:function(){return E(!d)},className:"navigator-change_text"},d?"hide all":"show all"))}),b=(t(39),function(e){var a=e.experienseList,t=Object(c.c)(function(e){return e.setExperiense}),n=Object(c.c)(function(e){return e.show}),l=a[t];return!n&&l?r.a.createElement("div",{className:"experiense-display"},r.a.createElement("div",{className:"experiense-display-content"},r.a.createElement("p",{className:"experiense-display__position"},"Position:",r.a.createElement("span",{className:"experiense-display__position__name"},t)),r.a.createElement("p",{className:"experiense-display__position"},"Place:",r.a.createElement("span",{className:"experiense-display__position__name"},l.place)),r.a.createElement("p",{className:"experiense-display__position"},"functions:",l.responsibillity.map(function(e){return r.a.createElement("span",{key:e,className:"experiense-display__position__name"},e)}))),r.a.createElement("div",{className:"experiense-display-images"},r.a.createElement("img",{className:"experiense-display-images__image",src:"/adiletkub.comimages/"+l.images,alt:l.images}))):r.a.createElement("div",{className:"experiense-display"},r.a.createElement("div",{className:"experiense-display-content"},r.a.createElement("p",{className:"experiense-display__position"},r.a.createElement("strong",null,"your company could be here"))))}),h=(t(40),function(){var e=Object(c.c)(function(e){return e.resume.experiense});return r.a.createElement("div",{className:"experiense"},r.a.createElement(b,{experienseList:e}),r.a.createElement(g,{experienseList:e}))}),x=(t(41),function(){var e=Object(c.c)(function(e){return e.resume.generalInfo});return r.a.createElement("div",{className:"general-info"},r.a.createElement("div",{className:"general-info-content"},r.a.createElement("div",{className:"general-info-wrapper"},r.a.createElement("h4",{className:"general-info-wrapper_title"}," EDUCATION "),Object.keys(e.EDUCATION).map(function(a){return r.a.createElement("span",{key:a},e.EDUCATION[a])})),r.a.createElement("div",{className:"general-info-wrapper"},r.a.createElement("h4",{className:"general-info-wrapper_title"}," TECHNICAL SKILLS "),Object.keys(e.TECHNICAL_SKILLS).map(function(a){return r.a.createElement("div",{className:"general-info-wrapper_subtitle",key:a},r.a.createElement("span",{className:"general-info_skill_name"}," ",a," "),r.a.createElement("br",null),e.TECHNICAL_SKILLS[a].map(function(e){return r.a.createElement("span",{key:e}," ",e+"  ")}))})),r.a.createElement("div",{className:"general-info-wrapper"},r.a.createElement("h4",{className:"general-info-wrapper_title"},"LANGUAGES"),e.LANGUAGES.map(function(e){return r.a.createElement("span",{key:e,className:"general-info_text"}," ",e," ")})),r.a.createElement("div",{className:"general-info-wrapper"},r.a.createElement("h4",{className:"general-info-wrapper_title"}," ADDITIONAL EDUCATION "),Object.keys(e.ADDITIONAL_EDUCATION).map(function(a){return r.a.createElement("span",{key:a},e.ADDITIONAL_EDUCATION[a]," ")}))),r.a.createElement("div",{className:"general-info-image"},r.a.createElement("img",{className:"general-info-image_user_background",src:"/adiletkub.com/images/me_background_img.png",alt:"user"}),r.a.createElement("img",{className:"general-info-image_user_img",src:"/adiletkub.com/images/me_img.png",alt:"user"})))}),w=(t(42),function(e){var a=Object(c.c)(function(e){return e.resume.experiense}),t=Object(c.c)(function(e){return e.show}),n=Object.keys(a).sort(function(e,t){return a[t].id-a[e].id}),l=function(e){return e%2===0};return r.a.createElement(r.a.Fragment,null,t&&n.map(function(e,t){return r.a.createElement("div",{key:e,className:"full-experiense"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:l(t)?"full-experiense-wrapper":"full-experiense-wrapper full-experiense-strip_revers"},r.a.createElement("div",{className:l(t)?"full-experiense-strip":"full-experiense-strip full-experiense-strip_revers"},e),r.a.createElement("div",{className:"full-experiense-content"},r.a.createElement("div",{className:l(t)?"full-experiense-content-box":"full-experiense-content-box full-experiense-content-box_revers"},r.a.createElement("div",{className:l(t)?"full-experiense-content-display":"full-experiense-content-display full-experiense-content-display_revers"},r.a.createElement("p",{className:"full-experiense-content-display__position"},"period:",r.a.createElement("span",{className:"full-experiense-content-display__position__name"},a[e].period)),r.a.createElement("p",{className:"full-experiense-content-display__position"},"Place:",r.a.createElement("span",{className:"full-experiense-content-display__position__name"},a[e].place)),r.a.createElement("p",{className:"full-experiense-content-display__position"},"responsibillity:",a[e].responsibillity.map(function(e){return r.a.createElement("span",{key:e,className:"full-experiense-content-display__position__name"},e)}))),r.a.createElement("div",{className:"full-experiense-content-display-images"},r.a.createElement("img",{className:"full-experiense-content-display-images__image",src:"/adiletkub.comimages/"+a[e].images,alt:e.images})))))))}))}),y=function(){var e=Object(c.b)();return Object(n.useEffect)(function(){window.firebase.database().ref().on("value",function(a,t){t?console.log(t):e({type:"SET_RESUME",title:a.val()})})}),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"details-wrapper"},r.a.createElement(x,null),r.a.createElement(h,null)),r.a.createElement(w,null)))},k=(t(11),function(){return r.a.createElement(n.Fragment,null,r.a.createElement(_,null),r.a.createElement(y,null),r.a.createElement(v,null))}),O=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(_,null),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{height:"100%",color:"#e6ab46",textTransform:"uppercase"}},"Coming soon"))),r.a.createElement(v,null))},A=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(_,null),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{height:"100%",color:"#e6ab46",textTransform:"uppercase"}},"Coming soon"))),r.a.createElement(v,null))},C=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(_,null),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{height:"100%",color:"#e6ab46",textTransform:"uppercase"}},"Coming soon"))),r.a.createElement(v,null))};function I(){return r.a.createElement(E.a,null,r.a.createElement(f.a,{path:"/",exact:!0,component:k}),r.a.createElement(f.a,{path:"/about-me",exact:!0,component:O}),r.a.createElement(f.a,{path:"/works",exact:!0,component:A}),r.a.createElement(f.a,{path:"/contacts",exact:!0,component:C}))}i.a.render(r.a.createElement(c.a,{store:u},r.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/adiletkub.com",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/adiletkub.com","/service-worker.js");p?(function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):d(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):d(a,e)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.b46f5d67.chunk.js.map