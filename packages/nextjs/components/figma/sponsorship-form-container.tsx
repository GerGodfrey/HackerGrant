import type { NextPage } from "next";

type SponsorshipFormContainerType = {
  sponsorshipText?: string;
};

const SponsorshipFormContainer: NextPage<SponsorshipFormContainerType> = ({
  sponsorshipText,
}) => {
  return (
    <div className="self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] h-[315px] flex flex-col items-start justify-start text-left text-56xl text-studio-darkmode-allwhite-ffffff font-inconsolata">
      <div className="self-stretch relative h-[315px] sm:h-[480px]">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(76.59deg,_#4e1957,_#73118b_15.1%,_#852578_30.73%,_#fbc403)] h-[315px]" />
        <b className="absolute top-[137px] left-[115px] leading-[40px]">
          {sponsorshipText}
        </b>
      </div>
    </div>
  );
};

export default SponsorshipFormContainer;
