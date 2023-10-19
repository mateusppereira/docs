"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2807],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var o=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=o.createContext({}),l=function(t){var e=o.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return o.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||n;return r?o.createElement(h,i(i({ref:e},p),{},{components:r})):o.createElement(h,i({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4933:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));const n={title:"Using Marquez to Visualize dbt Models",date:new Date("2021-09-21T00:00:00.000Z"),authors:["Turk"],description:"Each time dbt runs, it generates a trove of metadata about datasets and the work it performs with them. In this post, I\u2019d like to show you how to harvest this metadata and put it to good use."},i=void 0,s={permalink:"/blog/dbt-with-marquez",source:"@site/blog/dbt-with-marquez/index.mdx",title:"Using Marquez to Visualize dbt Models",description:"Each time dbt runs, it generates a trove of metadata about datasets and the work it performs with them. In this post, I\u2019d like to show you how to harvest this metadata and put it to good use.",date:"2021-09-21T00:00:00.000Z",formattedDate:"September 21, 2021",tags:[],readingTime:10.095,hasTruncateMarker:!0,authors:[{name:"Ross Turk",title:"OpenLineage Committer",url:"https://www.github.com/rossturk",imageURL:"https://www.github.com/rossturk.png",key:"Turk"}],frontMatter:{title:"Using Marquez to Visualize dbt Models",date:"2021-09-21T00:00:00.000Z",authors:["Turk"],description:"Each time dbt runs, it generates a trove of metadata about datasets and the work it performs with them. In this post, I\u2019d like to show you how to harvest this metadata and put it to good use."},prevItem:{title:"How Northwestern Mutual Simplified Data Observability with OpenLineage & Marquez",permalink:"/blog/openlineage-at-northwestern-mutual"},nextItem:{title:"Introducing OpenLineage 0.1.0",permalink:"/blog/0.1-release"}},u={authorsImageUrls:[void 0]},l=[],p={toc:l};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each time dbt runs, it generates a trove of metadata about datasets and the work it performs with them. In this post, I\u2019d like to show you how to harvest this metadata and put it to good use."))}c.isMDXComponent=!0}}]);