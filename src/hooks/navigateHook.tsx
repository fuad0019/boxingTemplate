import { useNavigate } from 'react-router-dom';

import { Page } from '../components/NavBar';
import { useEffect, useState } from 'react';


function useNavigateHook() {
    // Define state and logic here


    const navigate = useNavigate();
    
    const [pages, setPages] = useState([{ path: '/', title: 'Hjem', state: '', active: false }, { path: '/Traeningstider', title: 'Træningstider', state: 'Student', active: false }, { path: '/Hold', title: 'Hold', state: 'Professional', active: false }, { path: '/Om', title: 'Klubben', state: '', active: false }, { path: '/Kontakt', title: 'Kontakt', state: '', active: false }]);
    
    
    const findPageByPath = (path: string) => {
        
        let page = pages.filter((page: Page) => page.path == path)[0]
        return page
      }
    
    
    
    const navigateToPage = (selectedPage: Page) => {
        console.log(selectedPage)
    
        setActivePage(selectedPage)
    
        navigate(selectedPage.path, { state: selectedPage.state })

    
      }
    
    
    
      const setActivePage = (selectedPage: Page) => {
        let newPages = pages.map((page) =>
          page.title == selectedPage.title ? { ...page, active: true } : { ...page, active: false }
        )
        setPages(newPages)
      }

      useEffect(()=>{
        console.log(pages)
      },[pages])
    
  
    // Return values or functions to be used in components
    return {
      findPageByPath,
      navigateToPage,
      setActivePage,
      pages
    };
  }
  
  export default useNavigateHook;


