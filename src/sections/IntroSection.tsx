import { Box, Grid, Typography, useTheme } from "@mui/material";
import PositionCard from "../components/PositionsCards";
import FadeIn from "../components/FadeIn";
import TeamCard from "../components/TeamCard";
import { useStyleContext } from "../contexts/StyleContext";


export interface IntroProp {

    title: string,
    description: string,
    image?: string
    backgroundPosition?: string
}




function IntroSection({ title, description, image, backgroundPosition }: IntroProp) {
    const theme = useTheme();

    const {themer} = useStyleContext();


    return (

        <div style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            height: 400


        }}>
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: backgroundPosition ? backgroundPosition : 'center',
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
                backgroundColor: 'black',
                opacity: 0.5,
                height: '100&',
                width: 'auto'

            }}>





            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}>


                <FadeIn direction='bottom'>


                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: '100%',

                    }}>
                        <Typography variant="h3" component="div" fontFamily={'Libre Franklin , sans-serif'} color={themer.palette.text.primary}>
                            {title}
                        </Typography>

                        <Typography variant="h6" component="div" color={themer.palette.text.primary}>
                            {description.length !== 0 ? description : 'Coming Soon'}
                        </Typography>
                    </div>

                </FadeIn>
            </div>

        </div>





    )
}

export default IntroSection;

