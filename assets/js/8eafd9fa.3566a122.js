"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2904],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(t),d=o,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||i;return t?a.createElement(m,r(r({ref:n},c),{},{components:t})):a.createElement(m,r({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=g;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const i={title:"Logging",sidebar_position:1},r=void 0,s={unversionedId:"development/developing/java/troubleshooting/logging",id:"development/developing/java/troubleshooting/logging",title:"Logging",description:"OpenLineage Java library is based on slf4j when generating logs. Being able to emit logs for various purposes is very helpful when troubleshooting OpenLineage.",source:"@site/docs/development/developing/java/troubleshooting/logging.md",sourceDirName:"development/developing/java/troubleshooting",slug:"/development/developing/java/troubleshooting/logging",permalink:"/docs/development/developing/java/troubleshooting/logging",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/development/developing/java/troubleshooting/logging.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Logging",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Setup a development environment",permalink:"/docs/development/developing/java/setup"},next:{title:"Example Lineage Events",permalink:"/docs/development/examples"}},p={},l=[{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Further readings",id:"further-readings",level:3}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OpenLineage Java library is based on ",(0,o.kt)("a",{parentName:"p",href:"https://www.slf4j.org/"},"slf4j")," when generating logs. Being able to emit logs for various purposes is very helpful when troubleshooting OpenLineage."),(0,o.kt)("p",null,"Consider the following sample java code that emits OpenLineage events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package ol.test;\n\nimport io.openlineage.client.OpenLineage;\nimport io.openlineage.client.OpenLineageClient;\nimport io.openlineage.client.OpenLineage.RunEvent;\nimport io.openlineage.client.OpenLineage.InputDataset;\nimport io.openlineage.client.OpenLineage.Job;\nimport io.openlineage.client.OpenLineage.JobFacets;\nimport io.openlineage.client.OpenLineage.OutputDataset;\nimport io.openlineage.client.OpenLineage.Run;\nimport io.openlineage.client.OpenLineage.RunFacets;\nimport io.openlineage.client.OpenLineage.RunEvent.EventType;\nimport io.openlineage.client.transports.HttpTransport;\n\nimport java.net.URI;\nimport java.time.ZoneId;\nimport java.time.ZonedDateTime;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.UUID;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\n/**\n * sample openlinage client code\n */\npublic class OpenLineageClientTest\n{\n    private static Logger logger = LoggerFactory.getLogger(OpenLineageClientTest.class);\n\n    public static void main( String[] args )\n    {\n        logger.info("Running OpenLineage Client Test...");\n        try {\n\n            OpenLineageClient client = OpenLineageClient.builder()\n                .transport(\n                    HttpTransport.builder()\n                    .uri("http://localhost:5000")\n                    .apiKey("abcdefghijklmn")\n                    .build())\n                .build();\n\n            // create one start event for testing\n            RunEvent event = buildEvent(EventType.START, null);\n\n            // emit the event\n            client.emit(event);\n\n            // another event to COMPLETE the run\n            event = buildEvent(EventType.COMPLETE, event.getRun().getRunId());\n\n            // emit the second COMPLETE event\n            client.emit(event);\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    // sample code to build event\n    public static RunEvent buildEvent(EventType eventType, UUID runId) {\n        ZonedDateTime now = ZonedDateTime.now(ZoneId.of("UTC"));\n        URI producer = URI.create("producer");\n        OpenLineage ol = new OpenLineage(producer);\n\n        if (runId == null) {\n            runId = UUID.randomUUID();\n        }\n\n        // run facets\n        RunFacets runFacets =\n        ol.newRunFacetsBuilder()\n            .nominalTime(\n                ol.newNominalTimeRunFacetBuilder()\n                    .nominalStartTime(now)\n                    .nominalEndTime(now)\n                    .build())\n            .build();\n\n        // a run is composed of run id, and run facets\n        Run run = ol.newRunBuilder().runId(runId).facets(runFacets).build();\n\n        // job facets\n        JobFacets jobFacets = ol.newJobFacetsBuilder().build();\n\n        // job\n        String name = "jobName";\n        String namespace = "namespace";\n        Job job = ol.newJobBuilder().namespace(namespace).name(name).facets(jobFacets).build();\n\n        // input dataset\n        List<InputDataset> inputs =\n        Arrays.asList(\n            ol.newInputDatasetBuilder()\n                .namespace("ins")\n                .name("input")\n                .facets(\n                    ol.newDatasetFacetsBuilder()\n                        .version(ol.newDatasetVersionDatasetFacet("input-version"))\n                        .build())\n                .inputFacets(\n                    ol.newInputDatasetInputFacetsBuilder()\n                        .dataQualityMetrics(\n                            ol.newDataQualityMetricsInputDatasetFacetBuilder()\n                                .rowCount(10L)\n                                .bytes(20L)\n                                .columnMetrics(\n                                    ol.newDataQualityMetricsInputDatasetFacetColumnMetricsBuilder()\n                                        .put(\n                                            "mycol",\n                                            ol.newDataQualityMetricsInputDatasetFacetColumnMetricsAdditionalBuilder()\n                                                .count(10D)\n                                                .distinctCount(10L)\n                                                .max(30D)\n                                                .min(5D)\n                                                .nullCount(1L)\n                                                .sum(3000D)\n                                                .quantiles(\n                                                    ol.newDataQualityMetricsInputDatasetFacetColumnMetricsAdditionalQuantilesBuilder()\n                                                        .put("25", 52D)\n                                                        .build())\n                                                .build())\n                                        .build())\n                                .build())\n                        .build())\n                .build());\n        // output dataset\n        List<OutputDataset> outputs =\n            Arrays.asList(\n                ol.newOutputDatasetBuilder()\n                    .namespace("ons")\n                    .name("output")\n                    .facets(\n                        ol.newDatasetFacetsBuilder()\n                            .version(ol.newDatasetVersionDatasetFacet("output-version"))\n                            .build())\n                    .outputFacets(\n                        ol.newOutputDatasetOutputFacetsBuilder()\n                            .outputStatistics(ol.newOutputStatisticsOutputDatasetFacet(10L, 20L))\n                            .build())\n                    .build());\n\n        // run state udpate which encapsulates all - with START event in this case\n        RunEvent runStateUpdate =\n        ol.newRunEventBuilder()\n            .eventType(eventType)\n            .eventTime(now)\n            .run(run)\n            .job(job)\n            .inputs(inputs)\n            .outputs(outputs)\n            .build();\n\n        return runStateUpdate;\n    }\n}\n\n')),(0,o.kt)("p",null,"When you use OpenLineage backend such as Marquez on your local environment, the program would emit OpenLienage events to it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"java ol.test.OpenLineageClientTest \n")),(0,o.kt)("p",null,"However, this short program does not produce any logging information, as the logging configuration is required to be setup. Below are the examples of adding dependencies of the libraries that you need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"log4j2")," as the target implementation for the slf4j, on ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"maven")," or ",(0,o.kt)("a",{parentName:"p",href:"https://gradle.org/"},"gradle"),"."),(0,o.kt)("h3",{id:"maven"},"Maven"),(0,o.kt)("p",null,"pom.xml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"}," <dependencies>\n    ...\n    <dependency>\n      <groupId>org.apache.logging.log4j</groupId>\n      <artifactId>log4j-api</artifactId>\n      <version>2.7</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.logging.log4j</groupId>\n      <artifactId>log4j-core</artifactId>\n      <version>2.7</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.logging.log4j</groupId>\n      <artifactId>log4j-slf4j-impl</artifactId>\n      <version>2.7</version>\n    </dependency>\n    ...\n  </dependencies>\n")),(0,o.kt)("h3",{id:"gradle"},"Gradle"),(0,o.kt)("p",null,"build.gradle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'dependencies {\n    ...\n    implementation "org.apache.logging.log4j:log4j-api:2.7"\n    implementation "org.apache.logging.log4j:log4j-core:2.7"\n    implementation "org.apache.logging.log4j:log4j-slf4j-impl:2.7"\n    ...\n}\n')),(0,o.kt)("p",null,"You also need to create a log4j configuration file, ",(0,o.kt)("inlineCode",{parentName:"p"},"log4j2.properties")," on the classpath. Here is the sample log configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Set to debug or trace if log4j initialization is failing\nstatus = warn\n\n# Name of the configuration\nname = ConsoleLogConfigDemo\n\n# Console appender configuration\nappender.console.type = Console\nappender.console.name = consoleLogger\nappender.console.layout.type = PatternLayout\nappender.console.layout.pattern = %d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n\n\n# Root logger level\nrootLogger.level = debug\n\n# Root logger referring to console appender\nrootLogger.appenderRef.stdout.ref = consoleLogger\n")),(0,o.kt)("p",null,"Re-compiling and running the ",(0,o.kt)("inlineCode",{parentName:"p"},"ol.test.OpenLineageClientTest")," again will produce the following outputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'2022-12-07 08:57:24 INFO  OpenLineageClientTest:33 - Running OpenLineage Client Test...\n2022-12-07 08:57:25 DEBUG HttpTransport:96 - POST http://localhost:5000/api/v1/lineage: {"eventType":"START","eventTime":"2022-12-07T14:57:25.072781Z","run":{"runId":"0142c998-3416-49e7-92aa-d025c4c93697","facets":{"nominalTime":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/NominalTimeRunFacet.json#/$defs/NominalTimeRunFacet","nominalStartTime":"2022-12-07T14:57:25.072781Z","nominalEndTime":"2022-12-07T14:57:25.072781Z"}}},"job":{"namespace":"namespace","name":"jobName","facets":{}},"inputs":[{"namespace":"ins","name":"input","facets":{"version":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasetVersionDatasetFacet.json#/$defs/DatasetVersionDatasetFacet","datasetVersion":"input-version"}},"inputFacets":{"dataQualityMetrics":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DataQualityMetricsInputDatasetFacet.json#/$defs/DataQualityMetricsInputDatasetFacet","rowCount":10,"bytes":20,"columnMetrics":{"mycol":{"nullCount":1,"distinctCount":10,"sum":3000.0,"count":10.0,"min":5.0,"max":30.0,"quantiles":{"25":52.0}}}}}}],"outputs":[{"namespace":"ons","name":"output","facets":{"version":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasetVersionDatasetFacet.json#/$defs/DatasetVersionDatasetFacet","datasetVersion":"output-version"}},"outputFacets":{"outputStatistics":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/OutputStatisticsOutputDatasetFacet.json#/$defs/OutputStatisticsOutputDatasetFacet","rowCount":10,"size":20}}}],"producer":"producer","schemaURL":"https://openlineage.io/spec/1-0-4/OpenLineage.json#/$defs/RunEvent"}\n2022-12-07 08:57:25 DEBUG HttpTransport:96 - POST http://localhost:5000/api/v1/lineage: {"eventType":"COMPLETE","eventTime":"2022-12-07T14:57:25.42041Z","run":{"runId":"0142c998-3416-49e7-92aa-d025c4c93697","facets":{"nominalTime":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/NominalTimeRunFacet.json#/$defs/NominalTimeRunFacet","nominalStartTime":"2022-12-07T14:57:25.42041Z","nominalEndTime":"2022-12-07T14:57:25.42041Z"}}},"job":{"namespace":"namespace","name":"jobName","facets":{}},"inputs":[{"namespace":"ins","name":"input","facets":{"version":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasetVersionDatasetFacet.json#/$defs/DatasetVersionDatasetFacet","datasetVersion":"input-version"}},"inputFacets":{"dataQualityMetrics":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DataQualityMetricsInputDatasetFacet.json#/$defs/DataQualityMetricsInputDatasetFacet","rowCount":10,"bytes":20,"columnMetrics":{"mycol":{"nullCount":1,"distinctCount":10,"sum":3000.0,"count":10.0,"min":5.0,"max":30.0,"quantiles":{"25":52.0}}}}}}],"outputs":[{"namespace":"ons","name":"output","facets":{"version":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasetVersionDatasetFacet.json#/$defs/DatasetVersionDatasetFacet","datasetVersion":"output-version"}},"outputFacets":{"outputStatistics":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/OutputStatisticsOutputDatasetFacet.json#/$defs/OutputStatisticsOutputDatasetFacet","rowCount":10,"size":20}}}],"producer":"producer","schemaURL":"https://openlineage.io/spec/1-0-4/OpenLineage.json#/$defs/RunEvent"}\n')),(0,o.kt)("p",null,"Logs will also produce meaningful error messages when something does not work correctly. For example, if the backend server does not exist, you would get the following messages in your console output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'2022-12-07 09:15:16 INFO  OpenLineageClientTest:33 - Running OpenLineage Client Test...\n2022-12-07 09:15:16 DEBUG HttpTransport:96 - POST http://localhost:5000/api/v1/lineage: {"eventType":"START","eventTime":"2022-12-07T15:15:16.668979Z","run":{"runId":"69861937-55ba-43f5-ab5e-fe78ef6a283d","facets":{"nominalTime":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/NominalTimeRunFacet.json#/$defs/NominalTimeRunFacet","nominalStartTime":"2022-12-07T15:15:16.668979Z","nominalEndTime":"2022-12-07T15:15:16.668979Z"}}},"job":{"namespace":"namespace","name":"jobName","facets":{}},"inputs":[{"namespace":"ins","name":"input","facets":{"version":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasetVersionDatasetFacet.json#/$defs/DatasetVersionDatasetFacet","datasetVersion":"input-version"}},"inputFacets":{"dataQualityMetrics":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DataQualityMetricsInputDatasetFacet.json#/$defs/DataQualityMetricsInputDatasetFacet","rowCount":10,"bytes":20,"columnMetrics":{"mycol":{"nullCount":1,"distinctCount":10,"sum":3000.0,"count":10.0,"min":5.0,"max":30.0,"quantiles":{"25":52.0}}}}}}],"outputs":[{"namespace":"ons","name":"output","facets":{"version":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasetVersionDatasetFacet.json#/$defs/DatasetVersionDatasetFacet","datasetVersion":"output-version"}},"outputFacets":{"outputStatistics":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/OutputStatisticsOutputDatasetFacet.json#/$defs/OutputStatisticsOutputDatasetFacet","rowCount":10,"size":20}}}],"producer":"producer","schemaURL":"https://openlineage.io/spec/1-0-4/OpenLineage.json#/$defs/RunEvent"}\nio.openlineage.client.OpenLineageClientException: org.apache.http.conn.HttpHostConnectException: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused\n        at io.openlineage.client.transports.HttpTransport.emit(HttpTransport.java:113)\n        at io.openlineage.client.OpenLineageClient.emit(OpenLineageClient.java:42)\n        at ol.test.OpenLineageClientTest.main(OpenLineageClientTest.java:48)\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused\n        at org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\n        at org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\n        at org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\n        at org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\n        at org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\n        at org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\n        at org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\n        at org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\n        at org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\n        at org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\n        at io.openlineage.client.transports.HttpTransport.emit(HttpTransport.java:108)\n        ... 2 more\nCaused by: java.net.ConnectException: Connection refused\n        at java.base/sun.nio.ch.Net.pollConnect(Native Method)\n        at java.base/sun.nio.ch.Net.pollConnectNow(Net.java:672)\n        at java.base/sun.nio.ch.NioSocketImpl.timedFinishConnect(NioSocketImpl.java:542)\n        at java.base/sun.nio.ch.NioSocketImpl.connect(NioSocketImpl.java:585)\n        at java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:327)\n        at java.base/java.net.Socket.connect(Socket.java:666)\n        at org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\n        at org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\n        ... 12 more\n')),(0,o.kt)("p",null,"If you wish to output loggigng message to a file, you can modify the basic configuration by adding a file appender configuration as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Set to debug or trace if log4j initialization is failing\nstatus = warn\n\n# Name of the configuration\nname = ConsoleLogConfigDemo\n\n# Console appender configuration\nappender.console.type = Console\nappender.console.name = consoleLogger\nappender.console.layout.type = PatternLayout\nappender.console.layout.pattern = %d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n\n\n# File appender configuration\nappender.file.type = File\nappender.file.name = fileLogger\nappender.file.fileName = app.log\nappender.file.layout.type = PatternLayout\nappender.file.layout.pattern = %d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n\n\n# Root logger level\nrootLogger.level = debug\n\n# Root logger referring to console appender\nrootLogger.appenderRef.stdout.ref = consoleLogger\nrootLogger.appenderRef.file.ref = fileLogger\n")),(0,o.kt)("p",null,"And the logs will be saved to a file ",(0,o.kt)("inlineCode",{parentName:"p"},"app.log"),".\nOutputting logs using ",(0,o.kt)("inlineCode",{parentName:"p"},"log4j2")," is just one way of doing it, so below are some additional resources of undersatnding how Java logging works, and other ways to output the logs."),(0,o.kt)("h3",{id:"further-readings"},"Further readings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/java-logging-intro"},"https://www.baeldung.com/java-logging-intro")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/slf4j-with-log4j2-logback#Log4j2"},"https://www.baeldung.com/slf4j-with-log4j2-logback#Log4j2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mkyong.com/logging/log4j2-properties-example/"},"https://mkyong.com/logging/log4j2-properties-example/"))))}u.isMDXComponent=!0}}]);