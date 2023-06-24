import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderTop from "../components/figma/header-top";
import SponsorshipFormContainer from "../components/figma/sponsorship-form-container";
import FooterSection from "../components/figma/footer-section";

const PendingResult: NextPage = () => {
  const router = useRouter();

  const onFickleflightLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNavigationRightContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full overflow-hidden flex flex-col items-start justify-start text-left text-5xl text-gray-400 font-inconsolata">
      <HeaderTop
        yourProfile="Your profile"
        navigationRightCursor="pointer"
        yourProfileCursor="unset"
        onFickleflightLogoClick={onFickleflightLogoClick}
        onNavigationRightContainerClick={onNavigationRightContainerClick}
      />
      <SponsorshipFormContainer sponsorshipText="Apply for sponsorship" />
      <div className="self-stretch h-[1026px] flex flex-row py-[50px] px-20 box-border items-start justify-center lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
        <div className="relative w-[1279px] h-[976px]">
          <div className="absolute top-[0px] left-[0.5px] leading-[40px] font-medium inline-block w-[1279px] h-[523px]">
            <p className="m-0">
              Calling all passionate coders and aspiring competitors,
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              We understand the financial challenges that can stop you from
              showcasing your skills on a larger stage. Thats why HackerGrant
              is dedicated to helping you bridge the gap, by connecting you with
              a community of supporters who believe in your talent and
              potential.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Apply today, demonstrate your talent, and let us rally behind you
              to help fund the amount you need to go out there and compete.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`Unleash your coding superpowers, seize the opportunity, and let HackerGrant help you fulfill your dreams. `}</p>
          </div>
          <div className="absolute top-[495px] left-[0.5px] text-[40px] leading-[60px] inline-block w-[710px] h-[382px]">
            <p className="[margin-block-start:0] [margin-block-end:20px]">
              <b>Thanks for applying!</b>
            </p>
            <p className="m-0 font-medium">
              We will evaluate your response and notify you of our decision as
              soon as possible.
            </p>
          </div>
          <img
            className="absolute h-[44.77%] w-[34.09%] top-[45.08%] right-[-0.04%] bottom-[10.14%] left-[65.95%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/noun-example.svg"
          />
          <div
            className="absolute top-[761px] left-[355.5px] w-80 h-[151px] overflow-hidden flex flex-col items-center justify-center cursor-pointer text-center text-16xl text-studio-darkmode-allwhite-ffffff"
            onClick={onFrameContainerClick}
          >
            <div className="rounded-31xl [background:linear-gradient(73.12deg,_#641476,_#9d4561)] w-[294px] h-[117px] flex flex-col py-0 px-[59px] box-border items-end justify-center">
              <div className="relative leading-[40px] font-medium flex items-center justify-center w-[191px] h-11 shrink-0">
                Back
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection productIds="130x30x3985546603" />
    </div>
  );
};

export default PendingResult;
