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
        <Box sx={{
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: `url(${boxingGym})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                padding: '10% 5%',
                gap: '50px',
                backgroundColor: 'rgb(0,0,0,0.7)',
                width: '100%',
            }}>
                <div>
                    <Typography variant="h2" component="div" fontFamily={'Libre Franklin , sans-serif'} color={"white"}>
                        Holdet
                    </Typography>

                    <Typography variant="h6" component="div" color={"white"}>
                        Se dine trænere og klub-ansvarlige
                    </Typography>
                </div>


                <Grid container justifyContent={'center'}  gap={{md:10, xs: 5}}  >
                    {members.map((member, index) => (
                        <Grid item xs={6} md={2.5} key={index}>
                            <FadeIn direction="top">
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <MemberCard member={member} />
                                </Box>
                            </FadeIn>
                        </Grid>
                    ))}
                </Grid>

            </Box>
        </Box>



    )
}

export default MemberSection;

