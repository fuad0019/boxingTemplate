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

    <div className="hero" style={{ padding: 60, backgroundImage: `url(${mmaImages[index]})`, transition: 'background-image 1s ease-in', width: '100%', height: '100vh' }}>
      <Box className="hero-overlay" style={{ backgroundColor: themer.palette.primary.main, opacity: 0.2 }}>

      </Box>
      <FadeIn direction='left'>

        <Grid container direction={'row'} md={12} justifyContent={'center'} paddingTop={7}>

          <Grid container md={4} gap={2}>

            <Grid container md={12} gap={0}>



              <Grid container direction={'column'} >
                <Typography color={themer.palette.text.primary} variant='h1'>GORILLA</Typography>
                <Typography color={themer.palette.text.primary} variant='h1'>MMA</Typography>
              </Grid>



              <Grid md={12} padding={0.5}>
                <Typography color={themer.palette.text.primary} variant='body1'>
                  Her er de ægte fighters. Vi er en lokal klub i århus som er hjemstedet for ægte fighters. Vi tilbyder en række kampsportshold og både på elite og begynder niveau.
                </Typography>
              </Grid>
            </Grid>


            <Button onClick={() => scrollTo()} sx={{ paddingY: '15px', marginLeft: 0, width: 'fit-content', color: themer.palette.text.button, backgroundColor: themer.palette.accent.main, ":hover": { backgroundColor: darken(themer.palette.accent.main, 0.2) } }} variant='contained' size="large">TILMELD HER</Button>





          </Grid>

          <Grid container direction={'column'} md={4} xs={8} gap={2}>


          </Grid>

        </Grid>



      </FadeIn>


    </div >
  );
}

export default HeroSection;
