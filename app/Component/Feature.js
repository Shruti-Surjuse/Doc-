import { delay, motion,useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { FaS } from 'react-icons/fa6'

const Feature = () => {
  const cards=[useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation()];
  const handleHover=(index)=>{
    cards[index].start({y:"0"})

  }

  const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})

  }

  return (
      <div className='w-full py-20'>
        <div className=' w-full px-20  border-b-[1px] border-zinc-500 pb-20'>
            <h1 className='font-["Neue_Montreal"] text-7xl tracking-tight'>Feature projects</h1>
        </div>

       <div className='px-20 mt-10'>
  
     {/* ////////// */}
        {/* <div className='cards w-full flex gap-10 '>  
        <div className='trawa flex flex-col  items-center'>
          <span className='w-3 h-3 mr-3 rounded-full bg-black '></span>
          <h1 className='uppercase '>premium blend</h1>
        </div>
         <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='cardconainer  relative w-1/2 h-[75vh]'>
            <h1 className='heading absolute overflow-hidden flex text-9xl z-10 text-[#CDEA68] font-semibold tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none left-full'>
              {"FYDE".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}} className='inline-block'>{item}</motion.span>)}
            </h1>
            <div className=' card w-full h-full rounded-xl overflow-hidden '>
                <img className='w-full h-full bg-cover bg-center' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'/>
            </div>

         </motion.div>

        <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)}  className='cardconainer w-1/2 h-[75vh] relative'>
          <h1 className='heading overflow-hidden flex font-semibold text-[#CDEA68] tracking-tighter leading-none absolute translate-x-1/2 -translate-y-1/2 top-1/2 right-full text-9xl'>
            {"VISE".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}} className='inline-block'>{item}</motion.span>)}</h1>
        <div className=' card w-full h-full rounded-xl overflow-hidden '>
            <img className='w-full h-full bg-cover bg-center' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'/>
        </div>

        </motion.div>
           

       

       </div> */}

       {/* ///thecorrect  */}
     
<div className='card-2 w-full felx mt-5'>
    <div className=' card-1 w-full flex gap-10'>
        <div className='w-full'>
          <div className='trawa flex  items-center'>
          <span className='w-3 h-3 mr-3 rounded-full bg-black '></span>
          <h1 className='uppercase '>FYDE</h1>
        </div>

        <motion.div onHoverStart={()=>handleHover(2)} onHoverEnd={()=>handleHoverEnd(2)} className='card-container h-[75vh] w-full relative  mt-3 '>
         <h1 className=' z-10 flex overflow-hidden absolute uppercase font-semibold text-9xl  left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] leading-none tracking-tighter'>
          {"FYDE".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[2]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.05}} key={index}>{item}</motion.span>)}</h1>

          <div className='card-child h-full w-full  rounded-lg overflow-hidden'>
            <img  src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' className='bg-cover bg-center'/>
          </div>
        </motion.div>

        <div className='bott-1 flex  py-5'>
          {["audit","copywriting","sales desk","sliding designing"].map((item,index)=>{
            return <div>
              <h1 className='py-3 px-4 border-2 border-zinc-500 rounded-full uppercase mr-3 leading-none tracking-tighter' key={index}>{item}</h1>
            </div>
          })}
        </div>
        </div>
      

    <div className='card-1 w-full flex '>
       <div className='w-full'>
       <div className='trawa flex  items-center'>
          <span className='w-3 h-3 mr-3 rounded-full bg-black '></span>
          <h1 className='uppercase '>VISE</h1>
        </div>

        <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={()=>handleHoverEnd(3)} className='card-container h-[75vh] w-full relative mt-3 '>
          <h1 className='flex overflow-hidden absolute translate-x-1/2 -translate-y-1/2 top-1/2 uppercase right-full text-[#CDEA68] leading-none tracking-tight text-9xl font-semibold '>
            {"VISE".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[3]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.05}} key={index}>{item}</motion.span>)}</h1>
          <div className='card-child h-full w-full rounded-lg overflow-hidden '>
            <img src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' className='bg-cover bg-center'/>
          </div>
        </motion.div>
       
       <div className='bott-1 flex  py-5'>
          {["agency","company presentation" ].map((item,index)=>{
            return <div>
              <h1 className='py-3 px-4 border-2 border-zinc-500 rounded-full uppercase mr-3 leading-none tracking-tighter' key={index}>{item}</h1>
            </div>
          })}
        </div>

       </div>
       </div>
       </div>
       </div>
      

    {/* ///////////////////////////////// */}

<div className='card-2 w-full felx mt-5'>
    <div className=' card-1 w-full flex gap-10'>
        <div className='w-full'>
          <div className='trawa flex  items-center'>
          <span className='w-3 h-3 mr-3 rounded-full bg-black '></span>
          <h1 className='uppercase '>trawa</h1>
        </div>

        <motion.div onHoverStart={()=>handleHover(2)} onHoverEnd={()=>handleHoverEnd(2)} className='card-container h-[75vh] w-full relative  mt-3 '>
         <h1 className=' z-10 flex overflow-hidden absolute uppercase font-semibold text-9xl  left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] leading-none tracking-tighter'>
          {"trawa".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[2]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.05}} key={index}>{item}</motion.span>)}</h1>

          <div className='card-child h-full w-full  rounded-lg overflow-hidden'>
            <img src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg' className='bg-cover bg-center'/>
          </div>
        </motion.div>

        <div className='bott-1 flex  py-5'>
          {["brand identity","design research","investor deck"].map((item,index)=>{
            return <div>
              <h1 className='py-3 px-4 border-2 border-zinc-500 rounded-full uppercase mr-3 leading-none tracking-tighter' key={index}>{item}</h1>
            </div>
          })}
        </div>
        </div>
      

    <div className='card-1 w-full flex '>
       <div className='w-full'>
       <div className='trawa flex  items-center'>
          <span className='w-3 h-3 mr-3 rounded-full bg-black '></span>
          <h1 className='uppercase '>premium blend</h1>
        </div>

        <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={()=>handleHoverEnd(3)} className='card-container h-[75vh] w-full relative mt-3 '>
          <h1 className='flex overflow-hidden absolute translate-x-1/2 -translate-y-1/2 top-1/2 uppercase right-full text-[#CDEA68] leading-none tracking-tight text-9xl font-semibold '>
            {"premiumblend".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[3]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.05}} key={index}>{item}</motion.span>)}</h1>
          <div className='card-child h-full w-full rounded-lg overflow-hidden '>
            <img src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png' className='bg-cover bg-center'/>
          </div>
        </motion.div>
       
       <div className='bott-2 py-5 flex'>
        <h1 className='py-3 px-4 border-2 border-zinc-500 rounded-full uppercase leading-none tracking-tighter'>branded template</h1>
       </div>

       </div>
       </div>
       </div>
       </div>

       <div className='center-button absolute ml-[36vw] p-10 '>
        <button className='uppercase   flex items-center px-5 py-5 rounded-full bg-black text-white leading-none tracking-tighter text-md'>view all case studies  <div className='h-3 w-3 bg-slate-50 rounded-full ml-3 '></div></button>
       
    
       </div>
       </div>


   

    </div> 
  )
}

export default Feature