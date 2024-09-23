import { useNavigate } from 'react-router-dom';

import { Page } from '../components/NavBar';
import { useEffect, useState } from 'react';


function useNavigateHook() {
  // Define state and logic here

  
  // { path: '/Products', title: 'Products', state: 'Student', active: false },
  const navigate = useNavigate();




  const findPageByPath = (path: string, state?: any) => {
    let page = pages.filter((page: Page) => page.path === path)[0];
    if (state) {
      console.log(state)
      page = { ...page, state: state};
    }
    return page;
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

  useEffect(() => {
    console.log(pages)
  }, [pages])


  // Return values or functions to be used in components
  return {
    findPageByPath,
    navigateToPage,
    setActivePage,
    pages
  };
}

export default useNavigateHook;


