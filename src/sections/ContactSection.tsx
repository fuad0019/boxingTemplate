import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FooterCard from '../components/FooterCard';
import Logo from '../assets/images/logo.png';
import { Grid } from '@mui/material';



// TODO remove, this demo shouldn't need to reset the theme.

export default function ContactSection() {

    const footerInfoList = [
        {
            title: 'KONTAKT INFO',
            content: (
                <div style={{ color: 'white' }} >
                    <Typography>
                        Ramsasvej 230
                    </Typography>
                    <Typography>
                        Tlf: 55 55 55 55
                    </Typography>
                    <Typography>
                        6000 Århus
                    </Typography>
                    <Typography>
                        Denmark
                    </Typography>
                    <Typography>
                        CVR: 1455524343
                    </Typography>
                </div>

            )
        },
        {
            title: 'ÅBNINGSTIDER',
            content: (
                <div style={{ color: 'white' }} >
                    <Typography variant='body1'>
                        <b>Mandag - Torsdag:</b> 16:00 - 20:00
                    </Typography>
                    <Typography>
                        <b>Fredag:</b> 16:00 - 20:00
                    </Typography>
                    <Typography>
                        <b>Lørdag:</b> 10:00 - 11:00
                    </Typography>
                    <Typography>
                        Denmark
                    </Typography>
                    <Typography>
                        CVR: 1455524343
                    </Typography>
                </div>
            )
        }
    ]

    return (
 

            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
               
                }}
            >
                <Grid container direction={'row'}  gap={'20'} jus sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '20px', }}>
                    {footerInfoList.map((footerInfo) => (
                        <Grid item alignItems={'center'} style={{ textAlign: 'center', padding: '20px',display: 'flex', flexDirection: 'column  ' ,justifyContent: 'center', alignItems: 'center',  }}>
                            <Typography color={'white'} variant="h4" component="div" fontFamily={'Libre Franklin , sans-serif'} >
                                {footerInfo.title}
                            </Typography>
                            <FooterCard footerInfo={footerInfo} ></FooterCard>


                        </Grid>
                    ))}
                    

                </Grid>
        </Box>
    );
}