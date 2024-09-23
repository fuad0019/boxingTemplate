import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';

import '@fontsource-variable/open-sans';
import '@fontsource/roboto';
// Supports weights 100-900
import '@fontsource-variable/inter';

import './styling/style.css'

import ScrollToTop from './components/ScrollToTop';
import StyleContext from './contexts/StyleContext';


const Home = lazy(() => import('./pages/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const Products = lazy(() => import('./pages/Products'))
const About = lazy(() => import('./pages/About'))
const Article = lazy(() => import('./pages/Article'))


function App() {
  const [count, setCount] = useState(0)


  return (
    <BrowserRouter>
      <ScrollToTop />
      <StyleContext>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<div style={{height: 1000}}>Loading...</div>}>
                <Home />
              </Suspense>
            } />
            <Route path="Products" element={
              <Suspense fallback={<div style={{height: 1000}}>Loading...</div>}>
                <Products />
              </Suspense>} />
            <Route path="Blog" element={
              <Suspense fallback={<div style={{height: 1000}}>Loading...</div>}>
                <Blog />
              </Suspense>} />
            <Route path="Article" element={
              <Suspense fallback={<div style={{height: 1000}}>Loading...</div>}>
                <Article />
              </Suspense>} />
            <Route path="About" element={
              <Suspense fallback={<div style={{height: 1000}}>Loading...</div>}>
                <About />
              </Suspense>} />
            <Route path="Contact" element={
              <Suspense fallback={<div style={{height: 1000}}>Loading...</div>}>
                <Contact />
              </Suspense>} />
            <Route path="*" element={
              <Suspense fallback={<div style={{height: 1000}}>Loading...</div>}>
                <Home />
              </Suspense>} />
          </Route>
        </Routes>
      </StyleContext>
    </BrowserRouter>
  )
}

export default App
