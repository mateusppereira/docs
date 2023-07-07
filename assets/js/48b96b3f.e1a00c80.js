"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7378],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,h=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_position:6},r="Using the OpenLineage Proxy with Airflow",l={unversionedId:"guides/airflow_proxy",id:"guides/airflow_proxy",title:"Using the OpenLineage Proxy with Airflow",description:"This tutorial introduces you to using the OpenLineage Proxy with Airflow. OpenLineage has various integrations that will enable Airflow to emit OpenLineage events when using Airflow Integrations. In this tutorial, you will be running a local instance of Airflow using Docker Compose and learning how to enable and setup OpenLineage to emit data lineage events. The tutorial will use two backends to check the data lineage, 1) the Proxy, and 2) Marquez.",source:"@site/docs/guides/airflow_proxy.md",sourceDirName:"guides",slug:"/guides/airflow_proxy",permalink:"/docs/guides/airflow_proxy",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/guides/airflow_proxy.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Understanding and Using Facets",permalink:"/docs/guides/facets"},next:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},s={},p=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Setting up a Local Airflow Environment using Docker Compose",id:"setting-up-a-local-airflow-environment-using-docker-compose",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setting up OpenLineage Proxy as Receiving End",id:"setting-up-openlineage-proxy-as-receiving-end",level:2},{value:"Setting up Marquez",id:"setting-up-marquez",level:2},{value:"Running Everything",id:"running-everything",level:2},{value:"Running Marquez",id:"running-marquez",level:3},{value:"Running OpenLineage proxy",id:"running-openlineage-proxy",level:3},{value:"Running Airflow",id:"running-airflow",level:3},{value:"Accessing the Airflow UI",id:"accessing-the-airflow-ui",level:2},{value:"Running an Example DAG",id:"running-an-example-dag",level:2},{value:"Running Bash Operator",id:"running-bash-operator",level:3},{value:"Check the OpenLineage events",id:"check-the-openlineage-events",level:3},{value:"Check Marquez",id:"check-marquez",level:3},{value:"Running other DAGs",id:"running-other-dags",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function c(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-openlineage-proxy-with-airflow"},"Using the OpenLineage Proxy with Airflow"),(0,o.kt)("p",null,"This tutorial introduces you to using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/proxy"},"OpenLineage Proxy")," with Airflow. OpenLineage has various integrations that will enable Airflow to emit OpenLineage events when using ",(0,o.kt)("a",{parentName:"p",href:"https://openlineage.io/docs/integrations/airflow/"},"Airflow Integrations"),". In this tutorial, you will be running a local instance of Airflow using Docker Compose and learning how to enable and setup OpenLineage to emit data lineage events. The tutorial will use two backends to check the data lineage, 1) the Proxy, and 2) ",(0,o.kt)("a",{parentName:"p",href:"https://marquezproject.ai/"},"Marquez"),"."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting up a Local Airflow Environment using Docker Compose"),(0,o.kt)("li",{parentName:"ul"},"Setting up Marquez"),(0,o.kt)("li",{parentName:"ul"},"Running Everything"),(0,o.kt)("li",{parentName:"ul"},"Accessing the Airflow UI"),(0,o.kt)("li",{parentName:"ul"},"Running an Example DAG")),(0,o.kt)("h2",{id:"setting-up-a-local-airflow-environment-using-docker-compose"},"Setting up a Local Airflow Environment using Docker Compose"),(0,o.kt)("p",null,"Airflow has a convenient way to set up and run a fully functional environment using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),". The following are therefore required to be installed before we begin this tutorial."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker 20.10.0+"),(0,o.kt)("li",{parentName:"ul"},"Docker Desktop"),(0,o.kt)("li",{parentName:"ul"},"Docker Compose"),(0,o.kt)("li",{parentName:"ul"},"Java 11")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are using MacOS Monterey (MacOS 12), port 5000 will have to be released by ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/forums/thread/682332"},"disabling the AirPlay Receiver"),". Also, port 3000 will need to be free if access to the Marquez Web UI is desired.")),(0,o.kt)("p",null,"Use the following ",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/start/docker.html"},"instructions")," to set up and run Airflow using Docker Compose. "),(0,o.kt)("p",null,"First, let's start out by creating a new directory that will contain all of our work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir ~/airflow-ol &&\ncd ~/airflow-ol\n")),(0,o.kt)("p",null,"Then, let's download the Docker Compose file that we'll be running in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.3.3/docker-compose.yaml'\n")),(0,o.kt)("p",null,"This will allow a new environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENLINEAGE_URL")," to be passed to the Docker containers, which is needed for OpenLineage to work."),(0,o.kt)("p",null,"Then, let's create the following directories that will be mounted and used by the Docker Compose that will start Airflow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir dags &&\nmkdir logs &&\nmkdir plugins\n")),(0,o.kt)("p",null,"Also, create a file ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," that will contain an environment variable that is going to be used by Airflow to install additional Python packages that are needed. In this tutorial, the ",(0,o.kt)("inlineCode",{parentName:"p"},"openlineage-airflow")," package will be installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'echo "_PIP_ADDITIONAL_REQUIREMENTS=openlineage-airflow" > .env\n')),(0,o.kt)("p",null,"You also need to let OpenLineage know where to send lineage data. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'echo "OPENLINEAGE_URL=http://host.docker.internal:4433" >> .env\n')),(0,o.kt)("p",null,"The reason why we are setting the backend to ",(0,o.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," is that we are going to be running the OpenLineage Proxy outside Airflow's Docker environment on the host machine itself. Port 4433 is where the proxy will be listening for lineage data."),(0,o.kt)("h2",{id:"setting-up-openlineage-proxy-as-receiving-end"},"Setting up OpenLineage Proxy as Receiving End"),(0,o.kt)("p",null,"The OpenLineage Proxy is a simple tool that you can easily set up and run to receive OpenLineage data. The proxy does not do anything other than display what it receives. Optionally, it can also forward data to any OpenLineage-compatible backend via HTTP."),(0,o.kt)("p",null,"Let's download the proxy code from git and build it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~ &&\ngit clone https://github.com/OpenLineage/OpenLineage.git &&\ncd OpenLineage/proxy/backend &&\n./gradlew build\n")),(0,o.kt)("p",null,"Now, copy ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy.dev.yml")," and edit its content as the following, and save it as ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy.yml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Licensed under the Apache License, Version 2.0 (the "License");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n\nserver:\n  applicationConnectors:\n    - type: http\n      port: ${OPENLINEAGE_PROXY_PORT:-4433}\n  adminConnectors:\n    - type: http\n      port: ${OPENLINEAGE_PROXY_ADMIN_PORT:-4434}\n\nlogging:\n  level: ${LOG_LEVEL:-INFO}\n  appenders:\n    - type: console\n\nproxy:\n  source: openLineageProxyBackend\n  streams:\n    - type: Console\n    - type: Http\n      url: http://localhost:5000/api/v1/lineage\n')),(0,o.kt)("h2",{id:"setting-up-marquez"},"Setting up Marquez"),(0,o.kt)("p",null,"The last piece of the setup is the Marquez backend. Using Marquez's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/blob/main/docs/quickstart.md"},"quickstart document"),", set up the Marquez environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~ &&\ngit clone https://github.com/MarquezProject/marquez.git\n")),(0,o.kt)("p",null,"In marquez/docker-compose.dev.yml, change the ports for pghero to free up port 8080 for Airflow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'version: "3.7"\nservices:\n  api:\n    build: .\n\n  seed_marquez:\n    build: .\n\n  pghero:\n    image: ankane/pghero\n    container_name: pghero\n    ports:\n      - "8888:8888"\n    environment:\n      DATABASE_URL: postgres://postgres:password@db:5432\n')),(0,o.kt)("h2",{id:"running-everything"},"Running Everything"),(0,o.kt)("h3",{id:"running-marquez"},"Running Marquez"),(0,o.kt)("p",null,"Start Docker Desktop, then:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/marquez &&\n./docker/up.sh\n")),(0,o.kt)("h3",{id:"running-openlineage-proxy"},"Running OpenLineage proxy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/OpenLineage/proxy/backend &&\n./gradlew runShadow\n")),(0,o.kt)("h3",{id:"running-airflow"},"Running Airflow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/airflow-ol\ndocker-compose up\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"airflow_dev_setup",src:t(3970).Z,width:"805",height:"194"})),(0,o.kt)("p",null,"At this point, Apache Airflow should be running and able to send lineage data to the OpenLineage Proxy, with the OpenLineage Proxy forwarding the data to Marquez. Consequently, we can both inspect data payloads and see lineage data in graph form."),(0,o.kt)("h2",{id:"accessing-the-airflow-ui"},"Accessing the Airflow UI"),(0,o.kt)("p",null,"With everything up and running, we can now login to Airflow's UI by opening up a browser and accessing ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),(0,o.kt)("p",null,"Initial ID and password to login would be ",(0,o.kt)("inlineCode",{parentName:"p"},"airflow/airflow"),"."),(0,o.kt)("h2",{id:"running-an-example-dag"},"Running an Example DAG"),(0,o.kt)("p",null,"When you log into Airflow UI, you will notice that there are several example DAGs already populated when it started up. We can start running some of them to see the OpenLineage events they generate."),(0,o.kt)("h3",{id:"running-bash-operator"},"Running Bash Operator"),(0,o.kt)("p",null,"In the DAGs page, locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"example_bash_operator"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"airflow_trigger_dag",src:t(6041).Z,width:"241",height:"161"})),(0,o.kt)("p",null,"Clicke the \u25ba button at the right, which will show up a popup. Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Trigger DAG")," to trigger and run the DAG manually."),(0,o.kt)("p",null,"You should see DAG running, and eventually completing."),(0,o.kt)("h3",{id:"check-the-openlineage-events"},"Check the OpenLineage events"),(0,o.kt)("p",null,"Once everything is finished, you should be able to see a number of JSON data payloads output in OpenLineage proxy's console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"INFO  [2022-08-16 21:39:41,411] io.openlineage.proxy.api.models.ConsoleLineageStream: {\n  \"eventTime\" : \"2022-08-16T21:39:40.854926Z\",\n  \"eventType\" : \"START\",\n  \"inputs\" : [ ],\n  \"job\" : {\n    \"facets\" : { },\n    \"name\" : \"example_bash_operator.runme_2\",\n    \"namespace\" : \"default\"\n  },\n  \"outputs\" : [ ],\n  \"producer\" : \"https://github.com/OpenLineage/OpenLineage/tree/0.12.0/integration/airflow\",\n  \"run\" : {\n    \"facets\" : {\n      \"airflow_runArgs\" : {\n        \"_producer\" : \"https://github.com/OpenLineage/OpenLineage/tree/0.12.0/integration/airflow\",\n        \"_schemaURL\" : \"https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/BaseFacet\",\n        \"externalTrigger\" : true\n      },\n      \"airflow_version\" : {\n        \"_producer\" : \"https://github.com/OpenLineage/OpenLineage/tree/0.12.0/integration/airflow\",\n        \"_schemaURL\" : \"https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/BaseFacet\",\n        \"airflowVersion\" : \"2.3.3\",\n        \"openlineageAirflowVersion\" : \"0.12.0\",\n        \"operator\" : \"airflow.operators.bash.BashOperator\",\n        \"taskInfo\" : \"{'_BaseOperator__init_kwargs': {'task_id': 'runme_2', 'params': <***.models.param.ParamsDict object at 0xffff7467b610>, 'bash_command': 'echo \\\"example_bash_operator__runme_2__20220816\\\" && sleep 1'}, '_BaseOperator__from_mapped': False, 'task_id': 'runme_2', 'task_group': <weakproxy at 0xffff74676ef0 to TaskGroup at 0xffff7467ba50>, 'owner': '***', 'email': None, 'email_on_retry': True, 'email_on_failure': True, 'execution_timeout': None, 'on_execute_callback': None, 'on_failure_callback': None, 'on_success_callback': None, 'on_retry_callback': None, '_pre_execute_hook': None, '_post_execute_hook': None, 'executor_config': {}, 'run_as_user': None, 'retries': 0, 'queue': 'default', 'pool': 'default_pool', 'pool_slots': 1, 'sla': None, 'trigger_rule': <TriggerRule.ALL_SUCCESS: 'all_success'>, 'depends_on_past': False, 'ignore_first_depends_on_past': True, 'wait_for_downstream': False, 'retry_delay': datetime.timedelta(seconds=300), 'retry_exponential_backoff': False, 'max_retry_delay': None, 'params': <***.models.param.ParamsDict object at 0xffff7467b4d0>, 'priority_weight': 1, 'weight_rule': <WeightRule.DOWNSTREAM: 'downstream'>, 'resources': None, 'max_active_tis_per_dag': None, 'do_xcom_push': True, 'doc_md': None, 'doc_json': None, 'doc_yaml': None, 'doc_rst': None, 'doc': None, 'upstream_task_ids': set(), 'downstream_task_ids': {'run_after_loop'}, 'start_date': DateTime(2021, 1, 1, 0, 0, 0, tzinfo=Timezone('UTC')), 'end_date': None, '_dag': <DAG: example_bash_operator>, '_log': <Logger ***.task.operators (INFO)>, 'inlets': [], 'outlets': [], '_inlets': [], '_outlets': [], '_BaseOperator__instantiated': True, 'bash_command': 'echo \\\"example_bash_operator__runme_2__20220816\\\" && sleep 1', 'env': None, 'output_encoding': 'utf-8', 'skip_exit_code': 99, 'cwd': None, 'append_env': False}\"\n      },\n      \"nominalTime\" : {\n        \"_producer\" : \"https://github.com/OpenLineage/OpenLineage/tree/0.12.0/integration/airflow\",\n        \"_schemaURL\" : \"https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/NominalTimeRunFacet\",\n        \"nominalStartTime\" : \"2022-08-16T21:39:38.005668Z\"\n      },\n      \"parentRun\" : {\n        \"_producer\" : \"https://github.com/OpenLineage/OpenLineage/tree/0.12.0/integration/airflow\",\n        \"_schemaURL\" : \"https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/ParentRunFacet\",\n        \"job\" : {\n          \"name\" : \"example_bash_operator\",\n          \"namespace\" : \"default\"\n        },\n        \"run\" : {\n          \"runId\" : \"39ad10d1-72d9-3fe9-b2a4-860c651b98b7\"\n        }\n      }\n    },\n    \"runId\" : \"313b4e71-9cde-4c83-b641-dd6773bf114b\"\n  }\n}\n")),(0,o.kt)("h3",{id:"check-marquez"},"Check Marquez"),(0,o.kt)("p",null,"You can also open up the browser and visit ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," to access Marquez UI, and take a look at the OpenLineage events originating from Airflow."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"marquez_bash_jobs",src:t(2508).Z,width:"1463",height:"411"})),(0,o.kt)("h3",{id:"running-other-dags"},"Running other DAGs"),(0,o.kt)("p",null,"Due to the length of this tutorial, we are not going to be running additional example DAGs, but you can try running them and it would be interesting to see how each of them are going to be emitting OpenLineage events. Please try running other examples like ",(0,o.kt)("inlineCode",{parentName:"p"},"example_python_operator")," which will also emit OpenLineage events."),(0,o.kt)("p",null,"Normally, DataLineage will be much more complete and useful if a DAG run involves certain ",(0,o.kt)("inlineCode",{parentName:"p"},"datasets")," that either get used or created during the runtime of it. When you run those DAGs, you will be able to see the connection between different DAGs and Tasks touching the same dataset that will eventually turn into Data Lineage graph that may look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://marquezproject.ai/images/screenshot.png",alt:"marquez_graph"})),(0,o.kt)("p",null,"Currently, these are the Airflow operators that have extractors that can extract and emit OpenLineage events."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PostgresOperator"),(0,o.kt)("li",{parentName:"ul"},"MySqlOperator"),(0,o.kt)("li",{parentName:"ul"},"BigQueryOperator"),(0,o.kt)("li",{parentName:"ul"},"SnowflakeOperator"),(0,o.kt)("li",{parentName:"ul"},"GreatExpectationsOperator"),(0,o.kt)("li",{parentName:"ul"},"PythonOperator")),(0,o.kt)("p",null,"See additional ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/tree/main/examples/airflow"},"Apache Examples")," for DAGs that you can run in Airflow for OpenLineage."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You might not see any data going through the proxy or via Marquez. In that case, please check the task log of Airflow and see if you see the following message: ",(0,o.kt)("inlineCode",{parentName:"li"},"[2022-08-16, 21:23:19 UTC] {factory.py:122} ERROR - Did not find openlineage.yml and OPENLINEAGE_URL is not set"),". In that case, it means that the environment variable ",(0,o.kt)("inlineCode",{parentName:"li"},"OPENLINEAGE_URL")," was not set properly, thus OpenLineage was not able to emit any events. Please make sure to follow instructions in setting up the proper environment variable when setting up the Airflow via docker compose."),(0,o.kt)("li",{parentName:"ul"},"Sometimes, Marquez would not respond and fail to receive any data via its API port 5000. You should be able to notice that if you start receiving response code 500 from Marquez or the Marquez UI hangs. In that case, simply stop and restart Marquez.")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this short tutorial, we have learned how to setup and run a simple Apache Airflow environment that can emit OpenLineage events during its DAG run. We have also monitored and received the lineage events using combination of OpenLineage proxy and Marquez. We hope this tutorial was helpful in understanding how Airflow could be setup with OpenLineage and how you can easily monitor its data and end result using proxy and Marquez."))}c.isMDXComponent=!0},3970:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/airflow_dev_setup-3b72a3ccd7a0df8fa5dd15745f50c5eb.png"},6041:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/airflow_trigger_dag-c1932bcb4ed68b936ea92b5760df00f8.png"},2508:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/marquez_bash_jobs-bf29500414d6f33b58ea93cf40c2ce03.png"}}]);