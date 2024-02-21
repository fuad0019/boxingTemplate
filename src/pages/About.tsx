import IntroSection from "../sections/IntroSection";
import boxingGym from '../assets/images/boxingclub.jpg'
import TeamDetailSection, { Detail } from "../sections/DetailSection";
import DetailSection from "../sections/DetailSection";
import team from '../assets/images/team.jpg';
import match from '../assets/images/old-school-boxing-training-2.jpg';
import MemberSection, { Member } from "../sections/MemberSection";
import trainer1 from '../assets/images/trainer1.png'
import trainer2 from '../assets/images/trainer2.png'
import trainer3 from '../assets/images/trainer3.png'


function About() {



    const details: Detail[] = [
        {
            title: 'Historie',
            description:  'Siden vores stiftelse i 1997, har Gorilla MMA været et fyrtårn for boksesporten i Århus. Fra de beskedne begyndelser i en lille gymnastiksal til den nuværende state-of-the-art facilitet, har vores klub fostret talent og lidenskab for boksning.' + '\n'+ '\n'+ "Gennem 70'erne og 80'erne oplevede vi en eksplosion i medlemskab. Det var en tid med store kampe, intense træningslejre og en strøm af lokale og nationale titler. Vores trænere, mange af dem tidligere kæmpere fra klubben, brændte for at videregive deres viden og erfaring.",
            image: match,
        },
        {
            title: 'Kultur',
            description:  'I dag står Gorilla MMA som en moderne facilitet med topmoderne udstyr, men vores hjerte og sjæl forbliver uændret. Vi er dedikeret til at udvikle boksere på alle niveauer – fra begyndere til elitesportsfolk. Med et fokus på teknik, udholdenhed, og mental styrke, forbereder vi vores kæmpere til enhver udfordring.'+ '\n' + '\n' + 'Vi er mere end bare en bokseklub; vi er en familie, et fællesskab bundet af lidenskab og respekt. Hvis du er interesseret i at blive en del af Gorilla MMA, så besøg os eller kontakt os for mere information. Vi ser frem til at skrive det næste kapitel i vores historie med',
            image: team,
        }

        
    ]

    const members: Member[] = [{
        name: 'Patrice Jarkman',
        position: 'Cheftræner',
        image: trainer1
    },{
        name: 'Hector Garcia',
        position: 'Træner Assistent',
        image: trainer2
    },{
        name: 'Robert Hughes',
        position: 'Træner Assistent',
        image: trainer3
    }]

    return (
        <div>
            <div style={{ marginBottom: 100 }}>
                <IntroSection title="Klubben" description="Læs om klubbens rige historie og kultur" image={boxingGym} backgroundPosition="top"></IntroSection>
            </div>

            <div style={{ marginBottom: 100 }}>
                <DetailSection details={details} subject="Klubben"></DetailSection>

            </div>

            <div >
                <MemberSection members={members} ></MemberSection>

            </div>


        </div>



    )

}

export default About;