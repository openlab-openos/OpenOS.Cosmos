"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[6331],{5680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>h});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),u=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(l.Provider,{value:a},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=u(t),c=r,h=g["".concat(l,".").concat(c)]||g[c]||s[c]||i;return t?n.createElement(h,o(o({ref:a},d),{},{components:t})):n.createElement(h,o({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[g]="string"==typeof e?e:r,o[1]=p;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7144:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=t(8168),r=(t(6540),t(5680));const i={title:"Upgrading the Chain",order:6},o=void 0,p={unversionedId:"hub-tutorials/live-upgrade-tutorial",id:"hub-tutorials/live-upgrade-tutorial",title:"Upgrading the Chain",description:"This document demonstrates how a live upgrade can be performed on-chain through a",source:"@site/docs/hub-tutorials/live-upgrade-tutorial.md",sourceDirName:"hub-tutorials",slug:"/hub-tutorials/live-upgrade-tutorial",permalink:"/hub-tutorials/live-upgrade-tutorial",draft:!1,tags:[],version:"current",frontMatter:{title:"Upgrading the Chain",order:6},sidebar:"tutorialSidebar",previous:{title:"Joining Testnet",permalink:"/hub-tutorials/join-testnet"},next:{title:"Upgrading Your Node",permalink:"/hub-tutorials/upgrade-node"}},l={},u=[],d={toc:u},g="wrapper";function s(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This document demonstrates how a live upgrade can be performed on-chain through a\ngovernance process."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start the network and trigger upgrade"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# start a gaia application full-node\n$ gaiad start\n\n# set up the cli config\n$ gaiad config chain-id testing\n\n# create an upgrade governance proposal\n$ gaiad tx gov submit-proposal software-upgrade <plan-name> \\\n--title <proposal-title> --description <proposal-description> \\\n--from <name-or-key> --upgrade-height <desired-upgrade-height> --deposit 10000000stake\n\n# once the proposal passes you can query the pending plan\n$ gaiad query upgrade plan\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Performing an upgrade"),(0,r.yg)("p",{parentName:"li"},"Assuming the proposal passes the chain will stop at given upgrade height."),(0,r.yg)("p",{parentName:"li"},"You can stop and start the original binary all you want, but ",(0,r.yg)("strong",{parentName:"p"},"it will refuse to\nrun after the upgrade height"),"."),(0,r.yg)("p",{parentName:"li"},"We need a new binary with the upgrade handler installed. The logs should look\nsomething like:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'E[2019-11-05|12:44:18.913] UPGRADE "<plan-name>" NEEDED at height: <desired-upgrade-height>:       module=main\nE[2019-11-05|12:44:18.914] CONSENSUS FAILURE!!!\n...\n')),(0,r.yg)("p",{parentName:"li"},"Note that the process will hang indefinitely (doesn't exit to avoid restart loops). So, you must\nmanually kill the process and replace it with a new binary. Do so now with ",(0,r.yg)("inlineCode",{parentName:"p"},"Ctrl+C")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"killall gaiad"),"."),(0,r.yg)("p",{parentName:"li"},"In ",(0,r.yg)("inlineCode",{parentName:"p"},"gaia/app/app.go"),", after ",(0,r.yg)("inlineCode",{parentName:"p"},"upgrade.Keeper")," is initialized and set in the app, set the\ncorresponding upgrade ",(0,r.yg)("inlineCode",{parentName:"p"},"Handler")," with the correct ",(0,r.yg)("inlineCode",{parentName:"p"},"<plan-name>"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-go"},'    app.upgradeKeeper.SetUpgradeHandler("<plan-name>", func(ctx sdk.Context, plan upgrade.Plan) {\n        // custom logic after the network upgrade has been executed\n    })\n')),(0,r.yg)("p",{parentName:"li"},"Note that we panic on any error - this would cause the upgrade to fail if the\nmigration could not be run, and no node would advance - allowing a manual recovery.\nIf we ignored the errors, then we would proceed with an incomplete upgrade and\nhave a very difficult time every recovering the proper state."),(0,r.yg)("p",{parentName:"li"},"Now, compile the new binary and run the upgraded code to complete the upgrade:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# create a new binary of gaia with the added upgrade handler\n$ make install\n\n# Restart the chain using the new binary. You should see the chain resume from\n# the upgrade height:\n# `I[2019-11-05|12:48:15.184] applying upgrade <plan-name> at height: <desired-upgrade-height>      module=main`\n$ gaiad start\n\n# verify there is no pending plan\n$ gaiad query upgrade plan\n\n# verify you can query the block header of the completed upgrade\n$ gaiad query upgrade applied <plan-name>\n")))))}s.isMDXComponent=!0}}]);