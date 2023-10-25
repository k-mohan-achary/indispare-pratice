import React from 'react';
import AppHero from '../home/AppHero'
import About from '../home/About';
import Feature from '../home/Feature';
import Work from '../home/Work';
import Faqs from '../home/Faqs';
import Pricing from '../home/Pricing';
import Contact from '../home/Contact';   

const AppHome = () => {
  return (
   <>
    <div className='main'> 
      <AppHero/>
      <About/> 
      <Feature/>  
      <Work/>
      <Faqs/> 
      <Pricing/>
      <Contact/>  
    </div>
   </>
  )
}

export default AppHome;



