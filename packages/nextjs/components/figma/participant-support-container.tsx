import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

const ParticipantSupportContainer: NextPage = () => {
  const router = useRouter();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    // Update windowSize on initial component mount
    handleResize();

    // Add event listener to update windowSize on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/support");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/apply");
  }, [router]);

  return (
    <div
      className="self-stretch overflow-hidden shrink-0 flex flex-col py-[0px] px-[20px] box-border items-center justify-center w-full max-w-[1280px] text-center text-studio-darkmode-allwhite-ffffff font-mono"
      style={{
        fontSize: windowSize.width < 768 ? "12px" : "16px",
        height: `${windowSize.height}px`,
      }}
    >
      <div
        className="self-stretch overflow-hidden shrink-0 flex flex-row py-[0px] px-[34px] box-border items-center justify-center gap-[68px]"
        style={{
          height: windowSize.width < 768 ? "50%" : "30%",
        }}
      >
        <div
          className="flex-1 flex flex-col items-center justify-center cursor-pointer"
          onClick={onFrameContainer3Click}
          style={{
            height: windowSize.width < 768 ? "50%" : "auto",
          }}
        >
          <div
            className="self-stretch rounded-31xl h-[117px] flex flex-col py-[0px] px-[59px] box-border items-end justify-center"
            style={{
              background: "linear-gradient(73.12deg, #641476, #9d4561)",
            }}
          >
            <div
              className="self-stretch relative leading-[40px] font-light font-mono"
              style={{
                fontSize: windowSize.width < 768 ? "14px" : "16px",
              }}
            >
              Apply for sponsorship
            </div>
          </div>
        </div>

        <div
          className="flex-1 flex flex-col items-center justify-center cursor-pointer"
          onClick={onFrameContainerClick}
          style={{
            height: windowSize.width < 768 ? "50%" : "auto",
          }}
        >
          <div
            className="self-stretch rounded-31xl h-[117px] flex flex-col py-[0px] px-[59px] box-border items-end justify-center"
            style={{
              background: "linear-gradient(73.12deg, #641476, #9d4561)",
            }}
          >
            <div
              className="self-stretch relative leading-[40px] font-light font-mono"
              style={{
                fontSize: windowSize.width < 768 ? "14px" : "16px",
              }}
            >
              Support participants
            </div>
          </div>
        </div>
      </div>

      <div
        className="self-stretch shrink-0 flex flex-row px-[34px] box-border items-center justify-center gap-[68px]"
        style={{
          height: windowSize.width < 768 ? "50%" : "auto",
        }}
      >
        <div className="flex-1 flex flex-col items-start justify-start text-left text-2xl text-midnightblue">
          <div
            className="self-stretch relative leading-[40px] font-light flex items-center h-[120px] shrink-0 text-base-300 font-mono"
            style={{
              fontSize: windowSize.width < 768 ? "18px" : "24px",
            }}
          >
            Showcase your coding and unlock funding for your next competitive challenge.
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start justify-start text-left text-2xl text-midnightblue">
          <div
            className="self-stretch relative leading-[40px] font-light flex items-center h-[120px] shrink-0 text-base-300 font-mono"
            style={{
              fontSize: windowSize.width < 768 ? "18px" : "24px",
            }}
          >
            Fuel the dreams of aspiring hackers and empower their journey to success.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantSupportContainer;