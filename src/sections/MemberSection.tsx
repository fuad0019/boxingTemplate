import { Box, Grid, Typography, useTheme } from "@mui/material";
import FadeIn from "../components/FadeIn";
import MemberCard from "../components/MemberCard";


import boxingGym from '../assets/images/boxinggym2.jpeg'

import useMediaQuery from '@mui/material/useMediaQuery';


export interface Member {

    name: string,
    position: string,
    image: string,

}


interface MemberProps {
    members: Member[]
}


function MemberSection({ members }: MemberProps) {
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));


    return (
        <div style={{
           
            overflow: 'hidden', position: 'relative',
        }}>

            <div style={{
                backgroundImage: `url(${boxingGym})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: matchesMD ? 700 : 1800,


            }}>

            </div>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '50px',
                padding: '10% 5%',
                backgroundColor: 'rgb(0,0,0,0.7)',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',


                }}>
                    <Typography variant="h2" component="div" fontFamily={'Libre Franklin , sans-serif'} color={"white"}>
                        Holdet
                    </Typography>

                    <Typography variant="h5" component="div" color={"white"}>
                        Se dine trænere og klub-ansvarlige
                    </Typography>
                </div>






                <Grid container
                    justifyContent={'center'}
                    alignItems={'stretch'}

                    md={12}

                    gap={theme.spacing(2)}

                    direction={'row'}>

                    {members.map((member: Member, index) => (
                        <Grid item xs={6} md={2.5} >
                            <FadeIn direction="top" >
                                <MemberCard member={member} />

                            </FadeIn>
                        </Grid>
                    ))}


                </Grid>
            </div>





        </div>



    )
}

export default MemberSection;

