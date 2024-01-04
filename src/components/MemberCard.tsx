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

            minHeight: { md: 425, xs: 325 },

        }}>


            <CardMedia
                component='img'
                sx={{
                    width: '100%',
                    minHeight: { md: 325, xs: 225 },
                    objectFit: 'cover',
                    borderRadius: 2
                }}
                image={member.image}
            />
            <CardContent sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.0)', // Semi-transparent white background
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                top: { md: 275, xs: 175 }


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