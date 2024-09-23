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
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useLanguageContext } from '../contexts/LanguageContext';

interface ContactSectionProps {
    quota?: string;
}

export default function ContactSection({ quota }: ContactSectionProps) {

    const url = 'https://corsproxy.io/?' + encodeURIComponent('https://lottie.host/f9c19e0e-f0f0-4584-8501-78dbb6271e7c/koPNNBaJXk.json');
    
    const handlePhoneCall = () => {
        const phoneNumber = '004521516102'; // Replace with your phone number
        window.open(`tel:${phoneNumber}`);
    };


    console.log(url)
    const handleMail = () => {
        const mailUser = 'someone@example.com';
        window.open(`mailto:${mailUser}`);
    };

    const getAdress = () => {
        const address = "Sankt Annes Gade, Århus 8210";
        const urlAddress = encodeURIComponent(address); // Encode the address for URL
        return urlAddress
    };
    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const handleFormSubmit = () => {
        // Handle form submission logic here
        // Set formSubmitted to true if the form is successfully submitted
        setFormSubmitted(true);
    };


    const { languages, setActiveLanguage, language } = useLanguageContext();

  

    return formSubmitted ?
        (
            <Box
                sx={{
                    px: 2,
                    mt: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: { xs: 1, md: 1 }
                }}
            >
                <Typography variant="h4" fontWeight="bold" color="textSecondary">
                {language.file.contact.form.title}
                </Typography>
                <DotLottieReact
                    src={url}
                    autoplay
                    height={100}
                    width={'auto'}
                />
                <Typography variant="body1" fontWeight="100" color="textSecondary">{language.file.contact.form.description}</Typography>
            </Box>
        )
        :
        (
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


                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                    <Grid container direction={'row'} xs={10} >

                        <Grid container padding={2} md={6} xs={12} textAlign={'left'} direction={'column'} gap={5} sx={{ backgroundColor: '#1D1E23', borderTopLeftRadius: '15px', borderTopRightRadius: { md: 0, xs: '15px' }, borderBottomLeftRadius: { md: '15px', xs: 0 } }} >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                                <Typography marginTop={'10px'} marginLeft={'2px'} variant="body1" fontWeight={'100'} color={'white'}>{language.file.contact.contactSection.description}</Typography>
                               

                            </div>

                            <Divider color={'white'}></Divider>


                            <div style={{ gap: '50px', display: 'flex', flexDirection: 'column', paddingBottom: 100 }}>
                                <div>
                                    <Typography marginTop={'10px'} marginLeft={'2px'} variant="h4" fontWeight={'100'} color={'white'}>{language.file.contact.Direct}</Typography>
                                </div>
                                <div style={{ gap: 15, flexDirection: 'column', display: 'flex' }}  >
                                    <ContactElement content={<PhoneIcon sx={{ color: 'white' }} />} description={<><Typography color={'white'} fontWeight={300} onClick={handlePhoneCall} style={{ cursor: 'pointer' }}>Somalia - 0025-638179503</Typography>
                                        <Typography color={'white'} fontWeight={300} onClick={handlePhoneCall} style={{ cursor: 'pointer' }}>EU - 0045-21516102 </Typography></>} title='Phone' />
                                    <ContactElement content={<MailIcon sx={{ color: 'white' }} />} description={<Typography color={'white'} fontWeight={300} onClick={handleMail} style={{ cursor: 'pointer' }}>customerservice@majabe.so</Typography>} title='Mail' />
                                    <ContactElement content={<PlaceIcon sx={{ color: 'white' }} />} description={<Typography color={'white'} fontWeight={300}  ><Link href={`https://www.google.com/maps/search/?api=1&query=${getAdress()}`} sx={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} target="_blank" rel="noopener noreferrer">Village Octabar / Sanaag Somalia</Link></Typography>} title='Adress' />
                                </div>
                            </div>

                        </Grid>

                        <Grid container padding={2} md={'6'} xs={12} gap={5} sx={{ backgroundColor: '#272A33', borderTopRightRadius: { md: '15px', xs: 0 }, borderBottomRightRadius: '15px', borderBottomLeftRadius: { md: 0, xs: '15px' } }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
                                <Typography marginTop={'10px'} marginLeft={'2px'} variant="h4" fontWeight={'100'} color={'white'}>{language.file.contact.contactSection.title}</Typography>
                                <Form payload={quota} sendAction={handleFormSubmit}></Form>
                            </div>
                        </Grid>

                    </Grid>
                </div>

            </Box >
        );
}