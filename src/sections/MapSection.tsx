import { Box, Button, Grid, Typography, useTheme } from "@mui/material"
import PositionCard from "../components/PositionsCards"
import FadeIn from "../components/FadeIn"
import TeamCard from "../components/TeamCard"
import boxingClub from '../assets/images/boxingclub.jpg'
import MapComponent from "../components/Map"




function MapSection() {
    const theme = useTheme();


    return (


        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '50px',
            padding: 100,
        }}>
            

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center'

            }}>
                <Typography variant="h3" component="div" fontFamily={'Libre Franklin , sans-serif'} color={"white"}>
                    FIND VEJ TIL KLUBBEN
                </Typography>

                <Typography variant="h5" component="div" color={"white"}>
                    Se på kortet hvor klubben er lokaliseret
                </Typography>
            </div>

            <Grid textAlign={'center'} alignItems={'center'} justifyContent={'center'} height={'50vh'} width={'50vw'} direction={'column'}>
                <MapComponent></MapComponent>
                <Typography variant="body1" component="div" color={"white"} marginTop={'10px'}>
                Sankt Anna Gade
                </Typography>

            </Grid>





        </div>






    )
}

export default MapSection;

