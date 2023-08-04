import React from 'react'
import Slider from './Features/Slider'



const Hero = () => {
    
    return (
        <div className='relative'>
           <Slider/>
           <div className='absolute left-[50%] xxsm:left-[60%] top-[35%] translate-x-[-50%] translate-y-[-50%] lg:top-[45%] lg:left-[75%] z-[55] lg  text-white'>
           <h1 className=' text-[3rem] sm:text-[5rem] font-extrabold whitespace-nowrap'> Car <span className='text-[#94053a]'> Hub</span> </h1>
           <h3 className=' text-[2rem] md:text-[2.8rem] w-[300px] md:w-[450px]'>Rent & Shop any car of dreams here</h3>
           <button className="btn w-[180px]">
        <svg width="180px" height="60px" viewBox="0 0 180 60" className="svg-border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>Reserve Now</span>
        </button>
           </div>
           <div className='lg:absolute md:bottom-[30%] px-3 lg:px-1 lg:left-5 lg:text-white z-[55] mt-10 '>
            <h3 className='text-[1.2rem]'>120+ CARS TYPE AND BRANDS</h3>
            <h3 className='text-[2rem] '>Search Your Best Cars</h3>
           </div>
          
           {/* Select Form Starts Here */}

           <div className='lg:absolute bottom-0 w-full h-[200px] z-[55]  '>
            <form className='px-3  my-4 lg:my-[3%] grid grid-cols-2 lg:grid-cols-4 gap-x-2 lg:gap-9 '>
                <div className='flex flex-col'>
                <label htmlFor='cars' className='font-semibold my-2 lg:text-white'>CAR BRANDS</label>
                <select className='border rounded-md border-[var(--primary)] py-3 px-5 lg:w-[300px] h-[60px] text-black'>
                    
                    <option value='brand 1'>brand 1</option>
                    <option value='brand 2'>brand 2</option>
                    <option value='brand 3'>brand 3</option>
                    <option value='brand 4'>brand 4</option>
                </select>
                </div>
                <div className='flex flex-col'>
                <label htmlFor='cars' className='font-semibold my-2 lg:text-white'>CAR BRANDS</label>
                <select className=' border rounded-md border-[var(--primary)] py-3 px-5 lg:w-[300px] h-[60px] text-black'>
                    
                    <option value='brand 1'>brand 1</option>
                    <option value='brand 2'>brand 2</option>
                    <option value='brand 3'>brand 3</option>
                    <option value='brand 4'>brand 4</option>
                </select>
                </div>
                <div className='flex flex-col'>
                <label htmlFor='cars' className='font-semibold my-2 lg:text-white'>CAR BRANDS</label>
                <select className=' border rounded-md border-[var(--primary)] py-3 px-5 lg:w-[300px] h-[60px] text-black'>
                    
                    <option value='brand 1'>brand 1</option>
                    <option value='brand 2'>brand 2</option>
                    <option value='brand 3'>brand 3</option>
                    <option value='brand 4'>brand 4</option>
                </select>
                </div>
                <div className='flex flex-col '>
                    <label className=' my-2 text-white lg:text-[rgba(0,0,0,0.1)]'>y</label>
                    <button className="btn !mt-[0] lg:!w-[300px] py-3">
        <svg  height="60px" viewBox="0 0 180 60" className="svg-border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>All cars </span>
        </button>
                </div>
                
            </form>
           </div>
          
            
        
        </div>
    )
}

export default Hero
