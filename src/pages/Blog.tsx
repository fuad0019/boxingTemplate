import IntroSection from "../sections/IntroSection";
import ScheduleSection from "../sections/ScheduleSection";
import TeamDetailSection, { Detail } from "../sections/DetailSection";
import environemnt from '../assets/images/environment.jpeg'
import { useLocation, useNavigate } from 'react-router-dom';
import {useEffect } from 'react';
import DetailSection from "../sections/DetailSection";
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
            image: ''//boxingTraining2,
        },
        {
            title: 'CROSSFIT',
            description:  'Vores Crossfit-program er bygget op omkring en filosofi om alsidig fitness. Det er perfekt for dem, der ønsker at forbedre deres generelle fysik, få mere energi og øge deres styrke. Vores certificerede Crossfit-trænere guider dig gennem en bred vifte af funktionelle bevægelser udført ved høj intensitet.' + "\n" + "\n" + "Træningen inkluderer vægtløftning, gymnastik og konditionsøvelser, der alle kan skaleres for at passe til enhver fitnessniveau. Vores fællesskab er stærkt og støttende, og vi fejrer hver enkelt medlems fremskridt.",

            image: ''//crossfit,
        }

    ]

    return (
        <div >

            <div >
            <IntroSection title="Blog" description="" image={environemnt}  backgroundPosition="25% 20%"></IntroSection>

            </div>

            

        </div>



    )

}

export default Hold;