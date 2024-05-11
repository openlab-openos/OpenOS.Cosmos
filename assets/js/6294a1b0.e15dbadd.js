"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[6840],{5680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>m});var t=a(6540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=o,m=d["".concat(s,".").concat(p)]||d[p]||g[p]||i;return a?t.createElement(m,r(r({ref:n},u),{},{components:a})):t.createElement(m,r({ref:n},u))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5792:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=a(8168),o=(a(6540),a(5680));const i={title:"Service Providers",order:4},r=void 0,l={unversionedId:"resources/service-providers",id:"resources/service-providers",title:"Service Providers",description:"'Service Providers' are defined as entities that provide services for end-users that involve some form of interaction with the Cosmos Hub. More specifically, this document is focused on interactions with tokens.",source:"@site/docs/resources/service-providers.md",sourceDirName:"resources",slug:"/resources/service-providers",permalink:"/resources/service-providers",draft:!1,tags:[],version:"current",frontMatter:{title:"Service Providers",order:4},sidebar:"tutorialSidebar",previous:{title:"Building Gaia Deterministically",permalink:"/resources/reproducible-builds"},next:{title:"README",permalink:"/migration/"}},s={},c=[{value:"Connection Options",id:"connection-options",level:2},{value:"Running a Full Node",id:"running-a-full-node",level:2},{value:"What is a Full Node?",id:"what-is-a-full-node",level:3},{value:"Installation and Configuration",id:"installation-and-configuration",level:3},{value:"Command-Line Interface",id:"command-line-interface",level:2},{value:"Available Commands",id:"available-commands",level:3},{value:"Remote Access to gaiad",id:"remote-access-to-gaiad",level:3},{value:"Create a Key Pair",id:"create-a-key-pair",level:3},{value:"Check your Account",id:"check-your-account",level:4},{value:"Check your Balance",id:"check-your-balance",level:3},{value:"Send Coins Using the CLI",id:"send-coins-using-the-cli",level:4},{value:"REST API",id:"rest-api",level:2},{value:"Listen for Incoming Transactions",id:"listen-for-incoming-transactions",level:3}],u={toc:c},d="wrapper";function g(e){let{components:n,...a}=e;return(0,o.yg)(d,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"'Service Providers' are defined as entities that provide services for end-users that involve some form of interaction with the Cosmos Hub. More specifically, this document is focused on interactions with tokens."),(0,o.yg)("p",null,"Service Providers are expected to act as trusted points of contact to the blockchain for their end-users. This Service Providers section does not apply to wallet builders that want to provide Light Client functionalities."),(0,o.yg)("p",null,"This document describes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#service-providers"},"Service Providers"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#connection-options"},"Connection Options")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#running-a-full-node"},"Running a Full Node"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#what-is-a-full-node"},"What is a Full Node?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#installation-and-configuration"},"Installation and Configuration")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#command-line-interface"},"Command-Line Interface"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#available-commands"},"Available Commands")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#remote-access-to-gaiad"},"Remote Access to gaiad")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#create-a-key-pair"},"Create a Key Pair"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#check-your-account"},"Check your Account")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#check-your-balance"},"Check your Balance"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#send-coins-using-the-cli"},"Send Coins Using the CLI")))))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#rest-api"},"REST API"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#listen-for-incoming-transactions"},"Listen for Incoming Transactions"))))))),(0,o.yg)("h2",{id:"connection-options"},"Connection Options"),(0,o.yg)("p",null,"There are four main technologies to consider to connect to the Cosmos Hub:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Full Nodes: Interact with the blockchain."),(0,o.yg)("li",{parentName:"ul"},"REST Server: Serves for HTTP calls."),(0,o.yg)("li",{parentName:"ul"},"REST API: Use available endpoints for the REST Server."),(0,o.yg)("li",{parentName:"ul"},"GRPC: Connect to the Cosmos Hub using gRPC.")),(0,o.yg)("h2",{id:"running-a-full-node"},"Running a Full Node"),(0,o.yg)("h3",{id:"what-is-a-full-node"},"What is a Full Node?"),(0,o.yg)("p",null,"A Full Node is a network node that syncs up with the state of the blockchain. It provides blockchain data to others by using RESTful APIs, a replica of the database by exposing data with interfaces. A Full Node keeps in syncs with the rest of the blockchain nodes and stores the state on disk. If the full node does not have the queried block on disk the full node can go find the blockchain where the queried data lives."),(0,o.yg)("h3",{id:"installation-and-configuration"},"Installation and Configuration"),(0,o.yg)("p",null,"This section describes the steps to run and interact with a full node for the Cosmos Hub."),(0,o.yg)("p",null,"First, you need to ",(0,o.yg)("a",{parentName:"p",href:"/getting-started/installation"},"install the software"),"."),(0,o.yg)("p",null,"Consider running your own ",(0,o.yg)("a",{parentName:"p",href:"/hub-tutorials/join-mainnet"},"Cosmos Hub Full Node"),"."),(0,o.yg)("h2",{id:"command-line-interface"},"Command-Line Interface"),(0,o.yg)("p",null,"The command-line interface (CLI) is the most powerful tool to access the Cosmos Hub and use gaia.\nTo use the CLI, you must install the latest version of ",(0,o.yg)("inlineCode",{parentName:"p"},"gaia")," on your machine."),(0,o.yg)("p",null,"Compare your version with the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/releases"},"latest release version")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad version --long\n")),(0,o.yg)("h3",{id:"available-commands"},"Available Commands"),(0,o.yg)("p",null,"All available CLI commands are shown when you run the ",(0,o.yg)("inlineCode",{parentName:"p"},"gaiad")," command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'Stargate Cosmos Hub App\n\nUsage:\n  gaiad [command]\n\nAvailable Commands:\n\n\n  add-genesis-account Add a genesis account to genesis.json\n  collect-gentxs      Collect genesis txs and output a genesis.json file\n  debug               Tool for helping with debugging your application\n  export              Export state to JSON\n  gentx               Generate a genesis tx carrying a self delegation\n  help                Help about any command\n  init                Initialize private validator, p2p, genesis, and application configuration files\n  keys                Manage your application\'s keys\n  migrate             Migrate genesis to a specified target version\n  query               Querying subcommands\n  start               Run the full node\n  status              Query remote node for status\n  tendermint          Tendermint subcommands\n  testnet             Initialize files for a simapp testnet\n  tx                  Transactions subcommands\n  unsafe-reset-all    Resets the blockchain database, removes address book files, and resets data/priv_validator_state.json to the genesis state\n  validate-genesis    validates the genesis file at the default location or at the location passed as an arg\n  version             Print the application binary version information\n\nFlags:\n  -h, --help                help for gaiad\n      --home string         directory for config and data (default "/Users/tobias/.gaia")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nUse "gaiad [command] --help" for more information about a command.\n')),(0,o.yg)("p",null,"For each displayed command, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"--help")," flag to get further information."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'gaiad query --help\nUsage:\n  gaiad query [flags]\n  gaiad query [command]\n\nAliases:\n  query, q\n\nAvailable Commands:\n  account                  Query for account by address\n  auth                     Querying commands for the auth module\n  bank                     Querying commands for the bank module\n  block                    Get verified data for a the block at given height\n  distribution             Querying commands for the distribution module\n  evidence                 Query for evidence by hash or for all (paginated) submitted evidence\n  gov                      Querying commands for the governance module\n  ibc                      Querying commands for the IBC module\n  ibc-transfer             IBC fungible token transfer query subcommands\n  mint                     Querying commands for the minting module\n  params                   Querying commands for the params module\n  slashing                 Querying commands for the slashing module\n  staking                  Querying commands for the staking module\n  tendermint-validator-set Get the full tendermint validator set at given height\n  tx                       Query for a transaction by hash in a committed block\n  txs                      Query for paginated transactions that match a set of events\n  upgrade                  Querying commands for the upgrade module\n\nFlags:\n      --chain-id string   The network chain ID\n  -h, --help              help for query\n\nGlobal Flags:\n      --home string         directory for config and data (default "/Users/tobias/.gaia")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nUse "gaiad query [command] --help" for more information about a command.\n')),(0,o.yg)("h3",{id:"remote-access-to-gaiad"},"Remote Access to gaiad"),(0,o.yg)("p",null,"When choosing to remote access a Full Node and gaiad, you need a Full Node running and gaia installed on your local machine."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"gaiad")," is the tool that enables you to interact with the node that runs on the Cosmos Hub network, whether you run it yourself or not."),(0,o.yg)("p",null,"To set up ",(0,o.yg)("inlineCode",{parentName:"p"},"gaiad")," on a local machine and connect to an existing full node, use the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad config <flag> <value>\n")),(0,o.yg)("p",null,"First, set up the address of the full node you want to connect to:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad config node <host>:<port\n\n// example: gaiad config node https://77.87.106.33:26657 (note: this is a placeholder)\n")),(0,o.yg)("p",null,"If you run your own full node locally, use ",(0,o.yg)("inlineCode",{parentName:"p"},"tcp://localhost:26657")," as the address."),(0,o.yg)("p",null,"Finally, set the ",(0,o.yg)("inlineCode",{parentName:"p"},"chain-id")," of the blockchain you want to interact with:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad config chain-id cosmoshub-4\n")),(0,o.yg)("p",null,"Next, learn to use CLI commands to interact with the full node.\nYou can run these commands as remote control or when you are running it on your local machine."),(0,o.yg)("h3",{id:"create-a-key-pair"},"Create a Key Pair"),(0,o.yg)("p",null,"The default key is ",(0,o.yg)("inlineCode",{parentName:"p"},"secp256k1 elliptic curve"),". Use the ",(0,o.yg)("inlineCode",{parentName:"p"},"gaiad keys")," command to list the keys and generate a new key."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad keys add <your_key_name>\n")),(0,o.yg)("p",null,"You will be asked to create a password (at least 8 characters) for this key-pair. This will return the information listed below:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"NAME"),": Name of your key"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"TYPE"),": Type of your key, always ",(0,o.yg)("inlineCode",{parentName:"li"},"local"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ADDRESS"),": Your address. Used to receive funds."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"PUBKEY"),": Your public key. Useful for validators."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"MNEMONIC"),": 24-word phrase. ",(0,o.yg)("strong",{parentName:"li"},"Save this mnemonic somewhere safe"),". This phrase is required to recover your private key in case you forget the password. The mnemonic is displayed at the end of the output.")),(0,o.yg)("p",null,"You can see all available keys by typing:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad keys list\n")),(0,o.yg)("p",null,"Use the ",(0,o.yg)("inlineCode",{parentName:"p"},"--recover")," flag to add a key that imports a mnemonic to your keyring."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad keys add <your_key_name> --recover\n")),(0,o.yg)("h4",{id:"check-your-account"},"Check your Account"),(0,o.yg)("p",null,"You can view your account by using the ",(0,o.yg)("inlineCode",{parentName:"p"},"query account")," command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad query account <YOUR_ADDRESS>\n")),(0,o.yg)("p",null,"It will display your account type, account number, public key and current account sequence."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"'@type': /cosmos.auth.v1beta1.BaseAccount\naccount_number: \"xxxx\"\naddress: cosmosxxxx\npub_key:\n  '@type': /cosmos.crypto.secp256k1.PubKey\n  key: xxx\nsequence: \"x\"\n")),(0,o.yg)("h3",{id:"check-your-balance"},"Check your Balance"),(0,o.yg)("p",null,"Query the account balance with the command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad query bank balances <YOUR_ADDRESS>\n")),(0,o.yg)("p",null,"The response contains keys ",(0,o.yg)("inlineCode",{parentName:"p"},"balances")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"pagination"),".\nEach ",(0,o.yg)("inlineCode",{parentName:"p"},"balances")," entry contains an ",(0,o.yg)("inlineCode",{parentName:"p"},"amount")," held, connected to a ",(0,o.yg)("inlineCode",{parentName:"p"},"denom")," identifier.\nThe typical $ATOM token is identified by the denom ",(0,o.yg)("inlineCode",{parentName:"p"},"uatom"),". Where 1 ",(0,o.yg)("inlineCode",{parentName:"p"},"uatom")," is 0.000001 ATOM."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'balances:\n- amount: "12345678"\n  denom: uatom\npagination:\n  next_key: null\n  total: "0"\n')),(0,o.yg)("p",null,"When you query an account that has not received any token yet, the ",(0,o.yg)("inlineCode",{parentName:"p"},"balances")," entry is shown as an empty array."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'balances: []\npagination:\n  next_key: null\n  total: "0"\n')),(0,o.yg)("h4",{id:"send-coins-using-the-cli"},"Send Coins Using the CLI"),(0,o.yg)("p",null,"To send coins using the CLI:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad tx bank send [from_key_or_address] [to_address] [amount] [flags]\n")),(0,o.yg)("p",null,"Parameters:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"<from_key_or_address>"),": Key name or address of sending account."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"<to_address>"),": Address of the recipient."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"<amount>"),": This parameter accepts the format ",(0,o.yg)("inlineCode",{parentName:"li"},"<value|coinName>"),", such as ",(0,o.yg)("inlineCode",{parentName:"li"},"1000000uatom"),".")),(0,o.yg)("p",null,"Flags:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"--chain-id"),": This flag allows you to specify the id of the chain. There are different ids for different testnet chains and mainnet chains."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"--gas-prices"),": This flag allows you to specify the gas prices you pay for the transaction. The format is used as ",(0,o.yg)("inlineCode",{parentName:"li"},"0.0025uatom"))),(0,o.yg)("h2",{id:"rest-api"},"REST API"),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"https://v1.cosmos.network/rpc/v0.44.5"},"REST API documents")," list all the available endpoints that you can use to interact\nwith your full node. Learn ",(0,o.yg)("a",{parentName:"p",href:"/hub-tutorials/join-mainnet#enable-the-rest-api"},"how to enable the REST API")," on your full node."),(0,o.yg)("h3",{id:"listen-for-incoming-transactions"},"Listen for Incoming Transactions"),(0,o.yg)("p",null,"The recommended way to listen for incoming transactions is to periodically query the blockchain by using the following HTTP endpoint:"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://cosmos.network/rpc/"},(0,o.yg)("inlineCode",{parentName:"a"},"/cosmos/bank/v1beta1/balances/{address}"))))}g.isMDXComponent=!0}}]);