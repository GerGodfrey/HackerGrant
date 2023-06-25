
import React from 'react';

type DonationAmountProps = {
  setDonationAmount: React.Dispatch<React.SetStateAction<number>>;
};

export const DonationAmount: React.FC<DonationAmountProps> = ({ setDonationAmount }) => {
  return (
    <input
      type="number"
      min="0"
      onChange={(e) => setDonationAmount(parseInt(e.target.value))}
      placeholder="Enter donation amount"
    />
  );
};
