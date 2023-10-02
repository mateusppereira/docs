"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(87462),i=(r(67294),r(3905));const n={title:"0.4.0",sidebar_position:37},o="0.4.0 - 2021-12-13",l={unversionedId:"releases/0_4_0",id:"releases/0_4_0",title:"0.4.0",description:"Added",source:"@site/docs/releases/0_4_0.md",sourceDirName:"releases",slug:"/releases/0_4_0",permalink:"/docs/releases/0_4_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_4_0.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{title:"0.4.0",sidebar_position:37},sidebar:"tutorialSidebar",previous:{title:"0.5.1",permalink:"/docs/releases/0_5_1"},next:{title:"0.3.1",permalink:"/docs/releases/0_3_1"}},s={},p=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"040---2021-12-13"},"0.4.0 - 2021-12-13"),(0,i.kt)("h3",{id:"added"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Spark output metrics ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OleksandrDvornik"},"@OleksandrDvornik")),(0,i.kt)("li",{parentName:"ul"},"Separated tests between Spark 2 & 3 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,i.kt)("li",{parentName:"ul"},"Databricks install README and init scripts ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wjohnson"},"@wjohnson")),(0,i.kt)("li",{parentName:"ul"},"Iceberg integration with unit tests ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,i.kt)("li",{parentName:"ul"},"Kafka read and write support ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OleksandrDvornik"},"@OleksandrDvornik")," / ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike")),(0,i.kt)("li",{parentName:"ul"},"Arbitrary parameters supported in HTTP URL construction ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wjohnson"},"@wjohnson")),(0,i.kt)("li",{parentName:"ul"},"Increased visitor coverage for Spark commands ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")," / ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"))),(0,i.kt)("h3",{id:"fixed"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dbt: column descriptions are properly filled from metadata.json ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,i.kt)("li",{parentName:"ul"},"dbt: allow parsing artifacts with version higher than officially supported  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,i.kt)("li",{parentName:"ul"},"dbt: dbt build command is supported  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,i.kt)("li",{parentName:"ul"},"dbt: fix crash when build command is used with seeds in dbt 1.0.0rc3 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,i.kt)("li",{parentName:"ul"},"spark: increase logical plan visitor coverage ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")," "),(0,i.kt)("li",{parentName:"ul"},"spark: fix logical serialization recursion issue ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OleksandrDvornik"},"@OleksandrDvornik")),(0,i.kt)("li",{parentName:"ul"},"Use URL#getFile to fix build on Windows ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"))))}u.isMDXComponent=!0}}]);