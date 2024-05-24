import { useNavigate } from 'react-router-dom';
import england from '../assets/images/languages/english.jpg'
import arabic from '../assets/images/languages/arabic.jpg'

import { useEffect, useState } from 'react';

interface Language {
  language: string,
    image: string
  
}


function useLanguageHook() {
    // Define state and logic here


    const navigate = useNavigate();
    
    const [languages , setLanguages ]= useState([{language: 'English', image: england }, {language: 'Arabic', image: arabic}])
    
    

    
    

    
    
    
      const setActiveLanguage = (selectedLanguage: Language) => {
        let newPages = languages.map((language) =>
          language.language == selectedLanguage.language ? { ...selectedLanguage, active: true } : { ...selectedLanguage, active: false }
        )
        setLanguages(newPages)
      }

      useEffect(()=>{
        console.log(languages)
      },[languages])
    
  
    // Return values or functions to be used in components
    return {
      setActiveLanguage,
      setLanguages,
      languages
    };
  }
  
  export default useLanguageHook;


