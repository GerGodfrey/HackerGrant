import type { NextPage } from "next";
import { useCallback, useState } from "react";
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
import QuickNodeApi from '../../../apis/quicknode.js'
import {query_ia} from '../../../apis/langchain.js'
import { Octokit } from "@octokit/rest";


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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const octokit = new Octokit({
    auth : process.env.NEXT_PUBLIC_OCTOKIT_API_KEY
  })

  async function getGithubInfo(owner: string){
    console.log("Obteniendo información de GitHub...")
    console.log(octokit)

      let jsonData = {}  
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


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("VALORES: ",formValues); // Aquí puedes hacer lo que necesites con los valores del formulario
    console.log(formValues.name)

    let jsonInfo = {}

    getGithubInfo(formValues.name)
    .then(res => {
        const githubInfo = res
        jsonInfo.githubInfo = githubInfo
        const quick = new QuickNodeApi(process.env.NEXT_PUBLIC_QUICKNODE_API_KEY)
        quick.wallet_getTrxInfo().then(res => { 
          const trxInfo = JSON.parse(res)
          jsonInfo.trxInfo = trxInfo.result.paginatedItems
          
          quick.wallet_getBalanceInfo().then(res => {
            const balanceInfo = JSON.parse(res)
            jsonInfo.balanceInfo = balanceInfo.result.result

            query_ia({"question":jsonInfo }).then((response) => {
              console.log(response);

            });
          })
        })

      })
    .catch(err => {
      console.error(err)
    })

  };


  return (
    <div>
      <div className="absolute top-[365px] left-[-0.5px] w-[1279px] h-[1551px] overflow-hidden flex flex-row py-[79px] px-0 box-border items-start justify-start">
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <form className="w-[714px] h-[1472px] flex flex-col items-start justify-start gap-[10px]" onSubmit={handleSubmit}>
              <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
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
              <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
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
              <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
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
              <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
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
                  <MenuItem value="Pragma Paris (July 20">
                    Pragma Paris (July 20
                  </MenuItem>
                  <MenuItem value="2023)">2023)</MenuItem>
                  <MenuItem value="ETHGlobal Paris (July 21-23">
                    ETHGlobal Paris (July 21-23
                  </MenuItem>
                  <MenuItem value="2023)">2023)</MenuItem>
                  <MenuItem value="ETHGlobal New York (Sep 22-24">
                    ETHGlobal New York (Sep 22-24
                  </MenuItem>
                  <MenuItem value="2023)">2023)</MenuItem>
                  <MenuItem value="ETHGlobal Istanbul (Nov 17-19">
                    ETHGlobal Istanbul (Nov 17-19
                  </MenuItem>
                  <MenuItem value="2023)">2023)</MenuItem>
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
              <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
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
                          <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-input-text text-grey-grey-700 text-center flex items-center justify-center">
                            F
                          </div>
                        </div>
                        <div className="flex flex-col py-[3px] px-1.5 items-start justify-start">
                          <div className="relative text-smi tracking-[0.16px] leading-[18px] font-components-input-text text-text-primary text-left">
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
                          <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-input-text text-grey-grey-700 text-center flex items-center justify-center">
                            F
                          </div>
                        </div>
                        <div className="flex flex-col py-[3px] px-1.5 items-start justify-start">
                          <div className="relative text-smi tracking-[0.16px] leading-[18px] font-components-input-text text-text-primary text-left">
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
                  <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] font-components-input-text text-text-secondary text-left">
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
              <button className="btn [background:linear-gradient(73.12deg,_#641476,_#9d4561)] flex flex-col py-0 px-[59px] box-border items-end justify-center">
                  Apply
              </button>
            </form>
          </div>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default FormWrapper;
