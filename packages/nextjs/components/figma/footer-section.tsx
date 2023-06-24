import type { NextPage } from "next";

type FooterSectionType = {
  productIds?: string;
};

const FooterSection: NextPage<FooterSectionType> = ({ productIds }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start">
      <footer className="self-stretch [background:linear-gradient(91.74deg,_#73118b,_#73118b)] flex flex-row py-[33px] px-[84px] items-start justify-start gap-[44px] text-left text-lg text-studio-darkmode-allwhite-ffffff font-inter lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[207px] h-[33px] overflow-hidden shrink-0">
            <div className="absolute top-[1px] left-[0px] text-11xl font-extrabold font-mono text-studio-darkmode-allwhite-ffffff text-left inline-block w-[205px] h-8">
              HackerGrant
            </div>
          </button>
          <div className="self-stretch relative leading-[27px]">
            <p className="m-0">
              Support aspiring hackers by making donations towards their
              participation fees.
            </p>
            <p className="m-0">
              Apply for funding by showcasing your coding skills.
            </p>
            <p className="m-0 text-xl font-mono">
              <b>Seize opportunity. Defy limits. Welcome to HackerGrant.</b>
            </p>
          </div>
          <img
            className="relative w-[130px] h-[30px]"
            alt=""
            src={productIds}
          />
        </div>
        <img
          className="relative w-px h-[156.87px] md:hidden"
          alt=""
          src="/line-41.svg"
        />
        <div className="w-[405px] flex flex-row items-start justify-between text-base sm:flex-col">
          <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important] font-mono">
            <div className="absolute top-[47.76px] left-[0px] inline-block w-[135.67px]">
              About Us
            </div>
            <div className="absolute top-[0px] left-[0px] text-5xl leading-[27px] font-medium inline-block w-[174.72px]">
              Company
            </div>
            <div className="absolute top-[78.76px] left-[0px] inline-block w-[84.28px]">
              News
            </div>
            <div className="absolute top-[109.76px] left-[0px] inline-block w-[115.11px]">
              Careers
            </div>
            <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
              How we work
            </div>
          </div>
          <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important]">
            <div className="absolute top-[47.76px] left-[0px] inline-block w-[109.63px]">
              Account
            </div>
            <div className="absolute top-[0px] left-[0px] text-5xl leading-[27px] font-medium font-mono inline-block w-[131.56px]">
              Support
            </div>
            <div className="absolute top-[78.76px] left-[0px] inline-block w-[197.33px]">
              Support Center
            </div>
            <div className="absolute top-[109.76px] left-[0px] inline-block w-[52.99px]">
              FAQ
            </div>
            <div className="absolute top-[140.76px] left-[0px] inline-block w-[164.44px]">
              Accessibility
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
