import type { NextPage } from "next";
import { useCallback } from "react";
import { Grid, styled, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import React, { useState } from 'react';
import { DonationButton } from '../DonationButton';
import { DonationAmount } from '../DonationAmount';

export const ElseForm: React.FC = () => {
    const [donationAmount, setDonationAmount] = useState(0);

    const { data: totalRaised } = useScaffoldContractRead({
        contractName: "onlyDonate",
        functionName: "total_raised",
    });

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Item>totalRaised</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </div>

    );
};

export default ElseForm;