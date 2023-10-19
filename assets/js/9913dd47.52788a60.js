"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"0.28.0",sidebar_position:8},o="0.28.0 - 2023-06-12",l={unversionedId:"releases/0_28_0",id:"releases/0_28_0",title:"0.28.0",description:"Added",source:"@site/docs/releases/0_28_0.md",sourceDirName:"releases",slug:"/releases/0_28_0",permalink:"/docs/releases/0_28_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_28_0.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"0.28.0",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"0.29.2",permalink:"/docs/releases/0_29_2"},next:{title:"0.27.2",permalink:"/docs/releases/0_27_2"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0280---2023-06-12"},"0.28.0 - 2023-06-12"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dbt: add Databricks compatibility")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1829"},(0,a.kt)("inlineCode",{parentName:"a"},"#1829"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Ines70"},"@Ines70"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Enables launching OpenLineage with a Databricks profile."))),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fix type-checked marker and packaging")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1913"},(0,a.kt)("inlineCode",{parentName:"a"},"#1913"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gaborbernat"},"@gaborbernat"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"The client was not marking itself as type-annotated.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Python client: add ",(0,a.kt)("inlineCode",{parentName:"strong"},"schemaURL")," to run event")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1917"},(0,a.kt)("inlineCode",{parentName:"a"},"#1917"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gaborbernat"},"@gaborbernat"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Adds the missing ",(0,a.kt)("inlineCode",{parentName:"em"},"schemaURL")," to the client's ",(0,a.kt)("inlineCode",{parentName:"em"},"RunState")," class."))))}d.isMDXComponent=!0}}]);