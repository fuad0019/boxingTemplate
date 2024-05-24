import { Box, Button, Grid, Typography, darken, useTheme, lighten } from "@mui/material"
import PositionCard from "../components/PositionsCards"
import FadeIn from "../components/FadeIn"
import TeamCard from "../components/TeamCard"
import frankincense from '../assets/images/frankincense2.jpg'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useNavigatorContext } from "../contexts/NavigateContext"
import { useStyleContext } from "../contexts/StyleContext"

export interface BufferProp {

    title: string,
    description: string,
    buttonText: string

}




function ParallexSection({ title, description, buttonText }: BufferProp) {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const { navigateToPage, findPageByPath } = useNavigatorContext();

    const { themer } = useStyleContext();



    return (


        <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{
                backgroundImage: `url(${frankincense})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: 350,
          

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
                opacity: 0.1,
                
            }}>

            </div>

            


        </div>





    )
}

export default ParallexSection;

