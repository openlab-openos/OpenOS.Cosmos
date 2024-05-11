"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[2644],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=a,m=p["".concat(l,".").concat(y)]||p[y]||u[y]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={title:"Validator Security",order:4},i=void 0,s={unversionedId:"validators/security",id:"validators/security",title:"Validator Security",description:"Each validator candidate is encouraged to run its operations independently, as diverse setups increase the resilience of the network. Validator candidates should commence their setup phase now in order to be on time for launch.",source:"@site/docs/validators/security.md",sourceDirName:"validators",slug:"/validators/security",permalink:"/validators/security",draft:!1,tags:[],version:"current",frontMatter:{title:"Validator Security",order:4},sidebar:"tutorialSidebar",previous:{title:"Validator Overview",permalink:"/validators/overview"},next:{title:"Validator FAQ",permalink:"/validators/validator-faq"}},l={},c=[{value:"Key Management - HSM",id:"key-management---hsm",level:2},{value:"Sentry Nodes (DDOS Protection)",id:"sentry-nodes-ddos-protection",level:2},{value:"Environment Variables",id:"environment-variables",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Each validator candidate is encouraged to run its operations independently, as diverse setups increase the resilience of the network. Validator candidates should commence their setup phase now in order to be on time for launch."),(0,a.yg)("h2",{id:"key-management---hsm"},"Key Management - HSM"),(0,a.yg)("p",null,"It is mission critical that an attacker cannot steal a validator's key. If this is possible, it puts the entire stake delegated to the compromised validator at risk. Hardware security modules are an important strategy for mitigating this risk."),(0,a.yg)("p",null,"HSM modules must support ",(0,a.yg)("inlineCode",{parentName:"p"},"ed25519")," signatures for the hub. The YubiHSM2 supports ",(0,a.yg)("inlineCode",{parentName:"p"},"ed25519")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/iqlusioninc/yubihsm.rs"},"this yubikey library is available"),". The YubiHSM can protect a private key but cannot ensure in a secure setting that it won't sign the same block twice."),(0,a.yg)("p",null,"The CometBFT team is also working on extending our Ledger Nano S application to support validator signing. This app can store recent blocks and mitigate double signing attacks."),(0,a.yg)("p",null,"We will update this page when more key storage solutions become available."),(0,a.yg)("h2",{id:"sentry-nodes-ddos-protection"},"Sentry Nodes (DDOS Protection)"),(0,a.yg)("p",null,"Validators are responsible for ensuring that the network can sustain denial of service attacks."),(0,a.yg)("p",null,"One recommended way to mitigate these risks is for validators to carefully structure their network topology in a so-called sentry node architecture."),(0,a.yg)("p",null,"Validator nodes should only connect to full-nodes they trust because they operate them themselves or are run by other validators they know socially. A validator node will typically run in a data center. Most data centers provide direct links to the networks of major cloud providers. The validator can use those links to connect to sentry nodes in the cloud. This shifts the burden of denial-of-service from the validator's node directly to its sentry nodes, and may require new sentry nodes be spun up or activated to mitigate attacks on existing ones."),(0,a.yg)("p",null,"Sentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in private IP space, an internet based attack cannot disturb them directly. This will ensure validator block proposals and votes always make it to the rest of the network."),(0,a.yg)("p",null,"To setup your sentry node architecture you can follow the instructions below:"),(0,a.yg)("p",null,"Validators nodes should edit their config.toml:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Comma separated list of nodes to keep persistent connections to\n# Do not add private peers to this list if you don't want them advertised\npersistent_peers =[list of sentry nodes]\n\n# Set true to enable the peer-exchange reactor\npex = false\n")),(0,a.yg)("p",null,"Sentry Nodes should edit their config.toml:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)\n# Example ID: 3e16af0cead27979e1fc3dac57d03df3c7a77acc@3.87.179.235:26656\n\nprivate_peer_ids = "node_ids_of_private_peers"\n')),(0,a.yg)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.yg)("p",null,"By default, uppercase environment variables with the following prefixes will replace lowercase command-line flags:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"GA")," (for Gaia flags)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"TM")," (for Tendermint/CometBFT flags)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"BC")," (for democli or basecli flags)")),(0,a.yg)("p",null,"For example, the environment variable ",(0,a.yg)("inlineCode",{parentName:"p"},"GA_CHAIN_ID")," will map to the command line flag ",(0,a.yg)("inlineCode",{parentName:"p"},"--chain-id"),". Note that while explicit command-line flags will take precedence over environment variables, environment variables will take precedence over any of your configuration files. For this reason, it's imperative that you lock down your environment such that any critical parameters are defined as flags on the CLI or prevent modification of any environment variables."))}u.isMDXComponent=!0}}]);