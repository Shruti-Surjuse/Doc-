"use client"
import React, { useEffect, useState } from 'react'

function eyes(){
    const [roatate, setroatate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
          let mouseX=e.clientX
          let mouseY=e.clientY

          let deltaX=mouseX-window.innerWidth/2
          let deltaY=mouseY-window.innerHeight/2
          

          var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
          setroatate(angle-180);
        })
    })



  return (
    <div className='h-screen w-full overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed='-.7' className=' eyes relative w-full h-full  bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
          <div className='support'>
            <div  className='absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex gap-10'>
                <div data-scroll data-scroll-section data-scroll-speed='.3'  className='eye h-[15vw] w-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                <div className='black h-2/3 w-2/3 bg-black rounded-full relative '>
                    <div style={{transform:`translate(-50%,-50%) rotate(${roatate}deg)`}} className='line absolute w-full h-10 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
                         <div className='white w-6 h-6 bg-zinc-100 rounded-full '></div>
                    </div>
                       
                    </div>

                </div>
                <div data-scroll data-scroll-section data-scroll-speed='.3' className='eye h-[15vw] w-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                <div className='black h-2/3 w-2/3 bg-black rounded-full relative '>
                <div  style={{transform:`translate(-50%,-50%) rotate(${roatate}deg)`}} className='line absolute w-full h-10 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] '>
                         <div className='white w-6 h-6 bg-zinc-100 rounded-full '></div>
                    </div>

                </div>
                    
                </div>
                </div>
            </div>
        </div>
         
    </div>
  )
}

export default eyes