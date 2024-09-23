import { Box, Button, Grid, Typography, useTheme } from "@mui/material"
import PositionCard from "../components/PositionsCards"
import FadeIn from "../components/FadeIn"
import ShowcaseCard, { ShowcaseItem } from "../components/ShowcaseCard"
import { useStyleContext } from "../contexts/StyleContext"
import LazyLoad from 'react-lazyload';
import { useEffect, useState } from "react"
import { useLanguageContext } from "../contexts/LanguageContext"




interface BlogProps {
    articles: ShowcaseItem[]
}


function BlogSection({ articles }: BlogProps) {
    const theme = useTheme();
    const { themer } = useStyleContext();

    const [visibleArticles, setVisibleArticles] = useState<ShowcaseItem[]>([]);
    const duplicateArticles = [...articles, ...articles];

    const { languages, setActiveLanguage, language } = useLanguageContext();



    const handleViewMore = () => {
        const nextVisibleArticles = duplicateArticles.slice(0, visibleArticles.length + 4);
        setVisibleArticles(nextVisibleArticles);
    };

    useEffect(() => {
        setVisibleArticles(duplicateArticles.slice(0, 4));
    }, [articles]);


    return (
        <div style={{
            display: 'flex',

            flexDirection: 'column',
            gap: '50px',
            padding: ' 10% 9%',
            backgroundColor: '#FFFFFF'
        }}>

            <div style={{
                display: 'flex',

                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1


            }}>


                <FadeIn direction={'top'} distance='2' >

                    <div style={{
                        display: 'flex',

                        flexDirection: 'column',
                        textAlign: 'left',


                    }}>
                        <Typography variant="h5" fontWeight={'600'} component="div" fontFamily={'Libre Franklin , sans-serif'} color={'black'}>
                            {language.file.blog.articleSection.title}
                        </Typography>
                        <Typography variant="h6" fontWeight={'100'} component="div" color={'black'}>
                        {language.file.blog.articleSection.description}
                        </Typography>

                    </div>


                </FadeIn>

                <Box display="flex" justifyContent="center" marginTop={2}>

                    <Button disabled={visibleArticles.length == duplicateArticles.length} variant="outlined" color={"secondary"} onClick={handleViewMore}>
                    {language.file.blog.articleSection.button}
                    </Button>
                </Box>
            </div>

            <FadeIn direction='bottom'>

                <Grid container

                    md={12}
                    sm={8}

                    xs={12}

                    gap={6}

                >

                    {visibleArticles.map((article: ShowcaseItem) => (
                        <Grid item xs={8} md={3.7}>
                            <ShowcaseCard showcaseItem={article} />
                        </Grid>
                    ))}


                </Grid>

            </FadeIn>



        </div>



    )
}

export default BlogSection;

