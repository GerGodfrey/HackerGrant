import React from 'react';

type DonationButtonProps = {
  donationAmount: number;
  onClick: () => void;
};

export const DonationButton: React.FC<DonationButtonProps> = ({ donationAmount, onClick }) => {
  return (
    <>
        <button
        disabled={!donationAmount}
        onClick={onClick}
        >
        Donate {donationAmount} ETH
        </button>
    </>
  );
};


    