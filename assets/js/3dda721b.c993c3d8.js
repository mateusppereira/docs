"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5108],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={title:"0.6.1",sidebar_position:36},a="0.6.1 - 2022-03-07",s={unversionedId:"releases/0_6_1",id:"releases/0_6_1",title:"0.6.1",description:"Fixed",source:"@site/docs/releases/0_6_1.md",sourceDirName:"releases",slug:"/releases/0_6_1",permalink:"/docs/releases/0_6_1",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_6_1.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{title:"0.6.1",sidebar_position:36},sidebar:"tutorialSidebar",previous:{title:"0.6.2",permalink:"/docs/releases/0_6_2"},next:{title:"0.6.0",permalink:"/docs/releases/0_6_0"}},c={},l=[{value:"Fixed",id:"fixed",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"061---2022-03-07"},"0.6.1 - 2022-03-07"),(0,o.kt)("h3",{id:"fixed"},"Fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Catch possible failures when emitting events and log them ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,o.kt)("li",{parentName:"ul"},"dbt: jinja2 code using do extensions does not crash ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"))))}u.isMDXComponent=!0}}]);