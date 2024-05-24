import IntroSection from "../sections/IntroSection";
import horizon from '../assets/images/sunset.jpeg';
import MapSection from "../sections/MapSection";
import ContactSection from "../sections/ContactSection";
import { Typography } from "@mui/material";

function Contact() {





    return (
        <div >
           

            <div style={{ marginBottom: 100 }}>
                <IntroSection title="Contact" description="Request a qoute or contact us for more information!" image={horizon} backgroundPosition="25% 10%"></IntroSection>
            </div>


            <div style={{ marginBottom: 100 }}>

                <ContactSection ></ContactSection>
            </div>



        </div>



    )

}

export default Contact;