import React from 'react';
import { team } from '../constants/dealersData';

const Dealers = () => {
    return (
        <div className='pt-[7rem] pb-10 relative bg-[url("./src/assets/carBg.jpg")] bg-cover bg-[100%]  bg-no-repeat h-full'>
            <div >
                <img src='./src/assets/caradvert.jpg' className='absolute left-[50%] top-[3rem] transform translate-x-[-50%] translate-y-[-50%] z-[99]'/>
                </div> 
         <div className='absolute top-0 bottom-0 w-full h-full bg-[rgba(0,0,0,0.3)] z-[-2]'></div> 
         <div className=' absolute text-[10rem] top-[15rem] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-400 opacity-20 z-10'>S</div>
             <div className='pt-[3rem] flex flex-col items-center my-10 z-10'>
             <h2 className='text-[var(--primary)]'>OUR PROFESSIONAL STAFF</h2>
         <h1 className='text-[2.5rem] font-semibold text-white '>Cars Dealer Drives</h1>
         </div>
         <article className=' px-5 mb-10 flex flex-col items-center justify-center lg:flex-row gap-4 z-10'>
            {team.map((data)=>(
                <div key={data.id} className='relative pl-5 flex flex-row-reverse items-center justify-between w-full lg:w-[400px]  bg-white shadow-sm'>
                    <div className='absolute bg-[var(--primary)] w-[0.3rem] h-16 hover:h-full hover:transition-all left-0 '></div>
                <img src={data.image} alt='avatar' className='object-cover h-[200px]' />
                  <div>
                    <h2>{data.name}</h2>
                    <p>{data.exp} Years Experience</p>
                    
                  </div>
                </div>
            ))}
         </article>
         <button className='btn mt-16 mb-10 mx-auto block w-full'>
         <svg width="180px" height="60px" viewBox="0 0 180 60" className="svg-border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
            <span className='w-full'>View All</span></button>

        </div>
    )
}

export default Dealers
