"use client"
import React from 'react'
import Navbar from './pages/Navbar'
import HeroSection from './pages/HeroSection'
import Services from './pages/Services'
import WhyChooseUs from './pages/WhyChooseUs'
import Team from './pages/Team'
import Faqs from './pages/Faqs'
import ContactUs from './pages/ContactUs'
import Footer from './pages/Footer'

const page = () => {
  return (
   <>
   <Navbar />
   <HeroSection />
   <Services />
   <WhyChooseUs />
   <Team />
    <Faqs />
   <ContactUs />
   <Footer />
   
   </>
  )
}

export default page