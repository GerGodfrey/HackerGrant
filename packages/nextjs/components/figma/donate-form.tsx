import type { NextPage } from "next";
import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import React, { useState } from 'react';
import { DonationButton } from '../DonationButton';
import { DonationAmount } from '../DonationAmount';

// const DonateForm: NextPage = () => {
//   const router = useRouter();

//   const [formValues, setFormValues] = useState({amount: ""});
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormValues((prevValuxes) => ({
//       ...prevValues,
//       [name]: value
//     }));
//   };

//   const valueDonated = TextField.arguments
//   const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
//     contractName: "onlyDonate",
//     functionName: "donate",
//     // For payable functions, expressed in ETH
//     value: formValues.amount,
//     // The number of block confirmations to wait for before considering transaction to be confirmed (default : 1).
//     blockConfirmations: 1,
//     // The callback function to execute when the transaction is confirmed.
//     onBlockConfirmation: (txnReceipt) => {
//       console.log("Transaction blockHash", txnReceipt.blockHash);
//     },
//   });

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("VALORES: ",formValues); // Aquí puedes hacer lo que necesites con los valores del formulario
//     console.log(formValues.amount)
//   };

  // const onProfileButtonContainerClick = useCallback(() => {
  //   router.push("/");
  // }, [router]);

export const DonateForm: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState(0);

  // const handleDonate = () => {
  //     // Add your donation logic here
  //     useScaffoldContractWrite({
  //       contractName: "onlyDonate",
  //       functionName: "donate",
  //       // For payable functions, expressed in ETH
  //       value: String(donationAmount),
  //       // The number of block confirmations to wait for before considering transaction to be confirmed (default : 1).
  //       blockConfirmations: 1,
  //       // The callback function to execute when the transaction is confirmed.
  //       onBlockConfirmation: (txnReceipt) => {
  //         console.log("Transaction blockHash", txnReceipt.blockHash);
  //       },
  //     });
  //   console.log(`Donating ${donationAmount} MAT`);
  // };

  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "onlyDonate",
    functionName: "donate",
    // For payable functions, expressed in ETH
    value: String(donationAmount),
        // The number of block confirmations to wait for before considering transaction to be confirmed (default : 1).
    blockConfirmations: 1,
        // The callback function to execute when the transaction is confirmed.
    onBlockConfirmation: (txnReceipt) => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  return (
    <div>
        <DonationAmount setDonationAmount={setDonationAmount} />
        <DonationButton donationAmount={donationAmount} onClick={writeAsync} />
    </div>
  );
    // <form className="w-[714px] h-[1472px] flex flex-col items-start justify-start gap-[10px]"onSubmit={handleSubmit}>
    //   <div className="w-[1279px] h-[212px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[100px] text-center text-16xl text-studio-darkmode-allwhite-ffffff font-mono">
    //     <TextField
    //       className="[border:none] bg-[transparent] flex-1"
    //       color="primary"
    //       variant="outlined"
    //       type="text"
    //       label="How much do you want to donate?"
    //       size="medium"
    //       margin="none"
    //       value={formValues.amount}
    //       onChange={handleChange}
    //     />
    //     <div
    //       className="rounded-31xl [background:linear-gradient(73.12deg,_#641476,_#9d4561)] w-[294px] h-[117px] flex flex-col py-0 px-[59px] box-border items-end justify-center cursor-pointer"
    //       onClick={writeAsync}
    //     >
    //       <div className="relative leading-[40px] font-medium font-mono flex items-center justify-center w-[191px] h-11 shrink-0">
    //         Donate
    //       </div>
    //     </div>
    //   </div>
    // </form>
    // );
};

export default DonateForm;
