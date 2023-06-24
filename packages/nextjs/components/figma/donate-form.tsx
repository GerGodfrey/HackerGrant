import type { NextPage } from "next";
import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";

const DonateForm: NextPage = () => {
  const router = useRouter();

  const onProfileButtonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-[1279px] h-[212px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[100px] text-center text-16xl text-studio-darkmode-allwhite-ffffff font-mono">
      <TextField
        className="[border:none] bg-[transparent] flex-1"
        color="primary"
        variant="outlined"
        type="text"
        label="How much do you want to donate?"
        size="medium"
        margin="none"
      />
      <div
        className="rounded-31xl [background:linear-gradient(73.12deg,_#641476,_#9d4561)] w-[294px] h-[117px] flex flex-col py-0 px-[59px] box-border items-end justify-center cursor-pointer"
        onClick={onProfileButtonContainerClick}
      >
        <div className="relative leading-[40px] font-medium font-mono flex items-center justify-center w-[191px] h-11 shrink-0">
          Donate
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
