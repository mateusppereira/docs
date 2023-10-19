"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4191],{4174:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(2263);function r(){const{siteConfig:e}=(0,n.Z)(),t=e.customFields.links.map(((e,t)=>l.createElement(o,{data:e,key:`footer-n-l-${t}`}))),a=e.customFields.linksSocial.map(((e,t)=>l.createElement(o,{data:e,key:`footer-n-l-${t}`})));return l.createElement("footer",{className:"footer bg-bgalt py-12"},l.createElement("div",{className:"container mx-auto text-center"},l.createElement("div",{className:"flex justify-center my-3 mb-4"},l.createElement("a",{href:"/",title:e?.title},l.createElement("img",{src:"/"+e.themeConfig.navbar.logo.src,alt:`${e.themeConfig.navbar.logo.alt} - logo`,style:{height:"45px"}}))),l.createElement("div",{className:"text-color-2 my-3 footer-links animated-link-parent"},l.createElement("ul",null,t)),l.createElement("div",{className:"text-color-2 my-3 footer-links animated-link-parent"},l.createElement("ul",null,a)),l.createElement("p",{className:"text-color-default text-lg"},"Copyright \xa9 ",(new Date).getFullYear()," The Linux Foundation\xae. All rights reserved.")))}const o=e=>{let{data:t}=e;return l.createElement("li",{className:"inline-block mx-3 animated-link-parent"},l.createElement("a",{href:t.to?t.to:t.href,title:t.label,rel:t.rel?t.rel:""},l.createElement("span",null,t.label)))}},5526:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(3727),r=a(1140),o=a(8709);const s=e=>{let{data:t}=e;const[a,s]=(0,l.useState)(!1),c=t.frontMatter.authors.map((e=>e.name)).join(", ");return l.createElement("div",{className:"blog-item w-full md:w-1/2 lg:w-1/3 p-4"},l.createElement("div",{className:`transition-all duration-300 hover:shadow-2xl shadow ${a&&"focused"}`},l.createElement(n.rU,{to:t.metadata.permalink,title:t.metadata.title,onFocus:()=>s(!0),onBlur:()=>s(!1),style:{textDecoration:"none"}},l.createElement("div",{className:"image"},t.assets.image?l.createElement("img",{src:t.assets.image,alt:"",className:"w-full"}):l.createElement("img",{src:t.frontMatter.image,alt:"",className:"w-full"})),l.createElement("div",{className:"p-4 py-3"},l.createElement("h4",{className:"text-3xl pt-1"},t.frontMatter.title),l.createElement("div",{className:"flex items-center text-color-default"},l.createElement(r.Z,{className:"stroke-current"}),l.createElement("small",{className:"pl-2 font-sans"},(0,o._3)(t.metadata.date))),l.createElement("p",{className:"pt-3 text-color-default"},l.createElement("strong",null,l.createElement("small",{className:"font-sans"},c))),l.createElement("p",{className:"pt-3 text-color-default"},t.frontMatter.description)))))}},8709:(e,t,a)=>{a.d(t,{_3:()=>r,rU:()=>n});var l=a(7294);const n=e=>e.to?l.createElement("a",{href:e.to,className:"btn btn-primary mx-5"},e.children):l.createElement("button",e),r=e=>new Date(e).toLocaleDateString()},1407:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var l=a(7462),n=a(7294),r=a(5096),o=a(8709);const s=e=>{const{title:t,to:a,type:l,label:r,disabled:s}=e;let c=n.createElement(n.Fragment,null,e.iconLeft&&n.createElement("span",{className:"icon icon-left"},e.iconLeft),n.createElement("span",null,e.title),e.iconRight&&n.createElement("span",{className:"icon icon-right"},e.iconRight));if(l){const t=l.split(","),r=t[1]?t[1]:"button",i=void 0!==s&&s;if("button"===t[0])return n.createElement("button",{type:r,disabled:i,className:`btn btn-primary${i?" disabled":""}${e.className?" "+e.className:""}`},c);if("extbutton"===t[0])return console.log(c),n.createElement(o.rU,{to:a},n.createElement("button",{type:r,disabled:i,className:`btn btn-primary${i?" disabled":""}${e.className?" "+e.className:""}`},c))}return n.createElement(o.rU,{to:a,className:"btn btn-primary"+(e.className?" "+e.className:""),title:r||t},c)};var c=a(5526),i=a(4174),m=a(5697),p=a.n(m);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=(0,n.forwardRef)((function(e,t){var a=e.color,l=void 0===a?"currentColor":a,r=e.size,o=void 0===r?24:r,s=u(e,["color","size"]);return n.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),n.createElement("polyline",{points:"12 5 19 12 12 19"}))}));g.propTypes={color:p().string,size:p().oneOfType([p().string,p().number])},g.displayName="ArrowRight";const f=g;var h=a(1140);function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},x.apply(this,arguments)}function y(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=(0,n.forwardRef)((function(e,t){var a=e.color,l=void 0===a?"currentColor":a,r=e.size,o=void 0===r?24:r,s=y(e,["color","size"]);return n.createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("path",{d:"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"}),n.createElement("path",{d:"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),n.createElement("path",{d:"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"}),n.createElement("path",{d:"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"}),n.createElement("path",{d:"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"}),n.createElement("path",{d:"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"}),n.createElement("path",{d:"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"}),n.createElement("path",{d:"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"}))}));b.propTypes={color:p().string,size:p().oneOfType([p().string,p().number])},b.displayName="Slack";const E=b;function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},v.apply(this,arguments)}function w(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var N=(0,n.forwardRef)((function(e,t){var a=e.color,l=void 0===a?"currentColor":a,r=e.size,o=void 0===r?24:r,s=w(e,["color","size"]);return n.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),n.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));N.propTypes={color:p().string,size:p().oneOfType([p().string,p().number])},N.displayName="Inbox";const k=N;function O(e){let{recentPosts:t}=e;const a=t.map(((e,t)=>n.createElement(c.Z,{data:e.content,key:`b-item-index-${t}`})));return n.createElement(r.Z,{title:"Home",description:"Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used."},n.createElement("div",{className:"bg-bg"},n.createElement(j,null),n.createElement(S,null),n.createElement(C,null),n.createElement(L,null),n.createElement(z,null),n.createElement(P,null,a),n.createElement(i.Z,null)))}const j=e=>{let{twoColumnWall:t=!1,capitalizeTitleOnHome:a=!1}=e;const r=(0,n.useRef)(null),o="/img/background.svg",[c,i]=(0,n.useState)({loaded:!1,supportsBlend:!1});(0,n.useEffect)((()=>{window.CSS&&!c.loaded&&CSS.supports("mix-blend-mode","screen")&&(r.current.classList.add("supports-blend"),i({loaded:!0,supportsBlend:!0}))}),[c.loaded]);let m={};t||(m.style={backgroundImage:`url('${o}')`,height:"35em",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"});const p=n.createElement(n.Fragment,null,n.createElement("div",{className:"title"},n.createElement("h1",{className:"text-6xl relative mt-20 lg:text-7xl "+(a?"uppercase":"")},"OpenLineage")),n.createElement("p",{className:"text-lg lg:text-xl text-color-3 uppercase pt-4 lg:pt-0"},"An open framework for data lineage collection and analysis"),n.createElement("p",{className:"text-base text-color-4 boxed lg:text-lg mt-4"},"Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used."),n.createElement("span",{className:"py-5"},n.createElement(s,{title:"Get Started",to:"/getting-started",type:"link",iconRight:n.createElement(f,null),className:"mx-5"})));return t?n.createElement("div",{className:"wall h-screen flex relative justify-center items-center overflow-hidden",ref:r},n.createElement("div",{className:"flex-1 lg:block absolute lg:relative w-full h-full top-0 left-0"},n.createElement("div",{className:"absolute left-0 top-0 w-full h-full lg:hidden",style:{background:"rgba(0,0,0,.75)"}}),n.createElement("img",{src:o,alt:"",className:"h-full w-auto max-w-none lg:h-auto lg:w-full"})),n.createElement("div",{className:"flex-1 text-center p-3 relative z-10 lg:text-left lg:pl-8 text-white lg:text-color-default"},p)):n.createElement("div",(0,l.Z)({className:"wall flex flex-col justify-center items-center text-center mb-12"},m,{ref:r}),p)},S=()=>{let e={style:{margin:"0 auto"}};return n.createElement("div",{className:"boxed"},n.createElement("div",{className:"px-4 py-12 text-center lg:py-14 lg:px-0"},n.createElement("h2",{className:"text-color-1 text-3xl lg:text-4xl"},"About the Project"),n.createElement("p",{className:"mt-5 text-lg"},"OpenLineage is an open platform for collection and analysis of data lineage. It tracks metadata about datasets, jobs, and runs, giving users the information required to identify the root cause of complex issues and understand the impact of changes. OpenLineage contains an open standard for lineage data collection, a metadata repository reference implementation (Marquez), libraries for common languages, and integrations with data pipeline tools."),n.createElement("img",(0,l.Z)({src:"/img/ol-stack.svg",alt:""},e,{className:"h-full w-4/5 max-w-none lg:h-auto lg:w-4/5 py-3 pt-6 mb-6"})),n.createElement("p",{className:"mt-5 text-lg py-3"},"At the core of OpenLineage is a standard API for capturing lineage events. Pipeline components - like schedulers, warehouses, analysis tools, and SQL engines - can use this API to send data about runs, jobs, and datasets to a compatible OpenLineage backend for further study."),n.createElement(s,{title:"Read the javadoc",className:"mx-3",to:"/apidocs/javadoc",type:"link",iconRight:n.createElement(f,null)}),n.createElement(s,{title:"Read the openapi doc",className:"mx-3",to:"/apidocs/openapi",type:"link",iconRight:n.createElement(f,null)})))},L=()=>n.createElement("div",{className:"boxed bg-bgalt mb-24"},n.createElement("div",{className:"px-4 py-12 text-center lg:py-14"},n.createElement("h2",{className:"text-color-1 text-3xl lg:text-4xl"},"How to Participate"),n.createElement("p",{className:"mt-5 text-lg py-3"},"OpenLineage is an open spec, and we welcome feedback from users and vendors alike. We have a Slack community where you can engage directly with members of the project, ask questions, and share your experiences. We also run a monthly open meeting of the Technical Steering Committee where we share project updates and engage in open discussion."),n.createElement(s,{title:"Slack",to:"https://bit.ly/OpenLineageSlack",type:"extbutton",iconRight:n.createElement(E,null),className:"mx-5"}),n.createElement(s,{title:"TSC Meetings",className:"mx-3",to:"/meetings",type:"link",iconRight:n.createElement(h.Z,null)}))),z=()=>n.createElement("div",{className:"boxed bg-bgalt"},n.createElement("div",{className:"px-4 py-12 text-center lg:py-14"},n.createElement("h2",{className:"text-color-1 text-3xl lg:text-4xl"},"How to Get the Newsletter"),n.createElement("p",{className:"mt-5 text-lg py-3"},"Stay abreast of the latest developments in the community by subscribing to the monthly newsletter."),n.createElement(s,{title:"Sign up",to:"https://bit.ly/OL_news",type:"link",iconRight:n.createElement(k,null),className:"mx-5"}),n.createElement(s,{title:"Archive",to:"https://bit.ly/OL_news_archive",type:"link",iconRight:n.createElement(k,null),className:"mx-5"}))),C=()=>{let e={style:{margin:"0 auto"}};return n.createElement("div",{className:"boxed bg-bgalt mb-24"},n.createElement("div",{className:"px-4 py-12 text-center lg:py-14"},n.createElement("h2",{className:"text-color-1 text-3xl lg:text-4xl"},"How to Deploy OpenLineage"),n.createElement("p",{className:"mt-5 text-lg py-3"},"OpenLineage supports both simple deployments with single consumers and complex deployments with multiple consumers."),n.createElement("h3",{className:"text-color-1 text-2xl lg:text-3xl"},"Simple"),n.createElement("img",(0,l.Z)({src:"/img/simple-deployments.png",alt:"wireframes of simple deployments"},e,{className:"h-full w-4/5 max-w-none lg:h-auto lg:w-4/5 py-3 pt-6 mb-6"})),n.createElement("h3",{className:"text-color-1 text-2xl lg:text-3xl"},"Complex"),n.createElement("img",(0,l.Z)({src:"/img/complex-deployments.png",alt:"wireframe of a complex deployment"},e,{className:"h-full w-4/5 max-w-none lg:h-auto lg:w-4/5 py-3 pt-6 mb-6"}))))},P=e=>{let{children:t}=e;return n.createElement("div",{className:"container mx-auto px-0 pb-40"},n.createElement("div",{className:"px-4 py-12 text-center lg:py-14 lg:px-0"},n.createElement("h2",{className:"text-color-1 text-5xl lg:text-6xl"},"Blog")),n.createElement("div",{className:"flex flex-wrap"},t))}},1140:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(5697),r=a.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=(0,l.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,c=void 0===r?24:r,i=s(e,["color","size"]);return l.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),l.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));c.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},c.displayName="Calendar";const i=c}}]);