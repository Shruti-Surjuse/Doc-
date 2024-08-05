import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full  bg-[#CDEA68] rounded-3xl text-black'>
        <div className='w-5/6 text-[3.5vw] font-light leading-[3.4vw] px-20 py-20 tracking-tight font-["Neue_Montreal"]'><h1>Ochi is a strategic partner for fast
            -growing tech businesses that need to raise funds, sell 
            products, explain complex ideas, and hire great people.</h1></div>

            <div className='border-t-[2px]  border-[#a1b562]  flex items-center mt-16 justify-between py-10 px-20'>
              <div className='left -mt-52 mr-[20vw]'><h1>What you can expect:</h1></div>

              <div className='middle text-md '>
                <div className='one w-72'><h1>
                    We create tailored presentations to help you persuade your colleagues, clients, or investors. 
                    Whether it's live or digital, delivered for one or a hundred people.</h1></div>

                 <div className='two w-64 mt-10'>
                  <h1>
                    We believe the mix of strategy and design (with a bit of coffee)
                     is what makes your message clear, convincing, and captivating.
                  </h1>
                 </div>
              </div>


              <div className='right mr-[9vw]  '>
                {["S:","Instagram","Behance","Facebook","Linkedin"].map((item,index)=>{
                  return <div className='text-md capitalize flex'>
                    {index===0 && (<div className='mb-10'></div>)}
                    <h1 key={index}>{item}</h1>

                  </div>

                })}
                
              </div>
            </div>
    

    <div className='border-t-[2px]  border-[#a1b562]  px-20 flex py-6'>
      <div className='w-1/2'>
    <h1 className='font-semibold text-[4vw] -py-4'>Our approach :</h1>
     <button className='uppercase py-4 px-10 bg-black text-white mt-3 rounded-full flex items-center gap-10'>Read More
     <div className='w-3 h-3 rounded-full bg-white'> </div></button>
    </div>

    <div className='w-1/2 h-[65vh] '><img class="bg-gray-200 w-full max-w-full rounded entered loaded" 
    data-component="lazyload" data-animate="data-animate" 
    src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" 
    width="663" height="469" data-src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
     data-srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x" 
     alt="image description" data-ll-status="loaded" 
     srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x " ></img></div>
    </div>

</div>

    
  )
}

export default About