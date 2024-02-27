"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9585],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82888:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_position:5},o="Java",l={unversionedId:"client/java",id:"client/java",title:"Java",description:"Overview",source:"@site/docs/client/java.md",sourceDirName:"client",slug:"/client/java",permalink:"/docs/client/java",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/client/java.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Job Hierarchy",permalink:"/docs/spec/job-hierarchy"},next:{title:"Python",permalink:"/docs/client/python"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Facets Configuration",id:"facets-configuration",level:3},{value:"Transports",id:"transports",level:3},{value:"ConsoleTransport",id:"consoletransport",level:4},{value:"FileTransport",id:"filetransport",level:4},{value:"HttpTransport",id:"httptransport",level:4},{value:"KafkaTransport",id:"kafkatransport",level:4},{value:"KinesisTransport",id:"kinesistransport",level:4},{value:"Error Handling via Transport",id:"error-handling-via-transport",level:3},{value:"Defining Your Own Transport",id:"defining-your-own-transport",level:3},{value:"Circuit Breakers",id:"circuit-breakers",level:2},{value:"Simple Memory Circuit Breaker",id:"simple-memory-circuit-breaker",level:3},{value:"Java Runtime Circuit Breaker",id:"java-runtime-circuit-breaker",level:3},{value:"Custom Circuit Breaker",id:"custom-circuit-breaker",level:3},{value:"Usage",id:"usage",level:2},{value:"1. Simple OpenLineage Client Test for Console Transport",id:"1-simple-openlineage-client-test-for-console-transport",level:3},{value:"2. Simple OpenLineage Client Test for Http Transport",id:"2-simple-openlineage-client-test-for-http-transport",level:3}],u={toc:s};function c(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"java"},"Java"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The OpenLineage Java is a SDK for Java programming language that users can use to generate and emit OpenLineage events to OpenLineage backends.\nThe core data structures currently offered by the client are the ",(0,i.kt)("inlineCode",{parentName:"p"},"RunEvent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RunState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Run"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Job"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Dataset"),",\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"Transport")," classes, along with various ",(0,i.kt)("inlineCode",{parentName:"p"},"Facets")," that can come under run, job, and dataset."),(0,i.kt)("p",null,"There are various ",(0,i.kt)("a",{parentName:"p",href:"#transports"},"transport classes")," that the library provides that carry the lineage events into various target endpoints (e.g. HTTP)."),(0,i.kt)("p",null,"You can also use the Java client to create your own custom integrations."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Java client is provided as library that can either be imported into your Java project using Maven or Gradle."),(0,i.kt)("p",null,"Maven:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.openlineage</groupId>\n    <artifactId>openlineage-java</artifactId>\n    <version>1.8.0</version>\n</dependency>\n")),(0,i.kt)("p",null,"or Gradle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'io.openlineage:openlineage-java:1.8.0'\n")),(0,i.kt)("p",null,"For more information on the available versions of the ",(0,i.kt)("inlineCode",{parentName:"p"},"openlineage-java"),",\nplease refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.openlineage/openlineage-java"},"maven repository"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"We recommend configuring the client with an ",(0,i.kt)("inlineCode",{parentName:"p"},"openlineage.yml")," file that contains all the\ndetails of how to connect to your OpenLineage backend.  "),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#transports"},"example configurations.")),(0,i.kt)("p",null,"You can make this file available to the client in three ways (the list also presents precedence of the configuration):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set an ",(0,i.kt)("inlineCode",{parentName:"li"},"OPENLINEAGE_CONFIG")," environment variable to a file path: ",(0,i.kt)("inlineCode",{parentName:"li"},"OPENLINEAGE_CONFIG=path/to/openlineage.yml"),"."),(0,i.kt)("li",{parentName:"ol"},"Place an ",(0,i.kt)("inlineCode",{parentName:"li"},"openlineage.yml")," in the user's current working directory."),(0,i.kt)("li",{parentName:"ol"},"Place an ",(0,i.kt)("inlineCode",{parentName:"li"},"openlineage.yml")," under ",(0,i.kt)("inlineCode",{parentName:"li"},".openlineage/")," in the user's home directory (",(0,i.kt)("inlineCode",{parentName:"li"},"~/.openlineage/openlineage.yml"),").")),(0,i.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"The following environment variables are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Since"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OPENLINEAGE_CONFIG"),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the YAML configuration file. Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"path/to/openlineage.yml")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OPENLINEAGE_DISABLED"),(0,i.kt)("td",{parentName:"tr",align:null},"When ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", OpenLineage will not emit events."),(0,i.kt)("td",{parentName:"tr",align:null},"0.9.0")))),(0,i.kt)("h3",{id:"facets-configuration"},"Facets Configuration"),(0,i.kt)("p",null,"In YAML configuration file you can also specify a list of disabled facets that will not be included in OpenLineage event. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"YAML Configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"transport:\n  type: console\nfacets:\n  disabled: \n    - spark_unknown\n    - spark_logicalPlan\n")),(0,i.kt)("h3",{id:"transports"},"Transports"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Tip:")," See current list of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports"},"all supported transports"),".")),(0,i.kt)("br",null),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Transport")," abstraction defines an ",(0,i.kt)("inlineCode",{parentName:"p"},"emit()")," method for ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenLineage.RunEvent"),".\nThere are some built-in transports: ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsoleTransport"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpTransport"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FileTransport"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"KinesisTransport")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"KafkaTransport"),"."),(0,i.kt)("h4",{id:"consoletransport"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/ConsoleTransport.java"},"ConsoleTransport")),(0,i.kt)("p",null,"This straightforward transport emits OpenLineage events directly to the console through a logger.\nBe cautious when using the DEBUG log level, as it might result in double-logging due to the ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenLineageClient")," also logging."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"YAML Configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"transport:\n  type: console\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"No additional configuration required.")),(0,i.kt)("p",null,"You can also specify the ConsoleTransport when building a new client instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"OpenLineageClient client = OpenLineageClient.builder()\n  .transport(\n    new ConsoleTransport()\n  .build();\n")),(0,i.kt)("h4",{id:"filetransport"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/FileTransport.java"},"FileTransport")),(0,i.kt)("p",null,"Designed mainly for integration testing, the ",(0,i.kt)("inlineCode",{parentName:"p"},"FileTransport")," appends OpenLineage events to a given file.\nEvents are newline-separated, with all pre-existing newline characters within the event JSON removed."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"YAML Configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"transport:\n  type: file\n  location: /path/to/your/file.txt\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Notes"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the target file is absent, it's created."),(0,i.kt)("li",{parentName:"ul"},"Events are added to the file, separated by newlines."),(0,i.kt)("li",{parentName:"ul"},"Intrinsic newline characters within the event JSON are eliminated to ensure one-line events.")),(0,i.kt)("h4",{id:"httptransport"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/HttpTransport.java"},"HttpTransport")),(0,i.kt)("p",null,"Allows sending events to HTTP endpoint (with optional authorization headers)."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"YAML Configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"transport:\n  type: http\n  url: http://localhost:5000\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"YAML Configuration")," (with authorization)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"transport:\n  type: http\n  url: http://localhost:5000\n  endpoint: api/v1/lineage\n  auth:\n    type: api_key\n    api_key: f38d2189-c603-4b46-bdea-e573a3b5a7d5\n")),(0,i.kt)("p",null,"You can override the default configuration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpTransport")," by specifying the URL and API key when\ncreating a new client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'OpenLineageClient client = OpenLineageClient.builder()\n  .transport(\n    HttpTransport.builder()\n      .url("http://localhost:5000")\n      .apiKey("f38d2189-c603-4b46-bdea-e573a3b5a7d5")\n      .build())\n  .build();\n')),(0,i.kt)("p",null,"To configure the client with query params appended on each HTTP request, use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, String> queryParamsToAppend = Map.of(\n  "param0","value0",\n  "param1", "value1"\n);\n\n// Connect to http://localhost:5000\nOpenLineageClient client = OpenLineageClient.builder()\n  .transport(\n    HttpTransport.builder()\n      .url("http://localhost:5000", queryParamsToAppend)\n      .apiKey("f38d2189-c603-4b46-bdea-e573a3b5a7d5")\n      .build())\n  .build();\n\n// Define a simple OpenLineage START or COMPLETE event\nOpenLineage.RunEvent startOrCompleteRun = ...\n\n// Emit OpenLineage event to http://localhost:5000/api/v1/lineage?param0=value0&param1=value1\nclient.emit(startOrCompleteRun);\n')),(0,i.kt)("h4",{id:"kafkatransport"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/KafkaTransport.java"},"KafkaTransport")),(0,i.kt)("p",null,"This transport requires the artifact ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.kafka:kafka-clients:3.1.0")," (or compatible) on your classpath."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"YAML Configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"transport:\n  type: kafka\n  topicName: openlineage.events\n  # Kafka properties (see: http://kafka.apache.org/0100/documentation.html#producerconfigs)\n  properties:\n    bootstrap.servers: localhost:9092,another.host:9092\n    acks: all\n    retries: 3\n    key.serializer: org.apache.kafka.common.serialization.StringSerializer\n    value.serializer: org.apache.kafka.common.serialization.StringSerializer\n")),(0,i.kt)("h4",{id:"kinesistransport"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/OpenLineage/OpenLineage/blob/main/client/java/src/main/java/io/openlineage/client/transports/KinesisTransport.java"},"KinesisTransport")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"KinesisTransport")," facilitates sending OpenLineage events to an Amazon Kinesis stream.\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"transport.type")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"kinesis"),", then the below parameters would be read and used when building KinesisProducer.\nAlso, KinesisTransport depends on you to provide artifact ",(0,i.kt)("inlineCode",{parentName:"p"},"com.amazonaws:amazon-kinesis-producer:0.14.0")," or compatible on your classpath."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"YAML Configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"transport:\n  type: kinesis\n  streamName: your_kinesis_stream_name\n  topicName: openlineage.events\n  region: your_aws_region\n  roleArn: arn:aws:iam::account-id:role/role-name   # optional\n  properties:  # Refer to amazon-kinesis-producer's default configuration for the available properties\n    property_name_1: value_1\n    property_name_2: value_2\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Behavior"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Events are serialized to JSON upon the ",(0,i.kt)("inlineCode",{parentName:"li"},"emit()")," call and dispatched to the Kinesis stream."),(0,i.kt)("li",{parentName:"ul"},"The partition key is generated by combining the job's namespace and name."),(0,i.kt)("li",{parentName:"ul"},"Two constructors are available: one accepting both ",(0,i.kt)("inlineCode",{parentName:"li"},"KinesisProducer")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"KinesisConfig")," and another solely accepting ",(0,i.kt)("inlineCode",{parentName:"li"},"KinesisConfig"),".")),(0,i.kt)("h3",{id:"error-handling-via-transport"},"Error Handling via Transport"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Connect to http://localhost:5000\nOpenLineageClient client = OpenLineageClient.builder()\n  .transport(\n    HttpTransport.builder()\n      .uri("http://localhost:5000")\n      .apiKey("f38d2189-c603-4b46-bdea-e573a3b5a7d5")\n      .build())\n  .registerErrorHandler(new EmitErrorHandler() {\n    @Override\n    public void handleError(Throwable throwable) {\n      // Handle emit error here\n    }\n  }).build();\n')),(0,i.kt)("h3",{id:"defining-your-own-transport"},"Defining Your Own Transport"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"OpenLineageClient client = OpenLineageClient.builder()\n  .transport(\n    new MyTransport() {\n      @Override\n      public void emit(OpenLineage.RunEvent runEvent) {\n        // Add emit logic here\n      }\n    }).build();\n")),(0,i.kt)("h2",{id:"circuit-breakers"},"Circuit Breakers"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This feature is available in OpenLineage versions >= 1.9.0.")),(0,i.kt)("p",null,"To prevent from over-instrumentation OpenLineage integration provides a circuit breaker mechanism\nthat stops OpenLineage from creating, serializing and sending OpenLineage events. "),(0,i.kt)("h3",{id:"simple-memory-circuit-breaker"},"Simple Memory Circuit Breaker"),(0,i.kt)("p",null,"Simple circuit breaker which is working based only on free memory within JVM. Configuration should\ncontain free memory threshold limit (percentage). Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"20%"),". The circuit breaker\nwill close within first call if free memory is low. ",(0,i.kt)("inlineCode",{parentName:"p"},"circuitCheckIntervalInMillis")," parameter is used\nto configure a frequency circuit breaker is called. Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"1000ms"),", when no entry in config."),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"circuitBreaker:\n  type: simpleMemory\n  memoryThreshold: 20\n  circuitCheckIntervalInMillis: 1000\n")),(0,i.kt)("h3",{id:"java-runtime-circuit-breaker"},"Java Runtime Circuit Breaker"),(0,i.kt)("p",null,"More complex version of circuit breaker. The amount of free memory can be low as long as\namount of time spent on Garbage Collection is acceptable. ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaRuntimeCircuitBreaker")," closes\nwhen free memory drops below threshold and amount of time spent on garbage collection exceeds\ngiven threshold (",(0,i.kt)("inlineCode",{parentName:"p"},"10%")," by default). The circuit breaker is always open when checked for the first time\nas GC threshold is computed since the previous circuit breaker call.\n",(0,i.kt)("inlineCode",{parentName:"p"},"circuitCheckIntervalInMillis")," parameter is used\nto configure a frequency circuit breaker is called.\nDefault value is ",(0,i.kt)("inlineCode",{parentName:"p"},"1000ms"),", when no entry in config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"circuitBreaker:\n  type: javaRuntime\n  memoryThreshold: 20\n  gcCpuThreshold: 10\n  circuitCheckIntervalInMillis: 1000\n")),(0,i.kt)("h3",{id:"custom-circuit-breaker"},"Custom Circuit Breaker"),(0,i.kt)("p",null,"List of available circuit breakers can be extended with custom one loaded via ServiceLoader\nwith own implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"io.openlineage.client.circuitBreaker.CircuitBreakerBuilder"),". "),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Use openlineage.yml\nOpenLineageClient client = Clients.newClient();\n\n// Define a simple OpenLineage START or COMPLETE event\nOpenLineage.RunEvent startOrCompleteRun = ...\n\n// Emit OpenLineage event\nclient.emit(startOrCompleteRun);\n")),(0,i.kt)("h3",{id:"1-simple-openlineage-client-test-for-console-transport"},"1. Simple OpenLineage Client Test for Console Transport"),(0,i.kt)("p",null,"First, let's explore how we can create OpenLineage client instance, but not using any actual transport to emit the data yet, except only to our ",(0,i.kt)("inlineCode",{parentName:"p"},"Console.")," This would be a good exercise to run tests and check the data payloads."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    OpenLineageClient client = OpenLineageClient.builder()\n        .transport(new ConsoleTransport()).build();\n")),(0,i.kt)("p",null,"Also, we will then get a sample payload to produce a ",(0,i.kt)("inlineCode",{parentName:"p"},"RunEvent"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    // create one start event for testing\n    RunEvent event = buildEvent(EventType.START);\n")),(0,i.kt)("p",null,"Lastly, we will emit this event using the client that we instantiated\\:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    // emit the event\n    client.emit(event);\n")),(0,i.kt)("p",null,"Here is the full source code of the test client application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package ol.test;\n\nimport io.openlineage.client.OpenLineage;\nimport io.openlineage.client.OpenLineageClient;\nimport io.openlineage.client.OpenLineage.RunEvent;\nimport io.openlineage.client.OpenLineage.InputDataset;\nimport io.openlineage.client.OpenLineage.Job;\nimport io.openlineage.client.OpenLineage.JobFacets;\nimport io.openlineage.client.OpenLineage.OutputDataset;\nimport io.openlineage.client.OpenLineage.Run;\nimport io.openlineage.client.OpenLineage.RunFacets;\nimport io.openlineage.client.OpenLineage.RunEvent.EventType;\nimport io.openlineage.client.transports.ConsoleTransport;\nimport java.net.URI;\nimport java.time.ZoneId;\nimport java.time.ZonedDateTime;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.UUID;\n\n/**\n * My first openlinage client code\n */\npublic class OpenLineageClientTest\n{\n    public static void main( String[] args )\n    {\n        try {\n            OpenLineageClient client = OpenLineageClient.builder()\n            .transport(new ConsoleTransport()).build();\n\n            // create one start event for testing\n            RunEvent event = buildEvent(EventType.START);\n\n            // emit the event\n            client.emit(event);\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n\n    }\n\n    // sample code to build event\n    public static RunEvent buildEvent(EventType eventType) {\n        ZonedDateTime now = ZonedDateTime.now(ZoneId.of("UTC"));\n        URI producer = URI.create("producer");\n        OpenLineage ol = new OpenLineage(producer);\n        UUID runId = UUID.randomUUID();\n\n        // run facets\n        RunFacets runFacets =\n        ol.newRunFacetsBuilder()\n            .nominalTime(\n                ol.newNominalTimeRunFacetBuilder()\n                    .nominalStartTime(now)\n                    .nominalEndTime(now)\n                    .build())\n            .build();\n\n        // a run is composed of run id, and run facets\n        Run run = ol.newRunBuilder().runId(runId).facets(runFacets).build();\n\n        // job facets\n        JobFacets jobFacets = ol.newJobFacetsBuilder().build();\n\n        // job\n        String name = "jobName";\n        String namespace = "namespace";\n        Job job = ol.newJobBuilder().namespace(namespace).name(name).facets(jobFacets).build();\n\n        // input dataset\n        List<InputDataset> inputs =\n        Arrays.asList(\n            ol.newInputDatasetBuilder()\n                .namespace("ins")\n                .name("input")\n                .facets(\n                    ol.newDatasetFacetsBuilder()\n                        .version(ol.newDatasetVersionDatasetFacet("input-version"))\n                        .build())\n                .inputFacets(\n                    ol.newInputDatasetInputFacetsBuilder()\n                        .dataQualityMetrics(\n                            ol.newDataQualityMetricsInputDatasetFacetBuilder()\n                                .rowCount(10L)\n                                .bytes(20L)\n                                .columnMetrics(\n                                    ol.newDataQualityMetricsInputDatasetFacetColumnMetricsBuilder()\n                                        .put(\n                                            "mycol",\n                                            ol.newDataQualityMetricsInputDatasetFacetColumnMetricsAdditionalBuilder()\n                                                .count(10D)\n                                                .distinctCount(10L)\n                                                .max(30D)\n                                                .min(5D)\n                                                .nullCount(1L)\n                                                .sum(3000D)\n                                                .quantiles(\n                                                    ol.newDataQualityMetricsInputDatasetFacetColumnMetricsAdditionalQuantilesBuilder()\n                                                        .put("25", 52D)\n                                                        .build())\n                                                .build())\n                                        .build())\n                                .build())\n                        .build())\n                .build());\n        // output dataset\n        List<OutputDataset> outputs =\n            Arrays.asList(\n                ol.newOutputDatasetBuilder()\n                    .namespace("ons")\n                    .name("output")\n                    .facets(\n                        ol.newDatasetFacetsBuilder()\n                            .version(ol.newDatasetVersionDatasetFacet("output-version"))\n                            .build())\n                    .outputFacets(\n                        ol.newOutputDatasetOutputFacetsBuilder()\n                            .outputStatistics(ol.newOutputStatisticsOutputDatasetFacet(10L, 20L))\n                            .build())\n                    .build());\n\n        // run state udpate which encapsulates all - with START event in this case\n        RunEvent runStateUpdate =\n        ol.newRunEventBuilder()\n            .eventType(OpenLineage.RunEvent.EventType.START)\n            .eventTime(now)\n            .run(run)\n            .job(job)\n            .inputs(inputs)\n            .outputs(outputs)\n            .build();\n\n        return runStateUpdate;\n    }\n}\n')),(0,i.kt)("p",null,"The result of running this will result in the following output from your Java application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[main] INFO io.openlineage.client.transports.ConsoleTransport - {"eventType":"START","eventTime":"2022-08-05T15:11:24.858414Z","run":{"runId":"bb46bbc4-fb1a-495a-ad3b-8d837f566749","facets":{"nominalTime":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/NominalTimeRunFacet.json#/$defs/NominalTimeRunFacet","nominalStartTime":"2022-08-05T15:11:24.858414Z","nominalEndTime":"2022-08-05T15:11:24.858414Z"}}},"job":{"namespace":"namespace","name":"jobName","facets":{}},"inputs":[{"namespace":"ins","name":"input","facets":{"version":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasetVersionDatasetFacet.json#/$defs/DatasetVersionDatasetFacet","datasetVersion":"input-version"}},"inputFacets":{"dataQualityMetrics":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DataQualityMetricsInputDatasetFacet.json#/$defs/DataQualityMetricsInputDatasetFacet","rowCount":10,"bytes":20,"columnMetrics":{"mycol":{"nullCount":1,"distinctCount":10,"sum":3000.0,"count":10.0,"min":5.0,"max":30.0,"quantiles":{"25":52.0}}}}}}],"outputs":[{"namespace":"ons","name":"output","facets":{"version":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasetVersionDatasetFacet.json#/$defs/DatasetVersionDatasetFacet","datasetVersion":"output-version"}},"outputFacets":{"outputStatistics":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/OutputStatisticsOutputDatasetFacet.json#/$defs/OutputStatisticsOutputDatasetFacet","rowCount":10,"size":20}}}],"producer":"producer","schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunEvent"}\n')),(0,i.kt)("h3",{id:"2-simple-openlineage-client-test-for-http-transport"},"2. Simple OpenLineage Client Test for Http Transport"),(0,i.kt)("p",null,"Now, using the same code base, we will change how the client application works by switching the Console transport into ",(0,i.kt)("inlineCode",{parentName:"p"},"Http Transport")," as shown below. This code will now be able to send the OpenLineage events into a compatible backends such as ",(0,i.kt)("a",{parentName:"p",href:"https://marquezproject.ai/"},"Marquez"),". "),(0,i.kt)("p",null,"Before making this change and running it, make sure you have an instance of Marquez running on your local environment. Setting up and running Marquez can be found ",(0,i.kt)("a",{parentName:"p",href:"https://marquezproject.github.io/marquez/quickstart.html"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'OpenLineageClient client = OpenLineageClient.builder()\n    .transport(\n        HttpTransport.builder()\n        .uri("http://localhost:5000")\n        .build())\n    .build();\n')),(0,i.kt)("p",null,"If we ran the same application, you will now see the event data not emitted in the output console, but rather via the HTTP transport to the marquez backend that was running."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"the Marquez graph",src:t(4115).Z,width:"1312",height:"433"})),(0,i.kt)("p",null,"Notice that the Status of this job run will be in ",(0,i.kt)("inlineCode",{parentName:"p"},"RUNNING")," state, as it will be in that state until it receives an ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," event that will close off its gaps. That is how the OpenLineage events would work."),(0,i.kt)("p",null,"Now, let's change the previous example to have lineage event doing a complete cycle of ",(0,i.kt)("inlineCode",{parentName:"p"},"START")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLETE"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package ol.test;\n\nimport io.openlineage.client.OpenLineage;\nimport io.openlineage.client.OpenLineageClient;\nimport io.openlineage.client.OpenLineage.RunEvent;\nimport io.openlineage.client.OpenLineage.InputDataset;\nimport io.openlineage.client.OpenLineage.Job;\nimport io.openlineage.client.OpenLineage.JobFacets;\nimport io.openlineage.client.OpenLineage.OutputDataset;\nimport io.openlineage.client.OpenLineage.Run;\nimport io.openlineage.client.OpenLineage.RunFacets;\nimport io.openlineage.client.OpenLineage.RunEvent.EventType;\nimport io.openlineage.client.transports.HttpTransport;\n\nimport java.net.URI;\nimport java.time.ZoneId;\nimport java.time.ZonedDateTime;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.UUID;\n\n/**\n * My first openlinage client code\n */\npublic class OpenLineageClientTest\n{\n    public static void main( String[] args )\n    {\n        try {\n\n            OpenLineageClient client = OpenLineageClient.builder()\n                .transport(\n                    HttpTransport.builder()\n                    .uri("http://localhost:5000")\n                    .build())\n                .build();\n\n            // create one start event for testing\n            RunEvent event = buildEvent(EventType.START, null);\n\n            // emit the event\n            client.emit(event);\n\n            // another event to COMPLETE the run\n            event = buildEvent(EventType.COMPLETE, event.getRun().getRunId());\n\n            // emit the second COMPLETE event\n            client.emit(event);\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    // sample code to build event\n    public static RunEvent buildEvent(EventType eventType, UUID runId) {\n        ZonedDateTime now = ZonedDateTime.now(ZoneId.of("UTC"));\n        URI producer = URI.create("producer");\n        OpenLineage ol = new OpenLineage(producer);\n\n        if (runId == null) {\n            runId = UUID.randomUUID();\n        }\n\n        // run facets\n        RunFacets runFacets =\n        ol.newRunFacetsBuilder()\n            .nominalTime(\n                ol.newNominalTimeRunFacetBuilder()\n                    .nominalStartTime(now)\n                    .nominalEndTime(now)\n                    .build())\n            .build();\n\n        // a run is composed of run id, and run facets\n        Run run = ol.newRunBuilder().runId(runId).facets(runFacets).build();\n\n        // job facets\n        JobFacets jobFacets = ol.newJobFacetsBuilder().build();\n\n        // job\n        String name = "jobName";\n        String namespace = "namespace";\n        Job job = ol.newJobBuilder().namespace(namespace).name(name).facets(jobFacets).build();\n\n        // input dataset\n        List<InputDataset> inputs =\n        Arrays.asList(\n            ol.newInputDatasetBuilder()\n                .namespace("ins")\n                .name("input")\n                .facets(\n                    ol.newDatasetFacetsBuilder()\n                        .version(ol.newDatasetVersionDatasetFacet("input-version"))\n                        .build())\n                .inputFacets(\n                    ol.newInputDatasetInputFacetsBuilder()\n                        .dataQualityMetrics(\n                            ol.newDataQualityMetricsInputDatasetFacetBuilder()\n                                .rowCount(10L)\n                                .bytes(20L)\n                                .columnMetrics(\n                                    ol.newDataQualityMetricsInputDatasetFacetColumnMetricsBuilder()\n                                        .put(\n                                            "mycol",\n                                            ol.newDataQualityMetricsInputDatasetFacetColumnMetricsAdditionalBuilder()\n                                                .count(10D)\n                                                .distinctCount(10L)\n                                                .max(30D)\n                                                .min(5D)\n                                                .nullCount(1L)\n                                                .sum(3000D)\n                                                .quantiles(\n                                                    ol.newDataQualityMetricsInputDatasetFacetColumnMetricsAdditionalQuantilesBuilder()\n                                                        .put("25", 52D)\n                                                        .build())\n                                                .build())\n                                        .build())\n                                .build())\n                        .build())\n                .build());\n        // output dataset\n        List<OutputDataset> outputs =\n            Arrays.asList(\n                ol.newOutputDatasetBuilder()\n                    .namespace("ons")\n                    .name("output")\n                    .facets(\n                        ol.newDatasetFacetsBuilder()\n                            .version(ol.newDatasetVersionDatasetFacet("output-version"))\n                            .build())\n                    .outputFacets(\n                        ol.newOutputDatasetOutputFacetsBuilder()\n                            .outputStatistics(ol.newOutputStatisticsOutputDatasetFacet(10L, 20L))\n                            .build())\n                    .build());\n\n        // run state udpate which encapsulates all - with START event in this case\n        RunEvent runStateUpdate =\n        ol.newRunEventBuilder()\n            .eventType(eventType)\n            .eventTime(now)\n            .run(run)\n            .job(job)\n            .inputs(inputs)\n            .outputs(outputs)\n            .build();\n\n        return runStateUpdate;\n    }\n}\n')),(0,i.kt)("p",null,"Now, when you run this application, the Marquez would have an output that would looke like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"the Marquez graph",src:t(21261).Z,width:"1590",height:"772"})))}c.isMDXComponent=!0},21261:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/mqz_job_complete-a6ab12c075e6c866a9e1499d6f0e6fda.png"},4115:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/mqz_job_running-4e81dcf60903a55a2c7a17ff2e761b26.png"}}]);