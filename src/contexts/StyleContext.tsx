import { createContext, ReactNode } from 'react';

import styles from '../styling/HeroSection.module.scss';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import useNavigateHook from '../hooks/navigateHook';


interface StyleContextProps {
    children: ReactNode
}


const theme = createTheme();

theme.typography.h1 = {
    fontSize: '4rem', // default size
    [theme.breakpoints.up('xs')]: {
        fontSize: '4rem', // size at the 'sm' breakpoint
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 700,
        letterSpacing: '-2.58px',
        margin: '0',
        width: '75.12%',
        paddingRight:0,
        
        
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '6rem', // size at the 'md' breakpoint
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 700,
        letterSpacing: '-2.58px',
        margin: '0px 24.88% 0px 0%',
        width: '75.12%',
    },

};


theme.typography.h2 = {
    fontSize: '1.5rem', // default size
    [theme.breakpoints.up('xs')]: {
        fontSize: '2.0rem', // size at the 'sm' breakpoint
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem', // size at the 'md' breakpoint
    },
    // Add more breakpoints as needed
};


theme.typography.h3 = {
    fontSize: '1.5rem', // default size
    [theme.breakpoints.up('xs')]: {
        fontSize: '2.5rem', // size at the 'sm' breakpoint
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem', // size at the 'md' breakpoint
    },
    // Add more breakpoints as needed
};


theme.typography.h6 = {
    fontSize: '0.5rem', // default size
    [theme.breakpoints.up('xs')]: {
        fontSize: '1rem', // size at the 'sm' breakpoint
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem', // size at the 'md' breakpoint
    },
    // Add more breakpoints as needed
};  


export const styleContext = createContext({

});

export default function StyleContext({ children }: StyleContextProps) {





    return (
        <ThemeProvider theme={theme} >
            {children}

        </ThemeProvider>

    )
}
