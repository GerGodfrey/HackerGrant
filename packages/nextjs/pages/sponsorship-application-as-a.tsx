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
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full overflow-hidden flex flex-col items-start justify-start text-left text-5xl text-gray-400 font-mono">
      <HeaderTop
        yourProfile="Your profile"
        connectWalletButtonCursor="pointer"
        yourProfileCursor="unset"
        onFickleflightLogoClick={onFickleflightLogoClick}
        onConnectWalletButtonClick={onConnectWalletButtonClick}
      />
      <SponsorshipFormContainer sponsorshipText="Sponsorship application" />
      <div className="self-stretch h-[2246px] flex flex-col py-[50px] px-20 box-border items-start justify-start lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
        <div className="relative w-[1279px] h-[1919px]">
          <div className="absolute top-[33px] left-[0.5px] leading-[40px] inline-block w-[1279px] h-[1824px]">
            <p className="m-0 font-medium">
              Hello! Im Sarah, a passionate
              coder from San Francisco. I have been coding for over six years
              and specialize in front-end development. I love creating intuitive
              and visually appealing user interfaces that enhance the overall
              user experience.
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0">
              <b>{`Have you previously participated in hackathons or coding competitions? If yes, please provide details. `}</b>
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0 font-medium">
              Yes, I have participated in several hackathons and coding
              competitions. One notable event was the Tech Challenge Hackathon
              2022, where my team developed a mobile app for optimizing public
              transportation routes, which won the Best User Experience award.
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0">
              <b>
                What is the specific hackathon or competition you wish to
                participate in?
              </b>
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0 font-medium">
              I am eager to participate in the upcoming TechExpo Hackathon 2023,
              where I can collaborate with talented individuals and leverage my
              skills to create innovative solutions.
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
                How will participating in this hackathon or competition
                contribute to your personal and professional growth?
              </b>
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0 font-medium">
              Participating in the TechExpo Hackathon 2023 will provide an
              invaluable opportunity for me to further sharpen my coding skills,
              enhance my teamwork abilities, and learn from industry experts. It
              will also allow me to network with like-minded individuals and
              gain exposure to potential employers and mentors in the tech
              industry.
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
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0">
              <b>{`Do you have any additional information or anything else you would like us to know about your application? `}</b>
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0 font-medium">{`I am committed to collaborating effectively within a team and thrive in fast-paced, deadline-driven environments. I believe my strong problem-solving skills and attention to detail make me a valuable asset to any hackathon team. `}</p>
          </div>
        </div>
        <DonateForm />
      </div>
      <FooterSection />
    </div>
  );
};

export default SponsorshipApplicationAsA;
