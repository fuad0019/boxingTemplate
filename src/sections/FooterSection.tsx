import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FooterCard from '../components/FooterCard';
import Logo from '../assets/images/logo.png';
import { Grid } from '@mui/material';

function Copyright() {
    return (
        <Typography variant="body2" color="white">
            {'Copyright © '}
            <Link color="inherit" href="https://boxingzi.com/">
            boxingzi
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function FooterSection() {

    const footerInfoList = [
        {
            title: 'KONTAKT INFO',
            content: (
                <div style={{ color: 'white' }} >
                    <Typography>
                    Sankt Anna Gade
                    </Typography>
                    <Typography>
                        Tlf: 55 55 55 55
                    </Typography>
                    <Typography>
                        8000 Århus
                    </Typography>
                    <Typography>
                        Denmark
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
                backgroundColor: '#091117',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center'

            }}
        >
            <Grid container direction={'row'} gap={2} justifyContent={'center'}    alignItems={'center'}>
                {footerInfoList.map((footerInfo) => (
                    <Grid item md={2} xs={7}  style={{ textAlign: 'center',  display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography color={'white'} variant="h5"  component="div" fontFamily={'Libre Franklin , sans-serif'}>
                            {footerInfo.title}
                        </Typography>
                        <FooterCard footerInfo={footerInfo} ></FooterCard>
                    </Grid>

                ))}
                <Grid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <img src={Logo} alt="" height={'auto'} width={'20%'} />
                    <Copyright />
                </Grid>
            </Grid>
        </Box>
    );
}