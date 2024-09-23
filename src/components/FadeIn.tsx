import React, { ReactNode, useEffect, useMemo } from 'react';
import '../styling/FadeIn.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Typography, useTheme } from "@mui/material";


// Required props
interface FadeInRequiredProps {
  direction: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode
}
// Optional props
interface FadeInOptionalProps {
  distance?: string;
  delay?: string
}

interface FadeInProps extends FadeInRequiredProps, FadeInOptionalProps {

}
function FadeIn({ direction, distance = '5', children, delay }: FadeInProps) {
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));




  const style = {
    left: {

      isHidden: {
        transform: `translateX(-${distance}vw)`

      }

    },

    right: {

      isHidden: {
        transform: `translateX(${distance}vw)`

      }

    },

    bottom: {

      isHidden: {
        transform: `translateY(${distance}vh)`

      }

    },
    top: {

      isHidden: {
        transform: `translateY(-${distance}vh)`

      }

    }
  }
  const [isVisible, setVisible] = React.useState(false);

  const domRef = React.useRef<HTMLDivElement>(null);



  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    if (domRef.current) { // Make sure to check if the ref is available before observing
      observer.observe(domRef.current);
    }
    return () => observer.disconnect(); // Cleanup observer
  }, []);

  
  const computedStyle = useMemo(() => {
    if (isVisible) {
      return delay ? { ...style, transitionDelay: delay } : style;
    } else {
      return style[matchesMD ? direction : 'top'].isHidden;
    }
  }, [isVisible, delay, style, matchesMD, direction]);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={computedStyle}
      ref={domRef}
    >
      {children}
    </div>
  );
}




export default FadeIn;