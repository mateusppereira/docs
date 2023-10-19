"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),d=c,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function d(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:c,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(7462),c=(a(7294),a(3905));const r={sidebar_position:4},s="Lifecycle State Change Facet",o={unversionedId:"spec/facets/dataset-facets/lifecycle_state_change",id:"spec/facets/dataset-facets/lifecycle_state_change",title:"Lifecycle State Change Facet",description:"Example:",source:"@site/docs/spec/facets/dataset-facets/lifecycle_state_change.md",sourceDirName:"spec/facets/dataset-facets",slug:"/spec/facets/dataset-facets/lifecycle_state_change",permalink:"/docs/spec/facets/dataset-facets/lifecycle_state_change",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/spec/facets/dataset-facets/lifecycle_state_change.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data Quality Assertions Facet",permalink:"/docs/spec/facets/dataset-facets/data_quality_assertions"},next:{title:"Ownership Dataset Facet",permalink:"/docs/spec/facets/dataset-facets/ownership"}},i={},l=[],p={toc:l};function f(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"lifecycle-state-change-facet"},"Lifecycle State Change Facet"),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "outputs": {\n        "facets": {\n            "lifecycleStateChange": {\n                "_producer": "https://some.producer.com/version/1.0",\n                "_schemaURL": "https://openlineage.io/spec/facets/1-0-0/LifecycleStateChangeDatasetFacet.json",\n                "lifecycleStateChange": "CREATE"\n            }\n        }\n    }\n    ...\n}\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "outputs": {\n        "facets": {\n            "lifecycleStateChange": {\n                "_producer": "https://some.producer.com/version/1.0",\n                "_schemaURL": "https://openlineage.io/spec/facets/1-0-0/LifecycleStateChangeDatasetFacet.json",\n                "lifecycleStateChange": "RENAME",\n                "previousIdentifier": {\n                    "namespace": "example_namespace",\n                    "name": "example_table_1"\n                }\n            }\n        }\n    }\n    ...\n}\n')),(0,c.kt)("p",null,"The facet specification can be found ",(0,c.kt)("a",{parentName:"p",href:"https://openlineage.io/spec/facets/1-0-0/LifecycleStateChangeDatasetFacet.json"},"here"),"."))}f.isMDXComponent=!0}}]);