import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import React from 'react'
import Form from '../components/Form'
import HeroImg2 from 'components/HeroImg2';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Contactez-moi."/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact