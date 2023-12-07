"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6743],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(o),d=n,b=f["".concat(i,".").concat(d)]||f[d]||l[d]||c;return o?r.createElement(b,a(a({ref:t},u),{},{components:o})):r.createElement(b,a({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=o.length,a=new Array(c);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<c;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},27061:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const c={sidebar_position:4},a="Source Code Location Facet",s={unversionedId:"spec/facets/job-facets/source-code-location",id:"spec/facets/job-facets/source-code-location",title:"Source Code Location Facet",description:"The facet that indicates where the source code is located.",source:"@site/docs/spec/facets/job-facets/source-code-location.md",sourceDirName:"spec/facets/job-facets",slug:"/spec/facets/job-facets/source-code-location",permalink:"/docs/spec/facets/job-facets/source-code-location",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/spec/facets/job-facets/source-code-location.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Source Code Facet",permalink:"/docs/spec/facets/job-facets/source-code"},next:{title:"SQL Job Facet",permalink:"/docs/spec/facets/job-facets/sql"}},i={},p=[],u={toc:p};function l(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"source-code-location-facet"},"Source Code Location Facet"),(0,n.kt)("p",null,"The facet that indicates where the source code is located."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "job": {\n        "facets": {\n            "sourceCodeLocation": {\n                "_producer": "https://some.producer.com/version/1.0",\n                "_schemaURL": "https://github.com/OpenLineage/OpenLineage/blob/main/spec/facets/SourceCodeLocationJobFacet.json",\n                "type": "git|svn",\n                "url": "https://github.com/MarquezProject/marquez-airflow-quickstart/blob/693e35482bc2e526ced2b5f9f76ef83dec6ec691/dags/hello.py",\n                "repoUrl": "git@github.com:{org}/{repo}.git or https://github.com/{org}/{repo}.git|svn://<your_ip>/<repository_name>",\n                "path": "path/to/my/dags",\n                "version": "git: the git sha | Svn: the revision number",\n                "tag": "example",\n                "branch" "main"\n            }\n        }\n    }\n    ...\n}\n')),(0,n.kt)("p",null,"The facet specification can be found ",(0,n.kt)("a",{parentName:"p",href:"https://openlineage.io/spec/facets/1-0-0/SourceCodeLocationJobFacet.json"},"here")))}l.isMDXComponent=!0}}]);