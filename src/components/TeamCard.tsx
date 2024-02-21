import * as React from 'react';
import { Box, Card, CardContent, Typography, CardMedia, useTheme, CardActions, Button, darken } from '@mui/material';
import { Team } from '../sections/TeamSection';
import { useState } from 'react';
import { useNavigatorContext } from '../contexts/NavigateContext';
import { useStyleContext } from '../contexts/StyleContext';


interface TeamCardProp {
    team: Team
}


export default function TeamCard({ team }: TeamCardProp) {

    const { navigateToPage, findPageByPath } = useNavigatorContext();



    const [isHovered, setIsHovered] = useState(false);
    const { themer } = useStyleContext();

    return (

        <Card key={team.index} sx={{ position: 'relative', height: { md: 400, xs: 300 } }}>

            <CardMedia
                component="img"
                height="100%"
                width='100%'
                image={team.image}
                alt={`Card ${team.index + 1}`}
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
                opacity: 0.2
                , position: 'absolute',
                backgroundColor: themer.palette.secondary.main

            }}>


            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,



                }}
            >
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 4,
                    height: '100%'



                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'left',
                        gap: 12

                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '80%' }}>
                            <Typography color={themer.palette.text.primary} variant="h4" component="div" fontFamily={'Libre Franklin , sans-serif'} >
                                {team.index === 0 ? 'BOXING' : 'CROSSFIT'}
                            </Typography>
                            <Typography color={themer.palette.text.primary} variant="body2" fontWeight={100}>
                                {team.index === 0
                                    ? 'Vi hjælper både folk der vil være bedre til boksning og personer der vil i god form.' : 'Her opbygger du styrke, kondition, smidighed, koordination og fokus. - Hver gang!'}
                            </Typography>
                        </div>


                        <Button onClick={() => navigateToPage(findPageByPath('/Hold'))} onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)} sx={{paddingY: '15px', marginLeft: 0, width: 'fit-content',color: themer.palette.text.button, backgroundColor: themer.palette.accent.main, ":hover": {backgroundColor: darken(themer.palette.accent.main,0.2)} }} variant='contained' size="large">SE MERE</Button>
                    </div>

                </CardContent>


            </Box>
        </Card>

    );
}