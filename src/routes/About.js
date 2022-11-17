import AboutContent from 'components/AboutContent'
import Footer from 'components/Footer'
import HeroImg2 from 'components/HeroImg2'
import Navbar from 'components/Navbar'
import React from 'react'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="A PROPOS DE MOI" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About