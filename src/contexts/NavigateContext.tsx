import React, { createContext, useContext } from 'react';
import useNavigateHook from '../hooks/navigateHook';

// Create a context with an initial value (e.g., null)
const NavigatorContext = createContext({});


function NavigatorContextProvider({ children }) {

    const {navigateToPage, findPageByPath, pages, setActivePage} = useNavigateHook()


  
    return (
      <NavigatorContext.Provider value={{navigateToPage, findPageByPath, pages, setActivePage}}>
        {children}
      </NavigatorContext.Provider>
    );
  }


  function useNavigatorContext() {
    return useContext(NavigatorContext);
  }
  
  export { NavigatorContextProvider, useNavigatorContext };

  