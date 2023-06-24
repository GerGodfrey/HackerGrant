import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderTop from "../components/figma/header-top";
import SponsorshipFormContainer from "../components/figma/sponsorship-form-container";
import FormWrapper from "../components/figma/form-wrapper";
import FooterSection from "../components/figma/footer-section";

const Apply: NextPage = () => {
  const router = useRouter();

  const onFickleflightLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNavigationRightContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onApplyButtonContainer1Click = useCallback(() => {
    router.push("/pending-result");
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
      <div className="self-stretch h-[1989px] flex flex-row py-[50px] px-20 box-border items-start justify-center lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
        <div className="relative w-[1279px] h-[1916px]">
          <div className="absolute top-[0px] left-[0.5px] leading-[40px] font-medium inline-block w-[1279px] h-[523px]">
            <p className="m-0">
              Calling all passionate coders and aspiring competitors,
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              We understand the financial challenges that can stop you from
              showcasing your skills on a larger stage. That's why HackerGrant
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
          <FormWrapper />
          <img
            className="absolute top-[506px] left-[820.5px] w-[436px] h-[940px]"
            alt=""
            src="/nouns.svg"
          />
          <div className="absolute top-[1555px] left-[936.5px] w-80 h-[285px] text-center text-16xl text-studio-darkmode-allwhite-ffffff">
            <div
              className="absolute top-[153px] left-[0px] w-80 h-[151px] overflow-hidden flex flex-col items-center justify-center cursor-pointer"
              onClick={onApplyButtonContainer1Click}
            >
              <div className="rounded-31xl [background:linear-gradient(73.12deg,_#641476,_#9d4561)] w-[294px] h-[117px] flex flex-col py-0 px-[59px] box-border items-end justify-center">
                <div className="relative leading-[40px] font-medium flex items-center justify-center w-[191px] h-11 shrink-0">
                  Apply
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Apply;
