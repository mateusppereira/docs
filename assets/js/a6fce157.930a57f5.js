"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,title:"Using the Airflow integration"},o=void 0,l={unversionedId:"integrations/airflow/usage",id:"integrations/airflow/usage",title:"Using the Airflow integration",description:"PREREQUISITES",source:"@site/docs/integrations/airflow/usage.md",sourceDirName:"integrations/airflow",slug:"/integrations/airflow/usage",permalink:"/docs/integrations/airflow/usage",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/airflow/usage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Using the Airflow integration"},sidebar:"tutorialSidebar",previous:{title:"Apache Airflow",permalink:"/docs/integrations/airflow/"},next:{title:"Exposing lineage in Airflow operators",permalink:"/docs/integrations/airflow/default-extractors"}},s={},p=[{value:"PREREQUISITES",id:"prerequisites",level:4},{value:"INSTALLATION",id:"installation",level:4},{value:"CONFIGURATION",id:"configuration",level:4},{value:"Environment Variables",id:"environment-variables",level:3},{value:"USAGE",id:"usage",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"prerequisites"},"PREREQUISITES"),(0,r.kt)("p",null,"To use the OpenLineage Airflow integration, you'll need a running ",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/start.html"},"Airflow instance"),". You'll also need an OpenLineage-compatible ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage#scope"},"backend"),"."),(0,r.kt)("h4",{id:"installation"},"INSTALLATION"),(0,r.kt)("p",null,"To download and install the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"openlineage-airflow")," library, update the ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file of your running Airflow instance with: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"openlineage-airflow\n")),(0,r.kt)("h4",{id:"configuration"},"CONFIGURATION"),(0,r.kt)("p",null,"Next, specify where you want OpenLineage to send events. There are a few options.\nThe simplest one is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENLINEAGE_URL")," environment variable.\nFor example, to send OpenLineage events to a local instance of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez"},"Marquez"),", use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OPENLINEAGE_URL=http://localhost:5000\n")),(0,r.kt)("p",null,"To set up an additional configuration, or to send events to targets other than an HTTP server (e.g., a Kafka topic), ",(0,r.kt)("a",{parentName:"p",href:"/docs/client/python"},"configure a client.")),(0,r.kt)("p",null,"If you use a version of Airflow older than 2.3.0, ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrations/airflow/older"},"additional configuration is required"),"."),(0,r.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"The following environment variables are available specifically for the Airflow integration."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Since"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OPENLINEAGE_AIRFLOW_DISABLE_SOURCE_CODE"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"False")," if you want source code of callables provided in PythonOperator or BashOperator ",(0,r.kt)("inlineCode",{parentName:"td"},"NOT")," to be included in OpenLineage events."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OPENLINEAGE_EXTRACTORS"),(0,r.kt)("td",{parentName:"tr",align:null},"The optional list of extractors class in case you need to use custom extractors.",(0,r.kt)("br",null),"For example: ",(0,r.kt)("inlineCode",{parentName:"td"},"OPENLINEAGE_EXTRACTORS=full.path.to.ExtractorClass;full.path.to.AnotherExtractorClass")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OPENLINEAGE_NAMESPACE"),(0,r.kt)("td",{parentName:"tr",align:null},"The optional namespace that the lineage data belongs to. If not specified, defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"default"),"."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"usage"},"USAGE"),(0,r.kt)("p",null,"When enabled, the integration will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On TaskInstance ",(0,r.kt)("strong",{parentName:"li"},"start"),", collect metadata for each task."),(0,r.kt)("li",{parentName:"ul"},"Collect task input / output metadata (source, schema, etc.)."),(0,r.kt)("li",{parentName:"ul"},"Collect task run-level metadata (execution time, state, parameters, etc.)"),(0,r.kt)("li",{parentName:"ul"},"On TaskInstance ",(0,r.kt)("strong",{parentName:"li"},"complete"),", also mark the task as complete in Marquez.")))}c.isMDXComponent=!0}}]);