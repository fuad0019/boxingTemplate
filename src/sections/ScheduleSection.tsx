import { Box, Grid, Typography, useTheme } from "@mui/material"
import PositionCard from "../components/PositionsCards"
import FadeIn from "../components/FadeIn"
import TeamCard from "../components/TeamCard"

import Schedule from '../components/Schedule';
import appointments from '../assets/scripts/today-appointments';

export interface Team {

    title: string,
    description: string,
    image: string,
    index: number

}


interface TeamProps {
    teams: Team[],
}


function ScheduleSection() {
    const theme = useTheme();


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

            }}>
                <Typography variant="h3" component="div" fontFamily={'Libre Franklin , sans-serif'} color={"white"}>
                    SKEMA
                </Typography>

                <Typography variant="h6" component="div" color={"white"}>
                    Se hvornår vores hold træner
                </Typography>
            </div>

                <Schedule appointments={appointments} />

        </div>



    )
}

export default ScheduleSection;




