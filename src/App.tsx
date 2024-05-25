import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';

import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Substitutes from './pages/Substitutes';
import '@fontsource-variable/open-sans';
import '@fontsource/roboto';
// Supports weights 100-900
import '@fontsource-variable/inter';

import './styling/style.css'
import Traening from './pages/Products';
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
        <Route path="Products" element={<Traening />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    </StyleContext>
  </BrowserRouter>
  )
}

export default App
