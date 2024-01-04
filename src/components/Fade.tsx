import React, { ReactNode } from 'react';
import './FadeIn.css';


// Required props
interface FadeInRequiredProps {
  children: ReactNode
}
// Optional props
interface FadeInOptionalProps {
  delay?: string
}

interface FadeInProps extends FadeInRequiredProps, FadeInOptionalProps {

}
function Fade({children, delay}: FadeInProps) {


  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) { // Make sure to check if the ref is available before observing
      observer.observe(domRef.current);
    }
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={ delay? {transitionDelay: delay}: {} }
      ref={domRef}
    >
      {children}
    </div>
  );
}




export default Fade;