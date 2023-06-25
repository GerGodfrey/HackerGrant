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



  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start text-left text-5xl text-base-content font-mono">

      <SponsorshipFormContainer sponsorshipText="Apply for sponsorship" />
      <div className="self-stretch h-[1989px] flex flex-row py-[50px] px-20 box-border items-start justify-center lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
        <div className="relative w-[1279px] h-[1916px]">
          <div className="absolute top-[0px] left-[0.5px] leading-[40px] font-medium inline-block w-[1279px] h-[523px] text-base-300">
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
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Apply;
