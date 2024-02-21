import { Box, Button, Grid, Typography, useTheme } from "@mui/material"
import PositionCard from "../components/PositionsCards"
import FadeIn from "../components/FadeIn"
import TeamCard from "../components/TeamCard"
import boxingClub from '../assets/images/boxingclub.jpg'
import MapComponent from "../components/Map"
import { useStyleContext } from "../contexts/StyleContext"




function MapSection() {
    const theme = useTheme();
    const {themer} = useStyleContext();

    const position = [56.15, 10.22]; // Latitude and Longitude
    const address = "Sankt Anne Gade, Århus 8210"



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
                <Typography variant="h3" component="div" fontFamily={'Libre Franklin , sans-serif'} color={themer.palette.text.primary}>
                    FIND VEJ TIL KLUBBEN
                </Typography>

                <Typography variant="h5" component="div" color={themer.palette.text.primary}>
                    Se på kortet hvor klubben er lokaliseret
                </Typography>
            </div>

            <Grid textAlign={'center'} alignItems={'center'} justifyContent={'center'} height={'50vh'} width={'75vw'} direction={'column'}>
                <MapComponent position={position} address={address}></MapComponent>
           

            </Grid>




            
        </div>






    )
}

export default MapSection;

