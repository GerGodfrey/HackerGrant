import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ParticipantSupportContainer: NextPage = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/support");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/apply");
  }, [router]);

  return (
    <div className="self-stretch h-[442px] overflow-hidden shrink-0 flex flex-col py-0 px-20 box-border items-center justify-center w-full max-w-[1280px] text-center text-16xl text-studio-darkmode-allwhite-ffffff font-mono md:pl-[30px] md:pr-[30px] md:box-border">
      <div className="self-stretch h-[189px] overflow-hidden shrink-0 flex flex-row py-[0px] px-[34px] box-border items-center justify-center gap-[68px]">
              
        <div
          className="flex-1 h-[119px] overflow-hidden flex flex-col items-center justify-center cursor-pointer"
          onClick={onFrameContainer3Click}
        >
          <div className="self-stretch rounded-31xl [background:linear-gradient(73.12deg,_#641476,_#9d4561)] h-[117px] flex flex-col py-0 px-[59px] box-border items-end justify-center">
            <div className="self-stretch relative leading-[40px] font-light font-mono">
              Apply for sponsorship
            </div>
          </div>
        </div>

        <div
          className="flex-1 h-[119px] overflow-hidden flex flex-col items-center justify-center cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <div className="self-stretch rounded-31xl [background:linear-gradient(73.12deg,_#641476,_#9d4561)] h-[117px] flex flex-col py-0 px-[59px] box-border items-end justify-center">
            <div className="self-stretch relative leading-[40px] font-light font-mono">
              Support participants
            </div>
          </div>
        </div>
      </div>



      <div className="self-stretch h-[189px] overflow-hidden shrink-0 flex flex-row px-[34px] box-border items-center justify-center gap-[68px]">
        <div className="flex-1 h-[118px] overflow-hidden flex flex-col items-start justify-start text-left text-2xl text-midnightblue">
          <div className="self-stretch relative leading-[40px] font-light flex items-center h-[120px] shrink-0 text-base-300 font-mono">
            Showcase your coding and unlock funding for your next competitive challenge.
          </div>
        </div>

        <div className="flex-1 h-[118px] overflow-hidden flex flex-col items-start justify-start text-left text-2xl text-midnightblue">
          <div className="self-stretch relative leading-[40px] font-light flex items-center h-[120px] shrink-0 text-base-300 font-mono">
          Fuel the dreams of aspiring hackers and empower their journey to success.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantSupportContainer;
