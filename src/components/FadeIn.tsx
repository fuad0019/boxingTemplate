import React, { ReactNode } from 'react';
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
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      let counter = 0;
      entries.forEach(entry => {
        console.log(counter++)

        if (entry.isIntersecting) {
          setVisible(true)

        }

      });
    });
    if (domRef.current) { // Make sure to check if the ref is available before observing
      observer.observe(domRef.current);
    }
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={isVisible ? delay ? { transitionDelay: delay } : {} : style[ matchesMD ? direction : 'top'].isHidden}
      ref={domRef}
    >
      {children}
    </div>
  );
}




export default FadeIn;