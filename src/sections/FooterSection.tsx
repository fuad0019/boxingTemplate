import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FooterCard from '../components/FooterCard';
import Logo2 from '../assets/images/logo2small.png';
import { Button, Grid, Stack } from '@mui/material'; // Import Stack component from @mui/material package
import { useStyleContext } from '../contexts/StyleContext';
import { useNavigatorContext } from '../contexts/NavigateContext';
import { LinkOffTwoTone } from '@mui/icons-material';

// TODO remove, this demo shouldn't need to reset the theme.

export default function FooterSection() {

    const { navigateToPage, findPageByPath, pages, setActivePage } = useNavigatorContext();

    const { themer } = useStyleContext();

    function Copyright() {
        return (
            <Typography variant="body2" color={'white'}>
                {'Copyright © '}
                <Link color="inherit" href="https://Majabe.so/">
                    Majabe Essence
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const footerInfoList = [
        {
            title: '',
            content: (
                <div style={{ color: 'white' }} >
                    <Typography>
                    </Typography>
                    <Typography>
                    </Typography>
                    <Typography>
                    </Typography>
                    <Typography>
                    </Typography>

                </div>

            )
        },
        {
            title: '',
            content: (
                <div style={{ color: 'white' }} >
                    <Typography variant='body1'>
                    </Typography>
                    <Typography>
                    </Typography>
                    <Typography>
                    </Typography>
                    <Typography>
                    </Typography>

                </div>
            )
        }
    ]

    return (
        <Box component="footer" sx={{ backgroundColor: 'black', paddingX: 20, paddingY: 10 }}>
            <Grid md={10} container spacing={2} justifyContent="space-between">
                <Grid item xs={12} sm={6} md={3} >
                    <Stack spacing={3}>

                        <Typography variant="h6" gutterBottom>Majabe Essence</Typography>
                        <Stack>
                            <Typography>Village Octabar</Typography>
                            <Typography>Sanaag</Typography>
                            <Typography>Somalia</Typography>

                        </Stack>
                        <Stack>
                            <Typography>customerservice@majabe.so</Typography>
                        </Stack>

                        <Stack>
                            <Typography>0045-21516102</Typography>
                        </Stack>


                    </Stack>

                </Grid>
                <Grid item xs={12} sm={6} md={2} gap={20}>
                    <Stack spacing={3}>

                        <Typography variant="h6"  gutterBottom>Information</Typography>
                        <Link sx={{textDecoration: 'underline', cursor: 'pointer'}}
                            onClick={() => { navigateToPage(findPageByPath('/Contact')) }}

                        >
                           Contact
                        </Link>
                     
                    </Stack>

                </Grid>
                <Grid item xs={12} sm={6} md={2} gap={20}>
                    <Stack spacing={3}>

                        <Typography variant="h6" gutterBottom>Menu</Typography>
                        {pages.filter((page) => page.title != 'Contact').map((page) => (
                            <Link sx={{textDecoration: 'underline', cursor: 'pointer'}}
                                onClick={() => { navigateToPage(page) }}

                            >
                                {page.title}
                            </Link>
                        ))}
                    </Stack>

                </Grid>
                <Grid item xs={12} sm={6} md={2} gap={20}>
                    <Stack spacing={3}>

                        <Typography variant="h6" gutterBottom>Terms and Pol.</Typography>
                        <Link href="#" color="inherit">Privacy Policy</Link>
                        <Stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                            <img src={Logo2} alt="" height={'auto'} width={130} />
                            <Copyright />
                        </Stack>
                    </Stack>

                </Grid>
            </Grid>
        </Box>
    );
}