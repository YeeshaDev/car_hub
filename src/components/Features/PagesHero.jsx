import React from 'react';

const PagesHero = ({text,image,page}) => {
    return (
        <section className=''>
           <div className='w-full lg:h-[350px] relative'>
            <img src={image} alt='hero' className='object-cover w-full h-full'/>
            <div className='absolute w-full h-full bg-[rgba(0,0,0,0.5)] z-[5] top-0'></div>
            
            <h2 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[3rem] text-white z-[999]'>{text}</h2>
            <div className='absolute bottom-0 w-full h-[70px] flex items-center px-10 bg-[rgba(143,142,142,0.5)] shadow-lg z-[999] text-white'>
                <h3 className='text-[1.2rem] tracking-wider'>Home /<span className='text-[var(--primary)] font-bold'>{page}</span> </h3>
                </div> 
            </div>
        </section>
    )
}

export default PagesHero
