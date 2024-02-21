import { Box, Grid, Typography, darken, useTheme } from "@mui/material"
import boxingTraining from '../assets/images/boxingtraining2.jpg';
import crossfit from '../assets/images/crossfit.jpeg';
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





        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 100 }} className='home'>

            {details.map((detail, index) => {

                return (
                    <div id={detail.title} style={{ width: '90%' }}>
                        {index % 2 == 0 ?

                            <Grid container alignContent={'center'} gap={{xs: 5, md: 10}} justifyContent={'center'} padding={'20px'}>

                                <Grid display={{ xs: 'flex', md: 'none' }} item xs={10} md={5.5} >
                                    <FadeIn direction={index % 2 == 0 ? 'right' : 'left'} distance='2' >

                                        <img style={{ width: '100%', maxHeight: 500 }} src={detail.image}></img>

                                    </FadeIn>


                                </Grid>

                                <Grid borderLeft={'2px solid white'} paddingLeft={'20px'} item xs={10} md={4} direction={'column'} justifyContent={'left'} alignItems={'left'}  >
                                    <div>
                                        <Typography marginLeft={'3px'} variant="overline" color={themer.palette.text.primary}>{subject}</Typography>
                                        <Typography variant="h3" color={themer.palette.text.primary}>{detail.title}</Typography>
                                        <Typography whiteSpace={'pre-wrap'} marginTop={'10px'} marginLeft={'2px'} variant="body2" fontWeight={'100'} color={themer.palette.text.primary}>{detail.description}</Typography>
                                    </div>
                                    <Button onClick={()=>navigateToPage(findPageByPath('/Kontakt'))}  sx={{ paddingY: '15px', marginLeft: 0, marginTop:3, width: 'fit-content', color: themer.palette.text.button, backgroundColor: themer.palette.accent.main, ":hover": {backgroundColor: darken(themer.palette.accent.main,0.2)}  }} variant='contained' size="large">TILMELD HER</Button>
                                </Grid>

                                <Grid display={{ xs: 'none', md: 'flex' }} item xs={10} md={5.5} >
                                    <FadeIn direction={index % 2 == 0 ? 'right' : 'left'} distance='2' >

                                        <img style={{ width: '100%', maxHeight: 500 }} src={detail.image}></img>

                                    </FadeIn>


                                </Grid>
                            </Grid>



                            :
                            <Grid container alignContent={'center'} gap={{xs: 5, md: 10}} justifyContent={'center'} padding={'20px'}>


                                <Grid item xs={10} md={5.5} >
                                    <FadeIn direction={index % 2 == 0 ? 'right' : 'left'} distance='2' >

                                        <img style={{ width: '100%', maxHeight: 500 }} src={detail.image}></img>

                                    </FadeIn>


                                </Grid>




                                <Grid borderRight={'2px solid white'} paddingRight={'20px'} item xs={10} md={4} flexDirection={'column'} justifyContent={'left'} alignItems={'left'}>
                                    <div>
                                        <Typography marginLeft={'3px'} variant="overline" color={themer.palette.text.primary}>{subject}</Typography>
                                        <Typography variant="h3" color={themer.palette.text.primary}>{detail.title}</Typography>
                                        <Typography whiteSpace={'pre-wrap'} marginTop={'10px'} marginLeft={'2px'} variant="body2" fontWeight={'100'} color={themer.palette.text.primary}>{detail.description}</Typography>

                                    </div>
                                    <Button  onClick={()=>navigateToPage(findPageByPath('/Kontakt'))}  sx={{ paddingY: '15px', marginLeft: 0, marginTop:3, width: 'fit-content', color: themer.palette.text.button, backgroundColor: themer.palette.accent.main, ":hover": {backgroundColor: darken(themer.palette.accent.main,0.2)}  }} variant='contained' size="large">TILMELD HER</Button>


                                </Grid>

                            </Grid>}




                    </div>
                )



            })}






        </div >
    )
}