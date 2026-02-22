import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Layout/Navbar';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import Footer from './Components/Layout/Footer';
import ScrollToTop from './Components/ScrollToTop';
import ServicesPage from './Pages/ServicesPage';
import TechnologyPage from './Pages/TechnologyPage';
import WebDevelopment from './ServicesPage/WebDevelopment';
import CareersPage from './Home/CareersPage';
import ContactUsPage from './Pages/ContactUsPage';




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
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/career" element={<CareersPage />} />
        <Route path="/contact" element={<ContactUsPage />} />


      </Routes>

      <Footer />
    </>
  )
}

export default App
