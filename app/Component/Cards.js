import React from 'react'

function Cards() {
  return (
    <div className=' w-full p-16 flex gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='card-1 w-full h-full  bg-[#004D43] rounded-2xl flex items-center justify-center relative'>
                <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
                <button className='absolute left-7 bottom-7 border-[#CDEA68] border-2 rounded-full py-1 px-2 text-[#CDEA68]'>2019-2022</button>
            </div>
            
        </div>

        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='card-2 flex gap-5 h-full'>
                <div className='w-1/2 bg-[#212121] rounded-2xl flex items-center justify-center relative'>
                    <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
                <button className='absolute left-7 bottom-7 border-zinc-200 border-2 rounded-full py-1 px-2 text-zinc-200 uppercase'>rating5.0 on clutch</button>

                </div>
                <div className='w-1/2 bg-[#212121] rounded-2xl relative flex items-center justify-center'>
                <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
                <button w-25 className='absolute left-7 bottom-7 border-zinc-200 border-2 rounded-full py-1 px-2 text-zinc-200 uppercase'>business bootcamp alumni</button>
                </div>
            </div>
            
            </div>

    </div>
  )
}

export default Cards