import React from 'react'
import { blog } from '../constants/BlogData';
import { Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import {IoArrowForwardCircleOutline} from 'react-icons/io5'
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay,Navigation } from "swiper";

const Blog = () => {
    return (
        <section className='relative'>
          <div className='absolute text-[10rem] top-[2rem] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-400 opacity-20'>B</div>
             <div className='flex flex-col items-center mt-20 mb-10'>
             <h2 className='text-[var(--primary)]'>ARTICLE FROM BLOG</h2>
         <h1 className='text-[2.5rem] font-semibold'>Our Latest News</h1>

         </div> 
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            
        }}
      
     
        modules={[Autoplay]}
        className="text-left"
      >
      
            {blog.slice(0,4).map((data) => (
                <SwiperSlide key={data.id} className='p-5'>
                    <figure className='h-[200px] lg:h-[250px] last:h-[100px] blog-img'>
                    <img src={data.image} alt='blog' className='object-contain h-full' />  
                    </figure>
                  
                  <div>
                    <p className='text-[var(--primary)] font-bold uppercase mt-2 text-left ml-2'>20 may, 2020</p>   
                    <h3 className=' capitalize font-semibold lg:text-[1.5rem]  text-left  ml-2  mt-3'>{data.title}</h3>
                    <p className='mt-2 text-[1rem] text-left ml-[0.5rem] w-full '>{data.text}</p>
                    <button className='flex items-center gap-1 ml-2 mt-2 text-[var(--primary)] font-[600] cursor-pointer'>Read more <IoArrowForwardCircleOutline/></button>
                    
                  </div>
                </SwiperSlide>
            ))}
            </Swiper>  
        </section>
    )
}

export default Blog
