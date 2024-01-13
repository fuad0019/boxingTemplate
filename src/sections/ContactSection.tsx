import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FooterCard from '../components/FooterCard';
import Logo from '../assets/images/logo.png';
import { Divider, Grid } from '@mui/material';
import MapSection from './MapSection';
import MapComponent from '../components/Map';
import Form from '../components/Form';



// TODO remove, this demo shouldn't need to reset the theme.

export default function ContactSection() {


    const handlePhoneCall = () => {
        const phoneNumber = '82-45-31-50'; // Replace with your phone number
        window.open(`tel:${phoneNumber}`);
    };

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
            sx={{
                px: 2,
                mt: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                flexDirection: 'column',
                gap: {xs: 2, md: 5}


            }}
        >
            <Typography padding={2} fontWeight={'bold'} variant={'h4'} color='white'>Vi vil rigtig gerne høre fra dig - Kontakt os!</Typography>


            <Grid container direction={'row'} justifyContent={'center'} xs={12} gap={2}>

                <Grid container padding={2} md={'5'} xs={12} textAlign={'left'} direction={'column'} gap={2} >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                        <Typography marginTop={'10px'} marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Har du spørgsmål om dét at være medlem i klubben, så kan du stille os spørgsmål. </Typography>

                        <Typography marginTop={'10px'} marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Her kan du finde svar på de fleste af de spørgsmål, som rejser sig i forbindelse med at være kæmper. Du er naturligvis også velkommen til at ringe eller skrive til os. Vi sidder klar hver eneste dag.</Typography>

                        <Typography marginTop={'10px'} marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Hvis du er medlem – eller overvejer at blive det – hører vi naturligvis også meget gerne fra dig, så vi sammen kan finde det rette trænings hold til dig.</Typography>

                    </div>

                    <Divider color={'white'}></Divider>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <Typography marginTop={'10px'} marginLeft={'2px'} variant="h5" fontWeight={'100'} color={'white'}>Telefontid </Typography>
                        <div>
                            <Typography marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Mandag – fredag: 6.00 – 24.00</Typography>
                            <Typography marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Lørdag: 6.00 – 24.00</Typography>

                            <Typography marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Søndag og helligdage: 6.00 – 24.00</Typography>
                        </div>



                    </div>





                </Grid>

                <Grid container padding={2} md={'5'} xs={12} gap={5} sx={{ backgroundColor: '#1B202A' }}>
                    <div>
                        <Typography marginTop={'10px'} marginLeft={'2px'} variant="h4" fontWeight={'100'} color={'white'}>Telefonisk henvendelse </Typography>
                        <Typography marginTop={'10px'} marginLeft={'2px'} variant="h3" fontWeight={'100'} color={'#143966'} onClick={handlePhoneCall}
                            style={{ cursor: 'pointer' }}>82 45 31 50 </Typography>

                    </div>

                    <Divider sx={{ width: '90%', backgroundColor: '#143966' /* Change the color to your desired color */ }}></Divider>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
                        <Typography marginTop={'10px'} marginLeft={'2px'} variant="h4" fontWeight={'100'} color={'white'}>Send os en besked </Typography>
                        <Form></Form>

                    </div>

                </Grid>


            </Grid>
        </Box >
    );
}