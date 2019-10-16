import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';

/* accessContent + walletProviders*/
import { initAccessContext } from 'eos-transit';
import scatter from 'eos-transit-scatter-provider';
import tokenpocket from 'eos-transit-tokenpocket-provider';
import lynxWalletProvider from 'eos-transit-lynx-provider';


const bp_api = {
    dev: {
        contract: 'wigglewiggle',
        host: 'jungle2.cryptolions.io',
        chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473'
    },
    live: {
        contract: 'travelrefund',
        host: 'eos.greymass.com',
        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
    }
}
const env = 'live'

// see if browser is open
let clientType = null
if (window.TPJSBrigeClient) {
     clientType = 'TokenPocket'
}
else if (navigator.userAgent.includes("EOSLynx")){
     clientType = 'EOS Lynx'
}
else if (!!navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)){
	clientType = "mobile_browser" 
}
else {
	clientType = "desktop_browser" 
}


const accessContext = initAccessContext({
	appName: 'trf-web',
	network: {
		host: bp_api[env].host,
		port: 443,
		protocol: 'https',
		chainId: bp_api[env].chainId,
	},
	walletProviders: [
		scatter(),
        tokenpocket(),
        lynxWalletProvider()

	]
});
const walletProviders = accessContext.getWalletProviders();
console.log('walletProviders', walletProviders);
/* /accessContent + walletProviders*/


const App = () => {
    const status = useSelector((state) =>state.status)
    const dispatch = useDispatch()
	const Status = () => {
		const status = useSelector((state) =>state.status)
		const dispatch = useDispatch()
		return (<div style={{textAlign:'center', padding:20, }}>{status}</div>)
	}
    const selectWalletProvider =  async (idx) => {
        try { 
            const walletProvider = walletProviders[idx];
            const wallet = accessContext.initWallet(walletProvider);
            dispatch({type:'switch', payload: 'wallet initialized'})
            let connect_response = await wallet.connect()
            dispatch({type:'switch', payload: 'connected'})
            const discoveryData = await wallet.discover({ pathIndexList: [ 0,1,2,3 ] })
            let accountInfo = null
            if (discoveryData.keyToAccountMap.length > 0) {
                dispatch({type:'switch', payload:'discovery_completed'})
                // @todo(seth): should allow selection
                const index = 0;
                const keyObj = discoveryData.keyToAccountMap[index];
                const accountName = keyObj.accounts[0].account;
                const authorization = keyObj.accounts[0].authorization;
                accountInfo = wallet.login(accountName, authorization)
            } 
            else { // discovery not supported (scatter for example)
                dispatch({type:'switch', payload:'logging in'})
                accountInfo = await wallet.login()
            }
            // logged in
            if (!accountInfo) throw Error("Not logged in")
            let username = wallet.auth.accountName

            dispatch({type:'switch', payload:'submitting to blockchain.'})
            let wallet_result = await wallet.eosApi.transact({
                actions: [{
                      account: bp_api[env].contract ,
                      name: 'create',
                      authorization: [{
                                    actor: username,
                                    permission: "active",/*wallet.auth.permission,*/
                                  }],
                      data: {user:username},
                }],
            }, {
                    broadcast: true,
                blocksBehind: 3, expireSeconds: 10});
            dispatch({type:'switch', payload:'done'})
        }
        catch(err) {
            alert(err)
                /*
             if (err instanceof RpcError){
                 console.log(JSON.stringify(e.json, null, 2));
             }
             */

            dispatch({type:'switch', payload:"error"})
            console.log('error', err)
        }
    };
    const renderWalletProviders = walletProviders.map(
        ({meta}, idx) => (<button className="button" onClick={() => { selectWalletProvider(idx )}} key={idx}>{meta.name}</button>)
    )
	const onClickApply = () => {
		// flip through all the different providers
		for (var idx = 0; idx < walletProviders.length; ++idx) {
			if (walletProviders[idx].id == clientType) {
				selectWalletProvider(idx)
				return 
			}
		}
		dispatch({type:'switch', payload: 'login_selection'}) 
	} 

    let renderLoginBox = null
	let introText = null
    if (status == 'intro') {

		if (clientType == "mobile_browser") {
			introText = (
				<>
					<p>Start by opening the TokenPocket or EOS Lynx, and open this app.</p>
				</>)

		} else if (clientType == "desktop_browser") {
			introText = (
				<>
					<p>Start by opening the <a href="scatter://open">Scatter</a> or <a href="tokenpocket://open">Token Pocket</a> and open this app.</p>
				</>)
		}
		else {
			introText = (
				<>
					<p>I see you're logged in with {clientType}. Great!</p>
				</>)
		}
		
        renderLoginBox = (
			<>
                <div>
					<h1>What is the Travel Reimbursement Fund?</h1>

					<p>The TRF is an initiative to make our EOS community conferences more inclusive.</p>

					<p>Through Providing a small travel stipend to anyone who needs it, we can provide better accesibility to the things that matter.</p>

					<p>If you need support please apply.</p>

					<h2>Applying</h2>

					<p>Just login with your EOS username, then bring your travel info (an email orhome address) and come see us at the event</p>

					{introText}
                </div>
                <div style={{paddingTop:20}}>
                    <button className="button" onClick={onClickApply}>LOGIN WITH EOS</button>
                </div>
			</>
        )
    } else if (status == 'login_selection'){
        renderLoginBox = (
			<div style={{maxWidth:500, flexGrow:1, paddingRight:10}}> 
				<>{renderWalletProviders}</>
			</div>
        )
    } else if (status == 'done') {
        renderLoginBox = (
			<div style={{maxWidth:500, flexGrow:1, paddingRight:10}}> 
                <div>
                  Success! Now find this rob guy, and hand him your travel info.  
                </div>
                <div>
                <img src="/img/rob.jpg" />
                </div>
			</div>
        )
    } else if (status == 'already_signed_up') {
        renderLoginBox = (
			<div style={{maxWidth:500, flexGrow:1, paddingRight:10}}> 
                <div>
                  You're already signed up. Now you just need to find this rob guy, and hand him your travel info.  
                </div>
                <div>
                <img src="/img/rob.jpg" />
                </div>
			</div>
        )
    } else if (status == 'error') {
        renderLoginBox = (
			<div style={{maxWidth:500, flexGrow:1, paddingRight:10}}> 
				<Status /><p>Hmmm.. Make sure your EOS Wallet app is open!</p>
			
                    <button className="button" onClick={() => { 
						dispatch({type:'switch', payload: 'intro'})
					}}>Try Again</button>
			</div>
        )

    } else {
        renderLoginBox = (
			<div style={{maxWidth:500, flexGrow:1, paddingRight:10}}> 
				<Status />
			</div>
        )
    }
	return (
    <div style={{display:'flex', flexDirection: 'column'}}> 
        <div style={{display:'flex', flexDirection: 'row', backgroundColor:'#F3F5F9',}}>
            <div style={{flexGrow:1, padding: '20px 20px',   display:'flex', flexDirection: 'column', flexGrow: 1,  letterSpacing: '1px', fontSize:19, }} > TRAVEL REIMBURSMENT FUND</div>
            <div style={{ maxHeight:200, borderBottomRightRadius:5, borderBottomLeftRadius: 5, padding: '20px 20px', backgroundColor:'#F3F5F9', letterSpacing: '1px', fontWeight:'bold', fontSize:19}} >
                <a style={{textDecoration:'none'}} target="_blank" href="http://eosdetroit.io">EOS DETROIT</a>
            </div>
        </div>
    
        <div className="main">
			<div className="left">
				<div style={{padding:40}}>
					{renderLoginBox}
				</div>
			</div>
			<div className="right"> 
				<div><img src="/img/rio_sky.jpg" /></div>
			</div>
		</div>
		<div style={{bottom:0, position:'fixed', right: 0, padding:20}}>
			<a href="https://eosdetroit.io" target="_blank">
				<img width={40} src="/img/eos_detroit_logo_transparent.png" />
			</a>
		</div>

    </div>
	)
};

export default App;
