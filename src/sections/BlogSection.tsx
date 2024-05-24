import { Box, Grid, Typography, useTheme } from "@mui/material"
import PositionCard from "../components/PositionsCards"
import FadeIn from "../components/FadeIn"
import TeamCard from "../components/TeamCard"
import { useStyleContext } from "../contexts/StyleContext"


export interface Team {

    title: string,
    description: string,
    image: string,
    index: number,
    context: string

}


interface TeamProps {
    teams: Team[]
}


function BlogSection({ teams }: TeamProps) {
    const theme = useTheme();
    const { themer } = useStyleContext();


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '50px',
            padding: ' 10% 0px',
            backgroundColor: themer.palette.accent.main
        }}>


            <FadeIn direction={'top'} distance='2' >

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',


                }}>
                    <Typography variant="h2" component="div" fontFamily={'Libre Franklin , sans-serif'} color={'white'}>
                        Learn More
                    </Typography>
                    <Typography variant="h6" component="div" color={'white'}>
                        Read these articels to learn more about the our product and it's benefits.
                    </Typography>

                </div>


            </FadeIn>



            <Grid container display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}

                md={12}
                sm={8}

                xs={12}


                gap={2}>

                {teams.map((team: Team) => (
                    <Grid item xs={8} md={5.5}>
                        <FadeIn direction='bottom'>
                            <TeamCard team={team} />
                        </FadeIn>
                    </Grid>
                ))}


            </Grid>



        </div>



    )
}

export default BlogSection;

