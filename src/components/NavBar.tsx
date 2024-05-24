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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/images/logo.png'
import Logo2 from '../assets/images/logo2.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import useNavigateHook from '../hooks/navigateHook';

import { useLocation } from 'react-router-dom';
import { useNavigatorContext } from '../contexts/NavigateContext';
import { Slide, useScrollTrigger } from '@mui/material';
import ElevationScroll from './navbar-components/ElevationScroll';
import { useStyleContext } from '../contexts/StyleContext';
import HideOnScroll from './navbar-components/HideOnScroll';
import useLanguageHook from '../hooks/languageHook';
import FixedOnScroll from './navbar-components/Fixed';


export interface Page {

  path: string,
  title: string,
  state: string,
  active: boolean

}





function ResponsiveAppBar(props: Props) {

  const { navigateToPage, findPageByPath, pages, setActivePage } = useNavigatorContext();

  const { languages } = useLanguageHook();

  const [language, setLanguage] = useState(languages[0].language);

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };
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
        <AppBar>
          <Container maxWidth="xl" >
            <Toolbar disableGutters style={{ display: 'flex', padding: '0px 5%', flexDirection: 'row' }}>



              <Box
                sx={{
                  display: { xs: 'flex', md: 'none', flex: 1 },
                  justifyContent: 'space-between',
                  padding: '0 10px' // Add 10px of padding on the left and right
                }}
              >
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
                    backgroundColor: 'transparent' // Set the background color to transparent
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.title} onClick={() => { handleCloseNavMenu(); navigateToPage(page) }}>
                      <p style={{ textAlign: "center", color: 'black' }} >{page.title}</p>
                    </MenuItem>
                  ))}
                </Menu>
                <Button onClick={() => { navigateToPage(findPageByPath('/')) }}>
                  <Box display={'flex'} flexDirection={'row'} alignItems={'top'} gap={1}>
                    <img src={Logo2} width={trigger ? 150 : 200} style={{
                      transition: 'width 0.2s ease',
                    }} />
                  </Box>
                </Button>

                {/* Your menu icon here */}
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', flex: 1, alignItems: 'center', flexDirection: 'row' }}>


                <Button onClick={() => { navigateToPage(findPageByPath('/')) }}>
                  <Box display={'flex'} flexDirection={'row'} alignItems={'top'} gap={1} width={200}>
                    <img src={Logo2} width={trigger ? 150 : 200} style={{
                      transition: 'width 0.2s ease',
                    }} />
                  </Box>
                </Button>
                <Box sx={{ display: 'flex', alignContent: 'end', flexDirection: 'row', gap: '20px', paddingTop: '20px' }}>
                  {pages.map((page) => (
                    <Button
                      key={page.title}
                      onClick={() => { navigateToPage(page) }}
                      sx={{ color: 'inherit', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', fontWeight: page.active ? '600' : '100', textDecoration: page.active ? 'underline' : 'none' }}

                    >
                      {page.title}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, height: 80, justifyContent: 'center', alignItems: 'center' }}>


                  <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>Language</InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={language}
                      label="Language"
                      onChange={handleChange}
                      sx={{
                        color: 'white', // Text color
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white !important', // Ensures default state border
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white !important', // Ensures hover state border
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white !important', // Ensures focused state border
                        },
                      }}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Menu background color
                            color: 'white', // Menu text color
                          },
                        },
                      }}
                    >
                      {languages.map((language) => (
                        <MenuItem key={language.language} value={language.language}>
                          <Box display="flex" alignItems="center">
                            <Avatar
                              src={language.image}
                              sx={{ width: 24, height: 24, marginRight: 2 }}
                            />
                            <Typography variant="body2" style={{ color: 'white' }}>
                              {language.language}
                            </Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl >



                </Box>

              </Box>

            </Toolbar>
          </Container>
        </AppBar>

    </ElevationScroll>

  );
}
export default ResponsiveAppBar;