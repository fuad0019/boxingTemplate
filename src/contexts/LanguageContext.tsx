import React, { createContext, useContext, useEffect, useState } from 'react';
import england from '../assets/images/languages/english.jpg'
import arabic from '../assets/images/languages/arabic.jpg'
import arabicFile from '../assets/languages/arabic.json'
import englishFile from '../assets/languages/english.json'
// Create a context with an initial value (e.g., null)
const LanguageContext = createContext({});

interface Language {
  language: string,
  image: string

}

function LanguageContextProvider({ children }) {

  const [languages, setLanguages] = useState([{ language: 'English', image: england, file: englishFile }, { language: 'Arabic', image: arabic, file: arabicFile }])

  const [language, setLanguage] = useState<Language>(languages[0])


  const setActiveLanguage = (selectedlanguage: "English" | "Arabic") => {
    languages.forEach((language) => {
      if (language.language == selectedlanguage) {
        setLanguage(language)

      }
    }
    )

  }


  useEffect(() => {
    setActiveLanguage("English")
  }
    , [])

  return (
    <LanguageContext.Provider value={{ setActiveLanguage, languages, language }}>
      {children}
    </LanguageContext.Provider>
  );
}


function useLanguageContext() {
  return useContext(LanguageContext);
}

export { LanguageContextProvider, useLanguageContext };

