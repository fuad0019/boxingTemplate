import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "../components/NavBar";
import FooterSection from "../sections/FooterSection";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  StyleContext, { useStyleContext } from "../contexts/StyleContext";
import { NavigatorContextProvider } from "../contexts/NavigateContext";
import { Box } from "@mui/material";


const Layout = () => {

    const { themer } = useStyleContext() as { themer: any };


    return (


        <Box sx={{ backgroundColor: themer.palette.primary.main, justifyContent: 'center', display: 'flex', flexDirection: 'column' }} >
            <NavigatorContextProvider>



                    <CssBaseline />
                    <ResponsiveAppBar></ResponsiveAppBar>
                    
                    <Outlet />


                    <FooterSection></FooterSection>


            </NavigatorContextProvider>

        </Box>




    )
};



export default Layout;