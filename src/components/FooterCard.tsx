import * as React from 'react';
import { Box, Card, CardContent, Typography, CardMedia, useTheme, CardActions, Button } from '@mui/material';
import { Team } from '../sections/TeamSection';


interface FooterInfo {
    title: string,
    content: React.ReactNode

}

interface FooterCardProp {
    footerInfo: FooterInfo
}


export default function FooterCard({ footerInfo }: FooterCardProp) {




    return (

        <Card sx={{
            position: 'relative',  backgroundColor: 'rgb(28, 28, 28, 0)', display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
            }}>
                {footerInfo.content}


            </CardContent>


        </Card>

    );
}