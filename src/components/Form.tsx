import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, TextField } from '@mui/material';
import sendMail from '../services/send';

export default function Form() {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [isAccepted, setIsAccepted] = useState(false);

    const [emailSent, setEmailSent] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSendEmail = async () => {

        if (!companyName || !email || !phoneNumber || !message || !isAccepted) {
            alert('Please fill all fields and accept the privacy policy!');
            return;
        }
        // Implement sending logic here
        const mailData = {
            from: email,
            to: 'fuadh73@gmail.com',
            name: companyName , 
            subject: 'Query from Majabe Essence Website',
            message: message,
        };

        try {
            await sendMail(mailData);
            setEmailSent(true);
            setError(null);
            alert('Form submitted successfully!');

        } catch (error: any) {
            console.error('Error sending email:', error.message);
            setEmailSent(false);
            setError(error.message);
        }
    };



    return (
        <Box
            sx={{
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 5
            }}
        >
            {/* Company Name Input */}
            <TextField
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                variant='filled'
                InputProps={{
                    style: {
                        color: 'white',
                        borderColor: 'white',
                    },
                }}
                InputLabelProps={{
                    style: {
                        color: 'white',
                    },
                }}
                fullWidth
                label="Company Name"
                placeholder="Enter your company name"
            />

            {/* Email Input */}
            <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant='filled'
                InputProps={{
                    style: {
                        color: 'white',
                        borderColor: 'white',
                    },
                }}
                InputLabelProps={{
                    style: {
                        color: 'white',
                    },
                }}
                fullWidth
                type="email"
                label="Email"
                placeholder="Enter your email"
            />

            {/* Phone Number Input */}
            <TextField
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                variant='filled'
                InputProps={{
                    style: {
                        color: 'white',
                        borderColor: 'white',
                    },
                }}
                InputLabelProps={{
                    style: {
                        color: 'white',
                    },
                }}
                fullWidth
                type="tel"
                label="Phone Number"
                placeholder="Enter your phone number"
            />

            {/* Message Input */}
            <TextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variant='filled'
                InputProps={{
                    style: {
                        color: 'white',
                        borderColor: 'white',
                    },
                }}
                InputLabelProps={{
                    style: {
                        color: 'white',
                    },
                }}
                multiline
                rows={10}
                label="Message"
                placeholder="Enter your message"
            />

            {/* Acceptance Checkbox */}
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox
                        checked={isAccepted}
                        onChange={(e) => setIsAccepted(e.target.checked)}
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '&.Mui-checked': {
                                color: 'white',
                            }
                        }}
                    />}
                    sx={{ color: 'white' }}
                    label="I accept that Majabe Essence may store my information for the purpose of contacting me. Read more in the Privacy Policy"
                />
            </FormGroup>

            {/* Submit Button */}
            <Button
                onClick={handleSendEmail}
                sx={{
                    paddingY: '15px',
                    marginLeft: 0,
                    width: 'fit-content',
                    backgroundColor: 'rgb(255, 255, 255,0.3)',
                    color: 'black',
                    ":hover": { backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(0,0,0)' }
                }}
                variant='contained'
                size="large"
            >
                SEND MESSAGE
            </Button>
        </Box>
    );
}
