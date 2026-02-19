import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Layout/Navbar';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import Footer from './Components/Layout/Footer';
import ScrollToTop from './Components/ScrollToTop';
import ServicesPage from './Pages/ServicesPage';
import TechnologyPage from './Pages/TechnologyPage';




const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
