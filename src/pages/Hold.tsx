import IntroSection from "../sections/IntroSection";
import ScheduleSection from "../sections/ScheduleSection";
import TeamDetailSection, { Detail } from "../sections/DetailSection";
import boxingTraining from '../assets/images/boxingtraining3.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import {useEffect } from 'react';
import DetailSection from "../sections/DetailSection";
import boxingTraining2 from '../assets/images/boxingtraining2.jpg';
import crossfit from '../assets/images/crossfit.jpg';
import BufferSection from "../sections/BufferSection";


function Hold() {

    const location = useLocation();
    const navigate = useNavigate();
    const context = location.state?.context;

    useEffect(()=>{


        if(context){
            navigate(`#${context}`)
        }
        

    }, [])


    const teams: Detail[] = [
        {
            title: 'BOXING',
            description:  'Bokseprogrammet hos Gorilla MMA fokuserer på alle aspekter af sporten – fra grundlæggende teknikker til avancerede taktikker. Det er ideelt for både nybegyndere og erfarne boksere. Vores erfarne trænere, mange af dem tidligere konkurrenceboksere, sikrer, at du lærer de rigtige teknikker og kombinationer.' + "\n" + "\n" + "Træningen omfatter slagteknikker, fodarbejde, forsvar og konditionering. Vi lægger også vægt på bokserelateret fitness og mental forberedelse. Vores mål er at bygge kæmpere, der ikke kun er fysisk forberedt, men også taktisk og mentalt stærke.",
            image: boxingTraining2,
        },
        {
            title: 'CROSSFIT',
            description:  'Vores Crossfit-program er bygget op omkring en filosofi om alsidig fitness. Det er perfekt for dem, der ønsker at forbedre deres generelle fysik, få mere energi og øge deres styrke. Vores certificerede Crossfit-trænere guider dig gennem en bred vifte af funktionelle bevægelser udført ved høj intensitet.' + "\n" + "\n" + "Træningen inkluderer vægtløftning, gymnastik og konditionsøvelser, der alle kan skaleres for at passe til enhver fitnessniveau. Vores fællesskab er stærkt og støttende, og vi fejrer hver enkelt medlems fremskridt.",

            image: crossfit,
        }

    ]

    return (
        <div >

            <div style={{ marginBottom: 100 }}>
            <IntroSection title="VÆLG DIT HOLD" description="Se en række af de hold vi tilbyder" image={boxingTraining} backgroundPosition="25% 45%"></IntroSection>

            </div>

            <div style={{ marginBottom: 100 }}>
                <DetailSection details={teams} subject="Hold"></DetailSection>

            </div>

            <div >
                <BufferSection title='EN KLUB FOR ÆGTE FIGHTERS' description='' buttonText='Læs Mere her'></BufferSection>

            </div>

            

        </div>



    )

}

export default Hold;