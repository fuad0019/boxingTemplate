import IntroSection from "../sections/IntroSection";
import horizon from '../assets/images/sunset.jpeg';
import MapSection from "../sections/MapSection";
import ContactSection from "../sections/ContactSection";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguageContext } from "../contexts/LanguageContext";

function Contact() {


    const location = useLocation();
    const state = location.state;

    function createQuotaMessage(state: any) {
        const { product, quantity, totalPrice } = state.quota;
        const { price, title } = product

        return `--------------------------------------\nProduct:\n - Title: ${title}\n - Price: $${price}\n - Quantity: ${quantity} Tonnes\nTotal Price: $${totalPrice}\n--------------------------------------\n`;
    }

    useEffect(() => {
        if (state === null) return;
        console.log(state)
        setQuotaMessage(createQuotaMessage(state));
    }, [])

    const [quotaMessage, setQuotaMessage] = useState(null)
    const { languages, setActiveLanguage, language } = useLanguageContext();



    return (
        <div >
            <div style={{ marginBottom: 100 }}>
                <IntroSection title={language.file.contact.intro.title} description={language.file.contact.intro.description} image={horizon} backgroundPosition="25% 10%"></IntroSection>
            </div>

            <div style={{ marginBottom: 100 }}>
                <ContactSection quota={quotaMessage}></ContactSection>
            </div>

        </div>
    )

}

export default Contact;