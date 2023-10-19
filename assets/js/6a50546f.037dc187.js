"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4232],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2082:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"0.14.0",sidebar_position:25},o="0.14.0 - 2022-09-06",l={unversionedId:"releases/0_14_0",id:"releases/0_14_0",title:"0.14.0",description:"Added",source:"@site/docs/releases/0_14_0.md",sourceDirName:"releases",slug:"/releases/0_14_0",permalink:"/docs/releases/0_14_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_14_0.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"0.14.0",sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"0.14.1",permalink:"/docs/releases/0_14_1"},next:{title:"0.13.1",permalink:"/docs/releases/0_13_1"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0140---2022-09-06"},"0.14.0 - 2022-09-06"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support ABFSS and Hadoop Logical Relation in Column-level lineage ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1008"},(0,r.kt)("inlineCode",{parentName:"a"},"#1008"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wjohnson"},"@wjohnson"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Introduces an ",(0,r.kt)("inlineCode",{parentName:"em"},"extractDatasetIdentifier")," that uses similar logic to ",(0,r.kt)("inlineCode",{parentName:"em"},"InsertIntoHadoopFsRelationVisitor")," to pull out the path on the HDFS compliant file system; tested on ABFSS and DBFS (Databricks FileSystem) to prove that lineage could be extracted using non-SQL commands.")),(0,r.kt)("li",{parentName:"ul"},"Add Kusto relation visitor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/939"},(0,r.kt)("inlineCode",{parentName:"a"},"#939"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hmoazam"},"@hmoazam"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Implements a ",(0,r.kt)("inlineCode",{parentName:"em"},"KustoRelationVisitor")," to support lineage for Azure Kusto's Spark connector.")),(0,r.kt)("li",{parentName:"ul"},"Add ColumnLevelLineage facet doc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1020"},(0,r.kt)("inlineCode",{parentName:"a"},"#1020"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/julienledem"},"@julienledem"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds documentation for the Column-level lineage facet.")),(0,r.kt)("li",{parentName:"ul"},"Include symlinks dataset facet ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/935"},(0,r.kt)("inlineCode",{parentName:"a"},"#935"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Includes the recently introduced ",(0,r.kt)("inlineCode",{parentName:"em"},"SymlinkDatasetFacet")," in generated OpenLineage events.")),(0,r.kt)("li",{parentName:"ul"},"Add support for dbt 1.3 beta's metadata changes ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1051"},(0,r.kt)("inlineCode",{parentName:"a"},"#1051"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Makes projects that are composed of only SQL models work on 1.3 beta (dbt 1.3 renamed the ",(0,r.kt)("inlineCode",{parentName:"em"},"compiled_sql")," field to ",(0,r.kt)("inlineCode",{parentName:"em"},"compiled_code")," to support Python models). Does not provide support for dbt's Python models.")),(0,r.kt)("li",{parentName:"ul"},"Support Flink 1.15 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1009"},(0,r.kt)("inlineCode",{parentName:"a"},"#1009"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mzareba382"},"@mzareba382"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds support for Flink 1.15.")),(0,r.kt)("li",{parentName:"ul"},"Add Redshift dialect to the SQL integration ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1066"},(0,r.kt)("inlineCode",{parentName:"a"},"#1066"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds support for Redshift's SQL dialect in OpenLineage's SQL parser, including quirks such as the use of square brackets in JSON paths. (Note, this does not add support for all of Redshift's custom syntax.)"))),(0,r.kt)("h3",{id:"changed"},"Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make the timeout configurable in the Spark integration ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1050"},(0,r.kt)("inlineCode",{parentName:"a"},"#1050"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tnazarew"},"@tnazarew"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Makes timeout configurable by the user. (In some cases, the time needed to send events was longer than 5 seconds, which exceeded the timeout value.)"))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a dialect parameter to Great Expectations SQL parser calls ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1049"},(0,r.kt)("inlineCode",{parentName:"a"},"#1049"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Specifies the dialect name from the SQL engine.")),(0,r.kt)("li",{parentName:"ul"},"Fix Delta 2.1.0 with Spark 3.3.0 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1065"},(0,r.kt)("inlineCode",{parentName:"a"},"#1065"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Allows delta support for Spark 3.3 and fixes potential issues. (The Openlineage integration for Spark 3.3 was turned on without delta support, as delta did not support Spark 3.3 at that time.)"))))}d.isMDXComponent=!0}}]);