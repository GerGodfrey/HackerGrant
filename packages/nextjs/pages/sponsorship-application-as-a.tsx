import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderTop from "../components/figma/header-top";
import SponsorshipFormContainer from "../components/figma/sponsorship-form-container";
import DonateForm from "../components/figma/donate-form";
import FooterSection from "../components/figma/footer-section";

const SponsorshipApplicationAsA: NextPage = () => {
  const router = useRouter();

  const onFickleflightLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onConnectWalletButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full overflow-hidden flex flex-col items-start justify-start text-left text-5xl text-base-content font-mono">
      <SponsorshipFormContainer sponsorshipText="Sponsorship application" />
      <div className="self-stretch h-[2246px] flex flex-col py-[50px] px-20 box-border items-start justify-start lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border text-base-300 font-mono">
        <div className="relative w-[1279px] h-[1919px]">
          <div className="absolute top-[33px] left-[0.5px] leading-[40px] inline-block w-[1279px] h-[1824px] font-mono">
            <p className="m-0 font-medium">
              Hello! I'm Sarah, a passionate coder from San Francisco. I have been coding for over six years
              and specialize in front-end development. I love creating intuitive
              and visually appealing user interfaces that enhance the overall
              user experience.
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0">
              <b>{`Have you previously participated in hackathons or coding competitions? If yes, please provide details. `}</b>
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0">
              <b>
                How much funding support are you seeking to cover your travel
                and participation expenses?
              </b>
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0 font-medium">
              I am seeking funding support of $500 to cover my travel expenses,
              accommodation, and the participation fee for the TechExpo
              Hackathon 2023.
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0">
              <b>
                Can you share any relevant projects or coding accomplishments
                you have completed in the past?
              </b>
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0 font-medium">
              I have successfully completed a web-based project for an
              e-commerce platform, where I implemented responsive design
              techniques and integrated payment gateways to provide a seamless
              shopping experience for users.
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0">
              <b>
                What are your goals and aspirations in the field of coding and
                technology?
              </b>
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0 font-medium">
              My ultimate goal is to become a lead front-end developer and make
              a significant impact by creating user-centric and accessible web
              applications. I aspire to work on projects that positively
              influence peoples lives and contribute to the advancement of
              technology.
            </p>
          </div>
        </div>
        <DonateForm />
      </div>
      <FooterSection />
    </div>
  );
};

export default SponsorshipApplicationAsA;
