import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type HeaderTopType = {
  yourProfile?: string;

  /** Style props */
  navigationRightCursor?: Property.Cursor;
  connectWalletButtonCursor?: Property.Cursor;
  yourProfileCursor?: Property.Cursor;

  /** Action props */
  onFickleflightLogoClick?: () => void;
  onNavigationRightContainerClick?: () => void;
  onConnectWalletButtonClick?: () => void;
  onYourProfileTextClick?: () => void;
};

const HeaderTop: NextPage<HeaderTopType> = ({
  yourProfile,
  navigationRightCursor,
  connectWalletButtonCursor,
  yourProfileCursor,
  onFickleflightLogoClick,
  onNavigationRightContainerClick,
  onConnectWalletButtonClick,
  onYourProfileTextClick,
}) => {
  const navigationRightStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: navigationRightCursor,
    };
  }, [navigationRightCursor]);

  const connectWalletButtonStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: connectWalletButtonCursor,
    };
  }, [connectWalletButtonCursor]);

  const yourProfileStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: yourProfileCursor,
    };
  }, [yourProfileCursor]);

  return (
    <header className="self-stretch bg-studio-darkmode-allwhite-ffffff h-[93px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-xl text-studio-darkmode-allwhite-ffffff font-mono lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="w-[1360px] flex flex-row items-center justify-between">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[207px] h-[33px] overflow-hidden shrink-0"
          onClick={onFickleflightLogoClick}
        >
          <div className="absolute top-[1.5px] left-[2px] text-11xl font-extrabold font-mono text-darkslateblue text-left inline-block w-[205px] h-8">
            HackerGrant
          </div>
        </button>
        <div
          className="w-[158px] h-[26px] flex flex-row items-center justify-end sm:flex"
          style={navigationRightStyle}
          onClick={onNavigationRightContainerClick}
        >
          <div
            className="rounded-3xs [background:linear-gradient(196.63deg,_rgba(72,_17,_81,_0.94),_#481151)] w-[174px] h-[43px] overflow-hidden shrink-0 flex flex-row py-0 pr-0 pl-1.5 box-border items-center justify-center md:hidden"
            style={connectWalletButtonStyle}
            onClick={onConnectWalletButtonClick}
          >
            <b
              className="relative cursor-pointer"
              onClick={onYourProfileTextClick}
              style={yourProfileStyle}
            >
              {yourProfile}
            </b>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
