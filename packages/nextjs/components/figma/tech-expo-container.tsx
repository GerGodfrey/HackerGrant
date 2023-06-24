import type { NextPage } from "next";

type TechExpoContainerType = {
  locationText?: string;
  developerName?: string;
  eventName?: string;

  /** Action props */
  onMoreDetailsButtonClick?: () => void;
};

const TechExpoContainer: NextPage<TechExpoContainerType> = ({
  locationText,
  developerName,
  eventName,
  onMoreDetailsButtonClick,
}) => {
  return (
    <div className="w-[623px] h-[571px] overflow-hidden shrink-0 flex flex-col py-[31px] px-[34px] box-border items-center justify-center text-left text-base text-darkslategray-300 font-components-input-text">
      <div className="self-stretch h-[421px] flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full">
        <div className="self-stretch flex-1 rounded-3xs bg-studio-darkmode-allwhite-ffffff box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
          <div className="self-stretch relative rounded-3xs [background:linear-gradient(#ae40c9,_#ae40c9),_#c4c4c4] h-[200px]" />
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                {locationText}
              </div>
              <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize sm:text-xl">
                {developerName}
              </b>
              <div className="self-stretch relative text-lg tracking-[0.04em]">
                {eventName}
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]"
            onClick={onMoreDetailsButtonClick}
          >
            <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-input-text text-cornflowerblue-100 text-left">
              More details
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechExpoContainer;
