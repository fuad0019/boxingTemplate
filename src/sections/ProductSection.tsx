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
import { useNavigatorContext } from "../contexts/NavigateContext";
import { useLanguageContext } from "../contexts/LanguageContext";
import { useStyleContext } from "../contexts/StyleContext";



export interface Detail {

    title: string,
    shortDescription: string,
    longDescription: string,
    images: string[],
    price: number,
    minQuantity: number,
    maxQuantity: number
}




interface DetailSectionProps {
    details: Detail[],
    subject: string,
    onActionClick: (productIndex: Number) => void // Assuming 'detail' is the parameter you want to pass to the custom function
}


export default function DetailSection({ details, subject, onActionClick }: DetailSectionProps) {
    const theme = useTheme();

    const { themer } = useStyleContext();

    const { navigateToPage, findPageByPath } = useNavigatorContext();
    const { languages, setActiveLanguage, language } = useLanguageContext();


    return (

        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10% 0px', gap: 10, backgroundColor: 'white' }} className='home'>
            <Grid container md={8} > {/* Added justifyContent="center" */}
                <FadeIn direction={'top'} distance='2' >
                    <Box display={'flex'} justifyContent="center" flexDirection={'column'} gap={2}>
                        <Typography variant="h3" fontWeight={'800'} color={themer.palette.text.secondary} textAlign={'center'}>{language.file.products.productSection.title}</Typography>
                        <Typography variant="h6" fontWeight={300} textAlign={'center'} color={themer.palette.text.secondary}>{language.file.products.productSection.description}</Typography>
                    </Box>

                </FadeIn>
            </Grid>


            <Grid container spacing={4} justifyContent="center">
                {details.map((detail, index) => {

                    console.log(index)
                    console.log(detail[language.language].title)
                    console.log(language.language)
                    
                    return (

                        <Grid key={index} item xs={12} sm={6} md={2.5} lg={2.5} >
                            <Card sx={{ width: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
                                <CardActionArea onClick={() => onActionClick(index)}>
                                    <CardMedia
                                        component="img"
                                        image={detail.images[0]}
                                        style={{
                                            height: 300,
                                            backgroundSize: 'auto',
                                            backgroundPosition: 'center',
                                        }}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{ height: 100 }}>
                                        <Typography gutterBottom variant="h5" fontWeight={700} component="div" color="text.secondary">
                                            {detail[language.language].title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {detail[language.language].shortDescription}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => onActionClick(index)} sx={{
                                            color: themer.palette.accent.main,

                                        }}>{language.file.products.productSection.button}</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    )
                })}
            </Grid>
        </Box>

    )
}