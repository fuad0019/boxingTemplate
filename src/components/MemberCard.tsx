import * as React from 'react';
import { Box, Card, CardContent, Typography, CardMedia, useTheme, CardActions, Button, Paper } from '@mui/material';
import { Team } from '../sections/TeamSection';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Member } from '../sections/memberSection';


interface MemberCardProp {
    member: Member
}


export default function MemberCard({ member }: MemberCardProp) {

    const navigate = useNavigate();


    const [isHovered, setIsHovered] = useState(false);

    return (


        <Card elevation={0} sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.0)', // Semi-transparent white background
            position: 'relative',
            width: {md: '35vh' , sm:'30vh',xs:'25vh'},
            minWidth: 200,
            height: {md: '50vh',sm: '40vh',xs: '45vh'},
            minHeight: 250,
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row'


        }}>


            <CardMedia
                component='img'
                sx={{
                    width: {md: '35vh', sm:'30vh',  xs:'25vh'},
                    minWidth: 180,
                    height: {md: '40vh',sm: '35vh', xs:'35vh'},
                    minHeight: 210,     
                    objectFit: 'cover',
                    borderRadius: 2,
                    objectPosition: '20% 20%' // Equivalent to 'background-position' in CSS
                }}
                image={member.image}
            />
            <CardContent sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.0)', // Semi-transparent white background
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                top: '68%',
         

            }}>
                <Paper sx={{ padding: '7% 5%', textAlign: 'left', backgroundColor: 'white', color: 'black',  }} elevation={2}>
                    <Typography gutterBottom variant="body1" component="div" fontWeight={600}>
                        {member.name}
                    </Typography>
                    <Typography variant="body2" color='text.secondary' >
                        {member.position}
                    </Typography>

                </Paper>

            </CardContent>
        </Card>

    );
}