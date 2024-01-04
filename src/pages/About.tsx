import IntroSection from "../sections/IntroSection";
import boxingGym from '../assets/images/boxingclub.jpg'
import TeamDetailSection, { Detail } from "../sections/DetailSection";
import DetailSection from "../sections/DetailSection";
import team from '../assets/images/team.jpeg';
import match from '../assets/images/old-school-boxing-training-2.jpg';
import MemberSection, { Member } from "../sections/memberSection";
import trainer1 from '../assets/images/trainer1.jpg'
import trainer2 from '../assets/images/trainer2.jpg'
import trainer3 from '../assets/images/trainer3.jpg'
import trainer4 from '../assets/images/trainer4.jpg'


function About() {



    const details: Detail[] = [
        {
            title: 'Historie',
            description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt deleniti doloribus veniam eius explicabo, incidunt itaque quasi nobis consequatur. Delectus nulla provident, culpa adipisci ut ipsa est aperiam molestiae.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt deleniti doloribus veniam eius explicabo, incidunt itaque quasi nobis consequatur. Delectus nulla provident, culpa adipisci ut ipsa est aperiam molestiae.',
            image: match,
        },
        {
            title: 'Kultur',
            description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt deleniti doloribus veniam eius explicabo, incidunt itaque quasi nobis consequatur. Delectus nulla provident, culpa adipisci ut ipsa est aperiam molestiae.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt deleniti doloribus veniam eius explicabo, incidunt itaque quasi nobis consequatur. Delectus nulla provident, culpa adipisci ut ipsa est aperiam molestiae.',
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
    },{
        name: 'Kasper Vilhelm',
        position: 'Klub Formand',
        image: trainer4
    },]

    return (
        <div>
            <div style={{ marginBottom: 100 }}>
                <IntroSection title="Klubben" description="Læs om klubbens rige historie og kultur" image={boxingGym} backgroundPosition="top"></IntroSection>
            </div>

            <div style={{ marginBottom: 100 }}>
                <DetailSection details={details} subject="Klubben"></DetailSection>

            </div>

            <div style={{ marginBottom: 100 }}>
                <MemberSection members={members} ></MemberSection>

            </div>


        </div>



    )

}

export default About;