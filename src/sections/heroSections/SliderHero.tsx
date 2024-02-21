import React from 'react';
import Slider from 'react-slick';
import mmaImage1 from '../../assets/images/IMMAF.jpg';
import mmaImage2 from '../../assets/images/IMMAF2.jpg';
import mmaImage3 from '../../assets/images/IMMAF3.jpg';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [mmaImage1, mmaImage2, mmaImage3];

    return (
        <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                    </div>
                ))}
            </Slider>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <Typography variant="h2" component="h1" color="black" gutterBottom>
                    Your Hero Title
                </Typography>
                <Typography variant="h5" color="black" paragraph>
                    Your hero subtitle or description.
                </Typography>
                <Button variant="contained" color="primary">
                    Call to Action
                </Button>
            </Box>
        </Box>
    );
};

export default HeroSection;

