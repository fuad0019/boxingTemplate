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
      style: {
        transition: 'background-color 0.2s ease',
        color: trigger? themer.palette.text.primary : theme.palette.text.secondary

      },
    });
  }