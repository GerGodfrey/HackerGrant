import type { NextPage } from "next";
//import Link from "next/link";
//import dynamic from "next/dynamic";
//import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import ParticipantSupportContainer from "~~/components/figma/participant-support-container";
import FooterSection from "~~/components/figma/footer-section";

const Home: NextPage = () => {


  return (
    <>
      <MetaHeader />
      <div className="relative bg-studio-darkmode-allwhite-ffffff w-full overflow-hidden flex flex-col items-center justify-start text-center text-[100px] text-studio-darkmode-allwhite-ffffff font-inconsolata hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-300">
        <div className="self-stretch [background:linear-gradient(76.59deg,_#4e1957,_#73118b_15.1%,_#852578_30.73%,_#fbc403)] flex flex-col items-center justify-center">
          <div className="self-stretch h-[630px] flex flex-col py-0 px-[140px] box-border items-center justify-center w-full md:pl-[30px] md:pr-[30px] md:box-border">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[67px] font-semibold sm:text-23xl sm:leading-[48px]">
                <p className="m-0">Seize opportunity</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Defy limits</p>
              </div>
            </div>
          </div>
        </div>
        <ParticipantSupportContainer />
        <FooterSection productIds="/social-icons.svg" />
      </div>
    </>
  );
};

export default Home;
