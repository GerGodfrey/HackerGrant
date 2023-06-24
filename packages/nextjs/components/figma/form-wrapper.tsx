import type { NextPage } from "next";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import Link from "next/link";

const FormWrapper: NextPage = () => {
  return (
    <div className="absolute top-[365px] left-[-0.5px] w-[1279px] h-[1551px] overflow-hidden flex flex-row py-[79px] px-0 box-border items-start justify-start">
      <form className="w-[714px] h-[1472px] flex flex-col items-start justify-start gap-[10px]">
        <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
          Tell us about yourself! This information is for us to get to know you
          better, and to calculate an accurate application score based on your
          profile. We won't store it or use it for other purposes.
        </b>
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="Preferred name"
          placeholder="Share your response here"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="Country of residence"
          placeholder="Share your response here"
          size="medium"
          margin="none"
        />
        <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
          Social media
        </b>
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="Telegram username (optional)"
          placeholder="Share your response here"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="Twitter username (optional)"
          placeholder="Share your response here"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="Discord username (optional)"
          placeholder="Share your response here"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="Any other social platform you want to share with us!"
          placeholder="Share your response here"
          size="medium"
          margin="none"
        />
        <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
          Track record information
        </b>
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="GitHub username (mandatory)"
          placeholder="Enter your GitHub username"
          size="medium"
          margin="none"
        />
        <FormControl className="self-stretch" variant="standard">
          <InputLabel color="primary">
            In general, what programming level would you identify with?
          </InputLabel>
          <Select
            color="primary"
            size="medium"
            label="In general, what programming level would you identify with?"
          >
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="What languages have you worked with?"
          placeholder="Share your response here"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="What web3 topics interest you the most?"
          placeholder="Share your response here"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="Have you participated in any previous hackathons or coding competitions? Which ones?"
          placeholder="Share your response here"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="What would be your highlight from these competitions and events?"
          placeholder="Share your response here"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="Use this space to share any project portfolio you want us to see!"
          placeholder="Share your portfolio link here"
          size="medium"
          margin="none"
        />
        <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-input-text text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
          Application details
        </b>
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
          label="Introduce the amount requested for your participation in this event (in MATIC)"
          placeholder="Remember: your response has to be in MATIC!"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="How would you use these resources?"
          placeholder="Share your response here"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch"
          color="primary"
          variant="outlined"
          type="text"
          label="What benefits would this participation bring to your professional career?"
          placeholder="Share your response here"
          size="medium"
          margin="none"
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
      </form>
    </div>
  );
};

export default FormWrapper;
