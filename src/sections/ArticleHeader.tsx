import { Box, Grid, Typography, useTheme } from "@mui/material";
import PositionCard from "../components/PositionsCards";
import FadeIn from "../components/FadeIn";
import TeamCard from "../components/ShowcaseCard";
import { useStyleContext } from "../contexts/StyleContext";


export interface ArticleProp {

    title: string,
    author: string,
    date: string,
    image?: string
    backgroundPosition?: string
}




function ArticleHeader({ title, image, backgroundPosition, author, date }: ArticleProp) {
    const theme = useTheme();

    const { themer } = useStyleContext();


    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                height: 400,
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: backgroundPosition ? backgroundPosition : 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '100%',
                    width: 'auto',
                }}
            ></div>

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'black',
                    opacity: 0.5,
                    height: '100&',
                    width: 'auto',
                }}
            ></div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 100,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: '0px 10%',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'left',
                        alignItems: 'left',
                        position: 'absolute',
                    }}
                >
                    <FadeIn direction='bottom'>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'left',
                                flexDirection: 'column',
                                height: '100%',
                                gap: 5

                            }}


                        >

                            <div style={{
                                display: "flex",
                                flexDirection : "column",
                                gap: 2
                            }} >
                                <Typography
                                    variant="overline"

                                    color={themer.palette.text.primary}
                                >
                                    Article
                                </Typography>


                                <Typography
                                    variant="h2"
                                    component="div"
                                    fontFamily={'Libre Franklin , sans-serif'}
                                    color={themer.palette.text.primary}
                                >
                                    {title}
                                </Typography>
                            </div>


                            <div style={{
                                display: "flex",
                                flexDirection : "column",
                                gap: 2
                            }}>
                                <Typography
                                    variant="h5"
                                    color={themer.palette.text.primary}
                                >
                                    {author}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    color={themer.palette.text.primary}
                                >
                                    {date}
                                </Typography>
                            </div>


                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}

export default ArticleHeader;

