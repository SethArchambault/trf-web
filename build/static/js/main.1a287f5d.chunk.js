(this.webpackJsonptrf_web=this.webpackJsonptrf_web||[]).push([[0],{101:function(e,t){},106:function(e,t){},108:function(e,t){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),l=a.n(r),c=a(9),i=a(20),s=a(32),u=a(15),m=a.n(u),d=a(26),p=(a(83),a(7)),b=a(31),f=a(28),g=a(29),h=a(30),E={dev:{contract:"wigglewiggle",host:"jungle2.cryptolions.io",chainId:"e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473"},live:{contract:"travelrefund",host:"eos.greymass.com",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}},v=null;v=window.TPJSBrigeClient?"TokenPocket":navigator.userAgent.includes("EOSLynx")?"EOS Lynx":navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)?"mobile_browser":"desktop_browser";var y=new XMLHttpRequest,w=Object(b.a)({appName:"trf-web",network:{host:E.live.host,port:443,protocol:"https",chainId:E.live.chainId},walletProviders:[Object(f.a)(),Object(g.a)(),Object(h.a)()]}),O=w.getWalletProviders(),k=-22.9110137,x=-43.2093727,j=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],r=(t[1],Object(n.useState)(!1)),l=Object(p.a)(r,2),c=l[0],i=l[1],s=Object(n.useState)([]),u=Object(p.a)(s,2),b=u[0],f=u[1],g=Object(n.useState)([]),h=Object(p.a)(g,2),j=h[0],S=h[1],_=Object(n.useState)(null),T=Object(p.a)(_,2),N=T[0],A=T[1],I=Object(n.useState)(null),M=Object(p.a)(I,2),P=M[0],C=M[1],R=Object(n.useState)([]),F=Object(p.a)(R,2),L=F[0],B=F[1],D=Object(n.useState)(null),W=Object(p.a)(D,2),z=W[0],J=W[1],U=Object(n.useState)(null),q=Object(p.a)(U,2),G=q[0],H=q[1],V=function(){var e=Object(d.a)(m.a.mark((function e(t,a){var n,o,r,l,c,i,s,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=O[t],o=w.initWallet(n),e.next=5,o.connect();case 5:return e.sent,e.next=8,o.discover({pathIndexList:[0,1,2,3]});case 8:if(r=e.sent,l=null,!(r.keyToAccountMap.length>0)){e.next=18;break}0,c=r.keyToAccountMap[0],i=c.accounts[0].account,s=c.accounts[0].authorization,l=o.login(i,s),e.next=21;break;case 18:return e.next=20,o.login();case 20:l=e.sent;case 21:if(l){e.next=23;break}throw Error("Not logged in");case 23:return u=o.auth.accountName,console.log(o.eosApi),e.next=27,o.eosApi.transact({actions:[{account:E.live.contract,name:a,authorization:[{actor:u,permission:"active"}],data:{user:N,distance:G}}]},{broadcast:!0,blocksBehind:3,expireSeconds:100});case 27:e.sent,window.alert("Done!"),A(null),J(null),H(null),B([]),f([]),e.next=40;break;case 36:e.prev=36,e.t0=e.catch(0),alert(e.t0),console.log("error",e.t0);case 40:case"end":return e.stop()}}),e,null,[[0,36]])})));return function(t,a){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){clearTimeout(setTimeout),setTimeout((function(){P&&(y.onreadystatechange=function(){if(4==y.readyState&&200==y.status){var e=JSON.parse(y.responseText);console.log(e.features),B(e.features)}},y.open("GET","https://api.opencagedata.com/geocode/v1/geojson?q="+encodeURIComponent(P)+"&key=457712e7eb8a4316a4580bcbb41828aa&language=en&pretty=1&no_annotations=1"),y.send())}),300)}),[P]),Object(n.useEffect)((function(){if(z){var e=z.geometry.coordinates;H(function(e,t,a,n,o){if(e==a&&t==n)return 0;var r=Math.PI*e/180,l=Math.PI*a/180,c=t-n,i=Math.PI*c/180,s=Math.sin(r)*Math.sin(l)+Math.cos(r)*Math.cos(l)*Math.cos(i);return s>1&&(s=1),s=60*(s=180*(s=Math.acos(s))/Math.PI)*1.1515,"K"==o&&(s*=1.609344),"N"==o&&(s*=.8684),Math.round(s)}(k,x,e[1],e[0]))}}),[z]),Object(n.useEffect)((function(){if(!c){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var t=JSON.parse(e.responseText);console.log(t),S(t.rows),i(!0)}},e.open("POST","http://eos.greymass.com/v1/chain/get_table_rows"),e.send('{"table":"requests","scope":"travelrefund","code":"travelrefund","limit":100,"json":true}')}}),[c]),"mobile_browser"==v||"desktop_browser"==v)return o.a.createElement("div",null,"Use the TokenPocket app or EOS Lynx");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",{className:"hideOnDesktop",style:{paddingBottom:40}},o.a.createElement("img",{src:"/img/rio_mobile.jpg"})),o.a.createElement("div",null,a),o.a.createElement("div",{style:{paddingBottom:40}},N?o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{style:{flex:1}},N)," ",o.a.createElement("div",null,o.a.createElement("button",{className:"small-button",onClick:function(){A(null),J(null),H(null),B([]),f([])}},"clear"))):o.a.createElement("input",{type:"text",onChange:function(e){f(j.filter((function(t){return t.user.includes(e.target.value.toLowerCase())})))},placeholder:"username"}),o.a.createElement(o.a.Fragment,null,N?null:b.map((function(e,t){return o.a.createElement("button",{className:"small-button",onClick:function(){A(e.user)}},e.status," ",e.user)})))),o.a.createElement("div",null,z?o.a.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}," ",z.properties.formatted):o.a.createElement("input",{onChange:function(e){C(e.target.value)},type:"text",placeholder:"from"}),o.a.createElement(o.a.Fragment,null,z?null:L.map((function(e,t){return o.a.createElement("button",{className:"small-button",onClick:function(){J(e)}},e.properties.formatted)})))),G?o.a.createElement("div",null,"Distance: ",G," "):null,o.a.createElement(o.a.Fragment,null,G&&N?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"button",onClick:function(){if(window.confirm("Approve this user?"))for(var e=0;e<O.length;++e)if(O[e].id==v)return void V(e,"approve")}},"Approve"),o.a.createElement("button",{className:"button",onClick:function(){if(window.confirm("Reject this user?"))for(var e=0;e<O.length;++e)if(O[e].id==v)return void V(e,"reject")}},"Reject")):null)))},S={dev:{contract:"wigglewiggle",host:"jungle2.cryptolions.io",chainId:"e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473"},live:{contract:"travelrefund",host:"eos.greymass.com",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}},_=null;_=window.TPJSBrigeClient?"TokenPocket":navigator.userAgent.includes("EOSLynx")?"EOS Lynx":navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)?"mobile_browser":"desktop_browser";var T=Object(b.a)({appName:"trf-web",network:{host:S.live.host,port:443,protocol:"https",chainId:S.live.chainId},walletProviders:[Object(f.a)(),Object(g.a)(),Object(h.a)()]}),N=T.getWalletProviders();console.log("walletProviders",N);var A=function(){var e,t=Object(c.c)((function(e){return e.status})),a=Object(c.b)(),n=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,o,r,l,c,i,s,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=N[t],o=T.initWallet(n),a({type:"switch",payload:"Wallet initialized..."}),e.next=6,o.connect();case 6:return e.sent,a({type:"switch",payload:"Connected..."}),e.next=10,o.discover({pathIndexList:[0,1,2,3]});case 10:if(r=e.sent,l=null,!(r.keyToAccountMap.length>0)){e.next=22;break}a({type:"switch",payload:"Discovery complete..."}),0,c=r.keyToAccountMap[0],console.log("discovery, keyObj",c),i=c.accounts[0].account,s=c.accounts[0].authorization,l=o.login(i,s),e.next=26;break;case 22:return a({type:"switch",payload:"Logging in..."}),e.next=25,o.login();case 25:l=e.sent;case 26:if(l){e.next=28;break}throw Error("Not logged in");case 28:return u=o.auth.accountName,console.log(o.eosApi),a({type:"switch",payload:"Submitting to blockchain..."}),e.next=33,o.eosApi.transact({actions:[{account:S.live.contract,name:"create",authorization:[{actor:u,permission:"active"}],data:{user:u}}]},{broadcast:!0,blocksBehind:3,expireSeconds:100});case 33:e.sent,a({type:"switch",payload:"done"}),e.next=42;break;case 37:e.prev=37,e.t0=e.catch(0),alert(e.t0),a({type:"switch",payload:"error"}),console.log("error",e.t0);case 42:case"end":return e.stop()}}),e,null,[[0,37]])})));return function(t){return e.apply(this,arguments)}}(),r=N.map((function(e,t){var a=e.meta;return o.a.createElement("button",{className:"button",onClick:function(){n(t)},key:t},a.name)})),l=null,i=null;"intro"==t?(i="mobile_browser"==_?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{style:{fontWeight:"bold"}},"Start by opening TokenPocket or EOS Lynx, and then open this app by navigating to https://trf.eosdetroit.io.")):"desktop_browser"==_?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{style:{fontWeight:"bold"}},"Start by opening the ",o.a.createElement("a",{href:"scatter://open"},"Scatter")," or ",o.a.createElement("a",{href:"tokenpocket://open"},"Token Pocket")," and open this app.")):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"I see you're logged in with ",_,". Great!")),l=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",{className:"hideOnDesktop",style:{paddingBottom:40}},o.a.createElement("img",{src:"/img/rio_mobile.jpg"})),o.a.createElement("h1",null,"What is the Travel Reimbursement Fund?"),o.a.createElement("p",null,"The Travel Reimbursement Fund is an initiative to make EOSIO community events inclusive, rolled out for the 2019 EOS Community Conference in Rio de Janeiro."),o.a.createElement("p",null,"By providing a pro-rata travel stipend to attendees, together we can subsidize the costs of travel for our EOSIO community."),o.a.createElement("p",null,"All attendees are welcome to opt-in! A warm thanks goes out to the generous donors who made this possible:"),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",href:"https://eosrio.io"},"EOS Rio")),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",href:"https://eoslaomao.com"},"EOS LaoMao")),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",href:""},"EOS BP Legal Fund Contributors")),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",href:"https://eosdetroit.io"},"EOS Detroit")),o.a.createElement("h2",null,"Applying"),o.a.createElement("p",null,"Just login with your EOS username, then bring your travel info (a flight email or home address) and show it to Robrigo at the event."),i),o.a.createElement("div",{style:{paddingTop:20}},o.a.createElement("button",{className:"button",onClick:function(){for(var e=0;e<N.length;++e)if(N[e].id==_)return void n(e);a({type:"switch",payload:"login_selection"})}},"LOGIN WITH EOS")))):l="login_selection"==t?o.a.createElement(o.a.Fragment,null,r):"done"==t?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("p",null,"Success! Now find this Rob guy, and show him your travel info. "),o.a.createElement("p",null,"(A flight email, or something that has your home town on it.)")),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",{src:"/img/rob.jpg"}))):"already_signed_up"==t?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"You're already signed up. Now you just need to find this Robrigo guy, and hand him your travel info."),o.a.createElement("div",null,o.a.createElement("img",{src:"/img/rob.jpg"}))):"error"==t?o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Something Went Awry"),o.a.createElement("p",null,"Hmmm.. Make sure your EOS wallet app is open?"),o.a.createElement("button",{className:"button",onClick:function(){a({type:"switch",payload:"intro"})}},"Try Again")):o.a.createElement(o.a.Fragment,null,o.a.createElement((function(){var e=Object(c.c)((function(e){return e.status}));Object(c.b)();return o.a.createElement("div",{style:{textAlign:"center",padding:20}},e)}),null));var u=!1;return"#admin"==window.location.hash&&(u=!0),o.a.createElement("div",{style:{display:"flex",paddingBottom:40,flexDirection:"column"}},o.a.createElement("div",{className:"nav-desktop"},o.a.createElement("div",{style:(e={flexGrow:1,padding:"20px 20px",display:"flex",flexDirection:"column"},Object(s.a)(e,"flexGrow",1),Object(s.a)(e,"letterSpacing","1px"),Object(s.a)(e,"fontSize",19),e)}," TRAVEL REIMBURSMENT FUND"),o.a.createElement("div",{style:{maxHeight:200,borderBottomRightRadius:5,borderBottomLeftRadius:5,padding:"20px 20px",backgroundColor:"#F3F5F9",letterSpacing:"1px",fontWeight:"bold",fontSize:19}},o.a.createElement("a",{style:{textDecoration:"none"},target:"_blank",href:"http://eosdetroit.io"},"EOS DETROIT"))),o.a.createElement("div",{className:"nav-mobile",style:{textAlign:"center"}},o.a.createElement("div",{style:{fontSize:26,padding:20,backgroundColor:"#bfc3c9"}},"EOS DETROIT"),o.a.createElement("div",{style:{padding:20,backgroundColor:"#f3f5f9"}},"TRAVEL REIMBURSMENT FUND")),o.a.createElement("div",{id:"main-js",className:"main"},o.a.createElement("div",{className:"left",style:{padding:20}},u?o.a.createElement(j,null):l,o.a.createElement("br",null),o.a.createElement("div",null,"Sign up for the mailing list below to receive more information about future EOS Community Conferences."),o.a.createElement("link",{href:"//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css",rel:"stylesheet",type:"text/css"}),o.a.createElement("div",{id:"mc_embed_signup"},o.a.createElement("form",{action:"https://eosdetroit.us18.list-manage.com/subscribe/post?u=fc364bf57aca4a23d8d5bffb0&id=3bdceba087",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",class:"validate",target:"_blank",novalidate:!0},o.a.createElement("div",{id:"mc_embed_signup_scroll"},o.a.createElement("label",{for:"mce-EMAIL"},"Subscribe"),o.a.createElement("input",{type:"email",name:"EMAIL",class:"email",id:"mce-EMAIL",placeholder:"email address",required:!0}),o.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},o.a.createElement("input",{type:"text",name:"b_fc364bf57aca4a23d8d5bffb0_3bdceba087",tabindex:"-1",value:""})),o.a.createElement("div",{class:"clear"},o.a.createElement("input",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",class:"button"})))))),o.a.createElement("div",{className:"right"},o.a.createElement("div",null,o.a.createElement("img",{src:"/img/rio_sky.jpg"})))),o.a.createElement("div",{style:{bottom:0,position:"fixed",right:0,padding:20}},o.a.createElement("a",{href:"https://eosdetroit.io",target:"_blank"},o.a.createElement("img",{width:40,src:"/img/eos_detroit_logo_transparent.png"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=Object(i.b)({status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"intro",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"switch":return document.getElementById("main-js").scrollIntoView({behavior:"smooth"}),t.payload;default:return e}}}),M=Object(i.c)(I);l.a.render(o.a.createElement(c.a,{store:M},o.a.createElement(A,null)),document.getElementById("root"))},74:function(e,t,a){e.exports=a(144)},83:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.1a287f5d.chunk.js.map