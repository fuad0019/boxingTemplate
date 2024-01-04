import IntroSection from "../sections/IntroSection";
import ScheduleSection from "../sections/ScheduleSection";
import TeamDetailSection, { Detail } from "../sections/DetailSection";
import boxingTraining from '../assets/images/boxingtraining3.jpeg'
import { useLocation, useNavigate } from 'react-router-dom';
import {useEffect } from 'react';
import DetailSection from "../sections/DetailSection";
import boxingTraining2 from '../assets/images/boxingtraining2.jpg';
import crossfit from '../assets/images/crossfit.jpeg';


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
            description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt deleniti doloribus veniam eius explicabo, incidunt itaque quasi nobis consequatur. Delectus nulla provident, culpa adipisci ut ipsa est aperiam molestiae.', 
            image: boxingTraining2,
        },
        {
            title: 'CROSSFIT',
            description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt deleniti doloribus veniam eius explicabo, incidunt itaque quasi nobis consequatur. Delectus nulla provident, culpa adipisci ut ipsa est aperiam molestiae.',
            image: crossfit,
        }

    ]

    return (
        <div >

            <div style={{ marginBottom: 100 }}>
            <IntroSection title="VÆLG DIT HOLD" description="Se en række af de hold vi tilbyder" image={boxingTraining} backgroundPosition="25% 35%"></IntroSection>

            </div>

            <div >
                <DetailSection details={teams} subject="Hold"></DetailSection>

            </div>

            

        </div>



    )

}

export default Hold;