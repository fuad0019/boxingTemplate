import ArticleHeader from "../sections/ArticleHeader";
import ScheduleSection from "../sections/ScheduleSection";
import TeamDetailSection, { Detail } from "../sections/AboutSection";
import environemnt from '../assets/images/environment.jpeg'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DetailSection from "../sections/AboutSection";
import BufferSection from "../sections/BufferSection";
import BlogSection from "../sections/BlogSection";
import { ShowcaseItem } from "../components/ShowcaseCard";
import getArticles from "../services/articleService";
import ArticleSection from "../sections/ArticleSection";
import { Divider } from "@mui/material";


function Article() {

    const location = useLocation();
    const index = location.state? location.state : 0;



    const navigate = useNavigate();

   

    useEffect(() => { 

        (async () => {


            try {
                let tempArticles = (await getArticles()).map((article, index) => {

                    console.log(index)

                    return ({ ...article, index })
                }) as ShowcaseItem[];

                console.log(tempArticles)

                setArticle(tempArticles[index])
                setArticles(tempArticles)
            } catch (error) {
                console.error('Error fetching Articles:', error);
            }
        })();


    }, [index]);



    const [article, setArticle] = useState<ShowcaseItem>({
        title: "",
        date: "",
        author: "",
        image: "",
        description: "",
        context: "",
        index: null
        });

    const [articles, setArticles] = useState<ShowcaseItem[]>([]);


    return (
        <div>
            <div>
                <ArticleHeader title={article ? article.title : ""} date={article ? article.date : ""} author={article ? article.author : ""} image={article? article.image : ""} backgroundPosition="25% 20%"></ArticleHeader>
            </div>
            <div>
                <ArticleSection article={article} ></ArticleSection>
            </div>

            <Divider></Divider>

            <div>
                <BlogSection articles={articles}></BlogSection>
            </div>

        </div>
    )

}

export default Article;