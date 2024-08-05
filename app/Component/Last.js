// "use client"
// import React, { useState } from 'react'

// function eyes(){
//     const [rotate, setrotate] = useState(0)
//     useState(()=>{
//        window.addEventListener("mousemove",(e)=>{
//         let mouseX=e.ClientX
//         let mouseY=e.clientY

//         let deltaX=mouseX-window.innerWidth/2
//         let deltaY=mouseY-window.innerHeight/2

//         let angle=Math.atan2(deltaX,deltaY)*(180/Math.PI)
//         setrotate(angle-180)
//        })
//     })
// }

// function Last() {
//   return (
//     <div className='bg-[#CDEA68] h-screen w-full py-20 relative flex items-center justify-center'>
//         <h1 className='uppercase font-bold text-[11vw] leading-none absolute  tracking-tighter '> <span className='ml-72'>Ready</span><br/> <span className='ml-[13vw]'>to start</span> <br/> <span className='ml-[6vw]'>the project?</span></h1>

// <div className='flex gap-16 z-50'>
// <div className='w-[13vw] bg-white  h-[13vw] rounded-full flex items-center justify-center'>
//             <div className='bg-black w-[8vw]  h-[8vw] rounded-full overflow-hidden flex items-center justify-center'>
//                 <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-5 '>
//                     <div className='h-full w-5 rounded-full bg-white'></div>
//                 </div>
//             </div>
            
//         </div>

//         <div className=' bg-white w-[13vw] h-[13vw] rounded-full flex items-center justify-center'>
//             <div className='w-[8vw] bg-black  h-[8vw] rounded-full flex items-center justify-center '>
//             <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-5 '>
//                     <div className='h-full w-5 rounded-full bg-white'></div>
//                 </div>
                
//             </div>
            
//         </div>
// </div>
//     </div>
//   )
// }

// export default Last