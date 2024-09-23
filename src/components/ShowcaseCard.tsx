import * as React from 'react';
import { Box, Card, CardContent, Typography, CardMedia, useTheme, CardActions, Button, darken } from '@mui/material';
import { useState } from 'react';
import { useNavigatorContext } from '../contexts/NavigateContext';
import { useStyleContext } from '../contexts/StyleContext';

export interface ShowcaseItem {

    title: string,
    description: string,
    image: string,
    index: number,
    context: string,
    author: string,
    date: string

}

interface ShowcaseCardProp {
    showcaseItem: ShowcaseItem
}


export default function ShowcaseCard({ showcaseItem }: ShowcaseCardProp) {

    const { navigateToPage, findPageByPath } = useNavigatorContext();



    const [isHovered, setIsHovered] = useState(false);
    const { themer } = useStyleContext();
    const [elevation, setElevation] = useState(0);

    const handleCardClick = (index) => {
        console.log(index)
        navigateToPage(findPageByPath('/Article', index));
    };


    return (

        <Card elevation={elevation} onClick={() => handleCardClick(showcaseItem.index)} onMouseEnter={() => {setIsHovered(true); setElevation(5)}}
        onMouseLeave={() => {setIsHovered(false); setElevation(0)}} key={showcaseItem.index} sx={{ position: 'relative', height: { md: 400, xs: 300 }, cursor: isHovered? 'pointer': 'none' }}>

            <CardMedia
                component="img"
                height="100%"
                width='100%'
                image={showcaseItem.image}
                alt={`Card ${showcaseItem.index + 1}`}
                sx={{
                    opacity: 0.7,
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.5s ease-in-out',

                }} // Darken the image by reducing opacity
            />

            <Box style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.2, 
                position: 'absolute',
                backgroundColor: 'black'

            }}>


            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    alignItems: 'center',



                }}
            >
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 4,



                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 12

                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '7px', width: '80%' }}>
                            <Typography color={themer.palette.text.primary} variant="h4" component="div" fontFamily={'Libre Franklin , sans-serif'} >
                                {showcaseItem.title}
                            </Typography>
                            
                        </div>

                        <Button variant="outlined" sx={{
                                width: 'fit-content',
                                color: themer.palette.primary.main,
                               
                                borderColor: themer.palette.primary.main
                            }} onClick={() => handleCardClick(showcaseItem.index)} onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)} size="large">Read More</Button>
                        
                    </div>

                </CardContent>


            </Box>
        </Card>

    );
}