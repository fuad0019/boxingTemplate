import { Box, Button, Grid, Typography, darken, useTheme, lighten } from "@mui/material"
import PositionCard from "../components/PositionsCards"
import FadeIn from "../components/FadeIn"
import TeamCard from "../components/ShowcaseCard"
import environment from '../assets/images/underway.jpg'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useNavigatorContext } from "../contexts/NavigateContext"
import { useStyleContext } from "../contexts/StyleContext"
import { useLanguageContext } from "../contexts/LanguageContext"

export interface BufferProp {

    title: string,
    description: string,
    buttonText: string

}




function BufferSection({ title, description, buttonText }: BufferProp) {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const { navigateToPage, findPageByPath } = useNavigatorContext();
    const { languages, setActiveLanguage, language } = useLanguageContext();

    const { themer } = useStyleContext();



    return (


        <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{
                backgroundImage: `url(${environment})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: '25% 0%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: 500,
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.5s ease-in-out',
                opacity: 0.7

            }}>

            </div>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'black',
                display: 'flex',
                opacity: 0.4,

            }}>

            </div>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}>

                <FadeIn direction='bottom'>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: 30,
                        height: '100%'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '50%',
                            gap: '10px'

                        }}>
                            <Typography variant="h3" fontSize={{ md: '2.5rem', xs: '2.2rem' }} component="div" fontFamily={'Libre Franklin , sans-serif'} color={themer.palette.text.primary}>
                                {title}
                            </Typography>

                            <Typography variant="h6" fontSize={{ md: '1rem', xs: '0.8rem' }} component="div" color={themer.palette.text.primary} textAlign={'center'}>
                                {description}
                            </Typography>
                        </div>
                        <Button variant="outlined" sx={{
                            width: 'fit-content',
                            color: themer.palette.primary.main,
                            borderColor: themer.palette.primary.main,
                        }} onClick={() => navigateToPage(findPageByPath('/About'))} onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)} size="large">{buttonText}</Button>

                    </div>




                </FadeIn>
            </div>


        </div>





    )
}

export default BufferSection;

