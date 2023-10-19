"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4500],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(a),m=i,p=h["".concat(l,".").concat(m)]||h[m]||c[m]||r;return a?n.createElement(p,o(o({ref:t},d),{},{components:a})):n.createElement(p,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={title:"How Northwestern Mutual Simplified Data Observability with OpenLineage & Marquez",date:new Date("2021-10-22T00:00:00.000Z"),authors:["Mellott"],description:"Northwestern Mutual is building an Enterprise Data Platform. In this guest blog, learn about the experiences and decisions that led them to embrace the OpenLineage and Marquez communities."},o=void 0,s={permalink:"/blog/openlineage-at-northwestern-mutual",source:"@site/blog/openlineage-at-northwestern-mutual/index.mdx",title:"How Northwestern Mutual Simplified Data Observability with OpenLineage & Marquez",description:"Northwestern Mutual is building an Enterprise Data Platform. In this guest blog, learn about the experiences and decisions that led them to embrace the OpenLineage and Marquez communities.",date:"2021-10-22T00:00:00.000Z",formattedDate:"October 22, 2021",tags:[],readingTime:5.93,hasTruncateMarker:!0,authors:[{name:"Kevin Mellott",title:"Guest Blogger and OpenLineage Contributor",key:"Mellott"}],frontMatter:{title:"How Northwestern Mutual Simplified Data Observability with OpenLineage & Marquez",date:"2021-10-22T00:00:00.000Z",authors:["Mellott"],description:"Northwestern Mutual is building an Enterprise Data Platform. In this guest blog, learn about the experiences and decisions that led them to embrace the OpenLineage and Marquez communities."},prevItem:{title:"Tracing Data Lineage with OpenLineage and Apache Spark",permalink:"/blog/openlineage-spark"},nextItem:{title:"Using Marquez to Visualize dbt Models",permalink:"/blog/dbt-with-marquez"}},l={authorsImageUrls:[void 0]},u=[{value:"Embrace cloud managed services",id:"embrace-cloud-managed-services",level:3},{value:"We are software engineers",id:"we-are-software-engineers",level:3},{value:"Aim for simplicity through consistency",id:"aim-for-simplicity-through-consistency",level:3},{value:"Flexible framework",id:"flexible-framework",level:3},{value:"Alignment with enterprise",id:"alignment-with-enterprise",level:3},{value:"Collaborative working group",id:"collaborative-working-group",level:3}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Northwestern Mutual is building an Enterprise Data Platform. In this guest blog, learn about the experiences and decisions that led them to embrace the OpenLineage and Marquez communities."),(0,i.kt)("p",null,"I joined Northwestern Mutual last year to oversee the implementation and delivery of their Enterprise Data Platform (Unified Data Platform). With over 160 years of history, Northwestern Mutual has been serving our clients with insurance and investment products, as well as financial planning, advisory and consultation services. It goes without saying that the company has accumulated a vast amount of data over this time. Our team\u2019s objective is to empower data analysts, data scientists, and data engineers with the platform capabilities they need to derive insights and garner value from many disparate data sources."),(0,i.kt)("h1",{id:"readysetgo"},"Ready...Set...Go!"),(0,i.kt)("p",null,"So, where do you start? The industry has taught us a lot over the past 10+ years - ",(0,i.kt)("em",{parentName:"p"},"remember when on-premises Hadoop clusters were all the rage"),"? When revisiting the approach we took within our Data Platform Engineering teams, I see a lot of alignment to the ",(0,i.kt)("a",{parentName:"p",href:"https://connectingdots.xyz/blog/posts/2021/05/the-data-engineering-manifesto/"},"Data Engineering Manifesto"),". A few principles really jump out:"),(0,i.kt)("h3",{id:"embrace-cloud-managed-services"},"Embrace cloud managed services"),(0,i.kt)("p",null,"Many of the foundational needs of an Enterprise Data Platform can be accomplished using a cloud-first mindset. While we may not all agree which cloud provider is best, we can all agree that the level of scale and sophistication accomplished around things like storage, compute, and redundancy are going to be MUCH greater when relying on a cloud provider than when rolling your own solution."),(0,i.kt)("h3",{id:"we-are-software-engineers"},"We are software engineers"),(0,i.kt)("p",null,"The Data Mesh evolution has reminded the industry that centralized data teams do not scale or empower anybody. With this principle in mind, our platform teams embraced full automation from the beginning and designed for self-service workflows. We do not want to become the bottleneck to insights; rather, we want to enable data owners to manage and share their datasets throughout the company. We want to empower data engineers with transformation and machine learning capabilities, so that they can author pipelines and deliver insights."),(0,i.kt)("h3",{id:"aim-for-simplicity-through-consistency"},"Aim for simplicity through consistency"),(0,i.kt)("p",null,"Traditionally, data platforms have gathered and constructed technical metadata based on events of the past. For example, there are many crawlers that will examine various database systems and build a catalog to make those datasets \u201cdiscoverable.\u201d Logs from various jobs can be parsed in ",(0,i.kt)("em",{parentName:"p"},"extremely specific ways")," to identify datasets consumed and produced by a given pipeline to infer data lineage."),(0,i.kt)("p",null,"We viewed these traditional methods as a massive impediment to activating DataOps, due to differing technology solutions and the historical-based approach of their designs. Our platform aimed to achieve dynamic decisions based on what ",(0,i.kt)("em",{parentName:"p"},"is")," happening ",(0,i.kt)("em",{parentName:"p"},"as it is")," happening."),(0,i.kt)("p",null,"We also recognize and appreciate the complexity of this portion of the platform and did not find it wise to build from the ground up. Especially with the industry momentum towards real-time data observability, why add another custom solution to the stack? With such an evolving technical landscape, it was important for us to avoid vendor lock to allow us flexibility in future decisions."),(0,i.kt)("h1",{id:"nm-hearts-ol"},"NM hearts OL"),(0,i.kt)("p",null,"When we first learned of the OpenLineage specification, we were very intrigued and hopeful. An open specification focused on observing real-time events AND unifying tools and frameworks?!? Fast forward nine months, and we cannot believe how much capability we have developed around data observability in such a brief time. Let me back up a little..."),(0,i.kt)("p",null,"Marquez is a metadata management framework that implements the OpenLineage specification. It transforms your data runtime events into a searchable catalog of technical metadata. It was a perfect fit to the skills of our Platform Data Engineers - it is written in Java, runs in Kubernetes, and integrates well with our backend services via web-based APIs."),(0,i.kt)("p",null,"We were able to quickly deploy this framework into our own environment, which provided us with several immediate wins."),(0,i.kt)("h3",{id:"flexible-framework"},"Flexible framework"),(0,i.kt)("p",null,"Since it is aligned with the OpenLineage framework, Marquez can process messages from ANY data producer that is publishing compliant events. The Marquez and OpenLineage communities have been doing an excellent job maturing the integration library, which allows you to tackle this challenge at the infrastructure level. This is the ultimate easy button approach and our own ideal state; configure an environment on behalf of your user base and sit back while it automatically detects and logs the activity within!"),(0,i.kt)("p",null,"In the cases when an integration either does not exist or you need to address a more custom workflow, you can construct and emit your own OpenLineage event messages. Marquez will still be able to process and store custom OpenLineage events, provided they meet the requirements of the open standard."),(0,i.kt)("p",null,"For example, our teams have been able to programmatically construct OpenLineage messages within code that pulls data from various on-premises database servers and publishes it into our Data Platform. Using the OpenLineage specification, we extract the actual table schema from the source system as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dataset")," entity and log the executing SQL query as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Job")," entity. This code was simplistic and allowed us to meet our immediate needs around observing data movement and recording those event details."),(0,i.kt)("h3",{id:"alignment-with-enterprise"},"Alignment with enterprise"),(0,i.kt)("p",null,"Marquez already supported Kubernetes when we got involved, which provided us with many different deployment options. Our first contributions to the project were made to mature the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/tree/main/chart"},"Helm chart")," and to enhance security around the base images and Kubernetes secrets usage."),(0,i.kt)("p",null,"These changes allowed us to fully automate our deployments using GitOps and incorporate internal security measures involving container vulnerability management."),(0,i.kt)("p",null,"The flexibility offered by the Marquez deployment architecture and our ability to customize its details allowed us to activate new production use cases in about a month. We were happy with this timeline, given the series of security checkpoints that were validated and the wealth of functionality we had just unlocked."),(0,i.kt)("h3",{id:"collaborative-working-group"},"Collaborative working group"),(0,i.kt)("p",null,"Both the Marquez and OpenLineage communities have been extremely welcoming, and that has been a huge factor in our success at Northwestern Mutual. Our feedback and ideas have been encouraged and heard, which is evidenced by evolving project roadmaps and accepted developer contributions."),(0,i.kt)("p",null,"We have learned quite a bit from the community members and feel fortunate to be a part of this group. Monthly community meetings are informative yet have an amazingly informal feel to them."),(0,i.kt)("h1",{id:"where-are-we-headed"},"Where are we headed?"),(0,i.kt)("p",null,"The Unified Data Platform at Northwestern Mutual relies on the OpenLineage standard to formulate technical metadata within our various platform services. Publishing these events into Marquez has provided us with an effortless way to understand our running jobs. We can easily trace a downstream dataset to the job that produced it, as well as examine individual runs of that job or any preceding ones."),(0,i.kt)("p",null,"Gaining the ability to observe lineage throughout our platform has been huge, and we are just getting started. Our teams are working to apply standard OpenLineage integrations into our environment and introduce data quality facets into our events. We have also been establishing operational workflows using job run information, to allow our DataOps team to monitor durations and measure against SLAs."))}c.isMDXComponent=!0}}]);