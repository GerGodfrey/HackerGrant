

class QuickNodeApi {

    constructor(wallet_address) {
        this.url = "https://smart-weathered-dust.matic.discover.quiknode.pro/31357e42cb90b2324a86a66b7b3b7db79e0e2808/";
        this.wallet_address = wallet_address;
        this.quick_info = {}
        //this.info()
    }



    wallet_getBalanceInfo() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
        "id": 67,
        "jsonrpc": "2.0",
        "method": "qn_getWalletTokenBalance",
        "params": [{
            "wallet": this.wallet_address
        }]
        });
    
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
    
        return fetch(this.url, requestOptions)
            .then(response => response.text())
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    async wallet_getTrxInfo() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
            "id": 67,
            "jsonrpc": "2.0",
            "method": "qn_getTransactionsByAddress",
            "params": [{
              "address": this.wallet_address,
              "page": 1,
              "perPage": 10
            }]
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        return fetch(this.url, requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error));
    
    }
}

export default QuickNodeApi; 


// const quick = new QuickNodeApi("0x2cA2B328a6394A5f4DfB06cA22B14f2882d49b85")
// quick.wallet_getTrxInfo().then(res => { 
//     console.log(res)
// })