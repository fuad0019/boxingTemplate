import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "../components/NavBar";
import FooterSection from "../sections/FooterSection";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StyleContext from "../contexts/StyleContext";
import { NavigatorContextProvider } from "../contexts/NavigateContext";

const Layout = () => {

    return (


        <div style={{ backgroundColor: "black", justifyContent: 'center', display: 'flex', flexDirection: 'column' }} >
            <NavigatorContextProvider>

                <StyleContext>


                    <CssBaseline />
                    <ResponsiveAppBar></ResponsiveAppBar>

                    <Outlet />

                    <FooterSection></FooterSection>
                </StyleContext>


            </NavigatorContextProvider>

        </div>




    )
};



export default Layout;