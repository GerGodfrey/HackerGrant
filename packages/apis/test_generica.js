import {getGithubInfo} from "./github.js"
import QuickNodeApi from './quicknode.js'
import {query_ia} from './langchain.js'

let jsonInfo = {}

getGithubInfo("gergodfrey")
.then(res => {
    const githubInfo = res
    jsonInfo.githubInfo = githubInfo

    const quick = new QuickNodeApi("0x419bC2B008b37F990d27443b478eaE8fFCa2d7B0")
    quick.wallet_getTrxInfo().then(res => { 
      const trxInfo = JSON.parse(res)
      jsonInfo.trxInfo = trxInfo.result.paginatedItems
      
      quick.wallet_getBalanceInfo().then(res => {
        const balanceInfo = JSON.parse(res)
        jsonInfo.balanceInfo = balanceInfo.result.result

        query_ia({"question":jsonInfo }).then((response) => {
          console.log(response);
        });
        
        //console.log(jsonInfo)
      })
    })

  })
.catch(err => {
  console.error(err)
})








