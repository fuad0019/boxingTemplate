import { Box, Button, Grid, Typography, useTheme } from "@mui/material"
import PositionCard from "../components/PositionsCards"
import FadeIn from "../components/FadeIn"
import TeamCard from "../components/TeamCard"
import boxingClub from '../assets/images/boxinggym2.jpeg'
import { useNavigate } from "react-router-dom"
import { useState } from "react"


export interface BufferProp {

    title: string,
    description: string,
    buttonText: string

}




function BufferSection({ title, description, buttonText }: BufferProp) {
    const theme = useTheme();
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);


    return (


        <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{
                backgroundImage: `url(${boxingClub})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: 500,
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.5s ease-in-out'

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
                        gap: '30px'


                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '50%',
                            gap: '10px'

                        }}>
                            <Typography variant="h3" fontSize={{ md: '2.5rem', xs: '2.2rem' }} component="div" fontFamily={'Libre Franklin , sans-serif'} color={"white"}>
                                {title}
                            </Typography>

                            <Typography variant="h6" fontSize={{ md: '1rem', xs: '0.8rem' }} component="div" color={"white"} textAlign={'center'}>
                                Hjemstedet for profesionelle og amatør boksere i 30 år. Gorilla MMA har produceret Landsholdskæmpere og kvalitets fighters siden begyndelsen. Klubbens principper og karakter kan mærkes i dens kultur. Vind eller forsvind.
                            </Typography>
                        </div>
                        <Button onClick={() => navigate('Om')} onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)} sx={{ paddingY: '15px', marginLeft: 0, width: 'fit-content', backgroundColor: 'rgb(0,0,0)', ":hover": { backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(0,0,0)' } }} variant='contained' size="large">{buttonText}</Button>

                    </div>









                </FadeIn>
            </div>

        </div>





    )
}

export default BufferSection;

