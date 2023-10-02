"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2273],{3905:(I,M,i)=>{i.d(M,{Zo:()=>a,kt:()=>t});var b=i(67294);function e(I,M,i){return M in I?Object.defineProperty(I,M,{value:i,enumerable:!0,configurable:!0,writable:!0}):I[M]=i,I}function m(I,M){var i=Object.keys(I);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(I);M&&(b=b.filter((function(M){return Object.getOwnPropertyDescriptor(I,M).enumerable}))),i.push.apply(i,b)}return i}function N(I){for(var M=1;M<arguments.length;M++){var i=null!=arguments[M]?arguments[M]:{};M%2?m(Object(i),!0).forEach((function(M){e(I,M,i[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(M){Object.defineProperty(I,M,Object.getOwnPropertyDescriptor(i,M))}))}return I}function g(I,M){if(null==I)return{};var i,b,e=function(I,M){if(null==I)return{};var i,b,e={},m=Object.keys(I);for(b=0;b<m.length;b++)i=m[b],M.indexOf(i)>=0||(e[i]=I[i]);return e}(I,M);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(I);for(b=0;b<m.length;b++)i=m[b],M.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(I,i)&&(e[i]=I[i])}return e}var l=b.createContext({}),T=function(I){var M=b.useContext(l),i=M;return I&&(i="function"==typeof I?I(M):N(N({},M),I)),i},a=function(I){var M=T(I.components);return b.createElement(l.Provider,{value:M},I.children)},c={inlineCode:"code",wrapper:function(I){var M=I.children;return b.createElement(b.Fragment,{},M)}},w=b.forwardRef((function(I,M){var i=I.components,e=I.mdxType,m=I.originalType,l=I.parentName,a=g(I,["components","mdxType","originalType","parentName"]),w=T(i),t=e,j=w["".concat(l,".").concat(t)]||w[t]||c[t]||m;return i?b.createElement(j,N(N({ref:M},a),{},{components:i})):b.createElement(j,N({ref:M},a))}));function t(I,M){var i=arguments,e=M&&M.mdxType;if("string"==typeof I||e){var m=i.length,N=new Array(m);N[0]=w;var g={};for(var l in M)hasOwnProperty.call(M,l)&&(g[l]=M[l]);g.originalType=I,g.mdxType="string"==typeof I?I:e,N[1]=g;for(var T=2;T<m;T++)N[T]=i[T];return b.createElement.apply(null,N)}return b.createElement.apply(null,i)}w.displayName="MDXCreateElement"},47328:(I,M,i)=>{i.r(M),i.d(M,{assets:()=>l,contentTitle:()=>N,default:()=>c,frontMatter:()=>m,metadata:()=>g,toc:()=>T});var b=i(87462),e=(i(67294),i(3905));const m={title:"The Current State of Column-level Lineage",date:new Date("2022-09-02T00:00:00.000Z"),authors:[{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],image:"./image.svg",banner:"./banner.svg",description:"Column-level lineage helps organizations navigate a complex regulatory landscape."},N=void 0,g={permalink:"/blog/column-lineage",source:"@site/blog/column-lineage/index.mdx",title:"The Current State of Column-level Lineage",description:"Column-level lineage helps organizations navigate a complex regulatory landscape.",date:"2022-09-02T00:00:00.000Z",formattedDate:"September 2, 2022",tags:[],readingTime:4.82,hasTruncateMarker:!0,authors:[{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],frontMatter:{title:"The Current State of Column-level Lineage",date:"2022-09-02T00:00:00.000Z",authors:[{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],image:"./image.svg",banner:"./banner.svg",description:"Column-level lineage helps organizations navigate a complex regulatory landscape."},prevItem:{title:"How Operators and Extractors Work Under-the-Hook",permalink:"/blog/operators-and-extractors-technical-deep-dive"},nextItem:{title:"The Python Client -- the Foundation of OpenLineage Integrations",permalink:"/blog/python-client"}},l={image:i(61873).Z,authorsImageUrls:[void 0]},T=[],a={toc:T};function c(I){let{components:M,...m}=I;return(0,e.kt)("wrapper",(0,b.Z)({},a,m,{components:M,mdxType:"MDXLayout"}),(0,e.kt)("p",null,"Column-level lineage helps organizations navigate a complex regulatory landscape."),(0,e.kt)("p",null,(0,e.kt)("img",{src:i(47727).Z+"#banner",width:"617",height:"127"})))}c.isMDXComponent=!0},47727:(I,M,i)=>{i.d(M,{Z:()=>b});const b="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYxNi41IDEyNy40IiB3aWR0aD0iMTAwJSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp2ZWN0b3JuYXRvcj0iaHR0cDovL3ZlY3Rvcm5hdG9yLmlvIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxkZWZzLz4KPGNsaXBQYXRoIGlkPSJBcnRib2FyZEZyYW1lIj4KPHJlY3QgaGVpZ2h0PSIxMjcuNCIgd2lkdGg9IjYxNi41IiB4PSIwIiB5PSIwIi8+CjwvY2xpcFBhdGg+CjxnIGNsaXAtcGF0aD0idXJsKCNBcnRib2FyZEZyYW1lKSIgaWQ9IlVudGl0bGVkIiB2ZWN0b3JuYXRvcjpsYXllck5hbWU9IlVudGl0bGVkIj4KPHBhdGggZD0iTS0yMDAgMEw4MzAgMEw4MzAgMEw4MzAgMzMwTDgzMCAzMzBMLTIwMCAzMzBMLTIwMCAzMzBMLTIwMCAwTC0yMDAgMFoiIGZpbGw9IiM2OTdiOTIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik04Ny45IDYzLjJMMzM5LjEgMzY2LjhMNjE4LjEgMTM0LjFMMzY2LjgtMTY4TDg3LjkgNjMuMloiIGZpbGw9IiNhYjgzNTgiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTE1LjYgNDMuMkwtMjc5IDEzNS42TC0xODQuOSA1MzAuMkwyMDguMSA0MzcuN0wxMTUuNiA0My4yWiIgZmlsbD0iI2RlYWQ3MSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTk5LjUgNTUuNUw1MzYuNCA4Ni4zTDU5MC4zIDE5MS4xTDY1My41IDE2MC4zTDU5OS41IDU1LjVaIiBmaWxsPSIjNGMzYzJiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zNDIuMiAzMi40TDYzOC4xIDE4LjVMNjMzLjUtNTdMMzM3LjUtNDMuMkwzNDIuMiAzMi40WiIgZmlsbD0iIzI5NzFjYiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03NS41IDYxLjZMNTUuNSA4MC4xTDc3LjEgMTAwLjJMOTcuMSA4MS43TDc1LjUgNjEuNloiIGZpbGw9IiMwZjAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMyMy43IDk3LjFMODAuMSAzMzQuNUwyNDIgNDk3LjhMNDg1LjUgMjYwLjRMMzIzLjcgOTcuMVoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTMwLjIgMzguNUw2NTUgMTE0LjFMNzg5LjEtMTAzLjNMNjY0LjMtMTc4LjhMNTMwLjIgMzguNVoiIGZpbGw9IiM0NzhiZDgiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE4My40IDkuMkw1MTAuMiAxN0w1MTMuMi0xMzguN0wxODYuNS0xNDYuNEwxODMuNCA5LjJaIiBmaWxsPSIjMjQ2ZGM5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xODEuOSAxMTUuNkwzMDIuMSAzNTkuMUwzNTcuNiAzMzEuNEwyMzcuNCA4Ny45TDE4MS45IDExNS42WiIgZmlsbD0iI2Y1ZDNhNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDg1LjUgMTMuOUwyODMuNiAyMy4xTDI4My42IDQ0LjdMNDg1LjUgMzUuNEw0ODUuNSAxMy45WiIgZmlsbD0iIzc0NTEzMSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTcgNjcuOEwzMzcuNSAxMDEuN0wzNDMuNyA0Ny44TDYzLjIgMTMuOUw1NyA2Ny44WiIgZmlsbD0iI2IxOWI4MSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTYwLjMgMTAwLjJMNTQgMTc0LjJMMjYwLjUgNDYyLjRMMzY2LjggMzg4LjRMMTYwLjMgMTAwLjJaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM2My43IDMyLjRMMzUxLjQgMzguNUw0MDUuMyAxMzguN0w0MTcuNyAxMzIuNUwzNjMuNyAzMi40WiIgZmlsbD0iI2ZmZTljOSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDgwLjkgNDQuN0wyMDUgNDMuMkwyMDMuNCA3MC45TDQ3OS4zIDcyLjRMNDgwLjkgNDQuN1oiIGZpbGw9IiNjNGIyOWMiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTExMSA4MC4xTC0xNDYuNCAxNjQuOUwtMy4xIDU5MC4zTDI1Mi43IDUwNS41TDExMSA4MC4xWiIgZmlsbD0iI2Q5YzJhMSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMTQuMiA1My45TDIxMi43IDg2LjNMNTE0LjggOTcuMUw1MTYuMyA2NC43TDIxNC4yIDUzLjlaIiBmaWxsPSIjN2E2NDUxIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQwMi4zIDExNS42TDUwNS41IDMxNkw1NTcuOSAyODYuN0w0NTQuNyA4Ni4zTDQwMi4zIDExNS42WiIgZmlsbD0iI2QyYjY5MCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzE0LjQgNTUuNUwyMDEuOSAxNjMuNEwyMjEuOSAxODMuNEwzMzQuNSA3NS41TDMxNC40IDU1LjVaIiBmaWxsPSIjYmFiNmFlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zODIuMiAxNS40TDM2My43IDE3TDM4Mi4yIDE0NC45TDQwMC43IDE0My4zTDM4Mi4yIDE1LjRaIiBmaWxsPSIjZDBiZGE1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMTYgOTcuMUwyNjUuMSAxNTcuMkw1NTYuNCAzOTQuNkw2MDcuMyAzMzQuNUwzMTYgOTcuMVoiIGZpbGw9IiMxMTA3MDQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE4OCAzN0wxODYuNSA1OC42TDU1Ni40IDY2LjNMNTU3LjkgNDQuN0wxODggMzdaIiBmaWxsPSIjYzFiM2ExIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00ODIuNCAxMDkuNEwzMjUuMiAyNjMuNkwzNDMuNyAyODMuNkw1MDAuOSAxMjkuNUw0ODIuNCAxMDkuNFoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMwLjggNC42TDIwMy40IDQ2LjJMMjUxLjItMTU1LjdMNzguNi0xOTcuM0wzMC44IDQuNloiIGZpbGw9IiM1MTRkNTAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI1Mi44IDBMMjYwLjUgMTI3LjlMMjc0LjMgMTI2LjRMMjY2LjYgMEwyNTIuOCAwWiIgZmlsbD0iIzRmM2QzNCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8L2c+Cjwvc3ZnPgo="},61873:(I,M,i)=>{i.d(M,{Z:()=>b});const b="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM1MCAyNTAiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjI1MCIgd2lkdGg9IjM1MCIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJVbnRpdGxlZCIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJVbnRpdGxlZCI+CjxwYXRoIGQ9Ik0wIDBMMzUwIDBMMzUwIDBMMzUwIDI1MEwzNTAgMjUwTDAgMjUwTDAgMjUwTDAgMEwwIDBaIiBmaWxsPSIjNjQ3ODkxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTUwIDIzTC0xMCAyMzhMMjAxIDM5NEwzNjEgMTc5TDE1MCAyM1oiIGZpbGw9IiNjNzkyNTQiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTIxIDE4TC03MyAxMDhMMSAyNjhMMTk1IDE3OEwxMjEgMThaIiBmaWxsPSIjYjM5YjdmIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI2MyAyNDlMNDYzIDQyM0w1NDUgMzI3TDM0NSAxNTNMMjYzIDI0OVoiIGZpbGw9IiM1YjQxMjYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNODIgNTNMMjkwIDk2TDI5NSA3MUw4NyAyOEw4MiA1M1oiIGZpbGw9IiM2ZDQwMTciIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTYwIDE5NUwxODkgMzE5TDIxNyAzMTJMMTg4IDE4OEwxNjAgMTk1WiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMDAgMjZMMzc2IDUxTDM5Mi0xMjBMMTE2LTE0NUwxMDAgMjZaIiBmaWxsPSIjMzg3NWMzIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE5NyA4OEwxOTUgMTIzTDMxNSAxMjZMMzE3IDkxTDE5NyA4OFoiIGZpbGw9IiNlNGNiYWEiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTM3IDExOEwxNyAxNDVMMjUgMTgxTDE0NSAxNTRMMTM3IDExOFoiIGZpbGw9IiM2MzQ4MzQiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTUgMjExTDQzIDIzOUwxODQgOTNMMTU2IDY1TDE1IDIxMVoiIGZpbGw9IiNiZWIzYTIiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNODEgNTNMMjkgNzhMNTAgMTIwTDEwMiA5NUw4MSA1M1oiIGZpbGw9IiNlM2MwOTUiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTQxIDE1MUw3MCAyMzZMODQgMjQ3TDE1NSAxNjJMMTQxIDE1MVoiIGZpbGw9IiM0OTNhMmQiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTExIDE1N0wxMzAgNDc0TDE0MyA0NzNMMTI0IDE1NkwxMTEgMTU3WiIgZmlsbD0iI2ZjZThjYSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik04NSA2OEwxMTYgNzNMMTIwIDQ1TDg5IDQwTDg1IDY4WiIgZmlsbD0iIzA2MDAwMCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03MyAyMTNMLTE3MyAyMTZMLTE3MiAyODFMNzMgMjc4TDczIDIxM1oiIGZpbGw9IiNkOWM5YWYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjk0IDEwMkwzNzUgMTYxTDQ3MiAyNUwzOTEtMzNMMjk0IDEwMloiIGZpbGw9IiM1MTk0ZGYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzEwIDE0OEwyODkgMTQ4TDMwOCA1NTBMMzI5IDU1MEwzMTAgMTQ4WiIgZmlsbD0iI2I1YTE4OCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMjkgMjA5TDMyNyAxOTFMMzE3IDEzM0wyMTkgMTUxTDIyOSAyMDlaIiBmaWxsPSIjNmU1NTNlIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTczIDUwTDMwMCA4MEwzMDQgNDNMNzcgMTNMNzMgNTBaIiBmaWxsPSIjOTY3NzVhIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE1IDM4TC0xNzQgODFMLTE2MCAxNDJMMjggOTlMMTUgMzhaIiBmaWxsPSIjMWU3N2U2IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE1NCAxODlMMTg1IDE5NEwyMDEgODdMMTcwIDgyTDE1NCAxODlaIiBmaWxsPSIjYThiM2JkIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTg0IDIwM0wxNDEgMjUxTDE3MyAyMTFMMTE2IDE2M0w4NCAyMDNaIiBmaWxsPSIjYzliMjk0IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTk3IDEzMUw4NiAxNjNMMTQ5IDE4M0wxNjAgMTUxTDk3IDEzMVoiIGZpbGw9IiM1MTM4MmEiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjg2IDE0M0wzMTUgMjk5TDMyNiAyOTZMMjk3IDE0MEwyODYgMTQzWiIgZmlsbD0iI2RiY2NiMyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMTEgNjlMMTk4IDc5TDIxMSA5NkwyMjQgODZMMjExIDY5WiIgZmlsbD0iI2YyZTRjZiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjwvZz4KPC9zdmc+Cg=="}}]);