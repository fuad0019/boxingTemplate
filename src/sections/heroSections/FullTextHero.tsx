import React, { useState, useEffect } from 'react';
import darkRoom from '../../assets/images/darkRoom.jpg'

import '../../styling/HeroSection.css'
import cn from 'classnames';
import NURSE from '../assets/images/nurse.png'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Box, Button, Grid, darken, useTheme } from '@mui/material';
import FadeIn from '../../components/FadeIn';
import Fade from '../../components/Fade';
import { styleContext, useStyleContext } from '../../contexts/StyleContext';
import { Divider, Typography } from '@mui/material';



interface HeroSectionProps {

    scrollTo: () => void
}


function HeroSection({ scrollTo }: HeroSectionProps) {

 
    const { themer } = useStyleContext();



    const calculateLineLength = (wordLenght: number) => {
        return wordLenght + wordLenght * 0.1
    }

    const [index, setIndex] = useState(0);

    // Function to advance to the next image


    // Effect to cycle through images every 5 seconds



    // const styles =useContext(styleContext);

    return (

        <div className="hero" style={{ padding: 60, width: '100%', height: '100vh', position: 'relative', backgroundImage: `url(${darkRoom})` }}    
        >


            <Box className="hero-overlay" style={{ backgroundColor: themer.palette.primary.main, opacity: 0.2 }}>

            </Box>
            <FadeIn direction='top'>

                <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} paddingTop={15}>

                    <Grid justifyContent={'center'} textAlign={'center'} container md={8} gap={5}>



                        <Grid md={12}>

                            <Typography style={{ whiteSpace: 'pre-line', lineHeight: 0.7 }} fontFamily={'Kanit'} color={themer.palette.text.primary} variant='h1'>{'START DIN\nKAMPSPORTS\nREJSE IDAG'}</Typography>

                        </Grid>

                        <Grid md={8}>
                            <Typography color={themer.palette.text.primary} variant='body1'>
                                Her er de ægte fighters. Vi er en lokal klub i århus som er hjemstedet for ægte fighters. Vi tilbyder en række kampsportshold og både på elite og begynder niveau.
                            </Typography>
                        </Grid>


                        <Grid md={12}>
                            <Button onClick={() => scrollTo()} sx={{ paddingY: '15px', marginLeft: 0, width: 'fit-content', color: themer.palette.text.button, backgroundColor: themer.palette.accent.main, ":hover": { backgroundColor: darken(themer.palette.accent.main, 0.2) } }} variant='contained' size="large">TILMELD HER</Button>


                        </Grid>




                    </Grid>


                </Box>



            </FadeIn>


        </div >
    );
}

export default HeroSection;