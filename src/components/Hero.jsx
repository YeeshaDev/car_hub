import React from 'react'
import Slider from './Features/Slider'

const Hero = () => {
    return (
        <div className='relative'>
           <Slider/>
           <div className='absolute left-[10%] top-[25%] md:right-[10%] md:top-[30%] lg:top-[20%] lg:right-5 z-[55]  text-white'>
           <h1 className=' text-[3rem] sm:text-[5rem] font-extrabold'> Car <span className='text-[#94053a]'> Hub</span> </h1>
           <h3 className=' text-[2rem] sm:text-[2.8rem]'>Rent & Shop any car<br/> of dreams here</h3>
           <button className="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" className="svg-border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>Reserve Now</span>
        </button>
           </div>
           <div className='lg:absolute lg:bottom-[30%] lg:left-5 lg:text-white z-[55]'>
            <h3 className='text-[1.2rem]'>120+ CARS TYPE AND BRANDS</h3>
            <h3 className='text-[2rem]'>Search Your Best Cars</h3>
           </div>
          
           {/* Select Form Starts Here */}

           <div className='lg:absolute bottom-0 w-full h-[200px] bg-[rgb(11,11,11,0.7)] z-[55] '>
            <form className='my-4 lg:my-[3%] grid grid-cols-2 lg:grid-cols-4 lg:gap-9'>
                <div className='flex flex-col'>
                <label htmlFor='cars' className='text-white my-2'>CAR BRANDS</label>
                <select className=' py-3 px-5 w-[300px] h-[60px]'>
                    
                    <option value='brand 1'>brand 1</option>
                    <option value='brand 2'>brand 2</option>
                    <option value='brand 3'>brand 3</option>
                    <option value='brand 4'>brand 4</option>
                </select>
                </div>
                <div className='flex flex-col'>
                <label htmlFor='cars' className='text-white my-2'>CAR BRANDS</label>
                <select className=' py-3 px-5 w-[300px] h-[60px]'>
                    
                    <option value='brand 1'>brand 1</option>
                    <option value='brand 2'>brand 2</option>
                    <option value='brand 3'>brand 3</option>
                    <option value='brand 4'>brand 4</option>
                </select>
                </div>
                <div className='flex flex-col'>
                <label htmlFor='cars' className='text-white my-2'>CAR BRANDS</label>
                <select className=' py-3 px-5 w-[300px] h-[60px]'>
                    
                    <option value='brand 1'>brand 1</option>
                    <option value='brand 2'>brand 2</option>
                    <option value='brand 3'>brand 3</option>
                    <option value='brand 4'>brand 4</option>
                </select>
                </div>
                <div className='flex flex-col'>
                    <label className=' my-2 '>y</label>
                <button className='w-[300px] h-[60px] bg-[#94053a]'>Search Now</button>
                </div>
                
            </form>
           </div>
          
            
        
        </div>
    )
}

export default Hero
