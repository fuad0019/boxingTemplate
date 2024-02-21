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


function TeamSection({ teams }: TeamProps) {
    const theme = useTheme();
    const { themer } = useStyleContext();


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '50px'
        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center'

            }}>
                <Typography variant="h2" component="div" fontFamily={'Libre Franklin , sans-serif'} color={themer.palette.text.primary}>
                    VÆLG DIT HOLD
                </Typography>

                <Typography variant="h6" component="div" color={themer.palette.text.secondary}>
                    Se en række af de hold vi tilbyder
                </Typography>
            </div>






            <Grid container display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}

                md={10}
                sm={8}

                xs={12}
            

                gap={theme.spacing(10)}>

                {teams.map((team: Team) => (
                    <Grid item xs={8} md={4}>
                        <FadeIn direction='bottom'>

                            <TeamCard team={team} />
                        </FadeIn>
                    </Grid>
                ))}


            </Grid>



        </div>



    )
}

export default TeamSection;

