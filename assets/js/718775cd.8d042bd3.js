"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3158],{3905:(e,i,t)=>{t.d(i,{Zo:()=>c,kt:()=>u});var a=t(67294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function I(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,a,n=function(e,i){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var M=a.createContext({}),l=function(e){var i=a.useContext(M),t=i;return e&&(t="function"==typeof e?e(i):I(I({},i),e)),t},c=function(e){var i=l(e.components);return a.createElement(M.Provider,{value:i},e.children)},m={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},r=a.forwardRef((function(e,i){var t=e.components,n=e.mdxType,o=e.originalType,M=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),r=l(t),u=n,g=r["".concat(M,".").concat(u)]||r[u]||m[u]||o;return t?a.createElement(g,I(I({ref:i},c),{},{components:t})):a.createElement(g,I({ref:i},c))}));function u(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var o=t.length,I=new Array(o);I[0]=r;var s={};for(var M in i)hasOwnProperty.call(i,M)&&(s[M]=i[M]);s.originalType=e,s.mdxType="string"==typeof e?e:n,I[1]=s;for(var l=2;l<o;l++)I[l]=t[l];return a.createElement.apply(null,I)}return a.createElement.apply(null,t)}r.displayName="MDXCreateElement"},97547:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>M,contentTitle:()=>I,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),n=(t(67294),t(3905));const o={title:"Extending OpenLineage with Facets",date:new Date("2021-07-27T00:00:00.000Z"),authors:[{name:"Julien Le Dem",title:"OpenLineage Project Lead",url:"https://www.github.com/julienledem/"}],image:"./image.svg",banner:"./banner.svg",description:"Facets are a self-contained definition of one aspect of a job, dataset, or run at the time the event happened. They make the OpenLineage model extensible."},I=void 0,s={permalink:"/blog/extending-with-facets",source:"@site/blog/extending-with-facets/index.mdx",title:"Extending OpenLineage with Facets",description:"Facets are a self-contained definition of one aspect of a job, dataset, or run at the time the event happened. They make the OpenLineage model extensible.",date:"2021-07-27T00:00:00.000Z",formattedDate:"July 27, 2021",tags:[],readingTime:7.665,hasTruncateMarker:!0,authors:[{name:"Julien Le Dem",title:"OpenLineage Project Lead",url:"https://www.github.com/julienledem/"}],frontMatter:{title:"Extending OpenLineage with Facets",date:"2021-07-27T00:00:00.000Z",authors:[{name:"Julien Le Dem",title:"OpenLineage Project Lead",url:"https://www.github.com/julienledem/"}],image:"./image.svg",banner:"./banner.svg",description:"Facets are a self-contained definition of one aspect of a job, dataset, or run at the time the event happened. They make the OpenLineage model extensible."},prevItem:{title:"Expecting Great Quality with OpenLineage Facets",permalink:"/blog/dataquality_expectations_facet"},nextItem:{title:"OpenLineage joins the LF AI & Data Foundation",permalink:"/blog/joining-lfai"}},M={image:t(94655).Z,authorsImageUrls:[void 0]},l=[{value:"Open Source",id:"open-source",level:2},{value:"Making progress",id:"making-progress",level:2},{value:"Embracing different points of view",id:"embracing-different-points-of-view",level:2},{value:"Facets are individual atomic specs",id:"facets-are-individual-atomic-specs",level:2},{value:"Facets enable specialization of models",id:"facets-enable-specialization-of-models",level:2},{value:"Facets allow expressing different point of views",id:"facets-allow-expressing-different-point-of-views",level:2},{value:"Custom facets make the model decentralized",id:"custom-facets-make-the-model-decentralized",level:2}],c={toc:l};function m(e){let{components:i,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Facets are a self-contained definition of one aspect of a job, dataset, or run at the time the event happened. They make the OpenLineage model extensible."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(74952).Z+"#banner",width:"925",height:"201"})),(0,n.kt)("h1",{id:"building-consensus"},"Building consensus"),(0,n.kt)("p",null,"OpenLineage is an open source project, part of the LFAI&Data foundation, that standardizes lineage collection in the data ecosystem. In this increasingly rich ecosystem - that includes SQL-driven data warehouses, programmatic data processing frameworks like Spark or Pandas, and machine learning - it is near-impossible to maintain a clear and sane view of data lineage across everything without the collaboration of the ecosystem around a shared standard. Open source collaboration is a very powerful mechanism that can produce widely-adopted standard APIs."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://openlineage.io/blog/openlineage-takes-inspiration-from-opentelemetry/"},"OpenLineage draws a clear parallel with OpenTelemetry")," which provides a standard API to collect traces and metrics in the service world. It also draws from the experience of the Apache Parquet and Apache Arrow projects, which aim to define standard columnar data representations at-rest and in-memory."),(0,n.kt)("h2",{id:"open-source"},"Open Source"),(0,n.kt)("p",null,"Standardizing an API through open source collaboration can be challenging. On one end, you need to get input and feedback from the people who will use the API in different contexts. On the other, you want to avoid getting stuck in disagreements arising from the different and sometimes incompatible viewpoints that inevitably drive these discussions. Thankfully, there are mechanisms to help organize and decouple those disagreements and drive discussions towards conclusion."),(0,n.kt)("p",null,"A community driven open source project works very differently from a product you buy off the shelf. At the very moment you start using it - maybe starting by reading the doc - you become part of the community and start sharing a little bit of ownership. As with any software, you might encounter problems... but in this case, you immediately become part of the solution. In a healthy community, how much of the solution you become is entirely up to you."),(0,n.kt)("p",null,"Maybe you spotted a typo and reported it. Maybe you opened a pull request to fix it. You might propose an improvement, or even build one yourself. All of those contributions, no matter how small, make the project better for everyone. That very powerful flywheel motion gathers momentum and drives very successful open source projects."),(0,n.kt)("p",null,"One of the success factors of such an open source project is how much it can minimize the friction for new community members who want to contribute. The easier it is to contribute, the faster the project will acquire momentum. It\u2019s not about getting other people\u2019s input, it\u2019s about giving them a share of ownership and encouraging them to drive the areas where they can most effectively contribute."),(0,n.kt)("p",null,"In a multi-faceted domain like data lineage, enabling others to lead discussions is critical."),(0,n.kt)("h2",{id:"making-progress"},"Making progress"),(0,n.kt)("p",null,"In this context, we need mechanisms to converge often and make incremental progress. "),(0,n.kt)("p",null,"You definitely want to avoid having a big monolithic spec that takes a long time to reach consensus on - if you ever do. A discussion around a large ultra-spec that combines specifications from multiple related domains will lose steam. We need to keep conversations focused on the topics that individual contributors care about. It is critical to subdivide the specification in concrete and granular decision points where consistent and significant progress can be made."),(0,n.kt)("p",null,"Not everyone will care about all the aspects of the specification, and that is fine. We need to make sure contributors can easily focus on the aspects they do care about. This need for a very granular decision making process, one where we can make progress independently on different aspects of the spec, leads naturally into decomposition of the specification into smaller independent subsets."),(0,n.kt)("p",null,"This will keep conversations focused and moving. It also decouples workstreams where consensus can be reached from those that are more contentious. "),(0,n.kt)("p",null,"For example the contributors interested in data quality might be different from the ones interested in column-level lineage or query performance."),(0,n.kt)("h2",{id:"embracing-different-points-of-view"},"Embracing different points of view"),(0,n.kt)("p",null,"Depending on their perspective, contributors may have very different opinions on how to model a certain aspect of data. Or they may have different use-cases in mind. Instead of pitting different view-points against each other and forcing alignment on every point, it is sometimes beneficial to allow them to be expressed separately. "),(0,n.kt)("p",null,'For example, when you ask a data practitioner "what is data lineage?" they may have very different definitions for it. '),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Some care about how a specific metric is derived from the raw data, and need column level lineage. "),(0,n.kt)("li",{parentName:"ul"},"Some will care about compliance with privacy regulations and need relevant metadata to locate sensitive data and trace its movement."),(0,n.kt)("li",{parentName:"ul"},"Some will care about the reliability of data delivery and need data freshness and quality metrics - in particular, how they change over time in correlation with changes in the system.")),(0,n.kt)("p",null,"All those are valid view points that deserve to be captured appropriately and can be defined independently in a framework that allows them to cohabitate."),(0,n.kt)("h1",{id:"mechanics"},"Mechanics"),(0,n.kt)("p",null,"OpenLineage is purposefully providing a faceted model around a minimalistic core spec to enable this granular decision making, minimize friction in contributing, and favor community-driven improvements."),(0,n.kt)("p",null,"The core spec focuses on high-level modeling of jobs, runs, datasets, and their relation. Each OpenLineage event refers to a run of a job and its input and output datasets."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A job is a recurring transformation that reads from datasets and writes to datasets. It has a unique name that identifies it across runs."),(0,n.kt)("li",{parentName:"ul"},"A run identifies an individual execution of a job. It might be an incremental or full batch process. It could also be a streaming job."),(0,n.kt)("li",{parentName:"ul"},"A dataset could be a table in a warehouse or a folder in a blob store. It is consumed or written to by jobs.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Facets")," are pieces of metadata that can be attached to those core entities. Facets have their own schema and capture various aspects of those entities."),(0,n.kt)("h2",{id:"facets-are-individual-atomic-specs"},"Facets are individual atomic specs"),(0,n.kt)("p",null,"Like the core model, facets are defined by a ",(0,n.kt)("inlineCode",{parentName:"p"},"JSONSchema"),". They are a self-contained definition of one aspect of a job, a dataset, or a run at the time the event happened. They make the model extensible. The notion of facets is powerful because it makes it easy to add more information to the model - you just define a new facet. There\u2019s a clear compatibility model when introducing a new facet, since fields that are defined at the same time are grouped together."),(0,n.kt)("p",null,"For example, there\u2019s a facet to capture the schema of a dataset. There\u2019s a facet to capture the version of a job in source control. There\u2019s a facet to capture the parameters of a run. Facets are optional and may not apply to every instance of an entity."),(0,n.kt)("h2",{id:"facets-enable-specialization-of-models"},"Facets enable specialization of models"),(0,n.kt)("p",null,"The core entities are fairly generic. A dataset might be a table in a warehouse or a topic in a Kafka broker. A job might be a SQL query or a machine learning training job."),(0,n.kt)("p",null,"This generic high level model of lineage can be specialized by adding facets for that particular type of entity. At-rest data might be versioned, enabling transactions at the run level. Streaming data might capture the offsets and partitions where a streaming job started reading. Datasets might have a schema like a warehouse table, or not (for example, in the case of a machine learning model)."),(0,n.kt)("p",null,"By capturing a generic representation of lineage and allowing progressive specialization of those entities, this approach offers a lot of flexibility. "),(0,n.kt)("h2",{id:"facets-allow-expressing-different-point-of-views"},"Facets allow expressing different point of views"),(0,n.kt)("p",null,"There can be divergent points of view on how to model a certain aspect of metadata. Facets allow these models to cohabitate in a common framework."),(0,n.kt)("p",null,"One example of this is capturing the physical plan of a query execution. Each data warehouse might have its own unique way of describing execution plans. It is very valuable to be able to capture both a precise (but maybe too specific) model as well as a generic (but possibly imprecise or lossy) representation. They can be captured as two different facets. This also gives us opportunities to define several competing models and use the resulting information to collaborate on a more unified and generic representation. This emergent modeling is actually extremely useful in an open source setting, and as a way to make incremental progress."),(0,n.kt)("h2",{id:"custom-facets-make-the-model-decentralized"},"Custom facets make the model decentralized"),(0,n.kt)("p",null,"Most importantly, the OpenLineage spec allows custom facets that are defined elsewhere, completely outside of the spec. This allows others to extend the spec as-needed without having to coordinate with anyone or ask any permission from a governing body. They can make their own opinionated definition of an aspect of metadata. All that is required is that they publish a ",(0,n.kt)("inlineCode",{parentName:"p"},"JSONSchema")," that describes their facets, prefixed by a unique namespace. This lowers the barrier to experimentation and encourages incremental progress by making the experimentation of others visible. The facets that become broadly useful can eventually be represented in the core spec."),(0,n.kt)("h1",{id:"contribute"},"Contribute!"),(0,n.kt)("p",null,"As a community, we\u2019ve done our best to minimize friction when experimenting with or contributing to OpenLineage. We\u2019re looking forward to seeing you join us as we make data lineage transparent across the data ecosystem."))}m.isMDXComponent=!0},74952:(e,i,t)=>{t.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDkyNC41IDIwMC45OCIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6dmVjdG9ybmF0b3I9Imh0dHA6Ly92ZWN0b3JuYXRvci5pbyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZGVmcy8+CjxjbGlwUGF0aCBpZD0iQXJ0Ym9hcmRGcmFtZSI+CjxyZWN0IGhlaWdodD0iMjAwLjk4IiB3aWR0aD0iOTI0LjUiIHg9IjAiIHk9IjAiLz4KPC9jbGlwUGF0aD4KPGcgY2xpcC1wYXRoPSJ1cmwoI0FydGJvYXJkRnJhbWUpIiBpZD0iVW50aXRsZWQiIHZlY3Rvcm5hdG9yOmxheWVyTmFtZT0iVW50aXRsZWQiPgo8cGF0aCBkPSJNMCAwTDkyNC41IDBMOTI0LjUgMEw5MjQuNSAyMDAuOThMOTI0LjUgMjAwLjk4TDAgMjAwLjk4TDAgMjAwLjk4TDAgMEwwIDBaIiBmaWxsPSIjOGU5NGEwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTk4Ljc3IDExNS41Nkw2MjguNjYgMTY0LjFMNjQ3LjE1LTkuMjRMMjE3LjI2LTU3Ljc4TDE5OC43NyAxMTUuNTZaIiBmaWxsPSIjZGZlMmY2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzA1LjA4IDM5LjI5TDIwNS43IDEyNy4xMkw1NTkuMzIgNTE1LjQxTDY1OC43MSA0MjcuNThMMzA1LjA4IDM5LjI5WiIgZmlsbD0iI2YwZjVmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQwNi43OCA0My45MUw3MzcuMjkgMTMxLjc0TDc1MS4xNiA3MS42NUw0MjAuNjUtMTMuODdMNDA2Ljc4IDQzLjkxWiIgZmlsbD0iIzQzNDY0NCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE1OS40OCA2MC4wOUwtNzguNTggMjg4LjkxTC02LjkzIDM2Mi45MUwyMjguODEgMTM0LjA1TDE1OS40OCA2MC4wOVoiIGZpbGw9IiMxZjJmMmEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00NjkuMTggMTQxTDMyMy41NyA2NzIuNTdMODA0LjMxIDgwMkw5NDkuOTIgMjcwLjQyTDQ2OS4xOCAxNDFaIiBmaWxsPSIjMDkwYjAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDYyLjI1IDc4LjU4TDU3Ny44MSAxNTQuODVMNzExLjg2LTQ2LjIyTDU5Ni4zLTEyMi41TDQ2Mi4yNSA3OC41OFoiIGZpbGw9IiNlZmY3ZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03MDcuMjQgMTQzLjNMNzMwLjM1IDMyMy41N0w5NzcuNjYgMjg2LjU3TDk1NC41NSAxMDYuMzJMNzA3LjI0IDE0My4zWiIgZmlsbD0iI2Q4ZGVmOSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMwNy40IDE1MC4yM0wyNDIuNjggMjAzLjM5TDU5OC42MSA2MDUuNTVMNjYzLjMzIDU1Mi4zOUwzMDcuNCAxNTAuMjNaIiBmaWxsPSIjMzM0YTU3IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzU4LjI0IDQ4LjU0TDQ1MC42OSA5MC4xNEw2OTMuMzctNDI3LjU4TDYwMC45Mi00NjkuMThMMzU4LjI0IDQ4LjU0WiIgZmlsbD0iIzBlMGQwMiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTk5LjM4IDMyLjM2TDM3Ni43MyA5Mi40NUw0MjAuNjUtMTE3Ljg3TDE0My4zLTE3OEw5OS4zOCAzMi4zNloiIGZpbGw9IiNlYWVmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02OTUuNjkgMTQ3LjkyTDU0Ny43NyA0NDguMzhMNjQ3LjE1IDQ5NC42MUw3OTUuMDcgMTk0LjE0TDY5NS42OSAxNDcuOTJaIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzcgMTY2LjQxTC02NC42OSA2ODYuNDFMNTY2LjMxIDgxMS4yMkw2NjggMjkxLjIyTDM3IDE2Ni40MVoiIGZpbGw9IiMxMDEyMGEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02NDQuODQgMTI0LjgxTDM1MS4zMSA4MTUuODdMNjA3Ljg2IDkyNC41TDkwMS4zOSAyMzMuNDRMNjQ0Ljg0IDEyNC44MVoiIGZpbGw9IiNkYmUxZmIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00NjQuNTYgMTI0LjgxTDQ1Ny42MyAxNDMuM0w4ODUuMjEgMjkzLjUzTDg5Mi4xNCAyNzVMNDY0LjU2IDEyNC44MVoiIGZpbGw9IiMzNzRhNDEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03MDcuMjQgMTQ1LjYxTDcxMS44NiAxNDUuNjFMNzU1Ljc4LTI1OC44Nkw3NTEuMTYtMjU4Ljg2TDcwNy4yNCAxNDUuNjFaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNjA3Ljg2IDM5LjI5TDYyNCAxMjAuMThMNzUzLjQ3IDkyLjQ1TDczNy4yOSAxMS41Nkw2MDcuODYgMzkuMjlaIiBmaWxsPSIjMWQyMTFmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDE2IDkyLjQ1TDQ1MC42NyAxNTcuMTZMODczLjY3LTcxLjY1TDgzOS0xMzYuMzZMNDE2IDkyLjQ1WiIgZmlsbD0iI2M5ZDJlZSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTc1MS4xNiAxNDUuNjFMMTMzOC4yMSAxNTcuMTZMMTM0NS4xNS0zMDkuNzFMNzU4LjA5LTMyMS4yNkw3NTEuMTYgMTQ1LjYxWiIgZmlsbD0iI2EzYjFjOSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI1OC44NiA2OS4zNEwyNDUgMTczLjM0TDM4NiAxODcuMjFMMzk5Ljg3IDgzLjIxTDI1OC44NiA2OS4zNFoiIGZpbGw9IiNlOWVhZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNDIuNjggMTc4TDE0NS42MSA3MTYuNDlMODE1Ljg3IDgzNC4zNkw5MTIuOTQgMjk1Ljg0TDI0Mi42OCAxNzhaIiBmaWxsPSIjMTQyNTIzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNC42MiAxMDRMLTM3NC4zOCAzMzcuNDNMLTMzNS4wOSAzOTcuNTJMNDEuNiAxNjQuMUw0LjYyIDEwNFoiIGZpbGw9IiNlY2Y0ZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02NzcuMiA1My4xNkw2OTggNjdMODg1LjIxLTIyMS44OEw4NjQuNDEtMjM1Ljc1TDY3Ny4yIDUzLjE2WiIgZmlsbD0iIzExMTEwOCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTExLjU2IDk0Ljc2TDEwMS42OSAxNDFMMjcyLjY5LTE4OS41MUwxODIuNTUtMjM1Ljc0TDExLjU2IDk0Ljc2WiIgZmlsbD0iI2E4YjlkMyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTY0NC44NCAxMTAuOTRMNjEwLjE3IDE1MC4yM0w4NTAuNTQgMzQ5TDg4NS4yMSAzMDkuNzFMNjQ0Ljg0IDExMC45NFoiIGZpbGw9IiNkOWRkZjEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MzMuOSAxNTkuNDhMNDY5LjE4IDIwMS4wOEw2OTEuMDYgNTE3LjcyTDc1NS43OCA0NzYuMTJMNTMzLjkgMTU5LjQ4WiIgZmlsbD0iIzFmMWMxMSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQuNjIgMTgyLjU5TDE0MSA2OTEuMDZMMjQ5LjYyIDY2MS4wNkwxMTMuMjUgMTUyLjU0TDQuNjIgMTgyLjU5WiIgZmlsbD0iIzJhMjkxZiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTEzNi4zNiA5Ny4wN0w5Ny4wNyAxNTIuNTRMMTk0LjE0IDIxOS41NEwyMzMuNDQgMTY0LjA3TDEzNi4zNiA5Ny4wN1oiIGZpbGw9IiM3MDgxODkiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMzcuNDQgMTE1LjU2TDM5Mi45MSAxMjcuMTJMNDA2Ljc4IDUzLjEyTDM1MS4zMSA0MS42TDMzNy40NCAxMTUuNTZaIiBmaWxsPSIjZWFlN2ZhIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDgzLjA1IDU1LjQ3TDUzNi4yMSAxMzEuNzRMODA2LjYzLTU3Ljc4TDc1My40Ny0xMzRMNDgzLjA1IDU1LjQ3WiIgZmlsbD0iI2NlZDNlYyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPC9nPgo8L3N2Zz4K"},94655:(e,i,t)=>{t.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDkyNC41IDYyOS43MyIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6dmVjdG9ybmF0b3I9Imh0dHA6Ly92ZWN0b3JuYXRvci5pbyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZGVmcy8+CjxjbGlwUGF0aCBpZD0iQXJ0Ym9hcmRGcmFtZSI+CjxyZWN0IGhlaWdodD0iNjI5LjczIiB3aWR0aD0iOTI0LjUiIHg9IjAiIHk9IjAiLz4KPC9jbGlwUGF0aD4KPGcgY2xpcC1wYXRoPSJ1cmwoI0FydGJvYXJkRnJhbWUpIiBpZD0iVW50aXRsZWQiIHZlY3Rvcm5hdG9yOmxheWVyTmFtZT0iVW50aXRsZWQiPgo8cGF0aCBkPSJNMCAwTDkyNC41IDBMOTI0LjUgMEw5MjQuNSA2MjkuNzNMOTI0LjUgNjI5LjczTDAgNjI5LjczTDAgNjI5LjczTDAgMEwwIDBaIiBmaWxsPSIjODY5MDliIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDc4LjQzIDQyMi45NkwzODEuMzYgNzM3LjI5TDkxMC42MyA4OTkuMDhMMTAwNy43MSA1ODQuNzVMNDc4LjQzIDQyMi45NloiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNDcuMyA0NTcuNjNMLTM4My43IDQwNi43OEwtNDA0LjUgNjY1LjY0TDIyNC4xNiA3MTYuNDlMMjQ3LjMgNDU3LjYzWiIgZmlsbD0iIzA5MDgwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTEzNC4wNSAxODIuNTlMNTU5LjMyIDMzNy40NEw2MzMuMjggMTM0LjA1TDIwOC4wMS0xOC40OUwxMzQuMDUgMTgyLjU5WiIgZmlsbD0iIzIwMjgyNyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE4MC4yOCAyNjMuNDhMMTc4IDQyNy41OEw2NDIuNTYgNDI5Ljg5TDY0NC44NyAyNjUuNzlMMTgwLjI4IDI2My40OFoiIGZpbGw9IiNlM2U0ZjkiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xNjYuNDEgMTA2LjMyTDQzNi44MyA2MTAuMTdMNTAxLjU0IDU3My4xOUwyMzEuMTMgNjkuMzRMMTY2LjQxIDEwNi4zMloiIGZpbGw9IiNkY2UzZjQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02MjQuMDQgMjc3LjM1TDkxNS4yNSAzMTQuMzNMMTAyMy44OC00OTQuNjFMNzMyLjY3LTUzMS41OUw2MjQuMDQgMjc3LjM1WiIgZmlsbD0iI2M3Y2ZlOSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQuNjIgMzQuNjdMLTgwLjg5IDMyMS4yNkwxMzEuNzQgMzgzLjY3TDIxNy4yNiA5Ny4wN0w0LjYyIDM0LjY3WiIgZmlsbD0iI2FlYmZkZCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI0MC4zNyAxMTMuMjVMNDIzIDM1OC4yNEw2NjggMTc1LjY1TDQ4NS4zNi02N0wyNDAuMzcgMTEzLjI1WiIgZmlsbD0iIzI5MmUyOSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTg1MC41NCA0NjkuMThMMzYyLjg3IDYxOS40MUw0NDYuMDcgODkyLjE0TDkzMy43NSA3NDEuOTFMODUwLjU0IDQ2OS4xOFoiIGZpbGw9IiMyNDI2MWEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNTQuMjQgNTMuMTZMNTQ1LjQ2IDEyMC4xOUw2MTIuNDgtMTY2LjQxTDMyMS4yNi0yMzMuNDRMMjU0LjI0IDUzLjE2WiIgZmlsbD0iIzhjOWViMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTczNC45OCA0NTUuMzJMOTQ1LjMgNTg0Ljc1TDEyMTEuMSAxNTQuODVMMTAwMC43NyAyNS40Mkw3MzQuOTggNDU1LjMyWiIgZmlsbD0iI2JjYzRkYiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE1MC4yMyAzNjIuODdMLTEwNi4zMiA3OTIuNzZMLTMwIDgzNi42N0wyMjQuMTkgNDA2Ljc4TDE1MC4yMyAzNjIuODdaIiBmaWxsPSIjMmIzMDI5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDI5Ljg5IDUyMi4zNEwtMTQzLjMgNjg0LjEzTC05NC43NiA4NTUuMTZMNDc2LjEyIDY5My4zOEw0MjkuODkgNTIyLjM0WiIgZmlsbD0iI2IxYjZiYyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTcxMS44NyAyNzcuMzVMMTk2LjQ2IDcyMS4xMUwyNDkuNjIgNzgzLjUxTDc2NS4wMiAzMzkuNzVMNzExLjg3IDI3Ny4zNVoiIGZpbGw9IiM1YjYwNWYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02NDQuODQgMTguNDlMODAyIDExMC45NEw4OTQuNDUtNDMuOTFMNzM3LjI5LTEzNi4zNkw2NDQuODQgMTguNDlaIiBmaWxsPSIjZjhmYWZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzQuNjcgMjU2LjU1TC02LjkzIDMwNS4wOEwyOTMuNTMgNTY2LjI2TDMzNS4xMyA1MTcuNzJMMzQuNjcgMjU2LjU1WiIgZmlsbD0iIzZiNzg4MSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI4Ni42IDE1OS40OEwyNDQuOTkgMTk2LjQ2TDI5OC4xNSAyNDkuNjJMMzM5Ljc1IDIxMi42M0wyODYuNiAxNTkuNDhaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNjEyLjQ4IDQ1MC42OUwxMTQ2LjM4IDU1N0wxMTU1LjYyIDQ5Ni45MUw2MjEuNzMgMzkwLjZMNjEyLjQ4IDQ1MC42OVoiIGZpbGw9IiNlMWU2ZmQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00OTIuMyA0OTIuM0w0MzYuODMgNTIwTDQ3OC40MyA1OTYuMjdMNTMzLjkgNTY4LjU0TDQ5Mi4zIDQ5Mi4zWiIgZmlsbD0iI2U0ZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM3Ni43MyAzMzcuNDRMMjM4LjA2IDg5OS4wOEwyODYuNiA5MTAuNjNMNDI1LjI3IDM0OUwzNzYuNzMgMzM3LjQ0WiIgZmlsbD0iI2YxZjJmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMxMi4wMiAyMTIuNjNMNDQzLjc2IDM1MS4zMUw0OTQuNjEgMzAyLjc3TDM2Mi44NyAxNjQuMUwzMTIuMDIgMjEyLjYzWiIgZmlsbD0iIzFhMWExMSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTc2LjI3IDMwMC40NkwyMTcuMjYgMzQyLjA2TDM2NS4xOC0xNDAuOTlMMjI0LjE5LTE4Mi41OUw3Ni4yNyAzMDAuNDZaIiBmaWxsPSIjOGJhMmJiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDQ4LjM4IDM3OS4wNUw0MTguMzQgNDUwLjY5TDY1MS43NyA1NDUuNDZMNjgxLjgyIDQ3My44MUw0NDguMzggMzc5LjA1WiIgZmlsbD0iIzJjMzMyYyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMxMiAzMjUuODlMNzcyIDUwNi4xNkw3ODEuMjQgNDc4LjQzTDMyMS4yNiAyOTguMTVMMzEyIDMyNS44OVoiIGZpbGw9IiNkZmU0ZmQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03MjUuNzMgMjQ3LjNMOTg5LjIxIDQ4MC43NEwxMjU3LjMyIDE4MC4yOEw5OTMuODQtNTAuODVMNzI1LjczIDI0Ny4zWiIgZmlsbD0iIzhlOTdhNiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTIwOCAzNDQuMzhMMjU2LjU0IDQ1OS45NEw0MjMgMzg2TDM3NC40MiAyNzAuNDJMMjA4IDM0NC4zOFoiIGZpbGw9IiNlYWViZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zODEuMzYgNDY0LjU2TDQ2OS4xOCA0NzEuNDlMNDgwLjc0IDM1My42MkwzOTIuOTEgMzQ2LjY5TDM4MS4zNiA0NjQuNTZaIiBmaWxsPSIjOWVhZGJmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDkyLjMgMjYxLjE3TDQ5NC42MSA0MTZMNjIxLjczIDQxMS4zOEw2MTkuNDEgMjU2LjUzTDQ5Mi4zIDI2MS4xN1oiIGZpbGw9IiNkZWU0ZmIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik04MTUuODcgNDQ2LjA3TDc3NC4yNyA1NTdMODQzLjYxIDU4Mi40Mkw4ODUuMjEgNDcxLjQ4TDgxNS44NyA0NDYuMDdaIiBmaWxsPSIjNGM1ODU4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzg4LjI5IDQuNjJMMzc2LjczIDU3Ljc4TDQ0My43MyA2Ny4wM0w0NTUuMjkgMTMuODdMMzg4LjI5IDQuNjJaIiBmaWxsPSIjYzlkYWY4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzA1LjA4IDkwLjE0TDU5OC42MSAyNTQuMjRMNjI0IDIwOEwzMzAuNTEgNDMuOTFMMzA1LjA4IDkwLjE0WiIgZmlsbD0iIzIyMjMxZSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE3NS42NSAzMjUuODlMMTM4LjY1IDM0NC4zOEwxNzcuOTUgNDExLjM4TDIxNC45NSAzOTIuODlMMTc1LjY1IDMyNS44OVoiIGZpbGw9IiMxYTJhMjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNzAuNDIgNTY2LjI2TDIwOC4wMSA2MzMuMjZMNDUwLjY5IDg0My42MUw1MTMuMSA3NzYuNjFMMjcwLjQyIDU2Ni4yNloiIGZpbGw9IiNjY2Q4ZjEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik05LjI0IDY5LjM0TC01NDUuNDUgMjUxLjkzTC00MzIuMiA1OTYuM0wxMjAuMTggNDEzLjcxTDkuMjQgNjkuMzRaIiBmaWxsPSIjOWNhYWM0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8L2c+Cjwvc3ZnPgo="}}]);