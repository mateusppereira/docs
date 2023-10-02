"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,y=h["".concat(p,".").concat(d)]||h[d]||c[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"OpenLineage Proxy",sidebar_position:3},i=void 0,l={unversionedId:"development/ol-proxy",id:"development/ol-proxy",title:"OpenLineage Proxy",description:"OpenLineage Proxy is a simple Java server that can be used to monitor the JSON events that OpenLineage client emits, as well as tunnel the transmission to the OpenLineage backend such as Marquez.",source:"@site/docs/development/ol-proxy.md",sourceDirName:"development",slug:"/development/ol-proxy",permalink:"/docs/development/ol-proxy",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/development/ol-proxy.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"OpenLineage Proxy",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Example Lineage Events",permalink:"/docs/development/examples"},next:{title:"SQL parser",permalink:"/docs/development/sql"}},p={},s=[{value:"Accessing the proxy",id:"accessing-the-proxy",level:2},{value:"Building the proxy",id:"building-the-proxy",level:2},{value:"Running the proxy",id:"running-the-proxy",level:2},{value:"Monitoring OpenLineage events via Proxy",id:"monitoring-openlineage-events-via-proxy",level:2},{value:"Forwarding the data",id:"forwarding-the-data",level:2},{value:"Other ways to run OpenLineage Proxy",id:"other-ways-to-run-openlineage-proxy",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenLineage Proxy is a simple Java server that can be used to monitor the JSON events that OpenLineage client emits, as well as tunnel the transmission to the OpenLineage backend such as ",(0,a.kt)("a",{parentName:"p",href:"https://marquezproject.ai/"},"Marquez"),"."),(0,a.kt)("p",null,"When you are unable to collect logs on the client side, but want to make sure the event that gets emitted are valid and correct, you can use OpenLineage Proxy to verify the messages."),(0,a.kt)("h2",{id:"accessing-the-proxy"},"Accessing the proxy"),(0,a.kt)("p",null,"OpenLineage proxy can be obtained via github:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/OpenLineage/OpenLineage.git\ncd OpenLineage/proxy\n")),(0,a.kt)("h2",{id:"building-the-proxy"},"Building the proxy"),(0,a.kt)("p",null,"To build the proxy jar, run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ./gradlew build\n")),(0,a.kt)("p",null,"The packaged jar file can be found under ",(0,a.kt)("inlineCode",{parentName:"p"},"./build/libs/")),(0,a.kt)("h2",{id:"running-the-proxy"},"Running the proxy"),(0,a.kt)("p",null,"OpenLineage Proxy requires configuration file named ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy.yml"),". There is an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/proxy/proxy.example.yml"},"example")," that you can copy and name it as ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy.yml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cp proxy.example.yml proxy.yml\n")),(0,a.kt)("p",null,"By default, the OpenLineage proxy uses the following ports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TCP port 8080 is available for the HTTP API server."),(0,a.kt)("li",{parentName:"ul"},"TCP port 8081 is available for the admin interface.")),(0,a.kt)("p",null,"You can then run the proxy using gradlew:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ./gradlew runShadow\n")),(0,a.kt)("h2",{id:"monitoring-openlineage-events-via-proxy"},"Monitoring OpenLineage events via Proxy"),(0,a.kt)("p",null,"When proxy is running, you can start sending your OpenLineage events just as the same way as you would be sending to any OpenLineage backend server. For example, in your URL for the OpenLineage backend, you can specify it as ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/v1/lineage"),"."),(0,a.kt)("p",null,"Once the message is sent to the proxy, you will see the OpenLineage message content (JSON) to the console output of the proxy. You can also specify in the configuration to store the messages into the log file."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You might have noticed that OpenLineage client (python, java) simply requires ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")," as the URL endpoint. This is possible because the client code adds the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/lineage")," internally before it makes the request. If you are not using OpenLineage client library to emit OpenLineage events, you must use the full URL in order for the proxy to receive the data correctly.")),(0,a.kt)("h2",{id:"forwarding-the-data"},"Forwarding the data"),(0,a.kt)("p",null,"Not only the OpenLineage proxy is useful in receiving the monitoring the OpenLineage events, it can also be used to relay the events to other endpoints. Please see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/proxy/proxy.example.yml"},"example")," of how to set the proxy to relay the events via Kafka topic or HTTP endpoint."),(0,a.kt)("h2",{id:"other-ways-to-run-openlineage-proxy"},"Other ways to run OpenLineage Proxy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You do not have to clone the git repo and build all the time. OpenLineage proxy is published and available in ",(0,a.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/io.openlineage/openlineage-proxy/0.14.1"},"Maven Repository"),"."),(0,a.kt)("li",{parentName:"ul"},"You can also run OpenLineage Proxy as a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/blob/main/proxy/Dockerfile"},"docker container"),"."),(0,a.kt)("li",{parentName:"ul"},"There is also a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/proxy/chart"},"helm chart for Kubernetes")," available.")))}c.isMDXComponent=!0}}]);