import React from 'react'
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { testimonies } from '../constants/testimonials'
const Testimonials = () => {
    return (
        <section className='relative'>
          <div className='absolute text-[10rem] top-[2rem] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-400 opacity-20'>T</div>
             <div className='flex flex-col items-center my-10'>
             <h2 className='text-[var(--primary)]'>LATEST TESTIMONIALS</h2>
         <h1 className='px-3 text-[2rem] lg:text-[2.5rem] font-semibold text-center lg:text-inherent'>What They Say About Us</h1>

         </div> 
         <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={false}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        centeredSlides={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-20"
        
      >
        
            {testimonies.map((item) => {
                return (
                    <SwiperSlide  key={item.id} className='py-8' >
                    <p className='w-[90%] block m-auto px-5'>{item.text}</p>
                    <div className='flex flex-col gap-y-3 items-center justify-center mt-8'>
                    <figure className='w-[4rem] h-[4rem]'>
                    <img src={item.image}
                     alt='hero'
                     className='rounded-full' />
                     </figure>
                    <p>{item.name}</p>
                    </div>
                    </SwiperSlide>
                )
            })}
            </Swiper>
            
        </section>
    )
}

export default Testimonials
