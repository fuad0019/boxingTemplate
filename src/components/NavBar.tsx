import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/images/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import useNavigateHook from '../hooks/navigateHook';

import { useLocation } from 'react-router-dom';
import { useNavigatorContext } from '../contexts/NavigateContext';
import { Slide, useScrollTrigger } from '@mui/material';
import ElevationScroll from './navbar-components/ElevationScroll';
import { useStyleContext } from '../contexts/StyleContext';


export interface Page {

  path: string,
  title: string,
  state: string,
  active: boolean

}





function ResponsiveAppBar(props: Props) {

  const { navigateToPage, findPageByPath, pages, setActivePage } = useNavigatorContext();

  const { children, window } = props

  const socialsURL = { facebook: '', instagram: '', twitter: '' }

  const location = useLocation();


  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);


  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });




  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = (page?: Page) => {
    setAnchorElNav(null);
    if (page) {
      navigateToPage(page)

    }
  };


  const { themer } = useStyleContext();



  useEffect(() => {

    let pathname = location.pathname
    console.log(pathname)

    let page = findPageByPath(pathname)







    setActivePage(page)


  }, [])





  return (


    <ElevationScroll trigger={trigger}>

      <AppBar sx={{
        backgroundColor: trigger ? 'primary.main' : 'transparent',
      }}>
        <Container maxWidth="xl" >
          <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'space-between', padding: '0 100px' }}>


            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={() => { handleCloseNavMenu(); navigateToPage(page) }}>
                    <p style={{ textAlign: "center", color: themer.palette.text.button }} >{page.title}</p>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography display={{ xs: 'flex', md: 'none' }} variant='body1' style={{ whiteSpace: 'nowrap', fontWeight: "bold" }} color={'inherit'} >GORILLA MMA</Typography>
           
            <Button sx={{color: 'inherit'}} onClick={() => { navigateToPage(findPageByPath('/')) }}>

              <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={1}>
                <img src={Logo} height={40} width={40} />

                <Typography display={{ xs: 'none', md: 'flex' }}  sx={{ whiteSpace: 'nowrap', fontWeight: "bold" }} >GORILLA MMA</Typography>
              </Box>
            </Button>



            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignContent: 'end', flexDirection: 'row', gap: '20px' }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={() => { navigateToPage(page) }}
                  sx={{ color: 'inherit', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', fontWeight: page.active ? '700' : '100' }}

                >
                  {page.title}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignContent: 'end', flexDirection: 'row', }}>
              <IconButton edge="end" color="inherit" aria-label="facebook" href={socialsURL.facebook}>
                <FacebookIcon />
              </IconButton>
              <IconButton edge="end" color="inherit" aria-label="twitter" href={socialsURL.twitter}>
                <TwitterIcon />
              </IconButton>
              <IconButton edge="end" color="inherit" aria-label="instagram" href={socialsURL.instagram}>
                <InstagramIcon />
              </IconButton>
            </Box>


          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>




  );
}
export default ResponsiveAppBar;