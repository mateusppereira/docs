"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,r(r({ref:t},l),{},{components:n})):a.createElement(g,r({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:6},r="Great Expectations",s={unversionedId:"integrations/great-expectations",id:"integrations/great-expectations",title:"Great Expectations",description:"Great Expectations is a robust data quality tool. It runs suites of checks, called expectations, over a defined dataset. This dataset can be a table in a database, or a Spark or Pandas dataframe. Expectations are run by checkpoints, which are configuration files that describe not just the expectations to use, but also any batching, runtime configurations, and, importantly, the action list of actions run after the expectation suite completes.",source:"@site/docs/integrations/great-expectations.md",sourceDirName:"integrations",slug:"/integrations/great-expectations",permalink:"/docs/integrations/great-expectations",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/great-expectations.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"dbt",permalink:"/docs/integrations/dbt"},next:{title:"About These Guides",permalink:"/docs/guides/about"}},c={},p=[{value:"How does Great Expectations work with OpenLineage?",id:"how-does-great-expectations-work-with-openlineage",level:2},{value:"Preparing a Great Expectations project for OpenLineage",id:"preparing-a-great-expectations-project-for-openlineage",level:2},{value:"Feedback",id:"feedback",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"great-expectations"},"Great Expectations"),(0,o.kt)("p",null,"Great Expectations is a robust data quality tool. It runs suites of checks, called expectations, over a defined dataset. This dataset can be a table in a database, or a Spark or Pandas dataframe. Expectations are run by checkpoints, which are configuration files that describe not just the expectations to use, but also any batching, runtime configurations, and, importantly, the action list of actions run after the expectation suite completes."),(0,o.kt)("p",null,"To learn more about Great Expectations, visit their ",(0,o.kt)("a",{parentName:"p",href:"https://docs.greatexpectations.io/docs/"},"documentation site"),"."),(0,o.kt)("h2",{id:"how-does-great-expectations-work-with-openlineage"},"How does Great Expectations work with OpenLineage?"),(0,o.kt)("p",null,"Great Expecations integrates with OpenLineage through the action list in a checkpoint. An OpenLineage action can be specified, which is triggered when all expectations are run. Data from the checkpoint is sent to OpenLineage, which can then be viewed in Marquez or Datakin."),(0,o.kt)("h2",{id:"preparing-a-great-expectations-project-for-openlineage"},"Preparing a Great Expectations project for OpenLineage"),(0,o.kt)("p",null,"First, we specify where we want Great Expectations to send OpenLineage events by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENLINEAGE_URL")," environment variable. For example, to send OpenLineage events to a local instance of Marquez, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"OPENLINEAGE_URL=http://localhost:5000\n")),(0,o.kt)("p",null,"If data is being sent to an endpoint with an API key, then that key must be supplied as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"OPENLINEAGE_API_KEY=123456789\n")),(0,o.kt)("p",null,'We can optionally specify a namespace where the lineage events will be stored. For example, to use the namespace "dev":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"OPENLINEAGE_NAMESPACE=dev\n")),(0,o.kt)("p",null,"With these environment variables set, we can add the OpenLineage action to the action list of the Great Expecations checkpoint.\nNote: this must be done for ",(0,o.kt)("em",{parentName:"p"},"each")," checkpoint.\nNote: when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"GreatExpectationsOperator>=0.2.0")," in Airflow, there is a boolean parameter, defaulting to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", that will automatically create this action list item when it detects the OpenLineage environment specified in the previous step."),(0,o.kt)("p",null,"In a python checkpoint, this looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'action_list = [\n    {\n        "name": "store_validation_result",\n        "action": {"class_name": "StoreValidationResultAction"},\n    },\n    {\n        "name": "store_evaluation_params",\n        "action": {"class_name": "StoreEvaluationParametersAction"},\n    },\n    {\n        "name": "update_data_docs",\n        "action": {"class_name": "UpdateDataDocsAction", "site_names": []},\n    },\n    {\n        "name": "open_lineage",\n            "action": {\n            "class_name": "OpenLineageValidationAction",\n            "module_name": "openlineage.common.provider.great_expectations",\n            "openlineage_host": os.getenv("OPENLINEAGE_URL"),\n            "openlineage_apiKey": os.getenv("OPENLINEAGE_API_KEY"),\n            "openlineage_namespace": oss.getenv("OPENLINEAGE_NAMESPACE"),\n            "job_name": "openlineage_job",\n        },\n    }\n]\n')),(0,o.kt)("p",null,"And in yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: openlineage\n       action:\n         class_name: OpenLineageValidationAction\n         module_name: openlineage.common.provider.great_expectations\n         openlineage_host: <HOST>\n         openlineage_apiKey: <API_KEY>\n         openlineage_namespace: <NAMESPACE_NAME> # Replace with your job namespace; we recommend a meaningful namespace like `dev` or `prod`, etc.\n         job_name: validate_my_dataset\n")),(0,o.kt)("p",null,"Then run your Great Expecations checkpoint with the CLI or your integration of choice."),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"What did you think of this guide? You can reach out to us on ",(0,o.kt)("a",{parentName:"p",href:"http://bit.ly/OpenLineageSlack"},"slack")," and leave us feedback!"))}u.isMDXComponent=!0}}]);