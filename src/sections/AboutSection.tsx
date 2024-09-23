import { Box, Grid, Typography, darken, useTheme } from "@mui/material"
import Button from '@mui/material/Button';
import '../styling/Home.css';
import FadeIn from '../components/FadeIn';
import { useNavigatorContext } from "../contexts/NavigateContext";
import { useStyleContext } from "../contexts/StyleContext";

export interface Detail {

    title: string,
    description: string,
    image: string,

}


interface AboutSectionProps {
    details: Detail[],
    subject: string
}


export default function AboutSection({ details, subject }: AboutSectionProps) {
    const theme = useTheme();

    const { themer } = useStyleContext();

    const { navigateToPage, findPageByPath } = useNavigatorContext();

    return (


        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 100 }} className='home'>

            {details.map((detail, index) => {

                return (
                    <div id={detail.title} style={{ width: '90%' }}>
                        {index % 2 == 0 ?

                            <Grid container display={'flex'} flexDirection={'row'} alignItems={'center'} gap={{ xs: 5, md: 10 }} justifyContent={'center'} padding={'20px'}>

                                <Grid display={{ xs: 'flex', md: 'none' }} item xs={10} md={5} >
                                    <FadeIn direction={index % 2 == 0 ? 'right' : 'left'} distance='2' >
                                        <img style={{ width: '90%', maxHeight: 500 }} src={detail.image}></img>
                                    </FadeIn>
                                </Grid>

                                

                                <Grid borderLeft={'2px solid white'} paddingLeft={'20px'} item xs={10} md={5} direction={'column'} justifyContent={'left'} alignItems={'left'}  >
                                    <div>
                                        <Typography variant="h3" color={"black"}>{detail.title}</Typography>
                                        <Typography whiteSpace={'pre-wrap'} marginTop={'10px'} marginLeft={'2px'} variant="body1" fontWeight={'100'} color={"black"}>{detail.description}</Typography>
                                    </div>
                                </Grid>

                                <Grid display={{ xs: 'none', md: 'flex' }} item xs={10} md={5} >
                                    <img style={{ width: '90%', maxHeight: 500 }} src={detail.image}></img>
                                </Grid>
                            </Grid>

                            :
                            <Grid container alignItems={'center'} gap={{ xs: 5, md: 10 }} justifyContent={'center'} padding={'20px'}>


                                <Grid item xs={10} md={5} >
                                    <FadeIn direction={index % 2 == 0 ? 'right' : 'left'} distance='2' >

                                        <img style={{ width: '90%', maxHeight: 500 }} src={detail.image}></img>

                                    </FadeIn>


                                </Grid>

                                <Grid borderRight={'2px solid white'} paddingRight={'20px'} item xs={10} md={5} flexDirection={'column'} justifyContent={'left'} alignItems={'left'}>
                                    <div>
                                        <Typography variant="h3" color={"black"}>{detail.title}</Typography>
                                        <Typography whiteSpace={'pre-wrap'} marginTop={'10px'} marginLeft={'2px'} variant="body2" fontWeight={'100'} color={"black"}>{detail.description}</Typography>
                                    </div>

                                </Grid>

                            </Grid>}

                    </div>
                )

            })}

        </div >
    )
}