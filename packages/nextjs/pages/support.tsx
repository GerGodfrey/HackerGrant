import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderTop from "../components/figma/header-top";
import SponsorshipFormContainer from "../components/figma/sponsorship-form-container";
import TechExpoContainer from "../components/figma/tech-expo-container";
import FooterSection from "../components/figma/footer-section";

const Support: NextPage = () => {
  const router = useRouter();

  const onFickleflightLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onYourProfileTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMoreDetailsButtonClick = useCallback(() => {
    router.push("/sponsorship-application-as-a");
  }, [router]);

  return (
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full overflow-hidden flex flex-col items-start justify-start text-left text-5xl text-gray-400 font-mono">
      <HeaderTop
        yourProfile="Your profile"
        onFickleflightLogoClick={onFickleflightLogoClick}
        onYourProfileTextClick={onYourProfileTextClick}
      />
      <SponsorshipFormContainer sponsorshipText="Support participants" />
      <div className="self-stretch h-[1692px] flex flex-col py-[50px] px-20 box-border items-center justify-start gap-[50px] lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
        <div className="relative w-[1279px] h-[440px] overflow-hidden shrink-0">
          <div className="absolute top-[0px] left-[0.5px] leading-[40px] font-medium inline-block w-[1279px] h-[407px]">
            <p className="m-0">
              Your donation through HackerGrant can be a transformative act of
              support and encouragement.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              By contributing, you are providing hackers them with the financial
              backing they need to pursue their dreams and showcase their coding
              skills. Your generosity not only helps cover their expenses but
              also sends a powerful message of belief in their abilities.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Your support can empower these talented individuals to push their
              boundaries, unlock their potential, and make meaningful
              contributions to the tech industry. Join us in championing these
              aspiring hackers and be a catalyst for their success by making a
              donation through HackerGrant.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Thank you for being a driving force behind innovation and the
              future of coding.
            </p>
          </div>
        </div>
        <div className="w-[1288px] h-[1152px] flex flex-row items-start justify-start">
          <TechExpoContainer
            locationText="Front-end Developer from San Francisco, USA"
            developerName="Sarah Johnson"
            eventName="TechExpo Hackathon 2023"
            onMoreDetailsButtonClick={onMoreDetailsButtonClick}
          />
          <TechExpoContainer
            locationText="Full-stack Developer from London, UK"
            developerName="Michael Chen"
            eventName="CodeFest Competition 2023"
          />
          <TechExpoContainer
            locationText="UX/UI Designer from Barcelona, Spain"
            developerName="Ana Rodriguez"
            eventName="HackXtreme Hackathon 2023"
          />
          <TechExpoContainer
            locationText="Data Scientist from Sydney, Australia"
            developerName="David Nguyen"
            eventName="StartUpHacks Challenge 2023"
          />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Support;
