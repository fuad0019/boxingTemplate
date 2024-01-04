import IntroSection from "../sections/IntroSection";
import ScheduleSection from "../sections/ScheduleSection";
import boxingTraining from '../assets/images/training.jpg'

function Traening() {



    return (
        <div >

            <div style={{ marginBottom: 100}}>
            <IntroSection title="Træningstider" description="Se hvornår vi træner i klubben" image={boxingTraining} backgroundPosition="25% 80%"></IntroSection>

            </div>

            <div style={{ marginBottom: 100 }}>
                <ScheduleSection ></ScheduleSection>

            </div>

        </div>



    )

}

export default Traening;