"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7950],{2115:function(e,a){a.Z=function(){window.addEventListener("scroll",(function(){var e=window.pageYOffset;document.querySelector(".fixed-slider .capt .parlx")&&(document.querySelector(".fixed-slider .capt .parlx").style.transform="translate3d(0, "+-.2*e+"px, 0)",document.querySelector(".fixed-slider .capt .parlx").style.opacity=1-e/600),document.querySelector(".fixed-slider .caption")&&(document.querySelector(".fixed-slider .caption").style.transform="translate3d(0, "+-.2*e+"px, 0)",document.querySelector(".fixed-slider .caption").style.opacity=1-e/600)}))}},5217:function(e,a,s){var t=s(2455);a.Z=function(){var e=document.createElement("div");e.classList.add("div-tooltip-tit"),document.body.appendChild(e);var a=document.createElement("div");a.classList.add("div-tooltip-sub"),document.body.appendChild(a),document.querySelectorAll("[data-tooltip-tit]").forEach((function(a){e=document.querySelector(".div-tooltip-tit"),a.addEventListener("mouseover",(function(){e.innerText=a.getAttribute("data-tooltip-tit")})),a.addEventListener("mousemove",(function(a){(0,t.Ji)(e,800),e.style.top=a.pageY+10+"px",e.style.left=a.pageX+20+"px",e.style.padding="0px 10px"})),a.addEventListener("mouseleave",(function(){(0,t.U6)(e,800),e.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(e){a=document.querySelector(".div-tooltip-sub"),e.addEventListener("mouseover",(function(){a.innerText=e.getAttribute("data-tooltip-sub")})),e.addEventListener("mousemove",(function(e){(0,t.Ji)(a,800),a.style.top=e.pageY-15+"px",a.style.left=e.pageX+30+"px",a.style.padding="5px 10px"})),e.addEventListener("mouseleave",(function(){(0,t.U6)(a,800),a.style.padding=0}))}))}},4848:function(e,a,s){s.d(a,{Z:function(){return u}});var t=s(5666),i=s.n(t),l=s(5893),r=s(7294),o=s(2175),n=s(1664),c=s(2806),d=s(2455),m=function(e){(0,d.m7)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},h=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")};function p(e,a,s,t,i,l,r){try{var o=e[l](r),n=o.value}catch(c){return void s(c)}o.done?a(n):Promise.resolve(n).then(t,i)}var u=function(e){var a,s=e.lr,t=e.nr,u=e.theme;return r.useEffect((function(){!function(){var e=document.querySelector(".navbar .search .search-form");document.querySelector(".navbar .search .icon").addEventListener("click",(function(){e.style.display="block",(0,d.Ji)(e,200)})),document.querySelector(".navbar .search .search-form .close").addEventListener("click",(function(){e.style.display="none",(0,d.U6)(e,200)}))}()}),[]),(0,l.jsx)("nav",{ref:t,className:"navbar navbar-expand-lg change ".concat("themeL"===u?"light":""),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.default,{href:"/",children:(0,l.jsx)("a",{className:"logo",children:u&&"themeL"===u?(0,l.jsx)("img",{ref:s,src:"".concat(c.Q1),alt:"logo"}):(0,l.jsx)("img",{ref:s,src:"".concat(c.E8),alt:"logo"})})}),(0,l.jsx)("button",{className:"navbar-toggler",type:"button",onClick:h,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,l.jsx)("span",{className:"icon-bar",children:(0,l.jsx)("i",{className:"fas fa-bars"})})}),(0,l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,l.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(n.default,{href:"/home/home3-dark",children:(0,l.jsx)("a",{className:"nav-link",children:"Home"})})}),(0,l.jsxs)("li",{className:"nav-item dropdown",onClick:m,children:[(0,l.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Showcases"}),(0,l.jsxs)("div",{className:"dropdown-menu",children:[(0,l.jsx)(n.default,{href:"/showcase/showcase-dark",children:(0,l.jsx)("a",{className:"dropdown-item",children:"Full Screen"})}),(0,l.jsx)(n.default,{href:"/showcase2/showcase2-dark",children:(0,l.jsx)("a",{className:"dropdown-item",children:"Creative Carousel"})}),(0,l.jsx)(n.default,{href:"/showcase3/showcase3-dark",children:(0,l.jsx)("a",{className:"dropdown-item",children:"Radius Carousel"})}),(0,l.jsx)(n.default,{href:"/showcase4/showcase4-dark",children:(0,l.jsx)("a",{className:"dropdown-item",children:"Columns Carousel"})}),(0,l.jsx)(n.default,{href:"/showcase5/showcase5-dark",children:(0,l.jsx)("a",{className:"dropdown-item",children:"Boxed Carousel"})})]})]}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(n.default,{href:"/about/about-dark",children:(0,l.jsx)("a",{className:"nav-link",children:"About"})})}),(0,l.jsxs)("li",{className:"nav-item dropdown",onClick:m,children:[(0,l.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"portfolio"}),(0,l.jsxs)("div",{className:"dropdown-menu",children:[(0,l.jsx)(n.default,{href:"/works/works-dark",children:(0,l.jsx)("a",{className:"dropdown-item",children:"Mouse Info"})}),(0,l.jsx)(n.default,{href:"/works2/works2-dark",children:(0,l.jsx)("a",{className:"dropdown-item",children:"Masonry 3 Columns"})}),(0,l.jsx)(n.default,{href:"/works3/works3-dark",children:(0,l.jsx)("a",{className:"dropdown-item",children:"Masonry 2 Columns"})}),(0,l.jsx)(n.default,{href:"/works4/works4-dark",children:(0,l.jsx)("a",{className:"dropdown-item",children:"Pinterest List"})})]})]}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(n.default,{href:"/contact/contact-dark",children:(0,l.jsx)("a",{className:"nav-link",children:"Contact"})})})]}),(0,l.jsxs)("div",{className:"search",children:[(0,l.jsx)("span",{className:"icon pe-7s-search cursor-pointer"}),(0,l.jsxs)("div",{className:"search-form text-center custom-font",children:[(0,l.jsx)(o.J9,{initialValues:{search:""},onSubmit:(a=i().mark((function e(a){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert(JSON.stringify(a,null,2)),a.search="";case 2:case"end":return e.stop()}}),e)})),function(){var e=this,s=arguments;return new Promise((function(t,i){var l=a.apply(e,s);function r(e){p(l,t,i,r,o,"next",e)}function o(e){p(l,t,i,r,o,"throw",e)}r(void 0)}))}),children:function(e){e.errors,e.touched;return(0,l.jsx)(o.l0,{children:(0,l.jsx)(o.gN,{type:"text",name:"search",placeholder:"Search"})})}}),(0,l.jsx)("span",{className:"close pe-7s-close cursor-pointer"})]})]})]})]})})}},2623:function(e,a,s){var t=s(5893);s(7294);a.Z=function(){return(0,t.jsx)("footer",{className:"footer-half sub-bg",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"copyrights text-center mt-0",children:(0,t.jsxs)("p",{children:["\xa9 2022, Avo Template. Made with passion by",(0,t.jsx)("a",{href:"#0",children:"ThemesCamp"}),"."]})})})})}},595:function(e,a,s){var t=s(5893),i=s(7294),l=s(1664),r=s(5217);a.Z=function(){return i.useEffect((function(){(0,r.Z)()}),[]),(0,t.jsxs)("section",{className:"works section-padding pb-70",children:[(0,t.jsx)("h2",{style:{display:"none"},children:" \xa0 "}),(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row lg-space",children:[(0,t.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,t.jsx)("img",{src:"/img/portfolio/works/1.jpg",alt:""})})})})})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-6 valign",children:(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Branding",children:(0,t.jsx)("img",{src:"/img/portfolio/works/2.jpg",alt:""})})})})})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Photography",children:(0,t.jsx)("img",{src:"/img/portfolio/works/3.jpg",alt:""})})})})})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-6 valign",children:(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,t.jsx)("img",{src:"/img/portfolio/works/6.jpg",alt:""})})})})})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Web Design",children:(0,t.jsx)("img",{src:"/img/portfolio/works/5.jpg",alt:""})})})})})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-6 valign",children:(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Photography",children:(0,t.jsx)("img",{src:"/img/portfolio/works/4.jpg",alt:""})})})})})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Creative",children:(0,t.jsx)("img",{src:"/img/portfolio/works/7.jpg",alt:""})})})})})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-6 valign",children:(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Branding",children:(0,t.jsx)("img",{src:"/img/portfolio/works/8.jpg",alt:""})})})})})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:"img","data-tooltip-tit":"Work image","data-tooltip-sub":"Design",children:(0,t.jsx)("img",{src:"/img/portfolio/works/9.jpg",alt:""})})})})})})]})})]})}}}]);