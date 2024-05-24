import React, { useState, useEffect } from 'react';
import frankincenseStones from '../../assets/images/product.jpeg'
import wideTree from '../../assets/images/widetree.jpg'


import '../../styling/HeroSection.css'
import cn from 'classnames';

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

    let mmaImages: string[] = [
        frankincenseStones,
        wideTree

    ]
    const { themer } = useStyleContext();



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

        <div style={{ backgroundPosition: '25% 75%', backgroundSize: 'cover', backgroundImage: `url(${mmaImages[index]})`, transition: 'background-image 1s ease-in', width: '100%', height: '80vh' }}>




            <Grid sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', position: 'relative' }} container xs={10} gap={2} height={'100%'}>
                <Box className="hero-overlay" style={{ backgroundImage: `linear-gradient( ${themer.palette.accent.main},#000000)`, opacity: 0.4, width: '100vw', height: '80vh' }}>

                </Box>

                <Box height={'100%'}>

                    <FadeIn direction='left'>

                        <Grid height={'100%'} sx={{ padding: '7rem 10%', justifyContent: 'left', display: 'flex', alignItems: 'center', /* Adjust the values to match the skewness you want*/ }} container xs={10} >




                            <Grid container xs={12} md={10} >



                                <Grid container direction={'column'} >
                                    <Typography fontFamily={'Arvo, sans-serif'} lineHeight={1.2} color={themer.palette.text.primary} variant='h1'>Frankincense</Typography>
                                    <Typography fontFamily={'Arvo, sans-serif'} lineHeight={1.2} color={themer.palette.text.primary} variant='h1'>Wholesale</Typography>

                                </Grid>



                                <Grid md={12} padding={0.5}>
                                    <Typography whiteSpace={'pre-wrap'} color={themer.palette.text.primary} variant='h6' fontWeight={300}>
                                        {'Excellence in Sustainable Frankincense Supply.\nElevate your products with our tradition-rich, ethical sourcing'}
                                    </Typography>
                                </Grid>

                                <Grid container paddingY={3} gap={2}>


                                    <Button onClick={() => navigateToPage(findPageByPath('/Kontakt'))} sx={{ paddingY: '15px', marginLeft: 0, width: 'fit-content', color: 'white', backgroundColor: themer.palette.accent.main, ":hover": { backgroundColor: darken(themer.palette.accent.main, 0.2) } }} variant='contained' size="large"> Request QOUTA</Button>
                                    <Button variant="outlined" sx={{
                                        paddingY: '15px',
                                        backgroundColor: '#FFFFFF',
                                        color: themer.palette.accent.main,
                                        borderColor: themer.palette.accent.main,
                                        ":hover": { backgroundColor: darken('#FFFFFF', 0.2) }
                                    }} onClick={() => scrollTo()} size="large">Read More</Button>
                                </Grid>

                            </Grid>









                        </Grid>



                    </FadeIn>
                </Box>


            </Grid>






        </div >
    );
}

export default HeroSection;
