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
        const phoneNumber = '82-45-31-50'; // Replace with your phone number
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
            <Typography padding={2} fontWeight={'bold'} variant={'h4'} color={themer.palette.text.primary} >Vi vil rigtig gerne høre fra dig - Kontakt os!</Typography>


            <div style={{display: 'flex', flexDirection: 'row',  justifyContent: 'center'}}>

                <Grid container direction={'row'} xs={10} >

                    <Grid container padding={2} md={6} xs={12} textAlign={'left'} direction={'column'} gap={5} sx={{ backgroundColor: '#1D1E23', borderTopLeftRadius: '15px', borderTopRightRadius: {md: 0, xs: '15px'}, borderBottomLeftRadius: {md: '15px', xs:0}}} >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                            <Typography marginTop={'10px'} marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Har du spørgsmål om dét at være medlem i klubben, så kan du stille os spørgsmål. </Typography>
                            <Typography marginTop={'10px'} marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Her kan du finde svar på de fleste af de spørgsmål, som rejser sig i forbindelse med at være kæmper. Du er naturligvis også velkommen til at ringe eller skrive til os. Vi sidder klar hver eneste dag.</Typography>
                            <Typography marginTop={'10px'} marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>Hvis du er medlem – eller overvejer at blive det – hører vi naturligvis også meget gerne fra dig, så vi sammen kan finde det rette trænings hold til dig.</Typography>

                        </div>

                        <Divider color={'white'}></Divider>


                        <div style={{ gap: '50px', display: 'flex', flexDirection: 'column', paddingBottom: 100 }}>
                            <div>
                                <Typography marginTop={'10px'} marginLeft={'2px'} variant="h4" fontWeight={'100'} color={'white'}>Direkte henvendelse </Typography>
                            </div>
                            <div style={{ gap: 15, flexDirection: 'column', display: 'flex' }}  >
                                <ContactElement content={<PhoneIcon sx={{ color: 'white' }} />} description={<Typography color={'gray'} fontWeight={300} onClick={handlePhoneCall} style={{ cursor: 'pointer' }}>82 45 31 50 </Typography>} title='Telefon' />
                                <ContactElement content={<MailIcon sx={{ color: 'white' }} />} description={<Typography color={'gray'} fontWeight={300} onClick={handleMail} style={{ cursor: 'pointer' }}>hansen@gmail.com </Typography>} title='Mail' />
                                <ContactElement content={<PlaceIcon sx={{ color: 'white' }} />} description={<Typography color={'gray'} fontWeight={300}  ><Link href={`https://www.google.com/maps/search/?api=1&query=${getAdress()}`} sx={{ textDecoration: 'none', color: 'gray', fontWeight: 300 }} target="_blank" rel="noopener noreferrer">Sankt Annes Gade, Århus 8210</Link></Typography>} title='Adresse' />
                            </div>
                        </div>

                    </Grid>

                    <Grid container padding={2} md={'6'} xs={12} gap={5} sx={{ backgroundColor: '#272A33', borderTopRightRadius: {md: '15px', xs: 0}, borderBottomRightRadius: '15px', borderBottomLeftRadius: {md: 0, xs: '15px'} }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
                            <Typography marginTop={'10px'} marginLeft={'2px'} variant="h4" fontWeight={'100'} color={'white'}>Send os en besked </Typography>
                            <Form></Form>
                        </div>
                    </Grid>

                </Grid>
            </div>

        </Box >
    );
}