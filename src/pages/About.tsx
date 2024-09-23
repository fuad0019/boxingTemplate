import IntroSection from "../sections/IntroSection";
import underway from '../assets/images/underway.jpg'
import TeamDetailSection, { Detail } from "../sections/AboutSection";
import DetailSection from "../sections/AboutSection";
import MemberSection, { Member } from "../sections/MemberSection";
import sand from "../assets/images/sand.png"
import handpicked from '../assets/images/handpicked.jpeg'
import environment from '../assets/images/environment.jpg'
import { useEffect, useState } from "react";
import getArticles from "../services/articleService";
import { ShowcaseItem } from "../components/ShowcaseCard";
import BlogSection from "../sections/BlogSection";
import { useLanguageContext } from "../contexts/LanguageContext";


function About() {


    const { languages, setActiveLanguage, language } = useLanguageContext();

    const details: Detail[] = [
        {
            title: language.file.about.detailSection[0].title,
            description: language.file.about.detailSection[0].description,
            image: environment
        },
        {
            title: language.file.about.detailSection[1].title,
            description: language.file.about.detailSection[1].description,
            image: sand//team,
        }


    ]

    const members: Member[] = [{
        name: 'Patrice Jarkman',
        position: 'Cheftræner',
        image: ''//trainer1
    }, {
        name: 'Hector Garcia',
        position: 'Træner Assistent',
        image: ''//trainer2
    }, {
        name: 'Robert Hughes',
        position: 'Træner Assistent',
        image: ''//trainer3
    }]

    useEffect(() => {

        (async () => {


            try {
                let tempArticles = (await getArticles()).map((article, index) => {

                    console.log(index)

                    return ({ ...article, index })
                }) as ShowcaseItem[];
                console.log(tempArticles)

                setArticles(tempArticles)

            } catch (error) {
                console.error('Error fetching Articles:', error);
            }

            console.log(articles)
        })();


    }, []);



    const [articles, setArticles] = useState<ShowcaseItem[]>([]);

    return (
        <div>
            <div style={{ marginBottom: 100 }}>
                <IntroSection title={language.file.about.intro.title} description={language.file.about.intro.description} image={underway} backgroundPosition="25% 20%"></IntroSection>
            </div>

            <div >
                <DetailSection details={details} subject={""}></DetailSection>
            </div>

            <div>
                <BlogSection articles={articles}></BlogSection>
            </div>

        </div>

    )

}

export default About;