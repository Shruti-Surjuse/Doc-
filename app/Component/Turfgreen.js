"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Turfgreen = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-36 bg-[#004D43] rounded-3xl'>
    <div className=' text flex whitespace-nowrap border-t-2 border-b-2  border-zinc-300 items-center overflow-hidden '>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:7}} className='uppercase font-bold text-[20vw] leading-none -pt-[2vw] pr-7  -mb-[1vw]  text-white'>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity, duration:7}} className='uppercase font-bold text-[20vw] leading-none  -pt-[2vw] pr-7 -mb-[1vw] text-white'>We are ochi</motion.h1>
    </div>
    </div>
  )
}

export default Turfgreen