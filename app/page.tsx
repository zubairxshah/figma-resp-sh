import React from 'react'
import Header from "../app/components/Header/header";
import Navbar from "../app/components/Navbar/navbar";
import HeroSection from "../app/components/HeroSection/heroSection";
import Footer from "../app/components/Footer/footer";
import Services from "../app/components/Services/services";
import Achievements from "../app/components/Achievements/achievements";
import Courses from "../app/components/Courses/courses";
import OurTeam from "../app/components/OurTeam/team";
import Customer from "../app/components/Customer/customer";
import Contact from "../app/components/Contact/contact";

const page = () => {
  return (
    <div className="h-screen">
      <Header/>
      <Navbar/>
      <HeroSection/>
      <Footer/>
      <Services/>
      <Achievements/>
      <Courses/>
      <OurTeam/>
      <Customer/>
      <Contact/>
    </div>
  )
}

export default page
