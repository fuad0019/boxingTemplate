import { Box, Button, Grid, Typography, darken, useTheme, lighten } from "@mui/material"
import PositionCard from "../components/PositionsCards"
import FadeIn from "../components/FadeIn"
import TeamCard from "../components/TeamCard"
import boxingClub from '../assets/images/boxinggym2.jpeg'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useNavigatorContext } from "../contexts/NavigateContext"
import { useStyleContext } from "../contexts/StyleContext"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export interface BufferProp {

    title: string,
    description: string,
    buttonText: string

}




function AdvantageSection() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const { navigateToPage, findPageByPath } = useNavigatorContext();

    const { themer } = useStyleContext();



    return (


        <Grid md={12} direction={'column'} container textAlign={'center'} justifyContent={'center'} alignItems={'center'} style={{ height: '100%', overflow: 'hidden' }} gap={7} padding={'4rem 0'} >
            <FadeIn direction="bottom" >

                <Grid container md={12} justifyContent={'center'} direction={'column'} gap={2}>

                    <Typography marginLeft={'3px'} variant="overline" fontWeight={700} color={themer.palette.accent.main}>Fordele</Typography>


                    <Typography variant="h3" fontSize={{ md: '2.5rem', xs: '2.2rem' }} component="div" fontFamily={'Libre Franklin , sans-serif'} color={themer.palette.text.primary}>
                        Vi er her for at hjælpe dig med at vokse

                    </Typography>

                    <Typography variant="h6" fontSize={{ md: '1rem', xs: '0.8rem' }} component="div" color={themer.palette.text.primary} textAlign={'center'}>
                        Vores mission er at hjælpe dig med at vokse, så du kan fokusere på at blive den bedste kæmper. Vi har alt hvad du har brug for for at vokse, fra træningsfaciliteter til coaches og meget mere.
                    </Typography>
                </Grid>

            </FadeIn>

            <Grid container justifyContent={'center'} direction={'row'} md={12} gap={2}>
                <Grid md={2}  item >
                    <FadeIn direction="bottom" delay="1000">
                        <Grid alignItems={'center'} direction={'column'}  container gap={1}>


                            <PeopleAltIcon sx={{ color: themer.palette.accent.main, fontSize: 40 }} />
                            <Typography variant="h6" component="div" fontFamily={'Libre Franklin , sans-serif'} color={themer.palette.text.primary}>
                                Dygtige Trænere
                            </Typography>

                            <Typography variant="body1" component="div" color={themer.palette.text.primary} textAlign={'center'}>
                                Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.
                            </Typography>
                        </Grid>

                    </FadeIn>

                </Grid>

                <Grid md={2}  item >

                    <FadeIn  direction="bottom" delay="2000" >

                        <Grid alignItems={'center'} direction={'column'}  container gap={1}>
                            <PeopleAltIcon sx={{ color: themer.palette.accent.main, fontSize: 40 }} />
                            <Typography variant="h6" component="div" fontFamily={'Libre Franklin , sans-serif'} color={themer.palette.text.primary}>
                                Talentfulde Kæmpere
                            </Typography>

                            <Typography variant="body1" component="div" color={themer.palette.text.primary} textAlign={'center'}>
                                Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.
                            </Typography>

                        </Grid>
                    </FadeIn>
                </Grid>
                <Grid md={2}  item >

                    <FadeIn direction="bottom" delay="3000" >

                        <Grid alignItems={'center'} direction={'column'}  container gap={1}>
                            <PeopleAltIcon sx={{ color: themer.palette.accent.main, fontSize: 40 }} />
                            <Typography variant="h6" component="div" fontFamily={'Libre Franklin , sans-serif'} color={themer.palette.text.primary}>
                                Skarpe Faciliteter
                            </Typography>

                            <Typography variant="body1" component="div" color={themer.palette.text.primary} textAlign={'center'}>
                                Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.
                            </Typography>

                        </Grid>
                    </FadeIn>
                </Grid>
                <Grid md={2} item >

                    <FadeIn direction="bottom" delay="10000">

                        <Grid alignItems={'center'} direction={'column'}  container gap={1}>
                            <PeopleAltIcon sx={{ color: themer.palette.accent.main, fontSize: 40 }} />
                            <Typography variant="h6" component="div" fontFamily={'Libre Franklin , sans-serif'} color={themer.palette.text.primary}>
                                Nyt Udstyr
                            </Typography>

                            <Typography variant="body1" component="div" color={themer.palette.text.primary} textAlign={'center'}>
                                Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.
                            </Typography>

                        </Grid>
                    </FadeIn>
                </Grid>
            </Grid>

        </Grid>








    )
}

export default AdvantageSection;

