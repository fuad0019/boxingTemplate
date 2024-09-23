import { Box, Button, Grid, Typography, useTheme } from "@mui/material"
import PositionCard from "../components/PositionsCards"
import FadeIn from "../components/FadeIn"
import ShowcaseCard, { ShowcaseItem } from "../components/ShowcaseCard"
import { useStyleContext } from "../contexts/StyleContext"
import LazyLoad from 'react-lazyload';
import { useEffect, useState } from "react"




interface ArticleProps {
    article: ShowcaseItem
}


function ArticleSection({ article }: ArticleProps) {
    const theme = useTheme();
    const { themer } = useStyleContext();


    return (
        <Grid md={12} container gap={8} style={{
            color: "black",
            padding: '4% 10%'
        }}>

            <Grid md={8}   paddingX={'3%'}>
                <Typography whiteSpace={'pre-line'} fontFamily={'Libre Franklin , sans-serif'} variant="subtitle1">{article.description}</Typography>

            </Grid>

            <Grid md={3}>

            </Grid>



        </Grid>



    )
}

export default ArticleSection;

