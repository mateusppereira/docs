"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"0.25.0",sidebar_position:9},l="0.25.0 - 2023-05-15",o={unversionedId:"releases/0_25_0",id:"releases/0_25_0",title:"0.25.0",description:"Added",source:"@site/docs/releases/0_25_0.md",sourceDirName:"releases",slug:"/releases/0_25_0",permalink:"/docs/releases/0_25_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_25_0.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"0.25.0",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"0.26.0",permalink:"/docs/releases/0_26_0"},next:{title:"0.24.0",permalink:"/docs/releases/0_24_0"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0250---2023-05-15"},"0.25.0 - 2023-05-15"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spark: add Spark/Delta ",(0,a.kt)("inlineCode",{parentName:"strong"},"merge into")," support")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1823"},(0,a.kt)("inlineCode",{parentName:"a"},"#1823"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Adds support for ",(0,a.kt)("inlineCode",{parentName:"em"},"merge into")," queries."))),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spark: fix JDBC query handling")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1808"},(0,a.kt)("inlineCode",{parentName:"a"},"#1808"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nataliezeller1"},"@nataliezeller1"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Makes query handling more tolerant of variations in syntax and formatting.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spark: filter Delta adaptive plan events")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1830"},(0,a.kt)("inlineCode",{parentName:"a"},"#1830"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Extends the ",(0,a.kt)("inlineCode",{parentName:"em"},"DeltaEventFilter")," class to filter events in cases where rewritten queries in adaptive Spark plans generate extra events.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spark: fix Java class cast exception")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1844"},(0,a.kt)("inlineCode",{parentName:"a"},"#1844"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Anirudh181001"},"@Anirudh181001"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Fixes the error caused by the ",(0,a.kt)("inlineCode",{parentName:"em"},"OpenLineageRunEventBuilder")," when it cast the Spark scheduler's ",(0,a.kt)("inlineCode",{parentName:"em"},"ShuffleMapStage")," to boolean.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flink: include missing fields of Openlineage events")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1840"},(0,a.kt)("inlineCode",{parentName:"a"},"#1840"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,a.kt)("em",{parentName:"li"},"Enriches Flink events so that missing ",(0,a.kt)("inlineCode",{parentName:"em"},"eventTime"),", ",(0,a.kt)("inlineCode",{parentName:"em"},"runId")," and ",(0,a.kt)("inlineCode",{parentName:"em"},"job")," elements no longer produce errors."))))}c.isMDXComponent=!0}}]);