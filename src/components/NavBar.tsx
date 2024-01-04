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
import { useNavigate } from 'react-router-dom';




export interface Page {

  path: string,
  title: string,
  state: string,
  active: boolean

}



function ResponsiveAppBar() {

  const [pages, setPages] = useState([{ path: '/', title: 'Hjem', state: '', active: true }, { path: '/Træningstider', title: 'Træningstider', state: 'Student', active: false }, { path: '/Hold', title: 'Hold', state: 'Professional', active: false }, { path: '/Om', title: 'Klubben', state: '', active: false }, { path: '/Kontakt', title: 'Kontakt', state: '', active: false }]);
  const socialsURL = { facebook: '', instagram: '', twitter: '' }

  const navigateToPage = (selectedPage: Page) => {

    let newPages = pages.map((page) =>
      page.title == selectedPage.title ? { ...page, active: true } : { ...page, active: false }
    )
    setPages(newPages)

    navigate(selectedPage.path, { state: selectedPage.state })

  }

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page?: Page) => {
    setAnchorElNav(null);
    if(page){
      navigateToPage(page) 

    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  useEffect(() => {



  }, [])

  return (
    <AppBar position='static' sx={{ backgroundColor: '#091117', color: 'white' }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10vw'}}>
          <Box display={'flex'} flexDirection={'row'} alignItems={'center'} >
            <Button sx={{ marginRight: '7%', paddingBottom: '1%', }}>
              <img src={Logo} height={'50px'} width={'50px'} />

            </Button>
            <Typography display={{ xs: 'none', md: 'flex' }} variant='body1' style={{ whiteSpace: 'nowrap', color: "white", fontWeight: "bold" }} >GORILLA MMA</Typography>
          </Box>



          <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
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
                <MenuItem key={page.title} onClick={()=>{handleCloseNavMenu(); navigateToPage(page)}}>
                  <p style={{ textAlign: "center" }} >{page.title}</p>
                </MenuItem>
              ))}
            </Menu>
          </Box>

    

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignContent: 'end', flexDirection: 'row', gap: '20px' }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => { navigateToPage(page) }}
                sx={{ color: 'white', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', fontWeight: page.active ? '700' : '100' }}

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
  );
}
export default ResponsiveAppBar;