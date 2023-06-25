import type { NextPage } from "next";
import { useState } from "react";
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import Link from "next/link";
import { Octokit } from "@octokit/rest";
import type { ISuccessResult } from "@worldcoin/idkit";


const IDKitWidget = dynamic(() => import('@worldcoin/idkit')
.then(mod => mod.IDKitWidget), { ssr: false })


const FormWrapper: NextPage = () => {

  //TODO mandas importar langchain

  const [formValues, setFormValues] = useState({
    name: "",
    country: "",
    twitter: "",
    github: "",
    w3topics: "",
    previosHacks:"",
    highlight:"",
    amount:"",
    use: "",
  });

  const [requestSent, setRequestSent] = useState(false);
  const [score, setScore ] = useState("");
  const [feedBack1, setfeedBack1] = useState("");
  const [feedBack2, setfeedBack2] = useState("");
  const [worldConnect, setworldConnect] = useState(false);
 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  //GITHUB API

  async function getGithubInfo(owner: string){
    console.log("OWNER", owner);
    const octokit = new Octokit({ auth : process.env.NEXT_PUBLIC_OCTOKIT_API_KEY});
    console.log("guthub", process.env.NEXT_PUBLIC_OCTOKIT_API_KEY);
    let jsonData = {
      user_name : null,
      followers : null,
      following : null,
      public_repos : null,
      location : null,
      updated_at : null,
      balanceInfo : null,
      programing_languages : "",
      code_size : 0,
    }  

    try {
        const response = await octokit.request(`GET /users/${owner}`);
        const data = response.data
        jsonData.user_name = data.login
        jsonData.followers = data.followers
        jsonData.following = data.following
        jsonData.public_repos = data.public_repos
        jsonData.location = data.location
        jsonData.updated_at = data.updated_at

        try {
            const response2 = await octokit.request(`GET /users/${owner}/repos`);
            const data2 = response2.data
      
            let languageSet = new Set();
            let sizeSum = 0;
          
            for (let i = 0; i < data2.length; i++) {
              const elemento = data2[i];
              if (elemento.language) {
                languageSet.add(elemento.language);
              }
              sizeSum += elemento.size;
            }
          
            const languageString = Array.from(languageSet).join(', ');
            jsonData.programing_languages = languageString
            jsonData.code_size = sizeSum
            return jsonData

          } catch (error) {
            console.log("Error al obtener los repositorios de GitHub:", error);
            throw error;
          }
        
      } catch (error) {
        console.log("Error al obtener los repositorios de GitHub:", error);
        throw error;
      }
  }

  //QUICK NODE 

  async function wallet_getTrxInfo(wallet_address: string) {
    const url = "https://smart-weathered-dust.matic.discover.quiknode.pro/31357e42cb90b2324a86a66b7b3b7db79e0e2808/"
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": 67,
        "jsonrpc": "2.0",
        "method": "qn_getTransactionsByAddress",
        "params": [{
          "address": wallet_address,
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

    return fetch(url, requestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error));

  }

  async function wallet_getBalanceInfo(wallet_address: string) {
    const url = "https://smart-weathered-dust.matic.discover.quiknode.pro/31357e42cb90b2324a86a66b7b3b7db79e0e2808/"
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
    "id": 67,
    "jsonrpc": "2.0",
    "method": "qn_getWalletTokenBalance",
    "params": [{
        "wallet": wallet_address
    }]
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    return fetch(url, requestOptions)
        .then(response => response.text())
        // .then(result => console.log(result))
        .catch(error => console.log('error', error));
  }

  //LANGCHAIN API

  async function query_ia(data: { question: { githubInfo: { user_name: null; followers: null; following: null; public_repos: null; location: null; updated_at: null; balanceInfo: null; programing_languages: string; code_size: number; }; trxInfo: any; balanceInfo: any; }; }) {
    const response = await fetch(
        "https://ggbot-48h7.onrender.com/api/v1/prediction/cd11e13f-a01a-4f9a-884c-2850abe1ae25",
        {
            method: "POST",
            body: data
        }
    );
    const result = await response.json();
    return result;
}

  //OTHERS 

  const onSuccess = (result: ISuccessResult) => {
    //TODO : guardarlo en firebase o algo y matchear las solicitudes
    console.log("resultadoooooooo",result);
    setworldConnect(true)
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("VALORES: ",formValues); // Aquí puedes hacer lo que necesites con los valores del formulario
    console.log(formValues.name)

    const wallet_address = "0x2cA2B328a6394A5f4DfB06cA22B14f2882d49b85"

    getGithubInfo(formValues.github)
    .then(res => {
        const githubInfo = res

        //const quick = new QuickNodeApi(process.env.NEXT_PUBLIC_QUICKNODE_API_KEY)
        wallet_getTrxInfo(wallet_address).then(res => { 
          const trxInfo = JSON.parse(res)
          
          wallet_getBalanceInfo(wallet_address).then(res => {
            const balanceInfo = JSON.parse(res)

            const jsonInfo = {
              githubInfo : githubInfo,
              trxInfo : trxInfo.result.paginatedItems,
              balanceInfo : balanceInfo.result.result
              
            }

            query_ia({"question":jsonInfo }).then((response) => {
              console.log(response);
              const result = JSON.parse(response);
              setScore(result.calification)
              setfeedBack1(result.code_programming_feedback)
              setfeedBack2(result.use_blockchain_feedback)
              setRequestSent(true)
            });
          })
        })

      })
    .catch(err => {
      console.error(err)
    })

  };

  const handleProof = async (result: ISuccessResult) => {
		const reqBody = {
			merkle_root: result.merkle_root,
			nullifier_hash: result.nullifier_hash,
			proof: result.proof,
			credential_type: result.credential_type,
			action: "",
			signal: "",
		};
		fetch("/api/verify/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reqBody),
		}).then(async (res: Response) => {
			if (res.status == 200) {
				console.log("Successfully verified credential.")
			} else {
				throw new Error("Error: " + (await res.json()).code) ?? "Unknown error.";
			}
		});
	};


  return (
    <div>
      <div className="absolute top-[365px] left-[-0.5px] w-[1279px] h-[1551px] overflow-hidden flex flex-row py-[79px] px-0 box-border items-start justify-start">
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            {
              (requestSent) ? (
                <div>
                  <h2>
                    Thanks for applying!
                  </h2>
                  <div>
                    <h3>
                      Score : <strong> {score}</strong>
                    </h3>
                    <h3>
                      FeedBack Skills Programing : <strong> {feedBack1}</strong>
                    </h3>
                    <h3>
                      FeedBack Wallet : <strong> {feedBack2}</strong>
                    </h3>
                    
                  </div>
                  <button>
                    Deploy
                  </button>
                </div>
              ) : ( 
                <form className="w-[714px] h-[1472px] flex flex-col items-start justify-start gap-[10px]" onSubmit={handleSubmit}>
                  <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-base-300 text-left items-center w-[714px] h-[100px] shrink-0">
                    Tell us about yourself! This information is for us to get to know you
                    better, and to calculate an accurate application score based on your
                    profile. We wont store it or use it for other purposes.
                  </b>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    placeholder="Share your response here"
                    size="medium"
                    margin="none"
                    name="name"
                    label="Preferred name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    placeholder="Share your response here"
                    size="medium"
                    margin="none"
                    name="country"
                    label="Country of residence"
                    value={formValues.country}
                    onChange={handleChange}
                  />
                  <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-base-300 text-left items-center w-[714px] h-[48.5px] shrink-0">
                    Social media
                  </b>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    placeholder="Share your response here"
                    size="medium"
                    margin="none"
                    name="twitter"
                    label="Twitter username (optional)"
                    value={formValues.twitter}
                    onChange={handleChange}
                  />
                  <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-base-300 text-left items-center w-[714px] h-[48.5px] shrink-0">
                    Track record information
                  </b>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    
                    placeholder="Enter your GitHub username"
                    size="medium"
                    margin="none"
                    name="github"
                    label="GitHub username (mandatory)"
                    value={formValues.github}
                    onChange={handleChange}
                  />
    
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    
                    placeholder="Share your response here"
                    size="medium"
                    margin="none"
                    name="w3topics"
                    label="What web3 topics interest you the most?"
                    value={formValues.w3topics}
                    onChange={handleChange}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    
                    placeholder="Share your response here"
                    size="medium"
                    margin="none"
                    name="previosHacks"
                    label="Have you participated in any previous hackathons or coding competitions? Which ones?"
                    value={formValues.previosHacks}
                    onChange={handleChange}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    placeholder="Share your response here"
                    size="medium"
                    margin="none"
                    name="highlight"
                    label="What would be your highlight from these competitions and events?"
                    value={formValues.highlight}
                    onChange={handleChange}
                  />
                  <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-base-300 text-left items-center w-[714px] h-[48.5px] shrink-0">
                    Application details
                  </b>
                  {/* TODO extraer info del FormControl */}
                  <FormControl className="self-stretch" variant="standard">
                    <InputLabel color="primary">
                      Which ETHGlobal event are you interested in attending?
                    </InputLabel>
                    <Select
                      color="primary"
                      size="medium"
                      label="Which ETHGlobal event are you interested in attending?"
                    >
                      <MenuItem value="Pragma Paris (July 20, 2023)">
                        Pragma Paris (July 20, 2023)
                      </MenuItem>
                      
                      <MenuItem value="ETHGlobal Paris (July 21-23, 2023)">
                        ETHGlobal Paris (July 21-23, 2023)
                      </MenuItem>
                      
                      <MenuItem value="ETHGlobal New York (Sep 22-24, 2023)">
                        ETHGlobal New York (Sep 22-24, 2023)
                      </MenuItem>
                      
                      <MenuItem value="ETHGlobal Istanbul (Nov 17-19, 2023)">
                        ETHGlobal Istanbul (Nov 17-19, 2023)
                      </MenuItem>
                      
                    </Select>
                    <FormHelperText />
                  </FormControl>
    
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="number"
                    
                    placeholder="Remember: your response has to be in MATIC!"
                    size="medium"
                    margin="none"
                    name="amount"
                    label="Introduce the amount requested for your participation in this event (in MATIC)"
                    value={formValues.amount}
                    onChange={handleChange}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    
                    placeholder="Share your response here"
                    size="medium"
                    margin="none"
                    name="use"
                    label="How would you use these resources?"
                    value={formValues.use}
                    onChange={handleChange}
                  />
                  <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-base-300 text-left items-center w-[714px] h-[48.5px] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <p className="m-0">
                        I attest that the information presented is accurate.
                      </p>
                      <p className="m-0">
                        I pledge to continue supporting other hackers in their careers.
                      </p>
                    </span>
                  </b>
                  <Link
                    className="cursor-pointer [text-decoration:none] self-stretch"
                    href="/"
                  >
                    <div className="self-stretch overflow-hidden flex flex-row py-4 px-0 items-center justify-start gap-[8px]">
                      <div className="hidden flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row p-1 items-center justify-start">
                            <div className="rounded-45xl bg-grey-grey-400 w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-input-text text-base-300 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col py-[3px] px-1.5 items-start justify-start">
                              <div className="relative text-smi tracking-[0.16px] leading-[18px] font-components-input-text text-base-300 text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row p-1 items-center justify-start">
                            <div className="rounded-45xl bg-grey-grey-400 w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-input-text text-base-300 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col py-[3px] px-1.5 items-start justify-start">
                              <div className="relative text-smi tracking-[0.16px] leading-[18px] font-components-input-text text-base-300 text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] font-components-input-text text-base-300 text-left">
                        Use this space to agree with the statement above and proceed with
                        Proof of Humanity.
                      </div>
                      <div className="relative w-7 h-7 hidden">
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
                          <div className="rounded-29xl flex flex-row p-1 items-center justify-start">
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                  { (worldConnect) ? (
                    <button className="btn [background:linear-gradient(73.12deg,_#641476,_#9d4561)] flex flex-col py-0 px-[59px] box-border items-end justify-center">
                        Apply
                    </button>
                  ) : (
                    // <button className="btn [background:linear-gradient(73.12deg,_#641476,_#9d4561)] flex flex-col py-0 px-[59px] box-border items-end justify-center">
                    //     World ID Connect
                    // </button>
                    <h3>
                      First, access World ID
                    </h3>
                  )}
                </form>
              )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
              <IDKitWidget
                onSuccess={onSuccess}
                handleVerify={handleProof}
                //action="my_action"
                //signal="my_signal"
                
                //handleVerify={handleProof}
                app_id="app_fc30e6754b7a0020c89f355d629c169b"
                //onSuccess={result => console.log(result)}
                // credential_types=["orb","phone"]
                // walletConnectProjectId="get_this_from_walletconnect_portal"
              >
                {({ open }) => <button className= "btn [background:linear-gradient(73.12deg,_#641476,_#9d4561)] flex flex-col py-0 px-[59px] box-border items-end justify-center" onClick={open}>World ID Connecte</button>}
              </IDKitWidget>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default FormWrapper;
