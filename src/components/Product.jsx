import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade,Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ProductCards from './Features/ProductCards';
import FilterCards from './Features/FilterCards';
import useCarData from '../utils/useCars';
const Product =  () => {
  const { cars, isLoading, isError } = useCarData();

  if (isLoading) {
      return <div>Loading...</div>;
  }

  if (isError) {
      return <div>Error retrieving data</div>;
  }  

    
//console.log(cars)
    return (
        <section className=' relative p-3'>
            <div>

           
             <div className='absolute text-[10rem] top-[6rem] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-400 opacity-20'>B</div>
             <div className='flex flex-col items-center my-10'>
             <h2 className='text-[var(--primary)]'>FEATURED CARS</h2>
         <h1 className='text-[2rem] lg:text-[2.5rem] font-semibold text-center lg:text-inherent'>Get Our Best Offers</h1>
         </div>
         <FilterCards/>
             </div>
         
         <div >
         <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
           
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            
        }}
        modules={[Autoplay,Pagination]}
        className="px-10 mt-3"
      >
         {cars.slice(0,5).map((item) => {
            const{name,id,image,price} = item;
            return (
                <SwiperSlide key={id} className='mb-10 shadow-md rounded-md mt-4' >
                   <Link to={`/cars/${name}`}> 
                 <ProductCards image={image}
                 name={name}
                 price= {price}
                 />
                 </Link>
                </SwiperSlide>
                
            )
         })}
         </Swiper>
         </div> 
        </section>
    )
}

export default Product
