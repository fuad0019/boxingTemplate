import { createContext, ReactNode, useContext } from 'react';

import styles from '../styling/HeroSection.module.scss';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import useNavigateHook from '../hooks/navigateHook';
import lightTheme from './themes/lightTheme';
import purpleTheme from './themes/purpleTheme';
import darkTheme from './themes/darkTheme';


interface StyleContextProps {
    children: ReactNode
}

const themer= darkTheme


const theme = createTheme(themer);

theme.typography.h1 = {
    fontSize: '4rem', // default size

    [theme.breakpoints.up('xs')]: {
        fontSize: '4rem', // size at the 'sm' breakpoint
        fontWeight: 700,
        letterSpacing: '-2.58px',
        
        
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '6rem', // size at the 'md' breakpoint
        fontWeight: 700,
        letterSpacing: '-2.58px',
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


theme.components = {
    MuiFilledInput: {
        styleOverrides: {
            underline: {
                '&:after': {
                    borderBottomColor: 'gray', // Color of the line when active
                },
               
            }
        }
    }
}

export const styleContext = createContext({

});


export default function StyleContext({ children }: StyleContextProps) {





    return (
        <ThemeProvider theme={theme}  >
            <styleContext.Provider value={{themer}}>
            {children}

            </styleContext.Provider>

        </ThemeProvider>

    )
}

function useStyleContext() {
    return useContext(styleContext);
  }

export {useStyleContext}
