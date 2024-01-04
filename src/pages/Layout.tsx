import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "../components/NavBar";
import FooterSection from "../sections/FooterSection";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StyleContext from "../contexts/StyleContext";

const Layout = () => {

    return (


        <div style={{ backgroundColor: "black", justifyContent: 'center', display: 'flex', flexDirection: 'column' }} >
            <StyleContext>

                <CssBaseline />
                <ResponsiveAppBar></ResponsiveAppBar>

                <Outlet />

                <FooterSection></FooterSection>
            </StyleContext>

        </div>




    )
};



export default Layout;