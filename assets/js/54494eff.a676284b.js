"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},o="The Run Cycle",l={unversionedId:"spec/run-cycle",id:"spec/run-cycle",title:"The Run Cycle",description:"The OpenLineage object model is event-based and updates provide an OpenLineage backend with details about the activities of a Job.",source:"@site/docs/spec/run-cycle.md",sourceDirName:"spec",slug:"/spec/run-cycle",permalink:"/docs/spec/run-cycle",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/spec/run-cycle.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Naming Conventions",permalink:"/docs/spec/naming"},next:{title:"Facets & Extensibility",permalink:"/docs/spec/facets/"}},s={},p=[{value:"Run States",id:"run-states",level:2},{value:"Typical Scenarios",id:"typical-scenarios",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-run-cycle"},"The Run Cycle"),(0,i.kt)("p",null,"The OpenLineage ",(0,i.kt)("a",{parentName:"p",href:"/docs/spec/object-model"},"object model")," is event-based and updates provide an OpenLineage backend with details about the activities of a Job."),(0,i.kt)("p",null,"The OpenLineage Run Cycle has several defined states that correspond to changes in the state of a pipeline task. When a task transitions between these - e.g. it is initiated, finishes, or fails - a Run State Update is sent that describes what happened."),(0,i.kt)("p",null,"Each Run State Update contains the run state (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"START"),") along with metadata about the Job, its current Run, and its input and output Datasets. It is common to add additional metadata throughout the lifecycle of the run as it becomes available."),(0,i.kt)("h2",{id:"run-states"},"Run States"),(0,i.kt)("p",null,"There are five run states currently defined in the OpenLineage ",(0,i.kt)("a",{parentName:"p",href:"https://openlineage.io/apidocs/openapi/"},"spec"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"START")," to indicate the beginning of a Job")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"RUNNING")," to provide additional information about a running Job")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"COMPLETE")," to signify that execution of the Job has concluded")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ABORT")," to signify that the Job has been stopped abnormally")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FAIL")," to signify that the Job has failed"))),(0,i.kt)("p",null,"We assume events describing a single run are accumulative and\n",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLETE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ABORT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FAIL")," are terminal events. Sending any of terminal events\nmeans no other events related to this run will be emitted. "),(0,i.kt)("p",null,"Additionally, we allow ",(0,i.kt)("inlineCode",{parentName:"p"},"OTHER")," to be sent anytime before the terminal states,\nalso before ",(0,i.kt)("inlineCode",{parentName:"p"},"START"),". The purpose of this is the agility to send additional\nmetadata outside standard run cycle - e.g., on a run that hasn't yet started\nbut is already awaiting the resources. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(3756).Z,width:"591",height:"201"})),(0,i.kt)("h2",{id:"typical-scenarios"},"Typical Scenarios"),(0,i.kt)("p",null,"A batch Job - e.g., an Airflow task or a dbt model - will typically be represented as a ",(0,i.kt)("inlineCode",{parentName:"p"},"START")," event followed by a ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLETE")," event. Occasionally, an ",(0,i.kt)("inlineCode",{parentName:"p"},"ABORT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"FAIL")," event will be sent when a job does not complete successfully."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(6784).Z,width:"814",height:"393"})),(0,i.kt)("p",null,"A long-running Job - e.g., a microservice or a stream - will typically be represented by a ",(0,i.kt)("inlineCode",{parentName:"p"},"START")," event followed by a series of ",(0,i.kt)("inlineCode",{parentName:"p"},"RUNNING")," events that report changes in the run or emit performace metrics. Occasionally, a ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLETE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ABORT"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"FAIL")," event will occur, often followed by a ",(0,i.kt)("inlineCode",{parentName:"p"},"START")," event as the job is reinitiated. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(1212).Z,width:"777",height:"342"})))}d.isMDXComponent=!0},6784:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-cycle-batch-0de3950dbf03051344c1fb3075736115.svg"},1212:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-cycle-stream-f402b61df8d0b7ac0eea99e988fa4e27.svg"},3756:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-life-cycle-1a4dba53c04cf3feb279e961da32dc8a.svg"}}]);