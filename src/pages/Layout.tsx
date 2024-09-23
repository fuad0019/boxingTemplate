import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "../components/NavBar";
import FooterSection from "../sections/FooterSection";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StyleContext, { useStyleContext } from "../contexts/StyleContext";
import { NavigatorContextProvider } from "../contexts/NavigateContext";
import { Box } from "@mui/material";
import { LanguageContextProvider } from "../contexts/LanguageContext";


const Layout = () => {

    const { themer } = useStyleContext() as { themer: any };


    return (


        <Box sx={{ backgroundColor: themer.palette.primary.main, justifyContent: 'center', display: 'flex', flexDirection: 'column' }} >
            <NavigatorContextProvider>
                <LanguageContextProvider>


                    <CssBaseline />
                    <ResponsiveAppBar></ResponsiveAppBar>

                    <Outlet />


                    <div>

                    </div>
                    <FooterSection></FooterSection>

                </LanguageContextProvider>

            </NavigatorContextProvider>

        </Box>




    )
};



export default Layout;