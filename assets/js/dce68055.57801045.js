"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"OpenLineage 1.0, Featuring Static Lineage, is Coming Soon",date:new Date("2023-07-18T00:00:00.000Z"),authors:["Robinson"],description:"The release of OpenLineage 1.0 will add static lineage support."},o=void 0,s={permalink:"/blog/static-lineage",source:"@site/blog/static-lineage/index.mdx",title:"OpenLineage 1.0, Featuring Static Lineage, is Coming Soon",description:"The release of OpenLineage 1.0 will add static lineage support.",date:"2023-07-18T00:00:00.000Z",formattedDate:"July 18, 2023",tags:[],readingTime:2.285,hasTruncateMarker:!0,authors:[{name:"Michael Robinson",title:"Marquez Community Manager",url:"https://github.com/merobi-hub",imageURL:"https://github.com/merobi-hub.png",key:"Robinson"}],frontMatter:{title:"OpenLineage 1.0, Featuring Static Lineage, is Coming Soon",date:"2023-07-18T00:00:00.000Z",authors:["Robinson"],description:"The release of OpenLineage 1.0 will add static lineage support."},prevItem:{title:"Meet Us in San Francisco on August 30th!",permalink:"/blog/sf-meetup-2"},nextItem:{title:"Join us in New York on June 22nd",permalink:"/blog/nyc-collibra-meetup"}},l={authorsImageUrls:[void 0]},p=[{value:"Static, AKA &quot;Design,&quot; Lineage is Coming Soon",id:"static-aka-design-lineage-is-coming-soon",level:3},{value:"What is Static Lineage?",id:"what-is-static-lineage",level:4},{value:"What Use Cases are Served by Static Lineage?",id:"what-use-cases-are-served-by-static-lineage",level:4},{value:"Implementation Details",id:"implementation-details",level:4},{value:"More Information",id:"more-information",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The first major release of OpenLineage, 1.0, will add static lineage support."),(0,i.kt)("h3",{id:"static-aka-design-lineage-is-coming-soon"},'Static, AKA "Design," Lineage is Coming Soon'),(0,i.kt)("p",null,"OpenLineage 1.0, which is expected early in August, will add support for static lineage to the project."),(0,i.kt)("p",null,'An initiative to add the provision of static lineage, sometimes also called "design" or "design-time" lineage, to OpenLineage came out of conversations with community members at Collibra, Manta and Marquez.'),(0,i.kt)("p",null,"Data catalogs like those offered by Collibra and Manta will benefit from static lineage support, but so will other users. In one way, this addition represents an exciting new chapter in the history of the project. In another, it represents a return to our roots. Before OpenLineage focused on operational lineage, it supported a form of static lineage."),(0,i.kt)("h4",{id:"what-is-static-lineage"},"What is Static Lineage?"),(0,i.kt)("p",null,'OpenLineage has traditionally supported only operational, or "runtime," lineage -- metadata emitted when jobs run. In other words, OpenLineage has been engineered to capture information as transformations of datasets are happening, enabling precise descriptions of those transformations.'),(0,i.kt)("p",null,"As part of this process, OpenLineage has nonetheless also captured some static metadata -- specifically, information about jobs (such as the current version of the code) and datasets (such as the schema)."),(0,i.kt)("p",null,"What was called for was a way to collect such static metadata outside of the run context. "),(0,i.kt)("h4",{id:"what-use-cases-are-served-by-static-lineage"},"What Use Cases are Served by Static Lineage?"),(0,i.kt)("p",null,"Use cases include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bootstrapping of a lineage graph with prospective runs for auditing"),(0,i.kt)("li",{parentName:"ul"},"capturing dataset ownership changes "),(0,i.kt)("li",{parentName:"ul"},"consuming facets from external systems"),(0,i.kt)("li",{parentName:"ul"},"creating dataset symlinks more easily")),(0,i.kt)("h4",{id:"implementation-details"},"Implementation Details"),(0,i.kt)("p",null,"In order to add static lineage to the spec, two new event types were proposed: ",(0,i.kt)("inlineCode",{parentName:"p"},"DatasetEvent")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"JobEvent"),"."),(0,i.kt)("p",null,"These new events will add facets at a point in time that will apply to an entity until a new version of the same facet is produced. "),(0,i.kt)("p",null,"The first step in implementing static lineage was completed with the release of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/releases/tag/0.29.2"},"OpenLineage 0.29.2"),', which included two types in the spec for "runless" metadata: a ',(0,i.kt)("inlineCode",{parentName:"p"},"DatasetEvent")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"JobEvent")," (along with support for the new types in the Python client)."),(0,i.kt)("p",null,"The next steps will include changing the event lifecycle (from running to complete, failed, or aborted) to handle events of the new types, and adding facet deletion to handle the case in which a user adds and deletes a dataset in the same request."),(0,i.kt)("p",null,"Adding support for static lineage in Marquez is also ongoing, and we are excited about the progress there. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/releases/tag/0.37.0"},"Marquez 0.37.0")," includes support in the API for decoding static events via a new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/pull/2495"},(0,i.kt)("inlineCode",{parentName:"a"},"EventTypeResolver")),"."),(0,i.kt)("h4",{id:"more-information"},"More Information"),(0,i.kt)("p",null,"For more details including the code changes, see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/blob/main/proposals/1837/static_lineage.md"},"static lineage proposal")," by Julien Le Dem, Maciej Obuchowski, Benji Lampel and Ross Turk "),(0,i.kt)("li",{parentName:"ul"},"the initial ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1880"},"pull request")," by Pawe\u0142 Leszczy\u0144ski")))}u.isMDXComponent=!0}}]);