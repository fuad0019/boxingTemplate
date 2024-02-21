import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';

import Hold from './pages/Hold';
import Contact from './pages/Contact';
import Substitutes from './pages/Substitutes';
import '@fontsource-variable/open-sans';
import '@fontsource/roboto';
// Supports weights 100-900
import '@fontsource-variable/inter';

import './styling/style.css'
import Traening from './pages/Traening';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import StyleContext from './contexts/StyleContext';

function App() {
  const [count, setCount] = useState(0)


  return (
    <BrowserRouter>
    <ScrollToTop/>
    <StyleContext>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Traeningstider" element={<Traening />} />
        <Route path="Hold" element={<Hold />} />
        <Route path="Om" element={<About />} />
        <Route path="Kontakt" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    </StyleContext>
  </BrowserRouter>
  )
}

export default App
