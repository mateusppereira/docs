"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=i,h=u["".concat(o,".").concat(d)]||u[d]||c[d]||r;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83515:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={title:"0.17.0",sidebar_position:18},l="0.17.0 - 2022-11-16",p={unversionedId:"releases/0_17_0",id:"releases/0_17_0",title:"0.17.0",description:"Added",source:"@site/docs/releases/0_17_0.md",sourceDirName:"releases",slug:"/releases/0_17_0",permalink:"/docs/releases/0_17_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_17_0.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"0.17.0",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"0.18.0",permalink:"/docs/releases/0_18_0"},next:{title:"0.16.1",permalink:"/docs/releases/0_16_1"}},o={},s=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Removed",id:"removed",level:3}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0170---2022-11-16"},"0.17.0 - 2022-11-16"),(0,i.kt)("h3",{id:"added"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Spark: support latest Spark 3.3.1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1183"},(0,i.kt)("inlineCode",{parentName:"a"},"#1183"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds support for the latest version of Spark.")),(0,i.kt)("li",{parentName:"ul"},"Spark: add Kinesis Transport and support config Kinesis in Spark integration ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1200"},(0,i.kt)("inlineCode",{parentName:"a"},"#1200"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/yogyang"},"@yogayang"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds support for sending to Kinesis from the Spark integration.")," "),(0,i.kt)("li",{parentName:"ul"},"Spark: Disable specified facets ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1271"},(0,i.kt)("inlineCode",{parentName:"a"},"#1271"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds the ability to disable specified facets from generated OpenLineage events.")),(0,i.kt)("li",{parentName:"ul"},"Python: add facets implementation to Python client ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1233"},(0,i.kt)("inlineCode",{parentName:"a"},"#1233"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds missing facets to the Python client.")),(0,i.kt)("li",{parentName:"ul"},"SQL: add Rust parser interface ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1172"},(0,i.kt)("inlineCode",{parentName:"a"},"#1172"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/StarostaGit"},"@StarostaGit")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Implements a Java interface in the Rust SQL parser, including a build script, native library loading mechanism, CI support and build fixes.")),(0,i.kt)("li",{parentName:"ul"},"Proxy: add helm chart for the proxy backed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1068"},(0,i.kt)("inlineCode",{parentName:"a"},"#1068"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wslulciuc"},"@wslulciuc"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds a helm chart for deploying the proxy backend on Kubernetes.")),(0,i.kt)("li",{parentName:"ul"},"Spec: include possible facets usage in spec ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1249"},(0,i.kt)("inlineCode",{parentName:"a"},"#1249"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Extends the ",(0,i.kt)("inlineCode",{parentName:"em"},"facets")," definition with a list of available facets.")),(0,i.kt)("li",{parentName:"ul"},"Website: publish YML version of spec to website ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1300"},(0,i.kt)("inlineCode",{parentName:"a"},"#1300"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rossturk"},"@rossturk"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds configuration necessary to make the OpenLineage website auto-generate openAPI docs when the spec is published there.")),(0,i.kt)("li",{parentName:"ul"},"Docs: update language on nominating new committers ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1270"},(0,i.kt)("inlineCode",{parentName:"a"},"#1270"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rossturk"},"@rossturk"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Updates the governance language to reflect the new policy on nominating committers."))),(0,i.kt)("h3",{id:"changed"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Website: publish spec into new website repo location ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1295"},(0,i.kt)("inlineCode",{parentName:"a"},"#1295"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rossturk"},"@rossturk"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Creates a new deploy key, adds it to CircleCI & GitHub, and makes the necessary changes to the ",(0,i.kt)("inlineCode",{parentName:"em"},"release.sh")," script.")),(0,i.kt)("li",{parentName:"ul"},"Airflow: change how pip installs packages in tox environments ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1302"},(0,i.kt)("inlineCode",{parentName:"a"},"#1302"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Use deprecated resolver and constraints files provided by Airflow to avoid potential issues caused by pip's new resolver."))),(0,i.kt)("h3",{id:"fixed"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Airflow: fix README for running integration test ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1238"},(0,i.kt)("inlineCode",{parentName:"a"},"#1238"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sekikn"},"@sekikn"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Updates the README for consistency with supported Airflow versions.")),(0,i.kt)("li",{parentName:"ul"},"Airflow: add ",(0,i.kt)("inlineCode",{parentName:"li"},"task_instance")," argument to ",(0,i.kt)("inlineCode",{parentName:"li"},"get_openlineage_facets_on_complete")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1269"},(0,i.kt)("inlineCode",{parentName:"a"},"#1269"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds the ",(0,i.kt)("inlineCode",{parentName:"em"},"task_instance")," argument to ",(0,i.kt)("inlineCode",{parentName:"em"},"DefaultExtractor"),".")),(0,i.kt)("li",{parentName:"ul"},"Java client: fix up all artifactory paths ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1290"},(0,i.kt)("inlineCode",{parentName:"a"},"#1290"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/harels"},"@harels"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Not all artifactory paths were changed in the build CI script in a previous PR.")),(0,i.kt)("li",{parentName:"ul"},"Python client: fix Mypy errors and adjust to PEP 484 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1264"},(0,i.kt)("inlineCode",{parentName:"a"},"#1264"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds a ",(0,i.kt)("inlineCode",{parentName:"em"},"--no-namespace-packages")," argument to the Mypy command and adjusts code to PEP 484.")),(0,i.kt)("li",{parentName:"ul"},"Website: release all specs since ",(0,i.kt)("inlineCode",{parentName:"li"},"last_spec_commit_id"),", not just HEAD~1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1298"},(0,i.kt)("inlineCode",{parentName:"a"},"#1298"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rossturk"},"@rossturk"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"The script now ships all specs that have changed since ",(0,i.kt)("inlineCode",{parentName:"em"},".last_spec_commit_id"),"."))),(0,i.kt)("h3",{id:"removed"},"Removed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deprecate HttpTransport.Builder in favor of HttpConfig ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1287"},(0,i.kt)("inlineCode",{parentName:"a"},"#1287"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Deprecates the Builder in favor of HttpConfig only and replaces the existing Builder implementation by delegating to the HttpConfig."))))}c.isMDXComponent=!0}}]);