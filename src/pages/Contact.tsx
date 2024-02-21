import IntroSection from "../sections/IntroSection";
import talking from '../assets/images/talking.jpg';
import MapSection from "../sections/MapSection";
import ContactSection from "../sections/ContactSection";
import { Typography } from "@mui/material";

function Contact() {





    return (
        <div >
           

            <div style={{ marginBottom: 100 }}>
                <IntroSection title="Kontakt" description="Se hvordan du kan kontakte klubben" image={talking} backgroundPosition="25% 75%"></IntroSection>
            </div>


            <div>

                <ContactSection ></ContactSection>
            </div>

            <div style={{ marginBottom: 100 }}>
                <MapSection ></MapSection>

            </div>



        </div>



    )

}

export default Contact;