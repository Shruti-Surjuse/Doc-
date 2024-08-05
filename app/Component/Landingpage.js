import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Landingpage() {
  return (
   <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-screen bg-f1f1f1 pt-1 '>
     <div className='textstructure mt-32 px-20 '>
         {["We Create","Eye Opening","Presentation"].map((item,index)=>{

           return <div className='masker'>
           <div className='w-fit flex item-end overflow-hidden' >
            {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className=' mr-[.60vw] rounded-md w-[9vw] h-[6vw] relative top-[.50vw] overflow-hidden'>
              <img className='bg-cover rounded-md bg-center' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'/>
            </motion.div>)}

           <h1  key={index} className='pt-[2vw] -mb-[1vw] uppercase text-[8vw] font-bold leading-[.70] tracking-tighter  font-["Founders_Grotesk"]'>
                {item}</h1>
           </div>
        </div>
       })}
        </div>

        <div className='border-t-[1px] border-zinc-400 mt-36  flex justify-between px-20 py-5 '>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
              return  <p key={index} className='font-light text-sm  leding-none tracking-tighter text-black capitalize '>{item}</p>
            })}
            <div className='start flex items-center gap-3'>
            <div className='uppercase text-md px-4 py-2 border-zinc-700 border-[2px] rounded-full leading-none  tracking-tighter'><a>Start the Project</a></div>
            <div className='h-9 w-9  leading-none flex items-center justify-center rounded-full border-[1px] border-zinc-700'>
              <span className='rotate-[-45deg] '>
              <FaArrowRightLong />
              </span>
                </div>
            </div>
            </div>
        

        

        
   
   </div>
  )
}

export default Landingpage

// font-["Test_Founders_Grotesk_X-Cond_SmBd"]
// font-family:{"Test Founders Grotesk X-Cond SmBd"} the right one 