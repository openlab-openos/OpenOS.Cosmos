"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[791],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5558:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(8168),r=(a(6540),a(5680));const i={},o=void 0,l={unversionedId:"architecture/adr/adr-001-interchain-accounts",id:"architecture/adr/adr-001-interchain-accounts",title:"adr-001-interchain-accounts",description:"\x3c!--",source:"@site/docs/architecture/adr/adr-001-interchain-accounts.md",sourceDirName:"architecture/adr",slug:"/architecture/adr/adr-001-interchain-accounts",permalink:"/architecture/adr/adr-001-interchain-accounts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/architecture/adr/"},next:{title:"ADR 002: Globalfee Module",permalink:"/architecture/adr/adr-002-globalfee"}},c={},s=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Desired Outcome",id:"desired-outcome",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:4},{value:"Forward Compatibility",id:"forward-compatibility",level:4},{value:"Technical Specification",id:"technical-specification",level:2},{value:"Development",id:"development",level:2},{value:"Governance optional",id:"governance-optional",level:2},{value:"Project Integrations optional",id:"project-integrations-optional",level:2},{value:"Downstream User Impact Report",id:"downstream-user-impact-report",level:4},{value:"Upstream Partner Impact Report",id:"upstream-partner-impact-report",level:4},{value:"Inter-module Dependence Report",id:"inter-module-dependence-report",level:4},{value:"Support",id:"support",level:2},{value:"Additional Research &amp; References",id:"additional-research--references",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"adr-001-interchain-accounts"},"ADR 001: Interchain Accounts"),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"2022-02-04: added content"),(0,r.yg)("li",{parentName:"ul"},"2022-01-19: init"),(0,r.yg)("li",{parentName:"ul"},"2023-06-28: mark as rejected")),(0,r.yg)("h2",{id:"status"},"Status"),(0,r.yg)("p",null,"REJECTED Not Implemented"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Reason:")," The IBC team decided to integrate this functionality directly into their codebase and maintain it, because multiple users require it. "),(0,r.yg)("h2",{id:"abstract"},"Abstract"),(0,r.yg)("p",null,'This is the Core Interchain Accounts Module. It allows the Cosmos Hub to act as a host chain with interchain accounts that are controlled by external IBC connected "Controller" blockchains. Candidate chains include Umee, Quicksilver, Sommelier. It is also a necessary component for a Authentication Module that allows the Cosmos Hub to act as a Controller chain as well. This will be recorded in a separate ADR.'),(0,r.yg)("h2",{id:"rationale"},"Rationale"),(0,r.yg)("p",null,"This allows the Hub to participate in advanced cross-chain defi operations, like Liquid Staking and various protocol controlled value applications."),(0,r.yg)("h2",{id:"desired-outcome"},"Desired Outcome"),(0,r.yg)("p",null,"The hub can be used trustlessly as a host chain in the configuration of Interchain Accounts."),(0,r.yg)("h2",{id:"consequences"},"Consequences"),(0,r.yg)("p",null,'There has been preliminary work done to understand if this increases any security feature of the Cosmos Hub. One thought was that this capability is similar to contract to contract interactions which are possible on virtual machine blockchains like EVM chains. Those interactions introduced a new attack vector, called a re-entrancy bug, which was the culprit of "The DAO hack on Ethereum". We believe there is no risk of these kinds of attacks with Interchain Accounts because they require the interactions to be atomic and Interchain Accounts are asynchronous.'),(0,r.yg)("h4",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,r.yg)("p",null,"This is the first of its kind."),(0,r.yg)("h4",{id:"forward-compatibility"},"Forward Compatibility"),(0,r.yg)("p",null,"There are future releases of Interchain Accounts which are expected to be backwards compatible."),(0,r.yg)("h2",{id:"technical-specification"},"Technical Specification"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/blob/master/spec/app/ics-027-interchain-accounts/README.md"},"ICS-27 Spec")),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Integration requirements",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Development has occured in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go"},"IBC-go")," and progress tracked on the project board there."))),(0,r.yg)("li",{parentName:"ul"},"Testing (Simulations, Core Team Testing, Partner Testing)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Simulations and Core Team tested this module"))),(0,r.yg)("li",{parentName:"ul"},"Audits (Internal Dev review, Third-party review, Bug Bounty)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"An internal audit, an audit from Informal Systems, and an audit from Trail of Bits all took place with fixes made to all findings."))),(0,r.yg)("li",{parentName:"ul"},"Networks (Testnets, Productionnets, Mainnets)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Testnets")))),(0,r.yg)("h2",{id:"governance-optional"},"Governance ","[optional]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Needs Signaling Proposal")),(0,r.yg)("li",{parentName:"ul"},"Core Community Governance",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"N/A"))),(0,r.yg)("li",{parentName:"ul"},"Steering Community",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"N/A. Possibly Aditya Srinpal, Sean King, Bez?"))),(0,r.yg)("li",{parentName:"ul"},"Timelines & Roadmap",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Expected to be released as part of IBC 3.0 in Feb 2022 (currently in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/releases/tag/v3.0.0-beta1"},"beta release"),")")))),(0,r.yg)("h2",{id:"project-integrations-optional"},"Project Integrations ","[optional]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Gaia Integrations",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/gaia/pull/1150"},"PR")))),(0,r.yg)("li",{parentName:"ul"},"Integration Partner",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"IBC Team")))),(0,r.yg)("h4",{id:"downstream-user-impact-report"},"Downstream User Impact Report"),(0,r.yg)("p",null,"(Needs to be created)"),(0,r.yg)("h4",{id:"upstream-partner-impact-report"},"Upstream Partner Impact Report"),(0,r.yg)("p",null,"(Needs to be created)"),(0,r.yg)("h4",{id:"inter-module-dependence-report"},"Inter-module Dependence Report"),(0,r.yg)("p",null,"(Needs to be created)"),(0,r.yg)("h2",{id:"support"},"Support"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://ibc.cosmos.network/main/apps/interchain-accounts/overview.html"},"Documentation")),(0,r.yg)("h2",{id:"additional-research--references"},"Additional Research & References"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://medium.com/chainapsis/why-interchain-accounts-change-everything-for-cosmos-interoperability-59c19032bf11"},"Why Interchain Accounts Change Everything for Cosmos Interoperability")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/interchain-accounts"},"Interchain Account Auth Module Demo Repo"))))}d.isMDXComponent=!0}}]);