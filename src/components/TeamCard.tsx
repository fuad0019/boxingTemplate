import * as React from 'react';
import { Box, Card, CardContent, Typography, CardMedia, useTheme, CardActions, Button } from '@mui/material';
import { Team } from '../sections/TeamSection';
import { useState } from 'react';
import { useNavigatorContext } from '../contexts/NavigateContext';


interface TeamCardProp {
    team: Team
}


export default function TeamCard({ team }: TeamCardProp) {

    const { navigateToPage, findPageByPath } = useNavigatorContext();



    const [isHovered, setIsHovered] = useState(false);

    return (

        <Card key={team.index} sx={{ position: 'relative', height: '400px' }}>
            <CardMedia
                component="img"
                height="100%"
                image={team.image}
                alt={`Card ${team.index + 1}`}
                sx={{
                    opacity: 0.3,
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.5s ease-in-out'
                }} // Darken the image by reducing opacity
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
                    color: 'common.white',


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
                        alignItems:'left',    
                        gap: 12                    
                        
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '80%' }}>
                            <Typography variant="h4" component="div" fontFamily={'Libre Franklin , sans-serif'} >
                                {team.index === 0 ? 'BOXING' : 'CROSSFIT'}
                            </Typography>
                            <Typography variant="body2" fontWeight={100}>
                                {team.index === 0
                                    ? 'Vi hjælper både folk der vil være bedre til boksning og personer der vil i god form.' : 'Her opbygger du styrke, kondition, smidighed, koordination og fokus. - Hver gang!'}
                            </Typography>
                        </div>


                        <Button onClick={() => navigateToPage(findPageByPath('/Hold'))} onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)} sx={{ paddingY: '15px', marginLeft: 0, width: 'fit-content', backgroundColor: 'rgb(0,0,0)', ":hover": { backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(0,0,0)' } }} variant='contained' size="large">SE MERE</Button>
                    </div>

                </CardContent>


            </Box>
        </Card>

    );
}