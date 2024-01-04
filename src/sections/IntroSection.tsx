import { Box, Grid, Typography, useTheme } from "@mui/material";
import PositionCard from "../components/PositionsCards";
import FadeIn from "../components/FadeIn";
import TeamCard from "../components/TeamCard";


export interface IntroProp {

    title: string,
    description: string,
    image ?: string
    backgroundPosition?: string
}




function IntroSection({ title, description, image, backgroundPosition }: IntroProp) {
    const theme = useTheme();


    return (

        <div style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            height: 400


        }}>
          <div style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: backgroundPosition? backgroundPosition : 'center' ,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100%',
                width: 'auto'
   

            }}>

            </div>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center'
            }}>


                <FadeIn direction='bottom'>


                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',

                    }}>
                        <Typography variant="h3" component="div" fontFamily={'Libre Franklin , sans-serif'} color={"white"}>
                            {title}
                        </Typography>

                        <Typography variant="h5" component="div" color={"white"}>
                            {description}
                        </Typography>
                    </div>

                </FadeIn>


            </div>
        </div>




    )
}

export default IntroSection;

