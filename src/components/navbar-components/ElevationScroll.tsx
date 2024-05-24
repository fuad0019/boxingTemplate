import { Slide, useScrollTrigger, useTheme } from "@mui/material";
import React from "react";
import { useStyleContext } from "../../contexts/StyleContext";




interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
    trigger: boolean
    }


export default function ElevationScroll(props: Props) {
    const { children, window, trigger } = props;
  
    const theme = useTheme();
    const {themer} = useStyleContext();

  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      position: 'fixed', // Change from 'static' to 'fixed'
      style: {
        transition: 'background-color 0.2s ease',
        color: 'white',
        backgroundColor: trigger ? '#1D1D1B' : 'transparent',
        width: '100%', // Ensure the navbar spans the full width
        top: 0, // Position at the top of the page
        left: 0, // Position at the left of the page
        zIndex: 1000, // Ensure the navbar is above other content
      },
    });
  }