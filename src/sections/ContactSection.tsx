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
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import ContactElement from '../components/ContactElement';
import { useStyleContext } from '../contexts/StyleContext';


// TODO remove, this demo shouldn't need to reset the theme.

export default function ContactSection() {

    const { themer } = useStyleContext();

    const handlePhoneCall = () => {
        const phoneNumber = '004521516102'; // Replace with your phone number
        window.open(`tel:${phoneNumber}`);
    };

    const handleMail = () => {
        const mailUser = 'someone@example.com';
        window.open(`mailto:${mailUser}`);
    };

    const getAdress = () => {
        const address = "Sankt Annes Gade, Århus 8210";
        const urlAddress = encodeURIComponent(address); // Encode the address for URL
        return urlAddress
    };


    const mailUser = 'someone@example.com';

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
            sx={{
                px: 2,
                mt: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                flexDirection: 'column',
                gap: { xs: 2, md: 5 }


            }}
        >


            <div style={{display: 'flex', flexDirection: 'row',  justifyContent: 'center'}}>

                <Grid container direction={'row'} xs={10} >

                    <Grid container padding={2} md={6} xs={12} textAlign={'left'} direction={'column'} gap={5} sx={{ backgroundColor: '#1D1E23', borderTopLeftRadius: '15px', borderTopRightRadius: {md: 0, xs: '15px'}, borderBottomLeftRadius: {md: '15px', xs:0}}} >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                            <Typography marginTop={'10px'} marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Interested in learning more about our products or requesting a quote? </Typography>
                            <Typography marginTop={'10px'} marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Contact us today to explore how our premium frankincense and myrrh can enhance your offerings. At Majabe Essences, we're dedicated to providing you with exceptional quality and service.</Typography>
                            <Typography marginTop={'10px'} marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Reach out now to start a conversation about your wholesale needs!</Typography>

                        </div>

                        <Divider color={'white'}></Divider>


                        <div style={{ gap: '50px', display: 'flex', flexDirection: 'column', paddingBottom: 100 }}>
                            <div>
                                <Typography marginTop={'10px'} marginLeft={'2px'} variant="h4" fontWeight={'100'} color={'white'}>Direct Contact</Typography>
                            </div>
                            <div style={{ gap: 15, flexDirection: 'column', display: 'flex' }}  >
                            <ContactElement content={<PhoneIcon sx={{ color: 'white' }} />} description={ <><Typography color={'white'} fontWeight={300} onClick={handlePhoneCall} style={{ cursor: 'pointer' }}>Somalia - 0025-638179503</Typography>
                        <Typography color={'white'} fontWeight={300} onClick={handlePhoneCall} style={{ cursor: 'pointer' }}>EU - 0045-21516102 </Typography></>} title='Phone' />
                                <ContactElement content={<MailIcon sx={{ color: 'white' }} />} description={<Typography color={'white'} fontWeight={300} onClick={handleMail} style={{ cursor: 'pointer' }}>customerservice@majabe.so</Typography>} title='Mail' />
                                <ContactElement content={<PlaceIcon sx={{ color: 'white' }} />} description={<Typography color={'white'} fontWeight={300}  ><Link href={`https://www.google.com/maps/search/?api=1&query=${getAdress()}`} sx={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} target="_blank" rel="noopener noreferrer">Village Octabar / Sanaag Somalia</Link></Typography>} title='Adress' />
                            </div>
                        </div>

                    </Grid>

                    <Grid container padding={2} md={'6'} xs={12} gap={5} sx={{ backgroundColor: '#272A33', borderTopRightRadius: {md: '15px', xs: 0}, borderBottomRightRadius: '15px', borderBottomLeftRadius: {md: 0, xs: '15px'} }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
                            <Typography marginTop={'10px'} marginLeft={'2px'} variant="h4" fontWeight={'100'} color={'white'}>Contact Majabe Essence</Typography>
                            <Form></Form>
                        </div>
                    </Grid>

                </Grid>
            </div>

        </Box >
    );
}