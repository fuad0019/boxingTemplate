import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography, darken, useTheme } from "@mui/material"
import boxingTraining from '../assets/images/boxingtraining2.jpg';
import crossfit from '../assets/images/crossfit.jpeg';
import oils from '../assets/images/frankincenseOil.jpg'

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import gradientImage from '../assets/images/gradient.jpeg'
import '../styling/Home.css';
import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import useNavigateHook from "../hooks/navigateHook";
import { useNavigatorContext } from "../contexts/NavigateContext";
import { useStyleContext } from "../contexts/StyleContext";



export interface Detail {

    title: string,
    description: string,
    image: string,

}


interface DetailSectionProps {
    details: Detail[],
    subject: string
}


export default function DetailSection({ details, subject }: DetailSectionProps) {
    const theme = useTheme();

    const { themer } = useStyleContext();

    const { navigateToPage, findPageByPath } = useNavigatorContext();

    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10% 0px', gap: 10, backgroundColor: 'white' }} className='home'>
            <Grid container md={8} > {/* Added justifyContent="center" */}
                <FadeIn direction={'top'} distance='2' >
                    <Box display={'flex'} justifyContent="center" flexDirection={'column'} gap={2}>
                        <Typography variant="h3" fontWeight={'800'} color={themer.palette.text.secondary} textAlign={'center'}>{subject}</Typography>
                        <Typography variant="h6" fontWeight={300} textAlign={'center'} color={themer.palette.text.secondary}>Dive into the world of Majabe Essences and discover the finest organic resins and oils sourced from the heart of Somaliland. Each of our products is a testament to tradition and quality, crafted to enrich your offerings.</Typography>
                    </Box>

                </FadeIn>
            </Grid>


            <Grid container spacing={4} justifyContent="center">
                {details.map((detail, index) => (
                    <Grid key={index} item xs={12} sm={6} md={2.5} lg={2.5} >
                        <FadeIn direction={'top'} distance='2' >
                            <Card sx={{ width: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
                                <CardActionArea onClick={() => navigateToPage(findPageByPath('/Contact'))}>
                                    <CardMedia
                                        component="img"
                                        image={detail.image}
                                        style={{
                                            height: 300,
                                            backgroundSize: 'auto',
                                            backgroundPosition: 'center',
                                        }}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{ height: 100 }}>
                                        <Typography gutterBottom variant="h5" fontWeight={700} component="div" color="text.secondary">
                                            {detail.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {detail.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small"onClick={() => navigateToPage(findPageByPath('/Contact'))} sx={{
                                            color: themer.palette.accent.main,
                                            
                                        }}>See More</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </FadeIn>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}