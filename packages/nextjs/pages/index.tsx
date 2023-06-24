import type { NextPage } from "next";
//import Link from "next/link";
//import dynamic from "next/dynamic";
//import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import ParticipantSupportContainer from "~~/components/figma/participant-support-container";
import FooterSection from "~~/components/figma/footer-section";
import Homepage from "./homepage";

const Home: NextPage = () => {


  return (
    <>
      <MetaHeader />
      <Homepage />
      <ParticipantSupportContainer />
      <FooterSection productIds="/social-icons.svg" />
    </>
  );
};

export default Home;
