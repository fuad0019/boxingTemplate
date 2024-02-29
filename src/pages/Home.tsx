
import {useRef} from 'react';
import { Button } from '@mui/material';


import TeamSection from '../sections/TeamSection';
import { Team } from '../sections/TeamSection';
import HeroSection from '../sections/heroSections/FullTextHero';


import boxingImage from '../assets/images/boxingtraining.jpg';
import mmaImage from '../assets/images/mmatraining.jpg';
import TeamDetailSection from '../sections/DetailSection';
import BufferSection from '../sections/BufferSection';
import MapSection from '../sections/MapSection';
import AdvantageSection from '../sections/AdvantageSection';


function Home() {

    const myRef = useRef(null);


    const scrollToRef = (ref: React.MutableRefObject<any>) => {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };


    
  


    const teams: Team[] = [
        {
            title: 'Sygeplejersker',
            description: 'Sygeplejerske i sundhedsektoren',
            index: 0,
            image: boxingImage,
            context: 'boxingSection'
        },
        {
            title: 'Sygeplejersker',
            description: 'Sygeplejerske i sundhedsektoren',
            index: 1,
            image: mmaImage,
            context: 'crossfitSection'
        }

    ]

    return (



        <div>


            <div style={{ marginBottom: '80px' }}>
                <HeroSection scrollTo={()=>scrollToRef(myRef)} ></HeroSection>
            </div>




            <div ref={myRef} style={{ marginBottom: '150px' }}>
                <TeamSection teams={teams}></TeamSection>
            </div>

            

           
            <div >
                <BufferSection title='EN KLUB FOR ÆGTE FIGHTERS' description='' buttonText='Læs Mere her' ></BufferSection>
            </div>


            

            <div >
                <MapSection ></MapSection>

            </div>
    



            


        </div>
    )

}

export default Home;