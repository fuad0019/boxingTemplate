import * as React from 'react';
import { Box, Card, CardContent, Typography, CardMedia, useTheme, CardActions, Button, Grid } from '@mui/material';
import { Team } from '../sections/TeamSection';
import PlaceIcon from '@mui/icons-material/Place';


interface ContactMethod {
    title: string,
    description: React.ReactNode,
    content: React.ReactNode

}

interface ContactElementProp {
    contactElement: ContactMethod
}


export default function ContactElement({ title, description, content }: ContactMethod) {




    return (

            <Grid container direction={'row'} gap={3} alignItems={'center'} >
                <Grid item xs={2} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                    <div style={{
                        backgroundColor: '#212227',
                        borderRadius: '50%',
                        width: '75%',
                        paddingTop: '75%', // same as width
                        position: 'relative',
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {content}
                        </div>
                    </div>

                </Grid>
                <Grid item xs={7}>
                    <Typography color={'white'} fontWeight={'bold'}>{title}:{description}</Typography>

                </Grid>

            </Grid>


    );
}