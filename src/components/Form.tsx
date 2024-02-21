import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, TextField } from '@mui/material';



export default function Form() {



    return (
        <Box
            sx={{
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 5
            }}
        >

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10
            }}>
                <TextField variant='filled' InputProps={{

                    style: {
                        borderColor: 'white', // Change border color to white
                        color: 'white', // Change text color to white

                    },
                }}
                    InputLabelProps={{
                        style: {
                            color: 'white', // Change label color to white
                        },
                    }} fullWith label="Navn" placeHolder="123" id="fullWidth" />
                <TextField variant='filled' InputProps={{

                    style: {
                        color: 'white', // Change text color to white

                        borderColor: 'white', // Change border color to white
                    },
                }}
                    InputLabelProps={{
                        style: {
                            color: 'white', // Change label color to white
                        },
                    }} fullWith type="email" label="Email" id="fullWidth" />
                <TextField variant='filled' InputProps={{

                    style: {
                        color: 'white', // Change text color to white

                        borderColor: 'white', // Change border color to white
                    },
                }}
                    InputLabelProps={{
                        style: {
                            color: 'white', // Change label color to white
                        },
                    }} fullWith type="tel" label="Telefonnummer" id="fullWidth" />
            </div>

            <TextField variant='filled' InputProps={{

                style: {
                    color: 'white', // Change text color to white

                    borderColor: 'white', // Change border color to white
                },
            }}
                InputLabelProps={{
                    style: {
                        color: 'white', // Change label color to white
                    },
                }} multiline rows={10} label="Besked" id="fullWidth" />

            <FormGroup>
                <FormControlLabel control={<Checkbox
                    defaultChecked
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 },
                    '&.Mui-checked': {
                        color: 'white', // color when checkbox is checked
                    }}}
                />} sx={{color: 'white'}} label="Jeg accepterer, at Carelink må opbevare mine information med henblik på at kontakte mig. Læs mere i Persondatapolitikken" />

            </FormGroup>

            <Button sx={{  paddingY: '15px', marginLeft: 0, width: 'fit-content', backgroundColor: 'rgb(255, 255, 255,0.3)', color: 'black', ":hover": { backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(0,0,0)' } }} variant='contained' size="large">SEND BESKED</Button>



        </Box>
    );
}


