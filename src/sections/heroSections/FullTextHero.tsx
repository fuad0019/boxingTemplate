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
import environment from '../../assets/images/environment3.jpeg'
import { useNavigatorContext } from '../../contexts/NavigateContext';
import { useLanguageContext } from '../../contexts/LanguageContext';


interface HeroSectionProps {

    scrollTo: () => void
}


function HeroSection({ scrollTo }: HeroSectionProps) {

    const { languages, setActiveLanguage, language } = useLanguageContext();

    const { themer } = useStyleContext();

    const { navigateToPage, findPageByPath } = useNavigatorContext();


    const calculateLineLength = (wordLength: number) => {
        return wordLength + wordLength * 0.1
    }

    const [index, setIndex] = useState(0);

    // Function to advance to the next image


    // Effect to cycle through images every 5 seconds



    // const styles =useContext(styleContext);

    return (
        <div className="hero" style={{ padding: 60, width: '100%', height: '100vh', position: 'relative', backgroundImage: `url(${environment})`, backgroundPosition: '25% 20%', backgroundSize: 'cover' }}>
            <Box className="hero-overlay" style={{ backgroundColor: '#1D1D1B', opacity: 0.5 }}></Box>
            <FadeIn direction='top'>
                <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} paddingTop={15}>
                    <Grid justifyContent={'center'} textAlign={'center'} container md={8} gap={5}>
                        <Grid  md={12} gap={2} display={'flex'} justifyContent={'center'} alignItems={'center'} direction={'column'} textAlign={'center'} >

                            <Grid md={12}>
                                <Typography style={{ whiteSpace: 'pre-line', lineHeight: 1 }} fontFamily={'Kanit'} color={themer.palette.text.primary} variant='h1'>{language.file.home.hero.title}</Typography>
                            </Grid>
                            <Divider style={{ borderColor: 'white', height: 2, width: 350 }} orientation="horizontal" />

                            <Grid md={8} justifyContent={'center'} textAlign={'center'} >
                                <Typography color={themer.palette.text.primary} variant='body1'>{language.file.home.hero.description}</Typography>
                            </Grid>
                        </Grid>

                        <Grid md={12} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={3}>
                            <Button variant="contained" sx={{
                                width: 'fit-content',
                                color: 'black',
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: darken('#FFFFFF', 0.1),
                                },
                            }} onClick={() => navigateToPage(findPageByPath('/Contact'))} size="large">{language.file.home.hero.button}</Button>            

                        </Grid>

                    </Grid>
                </Box>
            </FadeIn>                   

        </div>
    );
}

export default HeroSection;
