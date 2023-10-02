"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3027],{3905:(e,i,t)=>{t.d(i,{Zo:()=>p,kt:()=>u});var a=t(67294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function I(e,i){if(null==e)return{};var t,a,n=function(e,i){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var r=a.createContext({}),m=function(e){var i=a.useContext(r),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},p=function(e){var i=m(e.components);return a.createElement(r.Provider,{value:i},e.children)},M={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},s=a.forwardRef((function(e,i){var t=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,p=I(e,["components","mdxType","originalType","parentName"]),s=m(t),u=n,c=s["".concat(r,".").concat(u)]||s[u]||M[u]||l;return t?a.createElement(c,o(o({ref:i},p),{},{components:t})):a.createElement(c,o({ref:i},p))}));function u(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=s;var I={};for(var r in i)hasOwnProperty.call(i,r)&&(I[r]=i[r]);I.originalType=e,I.mdxType="string"==typeof e?e:n,o[1]=I;for(var m=2;m<l;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},53220:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>M,frontMatter:()=>l,metadata:()=>I,toc:()=>m});var a=t(87462),n=(t(67294),t(3905));const l={title:"The Current State of Column-level Lineage",date:new Date("2022-09-02T00:00:00.000Z"),authors:[{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],image:"./image.svg",banner:"./banner.svg",description:"Column-level lineage helps organizations navigate a complex regulatory landscape."},o=void 0,I={permalink:"/blog/column-lineage",source:"@site/blog/column-lineage/index.mdx",title:"The Current State of Column-level Lineage",description:"Column-level lineage helps organizations navigate a complex regulatory landscape.",date:"2022-09-02T00:00:00.000Z",formattedDate:"September 2, 2022",tags:[],readingTime:4.82,hasTruncateMarker:!0,authors:[{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],frontMatter:{title:"The Current State of Column-level Lineage",date:"2022-09-02T00:00:00.000Z",authors:[{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],image:"./image.svg",banner:"./banner.svg",description:"Column-level lineage helps organizations navigate a complex regulatory landscape."},prevItem:{title:"How Operators and Extractors Work Under-the-Hook",permalink:"/blog/operators-and-extractors-technical-deep-dive"},nextItem:{title:"The Python Client -- the Foundation of OpenLineage Integrations",permalink:"/blog/python-client"}},r={image:t(61873).Z,authorsImageUrls:[void 0]},m=[{value:"Overview &amp; background",id:"overview--background",level:3},{value:"Why start with the Spark integration?",id:"why-start-with-the-spark-integration",level:3},{value:"A new facet in the spec",id:"a-new-facet-in-the-spec",level:3},{value:"How it works",id:"how-it-works",level:3},{value:"What\u2019s next?",id:"whats-next",level:3},{value:"How can I contribute?",id:"how-can-i-contribute",level:3}],p={toc:m};function M(e){let{components:i,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,l,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Column-level lineage helps organizations navigate a complex regulatory landscape."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(47727).Z+"#banner",width:"617",height:"127"})),(0,n.kt)("h3",{id:"overview--background"},"Overview & background"),(0,n.kt)("p",null,"Long one of our most requested new features, column-level lineage was added to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/spark"},"Spark integration")," with the release of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/releases/tag/0.9.0"},"OpenLineage 0.9.0"),". Project committer Pawe\u0142 Leszczy\u0144ski (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),") authored the relevant pull requests (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/pull/645"},"#645"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/pull/698"},"#698"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/pull/738"},"#738")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/pull/772"},"#772"),"). In its current form, column-level lineage in OpenLineage is limited to the Spark integration and not yet visible in the ",(0,n.kt)("a",{parentName:"p",href:"https://marquezproject.ai/"},"Marquez")," UI. But this is only the first step in a broader, ongoing project to implement the feature across the project, and we\u2019d love your help. "),(0,n.kt)("p",null,"Column-level lineage is a worthy pursuit. It dramatically extends the reach of OpenLineage\u2019s metadata capture, providing finely grained information about datasets' dependencies. As Pawe\u0142 and project lead Julien Le Dem (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/julienledem"},"@julienledem"),") wrote in the initial proposal, \u201cNot only can we know that a dependency exists, but we are also able to understand which input columns are used to produce output columns. This allows ","[for]"," answering questions like \u2018Which root input columns are used to construct column x?\u2019\u201d"),(0,n.kt)("p",null,"Another reason to pursue column-level lineage: the demands of regulatory compliance. Bodies such as the ",(0,n.kt)("a",{parentName:"p",href:"https://gdpr-info.eu/"},"GDPR"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.hhs.gov/hipaa/index.html"},"HIPAA"),", ",(0,n.kt)("a",{parentName:"p",href:"https://oag.ca.gov/privacy/ccpa"},"CCPA"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.bis.org/bcbs/"},"BCBS")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.pcisecuritystandards.org/"},"PCI")," have instituted requirements for data accuracy and integrity that compel companies and organizations to obtain deeper insight into their datasets and pipelines. "),(0,n.kt)("h3",{id:"why-start-with-the-spark-integration"},"Why start with the Spark integration?"),(0,n.kt)("p",null,"As Julien and Pawe\u0142's proposal ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/proposals/148"},"suggests"),", the Spark integration was a logical starting point for adding column-level lineage. This is so because the integration relies on implementing visitors that traverse a ",(0,n.kt)("inlineCode",{parentName:"p"},"LogicalPlan")," and extract meaningful information when encountered. These data include outputs and inputs with their schemas (which we were already identifying, in fact). The ",(0,n.kt)("inlineCode",{parentName:"p"},"LogicalPlan")," also exposes the expressions that derive the output columns from the input columns. They can be inspected to derive column-level lineage. Traversing the ",(0,n.kt)("inlineCode",{parentName:"p"},"LogicalPlan")," allows for the capturing of all the dependencies required to build column-level lineage."),(0,n.kt)("h3",{id:"a-new-facet-in-the-spec"},"A new facet in the spec"),(0,n.kt)("p",null,"In the process of implementing column-level lineage, Pawe\u0142 and Julien contributed a new facet schema, ",(0,n.kt)("inlineCode",{parentName:"p"},"ColumnLineageDatasetFacet"),", to the OpenLineage spec. This facet uses fields to relay data points about dependencies. These are properties of items in the ",(0,n.kt)("inlineCode",{parentName:"p"},"InputField")," property of the facet (",(0,n.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"field"),"), as well as two human-readable string fields (",(0,n.kt)("inlineCode",{parentName:"p"},"transformationDescription"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"transformationType"),") for conveying information about dataset transformations. The last field, ",(0,n.kt)("inlineCode",{parentName:"p"},"transformationType"),", may be especially useful for those whose companies or organizations need to track the usage of sensitive personal information."),(0,n.kt)("p",null,"An example of a ",(0,n.kt)("inlineCode",{parentName:"p"},"columnLineage")," facet in the outputs array of a lineage event:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "namespace": "{namespace of the outputdataset}",\n  "name": "{name of the output dataset}",\n  "facets": {\n    "schema": {\n      "fields": [\n        { "name": "{first column of the output dataset}", "type": "{its type}"},\n        { "name": "{second column of the output dataset}", "type": "{its type}"},\n        ...\n      ]\n    },\n    "columnLineage": {\n      "{first column of the output dataset}": {\n        "inputFields": [\n          { "namespace": "{input dataset namespace}", name: "{input dataset name}", "field": "{input dataset column name}"},\n          ... other inputs\n        ],\n        "transformationDescription": "identical",\n        "transformationType": "IDENTITY"\n      },\n      "{second column of the output dataset}": ...,\n      ...\n    }\n  }\n}\n')),(0,n.kt)("h3",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"As we\u2019ve seen, column-level lineage is being collected via the new ",(0,n.kt)("inlineCode",{parentName:"p"},"columnLineage")," dataset facet. For each output, this facet contains a list of the output's fields along with the input fields used to create it. The input fields are identified by a ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"field"),". But how is OpenLineage obtaining the data about dependencies that the facet relays?"),(0,n.kt)("p",null,"In PR ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/pull/698"},"#698"),", Pawe\u0142 describes the mechanism this way:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The core mechanism first gets an output schema and logical plan as inputs."),(0,n.kt)("li",{parentName:"ol"},"Then, the ",(0,n.kt)("inlineCode",{parentName:"li"},"OutputFieldsCollector")," class traverses the plan to gather the outputs. Outputs can be extracted from Aggregate or Project, and each output field has an ",(0,n.kt)("inlineCode",{parentName:"li"},"ExprId")," (expression ID) that is attached from the plan."),(0,n.kt)("li",{parentName:"ol"},"Next, the ",(0,n.kt)("inlineCode",{parentName:"li"},"InputFieldsCollector")," class is used to collect inputs that can be extracted from ",(0,n.kt)("inlineCode",{parentName:"li"},"DataSourceV2Relation"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"DataSourceV2ScanRelation"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"HiveTableRelation")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"LogicalRelation"),". Each input field takes its ",(0,n.kt)("inlineCode",{parentName:"li"},"ExprId")," from the plan, and each input is identified by a ",(0,n.kt)("inlineCode",{parentName:"li"},"DatasetIdentifier"),", which means it contains the name and namespace of a dataset and an input field."),(0,n.kt)("li",{parentName:"ol"},"Finally, the ",(0,n.kt)("inlineCode",{parentName:"li"},"FieldDependenciesCollector")," traverses the plan to identify dependencies between different ",(0,n.kt)("inlineCode",{parentName:"li"},"ExprIds"),". Dependencies map parent expressions to children expressions. This is used to identify the inputs used to evaluate certain outputs.")),(0,n.kt)("h3",{id:"whats-next"},"What\u2019s next?"),(0,n.kt)("p",null,"Work on extending column-level lineage in the project is ongoing. For example, project committer Will Johnson (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wjohnson"},"@wjohnson"),") has opened a PR (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/issues/963"},"#963"),") to add support for common dataframe operations not covered due to the initial focus on Spark. As Will writes in the PR,"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Currently, the Column Lineage Input Field Collectors work mainly for Spark SQL operations and Data Source V2.\nThis leaves out normal dataframe operations like inserting into HDFS without the use of a Hive table.\nColumn Lineage should support this scenario as many users will want to see column lineage for operations outside of SQL and Hive Metastore backed tables.")),(0,n.kt)("p",null,"Also, Pawe\u0142 has written enhancements that will ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/issues/993"},"enable column-level lineage in the case of altered table and column names")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/issues/738"},"allow one to extend column-level lineage without contributing to OpenLineage")," (to avoid exposing proprietary code, for example). "),(0,n.kt)("p",null,"Meanwhile, over in Marquez, Julien has contributed a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/issues/2045"},"proposal")," to add a column-level endpoint to the project that would leverage OpenLineage\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"ColumnLineageDatasetFacet"),". This approach would add column lineage to an existing endpoint by embedding the ",(0,n.kt)("inlineCode",{parentName:"p"},"columnLineage")," facet in the data section of the ",(0,n.kt)("inlineCode",{parentName:"p"},"DATASET")," nodes."),(0,n.kt)("h3",{id:"how-can-i-contribute"},"How can I contribute?"),(0,n.kt)("p",null,"We welcome contributions to this ongoing effort at implementing column-level lineage in OpenLineage! If you\u2019re interested in contributing, one of our existing ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration"},"integrations")," might be a good place to start. OpenLineage\u2019s growing list of integrations includes Airflow, dbt, Dagster and Flink."),(0,n.kt)("p",null,"Sounds fun? Check out our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/CONTRIBUTING.md"},"new contributor guide")," to get started."))}M.isMDXComponent=!0},47727:(e,i,t)=>{t.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYxNi41IDEyNy40IiB3aWR0aD0iMTAwJSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp2ZWN0b3JuYXRvcj0iaHR0cDovL3ZlY3Rvcm5hdG9yLmlvIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxkZWZzLz4KPGNsaXBQYXRoIGlkPSJBcnRib2FyZEZyYW1lIj4KPHJlY3QgaGVpZ2h0PSIxMjcuNCIgd2lkdGg9IjYxNi41IiB4PSIwIiB5PSIwIi8+CjwvY2xpcFBhdGg+CjxnIGNsaXAtcGF0aD0idXJsKCNBcnRib2FyZEZyYW1lKSIgaWQ9IlVudGl0bGVkIiB2ZWN0b3JuYXRvcjpsYXllck5hbWU9IlVudGl0bGVkIj4KPHBhdGggZD0iTS0yMDAgMEw4MzAgMEw4MzAgMEw4MzAgMzMwTDgzMCAzMzBMLTIwMCAzMzBMLTIwMCAzMzBMLTIwMCAwTC0yMDAgMFoiIGZpbGw9IiM2OTdiOTIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik04Ny45IDYzLjJMMzM5LjEgMzY2LjhMNjE4LjEgMTM0LjFMMzY2LjgtMTY4TDg3LjkgNjMuMloiIGZpbGw9IiNhYjgzNTgiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTE1LjYgNDMuMkwtMjc5IDEzNS42TC0xODQuOSA1MzAuMkwyMDguMSA0MzcuN0wxMTUuNiA0My4yWiIgZmlsbD0iI2RlYWQ3MSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTk5LjUgNTUuNUw1MzYuNCA4Ni4zTDU5MC4zIDE5MS4xTDY1My41IDE2MC4zTDU5OS41IDU1LjVaIiBmaWxsPSIjNGMzYzJiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zNDIuMiAzMi40TDYzOC4xIDE4LjVMNjMzLjUtNTdMMzM3LjUtNDMuMkwzNDIuMiAzMi40WiIgZmlsbD0iIzI5NzFjYiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03NS41IDYxLjZMNTUuNSA4MC4xTDc3LjEgMTAwLjJMOTcuMSA4MS43TDc1LjUgNjEuNloiIGZpbGw9IiMwZjAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMyMy43IDk3LjFMODAuMSAzMzQuNUwyNDIgNDk3LjhMNDg1LjUgMjYwLjRMMzIzLjcgOTcuMVoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTMwLjIgMzguNUw2NTUgMTE0LjFMNzg5LjEtMTAzLjNMNjY0LjMtMTc4LjhMNTMwLjIgMzguNVoiIGZpbGw9IiM0NzhiZDgiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE4My40IDkuMkw1MTAuMiAxN0w1MTMuMi0xMzguN0wxODYuNS0xNDYuNEwxODMuNCA5LjJaIiBmaWxsPSIjMjQ2ZGM5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xODEuOSAxMTUuNkwzMDIuMSAzNTkuMUwzNTcuNiAzMzEuNEwyMzcuNCA4Ny45TDE4MS45IDExNS42WiIgZmlsbD0iI2Y1ZDNhNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDg1LjUgMTMuOUwyODMuNiAyMy4xTDI4My42IDQ0LjdMNDg1LjUgMzUuNEw0ODUuNSAxMy45WiIgZmlsbD0iIzc0NTEzMSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTcgNjcuOEwzMzcuNSAxMDEuN0wzNDMuNyA0Ny44TDYzLjIgMTMuOUw1NyA2Ny44WiIgZmlsbD0iI2IxOWI4MSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTYwLjMgMTAwLjJMNTQgMTc0LjJMMjYwLjUgNDYyLjRMMzY2LjggMzg4LjRMMTYwLjMgMTAwLjJaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM2My43IDMyLjRMMzUxLjQgMzguNUw0MDUuMyAxMzguN0w0MTcuNyAxMzIuNUwzNjMuNyAzMi40WiIgZmlsbD0iI2ZmZTljOSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDgwLjkgNDQuN0wyMDUgNDMuMkwyMDMuNCA3MC45TDQ3OS4zIDcyLjRMNDgwLjkgNDQuN1oiIGZpbGw9IiNjNGIyOWMiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTExMSA4MC4xTC0xNDYuNCAxNjQuOUwtMy4xIDU5MC4zTDI1Mi43IDUwNS41TDExMSA4MC4xWiIgZmlsbD0iI2Q5YzJhMSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMTQuMiA1My45TDIxMi43IDg2LjNMNTE0LjggOTcuMUw1MTYuMyA2NC43TDIxNC4yIDUzLjlaIiBmaWxsPSIjN2E2NDUxIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQwMi4zIDExNS42TDUwNS41IDMxNkw1NTcuOSAyODYuN0w0NTQuNyA4Ni4zTDQwMi4zIDExNS42WiIgZmlsbD0iI2QyYjY5MCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzE0LjQgNTUuNUwyMDEuOSAxNjMuNEwyMjEuOSAxODMuNEwzMzQuNSA3NS41TDMxNC40IDU1LjVaIiBmaWxsPSIjYmFiNmFlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zODIuMiAxNS40TDM2My43IDE3TDM4Mi4yIDE0NC45TDQwMC43IDE0My4zTDM4Mi4yIDE1LjRaIiBmaWxsPSIjZDBiZGE1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMTYgOTcuMUwyNjUuMSAxNTcuMkw1NTYuNCAzOTQuNkw2MDcuMyAzMzQuNUwzMTYgOTcuMVoiIGZpbGw9IiMxMTA3MDQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE4OCAzN0wxODYuNSA1OC42TDU1Ni40IDY2LjNMNTU3LjkgNDQuN0wxODggMzdaIiBmaWxsPSIjYzFiM2ExIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00ODIuNCAxMDkuNEwzMjUuMiAyNjMuNkwzNDMuNyAyODMuNkw1MDAuOSAxMjkuNUw0ODIuNCAxMDkuNFoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMwLjggNC42TDIwMy40IDQ2LjJMMjUxLjItMTU1LjdMNzguNi0xOTcuM0wzMC44IDQuNloiIGZpbGw9IiM1MTRkNTAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI1Mi44IDBMMjYwLjUgMTI3LjlMMjc0LjMgMTI2LjRMMjY2LjYgMEwyNTIuOCAwWiIgZmlsbD0iIzRmM2QzNCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8L2c+Cjwvc3ZnPgo="},61873:(e,i,t)=>{t.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM1MCAyNTAiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjI1MCIgd2lkdGg9IjM1MCIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJVbnRpdGxlZCIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJVbnRpdGxlZCI+CjxwYXRoIGQ9Ik0wIDBMMzUwIDBMMzUwIDBMMzUwIDI1MEwzNTAgMjUwTDAgMjUwTDAgMjUwTDAgMEwwIDBaIiBmaWxsPSIjNjQ3ODkxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTUwIDIzTC0xMCAyMzhMMjAxIDM5NEwzNjEgMTc5TDE1MCAyM1oiIGZpbGw9IiNjNzkyNTQiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTIxIDE4TC03MyAxMDhMMSAyNjhMMTk1IDE3OEwxMjEgMThaIiBmaWxsPSIjYjM5YjdmIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI2MyAyNDlMNDYzIDQyM0w1NDUgMzI3TDM0NSAxNTNMMjYzIDI0OVoiIGZpbGw9IiM1YjQxMjYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNODIgNTNMMjkwIDk2TDI5NSA3MUw4NyAyOEw4MiA1M1oiIGZpbGw9IiM2ZDQwMTciIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTYwIDE5NUwxODkgMzE5TDIxNyAzMTJMMTg4IDE4OEwxNjAgMTk1WiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMDAgMjZMMzc2IDUxTDM5Mi0xMjBMMTE2LTE0NUwxMDAgMjZaIiBmaWxsPSIjMzg3NWMzIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE5NyA4OEwxOTUgMTIzTDMxNSAxMjZMMzE3IDkxTDE5NyA4OFoiIGZpbGw9IiNlNGNiYWEiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTM3IDExOEwxNyAxNDVMMjUgMTgxTDE0NSAxNTRMMTM3IDExOFoiIGZpbGw9IiM2MzQ4MzQiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTUgMjExTDQzIDIzOUwxODQgOTNMMTU2IDY1TDE1IDIxMVoiIGZpbGw9IiNiZWIzYTIiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNODEgNTNMMjkgNzhMNTAgMTIwTDEwMiA5NUw4MSA1M1oiIGZpbGw9IiNlM2MwOTUiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTQxIDE1MUw3MCAyMzZMODQgMjQ3TDE1NSAxNjJMMTQxIDE1MVoiIGZpbGw9IiM0OTNhMmQiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTExIDE1N0wxMzAgNDc0TDE0MyA0NzNMMTI0IDE1NkwxMTEgMTU3WiIgZmlsbD0iI2ZjZThjYSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik04NSA2OEwxMTYgNzNMMTIwIDQ1TDg5IDQwTDg1IDY4WiIgZmlsbD0iIzA2MDAwMCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03MyAyMTNMLTE3MyAyMTZMLTE3MiAyODFMNzMgMjc4TDczIDIxM1oiIGZpbGw9IiNkOWM5YWYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjk0IDEwMkwzNzUgMTYxTDQ3MiAyNUwzOTEtMzNMMjk0IDEwMloiIGZpbGw9IiM1MTk0ZGYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzEwIDE0OEwyODkgMTQ4TDMwOCA1NTBMMzI5IDU1MEwzMTAgMTQ4WiIgZmlsbD0iI2I1YTE4OCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMjkgMjA5TDMyNyAxOTFMMzE3IDEzM0wyMTkgMTUxTDIyOSAyMDlaIiBmaWxsPSIjNmU1NTNlIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTczIDUwTDMwMCA4MEwzMDQgNDNMNzcgMTNMNzMgNTBaIiBmaWxsPSIjOTY3NzVhIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE1IDM4TC0xNzQgODFMLTE2MCAxNDJMMjggOTlMMTUgMzhaIiBmaWxsPSIjMWU3N2U2IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE1NCAxODlMMTg1IDE5NEwyMDEgODdMMTcwIDgyTDE1NCAxODlaIiBmaWxsPSIjYThiM2JkIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTg0IDIwM0wxNDEgMjUxTDE3MyAyMTFMMTE2IDE2M0w4NCAyMDNaIiBmaWxsPSIjYzliMjk0IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTk3IDEzMUw4NiAxNjNMMTQ5IDE4M0wxNjAgMTUxTDk3IDEzMVoiIGZpbGw9IiM1MTM4MmEiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjg2IDE0M0wzMTUgMjk5TDMyNiAyOTZMMjk3IDE0MEwyODYgMTQzWiIgZmlsbD0iI2RiY2NiMyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMTEgNjlMMTk4IDc5TDIxMSA5NkwyMjQgODZMMjExIDY5WiIgZmlsbD0iI2YyZTRjZiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjwvZz4KPC9zdmc+Cg=="}}]);