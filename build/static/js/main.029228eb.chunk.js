(this.webpackJsonptrf_web=this.webpackJsonptrf_web||[]).push([[0],{100:function(e,t){},105:function(e,t){},107:function(e,t){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),l=a.n(r),i=a(9),c=a(18),s=a(25),m=a(41),d=a.n(m),u=a(66),p=(a(82),function(){return o.a.createElement("div",null,"Admin Screen goes here")}),g=a(72),h=a(68),b=a(70),E=a(71),f=!1;"#admin"==window.location.hash&&(f=!0);var y={dev:{contract:"wigglewiggle",host:"jungle2.cryptolions.io",chainId:"e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473"},live:{contract:"travelrefund",host:"eos.greymass.com",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}},v=null;v=window.TPJSBrigeClient?"TokenPocket":navigator.userAgent.includes("EOSLynx")?"EOS Lynx":navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)?"mobile_browser":"desktop_browser";var w=Object(g.a)({appName:"trf-web",network:{host:y.live.host,port:443,protocol:"https",chainId:y.live.chainId},walletProviders:[Object(h.a)(),Object(b.a)(),Object(E.a)()]}),k=w.getWalletProviders();console.log("walletProviders",k);var x=function(){var e,t=Object(i.c)((function(e){return e.status})),a=Object(i.b)(),n=function(){var e=Object(u.a)(d.a.mark((function e(t){var n,o,r,l,i,c,s,m;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=k[t],o=w.initWallet(n),a({type:"switch",payload:"Wallet initialized..."}),e.next=6,o.connect();case 6:return e.sent,a({type:"switch",payload:"Connected..."}),e.next=10,o.discover({pathIndexList:[0,1,2,3]});case 10:if(r=e.sent,l=null,!(r.keyToAccountMap.length>0)){e.next=21;break}a({type:"switch",payload:"Discovery complete..."}),0,i=r.keyToAccountMap[0],c=i.accounts[0].account,s=i.accounts[0].authorization,l=o.login(c,s),e.next=25;break;case 21:return a({type:"switch",payload:"Logging in..."}),e.next=24,o.login();case 24:l=e.sent;case 25:if(l){e.next=27;break}throw Error("Not logged in");case 27:return m=o.auth.accountName,a({type:"switch",payload:"Submitting to blockchain..."}),e.next=31,o.eosApi.transact({actions:[{account:y.live.contract,name:"create",authorization:[{actor:m,permission:"active"}],data:{user:m}}]},{broadcast:!0,blocksBehind:3,expireSeconds:10});case 31:e.sent,a({type:"switch",payload:"done"}),e.next=40;break;case 35:e.prev=35,e.t0=e.catch(0),alert(e.t0),a({type:"switch",payload:"error"}),console.log("error",e.t0);case 40:case"end":return e.stop()}}),e,null,[[0,35]])})));return function(t){return e.apply(this,arguments)}}(),r=k.map((function(e,t){var a=e.meta;return o.a.createElement("button",{className:"button",onClick:function(){n(t)},key:t},a.name)})),l=null,c=null;return"intro"==t?(c="mobile_browser"==v?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{style:{fontWeight:"bold"}},"Start by opening TokenPocket or EOS Lynx, and then open this app.")):"desktop_browser"==v?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{style:{fontWeight:"bold"}},"Start by opening the ",o.a.createElement("a",{href:"scatter://open"},"Scatter")," or ",o.a.createElement("a",{href:"tokenpocket://open"},"Token Pocket")," and open this app.")):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"I see you're logged in with ",v,". Great!")),l=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",{className:"hideOnDesktop",style:{paddingBottom:40}},o.a.createElement("img",{src:"/img/rio_mobile.jpg"})),o.a.createElement("h1",null,"What is the Travel Reimbursement Fund?"),o.a.createElement("p",null,"The Travel Reimbursement Fund is an initiative to make our EOS community conferences more inclusive."),o.a.createElement("p",null,"Through Providing a small travel stipend to anyone who needs it, we can provide better accesibility to the things that matter."),o.a.createElement("p",null,"If you need support please apply."),o.a.createElement("h2",null,"Applying"),o.a.createElement("p",null,"Just login with your EOS username, then bring your travel info (an email orhome address) and come see us at the event"),c),o.a.createElement("div",{style:{paddingTop:20}},o.a.createElement("button",{className:"button",onClick:function(){for(var e=0;e<k.length;++e)if(k[e].id==v)return void n(e);a({type:"switch",payload:"login_selection"})}},"LOGIN WITH EOS")))):l="login_selection"==t?o.a.createElement(o.a.Fragment,null,r):"done"==t?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("p",null,"Success! Now find this Rob guy, and show him your travel info. "),o.a.createElement("p",null,"(A flight email, or something that has your home town on it.)")),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",{src:"/img/rob.jpg"}))):"already_signed_up"==t?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"You're already signed up. Now you just need to find this rob guy, and hand him your travel info."),o.a.createElement("div",null,o.a.createElement("img",{src:"/img/rob.jpg"}))):"error"==t?o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Something Went Awry"),o.a.createElement("p",null,"Hmmm.. Make sure your EOS wallet app is open?"),o.a.createElement("button",{className:"button",onClick:function(){a({type:"switch",payload:"intro"})}},"Try Again")):o.a.createElement(o.a.Fragment,null,o.a.createElement((function(){var e=Object(i.c)((function(e){return e.status}));Object(i.b)();return o.a.createElement("div",{style:{textAlign:"center",padding:20}},e)}),null)),o.a.createElement("div",{style:{display:"flex",paddingBottom:40,flexDirection:"column"}},o.a.createElement("div",{className:"nav-desktop"},o.a.createElement("div",{style:(e={flexGrow:1,padding:"20px 20px",display:"flex",flexDirection:"column"},Object(s.a)(e,"flexGrow",1),Object(s.a)(e,"letterSpacing","1px"),Object(s.a)(e,"fontSize",19),e)}," TRAVEL REIMBURSMENT FUND"),o.a.createElement("div",{style:{maxHeight:200,borderBottomRightRadius:5,borderBottomLeftRadius:5,padding:"20px 20px",backgroundColor:"#F3F5F9",letterSpacing:"1px",fontWeight:"bold",fontSize:19}},o.a.createElement("a",{style:{textDecoration:"none"},target:"_blank",href:"http://eosdetroit.io"},"EOS DETROIT"))),o.a.createElement("div",{className:"nav-mobile",style:{textAlign:"center"}},o.a.createElement("div",{style:{fontSize:26,padding:20,backgroundColor:"#bfc3c9"}},"EOS DETROIT"),o.a.createElement("div",{style:{padding:20,backgroundColor:"#f3f5f9"}},"TRAVEL REIMBURSMENT FUND")),o.a.createElement("div",{id:"main-js",className:"main"},o.a.createElement("div",{className:"left",style:{padding:40}},f?p:l,l),o.a.createElement("div",{className:"right"},o.a.createElement("div",null,o.a.createElement("img",{src:"/img/rio_sky.jpg"})))),o.a.createElement("div",{style:{bottom:0,position:"fixed",right:0,padding:20}},o.a.createElement("a",{href:"https://eosdetroit.io",target:"_blank"},o.a.createElement("img",{width:40,src:"/img/eos_detroit_logo_transparent.png"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=Object(c.b)({status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"intro",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"switch":return document.getElementById("main-js").scrollIntoView({behavior:"smooth"}),t.payload;default:return e}}}),S=Object(c.c)(O);l.a.render(o.a.createElement(i.a,{store:S},o.a.createElement(x,null)),document.getElementById("root"))},73:function(e,t,a){e.exports=a(143)},82:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.029228eb.chunk.js.map