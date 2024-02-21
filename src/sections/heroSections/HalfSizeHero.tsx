import React, { useState, useEffect } from 'react';
import mmaImage1 from '../../assets/images/IMMAF.jpg'
import mmaImage2 from '../../assets/images/IMMAF2.jpg'
import mmaImage3 from '../../assets/images/IMMAF3.jpg'
import '../../styling/HeroSection.css'
import cn from 'classnames';
import NURSE from '../assets/images/nurse.png'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Box, Button, Grid, darken, useTheme } from '@mui/material';
import FadeIn from '../../components/FadeIn';
import Fade from '../../components/Fade';
import { styleContext, useStyleContext } from '../../contexts/StyleContext';
import { Divider, Typography } from '@mui/material';
import { useNavigatorContext } from '../../contexts/NavigateContext';



interface HeroSectionProps {

    scrollTo: () => void
}


function HeroSection({ scrollTo }: HeroSectionProps) {

    let mmaImages: string[] = [
        mmaImage1,
        mmaImage2,
        mmaImage3
    ]
    const { themer } = useStyleContext();

    const { navigateToPage, findPageByPath } = useNavigatorContext();


    const calculateLineLength = (wordLenght: number) => {
        return wordLenght + wordLenght * 0.1
    }

    const [index, setIndex] = useState(0);

    // Function to advance to the next image
    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % mmaImages.length);
    };

    // Effect to cycle through images every 5 seconds


    useEffect(() => {
        const intervalId = setInterval(nextImage, 8000); // 5000 milliseconds = 5 seconds
        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    // const styles =useContext(styleContext);

    return (

        <Box width={'100%'} height={{md: '98vh', xs: '100%'}} display={'flex'} flexDirection={'row'} justifyContent={'center'} >


            <Grid container direction={'row'} md={12} justifyContent={'center'} paddingTop={7}>

                <Grid height={{xs: 200, md: '100%'}} direction={'column'} xs={12} display={{ xs: 'flex', md: 'none' }} sx={{
                    backgroundImage: `url(${mmaImage1})`,
                    backgroundSize: 'cover',
                }}>
                </Grid>

                <Grid sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)', /* Adjust the values to match the skewness you want*/ }} padding='2rem 0' container md={6} xs={10} gap={2}>
                    <FadeIn direction='left'>
                        <Grid sx={{ justifyContent: {md: 'right', xs: 'center'}, display: 'flex', alignItems: 'center',  /* Adjust the values to match the skewness you want*/ }} paddingRight={{md: '4rem', xs: 0}} container gap={3}>

                            <Grid sx={{ justifyContent: 'left', display: 'flex', alignItems: 'center', /* Adjust the values to match the skewness you want*/ }} gap={2} container xs={10} md={9.5} >

                                <Grid container xs={12} md={10} gap={0} paddingTop={{md: '4rem', xs: '2rem'}}>



                                    <Grid container direction={'column'} >
                                        <Typography  marginLeft={'3px'} variant="overline" fontWeight={700} color={themer.palette.accent.main}>Kampsports Klub</Typography>
                                        <Typography fontFamily={'Arvo, sans-serif'} lineHeight={1.2} color={themer.palette.text.primary} variant='h1'>GORILLA</Typography>
                                        <Typography lineHeight={1.2} color={themer.palette.text.primary} variant='h1'>MMA</Typography>

                                    </Grid>



                                    <Grid md={12} padding={0.5}>
                                        <Typography color={themer.palette.text.primary} variant='h6' fontWeight={300}>
                                            Her er de ægte fighters. Vi er en lokal klub i århus som er hjemstedet for ægte fighters. Vi tilbyder en række kampsportshold og både på elite og begynder niveau.
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container md={12} gap={2} >
                                    <Button onClick={() => navigateToPage(findPageByPath('/Kontakt'))} sx={{ paddingY: '15px', marginLeft: 0, width: 'fit-content', color: themer.palette.text.button, backgroundColor: themer.palette.accent.main, ":hover": { backgroundColor: darken(themer.palette.accent.main, 0.2) } }} variant='contained' size="large">TILMELD HER</Button>
                                    <Button variant="outlined" sx={{
                                        color: themer.palette.accent.main,
                                        borderColor: themer.palette.accent.main
                                    }} onClick={() => scrollTo()} size="large">LÆS MERE</Button>

                                </Grid>



                            </Grid>
                        </Grid>


                    </FadeIn>


                </Grid>

                <Grid container direction={'column'} md={6} xs={8} display={{xs: 'none', md: 'flex'}} sx={{
                    backgroundImage: `url(${mmaImage1})`,
                    backgroundSize: 'cover',
                    clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)', /* Adjust to complement the skew of the left side*/
                }}>


                </Grid>

            </Grid>





        </Box >
    );
}

export default HeroSection;
