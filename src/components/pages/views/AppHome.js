import React from 'react';
import AppHero from '../home/AppHero'
import About from '../home/About';
import Feature from '../home/Feature';

const AppHome = () => {
  return (
   <>
    <div className='main'> 
      <AppHero/>
      <About/> 
      <Feature/> 
    </div>
   </>
  )
}

export default AppHome;



