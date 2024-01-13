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
            width: '100%',

            maxHeight: { md: 300, xs: 200 },


        }}>


            <CardMedia
                component='img'
                sx={{
                    width: '100%',
                    maxHeight: { md: 300, xs: 200 },
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
                top: { md: 190, xs: 75 }


            }}>
                <Paper sx={{ padding: '7% 5%', textAlign: 'left', backgroundColor: 'white', color: 'black' }} elevation={2}>
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