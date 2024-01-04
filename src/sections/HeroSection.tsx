import React, { useState, useEffect } from 'react';
import mmaImage1 from '../assets/images/IMMAF.jpg'
import mmaImage2 from '../assets/images/IMMAF2.jpg'
import mmaImage3 from '../assets/images/IMMAF3.jpg'



import '../styling/HeroSection.css'
import cn from 'classnames';
import NURSE from '../assets/images/nurse.png'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Box, Button, Grid } from '@mui/material';
import FadeIn from '../components/FadeIn';
import Fade from '../components/Fade';
import { styleContext } from '../contexts/StyleContext';
import styles from '../styling/HeroSection.module.scss'
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

    <div className="hero" style={{ backgroundImage: `url(${mmaImages[index]})`, transition: 'background-image 1s ease-in', width: '100%', height: '100vh' }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <FadeIn direction='left'>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}  paddingTop={{xs: '10%', md: '4%'}}>
            <Grid container direction={'column'} xs={8}>

              <Grid container direction={'column'} gap={0.2}>
                <Typography variant='h1'>GORILLA</Typography>
                <Typography variant='h1'>MMA</Typography>
              </Grid>



              <Grid xs={'12'} md={'6'} >
                <p className={styles.highlights1}  >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rem sunt. Cumque quibusdam sequi fugit sint, inventore aperiam exercitationem laborum architecto vero, libero blanditiis hic quia quasi provident, quam qui.
                </p>
              </Grid>


              <Button onClick={() => scrollTo()} sx={{ paddingY: '15px', marginLeft: 0, width: 'fit-content', backgroundColor: 'rgb(255, 255, 255)', color: 'black', ":hover": { backgroundColor: 'rgb(218, 218, 218)' } }} variant='contained' size="large">TILMELD HER</Button>



            </Grid>
          </Box>


        </FadeIn>
      </div>


    </div>
  );
}

export default HeroSection;
