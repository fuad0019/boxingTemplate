import { Slide, useScrollTrigger } from "@mui/material";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
    trigger: boolean;
    }


export default function HideOnScroll(props: Props) {
    const { children, window, trigger } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.

  
    return (
      <Slide appear={false} direction="down" in={ !trigger}>
        {children}
      </Slide>
    );
  }