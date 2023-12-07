"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8476],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(a),g=i,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29423:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:2,title:"Quickstart with Databricks"},s=void 0,o={unversionedId:"integrations/spark/quickstart_databricks",id:"integrations/spark/quickstart_databricks",title:"Quickstart with Databricks",description:"OpenLineage's Spark Integration can be installed on Databricks leveraging init scripts. Please note, Databricks on Google Cloud does not currently support the DBFS CLI, so the proposed solution will not work on Google Cloud until that feature is enabled.",source:"@site/docs/integrations/spark/quickstart_databricks.md",sourceDirName:"integrations/spark",slug:"/integrations/spark/quickstart_databricks",permalink:"/docs/integrations/spark/quickstart_databricks",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/spark/quickstart_databricks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Quickstart with Databricks"},sidebar:"tutorialSidebar",previous:{title:"Apache Spark",permalink:"/docs/integrations/spark/"},next:{title:"Column-level Lineage",permalink:"/docs/integrations/spark/spark_column_lineage"}},p={},l=[{value:"Enable OpenLineage",id:"enable-openlineage",level:2},{value:"Verify Initialization",id:"verify-initialization",level:2},{value:"Create a Dataset",id:"create-a-dataset",level:2},{value:"Observe OpenLineage Events",id:"observe-openlineage-events",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"OpenLineage's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/a2d39a7a6f02474b2dfd1484f3a6d2810a5ffe30/integration/spark/README.md"},"Spark Integration")," can be installed on Databricks leveraging ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," scripts. Please note, Databricks on Google Cloud does not currently support the DBFS CLI, so the proposed solution will not work on Google Cloud until that feature is enabled. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/databricks/clusters/init-scripts"},"Azure Databricks Init Scripts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.gcp.databricks.com/clusters/init-scripts.html"},"GCP Databricks Init Scripts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.databricks.com/clusters/init-scripts.html"},"AWS Databricks Init Scripts"))),(0,i.kt)("h2",{id:"enable-openlineage"},"Enable OpenLineage"),(0,i.kt)("p",null,"Follow the steps below to enable OpenLineage on Databricks."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build the jar via Gradle or download the ",(0,i.kt)("a",{parentName:"li",href:"https://search.maven.org/remote_content?g=io.openlineage&a=openlineage-spark&v=LATEST"},"latest release"),"."),(0,i.kt)("li",{parentName:"ul"},"Configure the Databricks CLI with your desired workspace:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/databricks/dev-tools/cli/"},"Azure Databricks CLI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.gcp.databricks.com/dev-tools/cli/index.html"},"GCP Databricks CLI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.databricks.com/dev-tools/cli/index.html"},"AWS Databricks CLI")))),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/blob/main/integration/spark/databricks/upload-to-databricks.sh"},(0,i.kt)("inlineCode",{parentName:"a"},"upload-to-databricks.sh"))," or ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/blob/main/integration/spark/databricks/upload-to-databricks.ps1"},(0,i.kt)("inlineCode",{parentName:"a"},"upload-to-databricks.ps1")),". This will:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"create a folder in DBFS to store the OpenLineage jar."),(0,i.kt)("li",{parentName:"ul"},"copy the jar to the DBFS folder"),(0,i.kt)("li",{parentName:"ul"},"copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"init")," script to the DBFS folder"))),(0,i.kt)("li",{parentName:"ul"},"Create an interactive or job cluster with the relevant Spark configs:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"spark.openlineage.transport.type console\nspark.extraListeners io.openlineage.spark.agent.OpenLineageSparkListener\nspark.openlineage.version v1\n"))),(0,i.kt)("li",{parentName:"ul"},"Create manually ",(0,i.kt)("inlineCode",{parentName:"li"},"open-lineage-init-script.sh")," through ",(0,i.kt)("strong",{parentName:"li"},"Workspace")," section in Databricks UI. Paste the script content from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/blob/main/integration/spark/databricks/open-lineage-init-script.sh"},"this file"),"."),(0,i.kt)("li",{parentName:"ul"},"Make the cluster init script to point to previously created file. For example, if you create ",(0,i.kt)("inlineCode",{parentName:"li"},"open-lineage-init-script.sh")," within ",(0,i.kt)("strong",{parentName:"li"},"Shared"),", then init scripts should point to ",(0,i.kt)("inlineCode",{parentName:"li"},"/Shared/open-lineage-init-script.sh"),". User's workspace may be used as well. Alternatively, init script can be located in S3. Please mind that ",(0,i.kt)("strong",{parentName:"li"},"DBFS")," located init script are no longer supported (starting September 2023).")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," script approach is currently obligatory to install OpenLineage on Databricks. The Openlineage integration relies on providing a custom extra listener class ",(0,i.kt)("inlineCode",{parentName:"p"},"io.openlineage.spark.agent.OpenLineageSparkListener")," that has to be available on the classpath at the driver startup. Providing it with ",(0,i.kt)("inlineCode",{parentName:"p"},"spark.jars.packages")," does not work on the Databricks platform as of August 2022.  ")),(0,i.kt)("h2",{id:"verify-initialization"},"Verify Initialization"),(0,i.kt)("p",null,"A successful initialization will emit logs in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Log4j output")," that look similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"YY/MM/DD HH:mm:ss INFO SparkContext: Registered listener io.openlineage.spark.agent.OpenLineageSparkListener\n\nYY/MM/DD HH:mm:ss INFO OpenLineageContext: Init OpenLineageContext: Args: ArgumentParser(host=https://YOURHOST, version=v1, namespace=YOURNAMESPACE, jobName=default, parentRunId=null, apiKey=Optional.empty) URI: https://YOURHOST/api/v1/lineage\n\nYY/MM/DD HH:mm:ss INFO AsyncEventQueue: Process of event SparkListenerApplicationStart(Databricks Shell,Some(app-XXX-0000),YYYY,root,None,None,None) by listener OpenLineageSparkListener took Xs.\n")),(0,i.kt)("h2",{id:"create-a-dataset"},"Create a Dataset"),(0,i.kt)("p",null,"Open a notebook and create an example dataset with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"spark.createDataFrame([\n    {'a': 1, 'b': 2},\n    {'a': 3, 'b': 4}\n]).write.mode(\"overwrite\").saveAsTable(\"default.temp\")\n")),(0,i.kt)("h2",{id:"observe-openlineage-events"},"Observe OpenLineage Events"),(0,i.kt)("p",null,"To troubleshoot or observe OpenLineage information in Databricks, see the ",(0,i.kt)("inlineCode",{parentName:"p"},"Log4j output")," in the Cluster definition's ",(0,i.kt)("inlineCode",{parentName:"p"},"Driver Logs"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Log4j output")," should contain entries starting with a message ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO ConsoleTransport")," that contain generated OpenLineage events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"eventType":"COMPLETE","eventTime":"2022-08-01T08:36:21.633Z","run":{"runId":"64537bbd-00ac-498d-ad49-1c77e9c2aabd","facets":{"spark_unknown":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunFacet","inputs":[{"description":{"@class":"org.apache.spark.sql.catalyst.analysis.ResolvedTableName","id":1,"traceEnabled":false,"streaming":false,"cacheId":{"id":2,"empty":true,"defined":false},"canonicalizedPlan":false,"defaultTreePatternBits":{"id":3}},"inputAttributes":[],"outputAttributes":[]},{"description":{"@class":"org.apache.spark.sql.execution.LogicalRDD","id":1,"streaming":false,"traceEnabled":false,"cacheId":{"id":2,"empty":true,"defined":false},"canonicalizedPlan":false,"defaultTreePatternBits":{"id":3}},"inputAttributes":[],"outputAttributes":[{"name":"a","type":"long","metadata":{}},{"name":"b","type":"long","metadata":{}}]}]},"spark.logicalPlan":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunFacet","plan":[{"class":"org.apache.spark.sql.catalyst.plans.logical.ReplaceTableAsSelect","num-children":2,"name":0,"partitioning":[],"query":1,"tableSpec":null,"writeOptions":null,"orCreate":true},{"class":"org.apache.spark.sql.catalyst.analysis.ResolvedTableName","num-children":0,"catalog":null,"ident":null},{"class":"org.apache.spark.sql.execution.LogicalRDD","num-children":0,"output":[[{"class":"org.apache.spark.sql.catalyst.expressions.AttributeReference","num-children":0,"name":"a","dataType":"long","nullable":true,"metadata":{},"exprId":{"product-class":"org.apache.spark.sql.catalyst.expressions.ExprId","id":18,"jvmId":"481bebf6-f861-400e-bb00-ea105ed8afef"},"qualifier":[]}],[{"class":"org.apache.spark.sql.catalyst.expressions.AttributeReference","num-children":0,"name":"b","dataType":"long","nullable":true,"metadata":{},"exprId":{"product-class":"org.apache.spark.sql.catalyst.expressions.ExprId","id":19,"jvmId":"481bebf6-f861-400e-bb00-ea105ed8afef"},"qualifier":[]}]],"rdd":null,"outputPartitioning":{"product-class":"org.apache.spark.sql.catalyst.plans.physical.UnknownPartitioning","numPartitions":0},"outputOrdering":[],"isStreaming":false,"session":null}]},"spark_version":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunFacet","spark-version":"3.2.1","openlineage-spark-version":"0.12.0-SNAPSHOT"}}},"job":{"namespace":"default","name":"databricks_shell.atomic_replace_table_as_select","facets":{}},"inputs":[],"outputs":[{"namespace":"dbfs","name":"/user/hive/warehouse/temp","facets":{"dataSource":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasourceDatasetFacet.json#/$defs/DatasourceDatasetFacet","name":"dbfs","uri":"dbfs"},"schema":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/SchemaDatasetFacet.json#/$defs/SchemaDatasetFacet","fields":[{"name":"a","type":"long"},{"name":"b","type":"long"}]},"storage":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/StorageDatasetFacet.json#/$defs/StorageDatasetFacet","storageLayer":"delta","fileFormat":"parquet"},"lifecycleStateChange":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/LifecycleStateChangeDatasetFacet.json#/$defs/LifecycleStateChangeDatasetFacet","lifecycleStateChange":"OVERWRITE"}},"outputFacets":{}}],"producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunEvent"}\n')),(0,i.kt)("p",null,"The generated JSON contains the output dataset name and location ",(0,i.kt)("inlineCode",{parentName:"p"},'{"namespace":"dbfs","name":"/user/hive/warehouse/temp""')," metadata, schema fields ",(0,i.kt)("inlineCode",{parentName:"p"},'[{"name":"a","type":"long"},{"name":"b","type":"long"}]'),", and more."))}u.isMDXComponent=!0}}]);