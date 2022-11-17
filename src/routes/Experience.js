import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import HeroImg2 from 'components/HeroImg2';
import Exp from 'components/Exp'

const Experience = () => {
  return (
  <div>
    <Navbar />
    <HeroImg2 heading="MON EXPERIENCE"/>
    <Exp />
    <Footer />
  </div>
  );
};

export default Experience