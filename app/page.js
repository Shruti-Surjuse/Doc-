'use client';
import React, { useEffect } from 'react';
import Nav from './Component/Nav'
import Landingpage from './Component/Landingpage';
import Turfgreen from './Component/Turfgreen';
import About from './Component/About';
import Eyes from './Component/Eyes';
import Feature from './Component/Feature';
import Cards from './Component/Cards';
import Last from './Component/Last';
import Ending from './Component/Ending';
import LocomotiveScroll from 'locomotive-scroll';
import Eyes2 from './Component/Eyes2';




function page() {

  const locomotiveScroll = new LocomotiveScroll();
  
 

    return (
    <div className='w-full min-h-screen '>
      <Nav/>
      <Landingpage/>
      <Turfgreen/>
      <About/>
      <Eyes/>
      <Feature/>
      <Cards/>
      <Eyes2/>
      <Ending/>
    </div>
  )
}

export default page