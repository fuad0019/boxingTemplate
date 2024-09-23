import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../components/NavBar';

// Create a context with an initial value (e.g., null)
const NavigatorContext = createContext({});


function NavigatorContextProvider({ children }) {


  const [pages, setPages] = useState([{ path: '/', title: 'Home', active: false }, { path: '/Products', title: 'Products', active: false }, { path: '/Blog', title: 'Blog', active: false }, { path: '/Article', title: 'Article', active: false }, { path: '/About', title: 'About', active: false }, { path: '/Contact', title: 'Contact', active: false }]);


  // { path: '/Products', title: 'Products', state: 'Student', active: false },
  const navigate = useNavigate();




  const findPageByPath = (path: string, state?: any) => {
    let page = pages.filter((page: Page) => page.path === path)[0];
    if (state) {
      console.log(state)
      page = { ...page, state: state };
    }
    return page;
  }




  const navigateToPage = (selectedPage: Page) => {
    console.log(selectedPage)

    setActivePage(selectedPage)

    navigate(selectedPage.path, { state: selectedPage.state })


  }



  const setActivePage = (selectedPage: Page) => {
    console.log(selectedPage.title)
    let newPages = pages.map((page) =>
     

       page.title == selectedPage.title ? { ...page, active: true } : { ...page, active: false }
      
    )
    setPages(newPages)
  }
  return (
    <NavigatorContext.Provider value={{ navigateToPage, findPageByPath, pages, setActivePage }}>
      {children}
    </NavigatorContext.Provider>
  );
}


function useNavigatorContext() {
  return useContext(NavigatorContext);
}

export { NavigatorContextProvider, useNavigatorContext };

