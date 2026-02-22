import React from 'react'
import Hero from '../Home/Hero'
import Services from '../Home/Services'
import About from '../Home/About'
import Features from '../Home/Features'
import Testimonials from '../Home/Testimonials'
import ContactCTA from '../Home/ContactCTA'

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <Features />
            {/* <Testimonials /> */}
            <ContactCTA />
        </>
    )
}

export default Home