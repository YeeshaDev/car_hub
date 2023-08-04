import React from 'react'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import { upcoming } from '../constants/UpcomingData'
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFade,Autoplay, Pagination, Navigation } from "swiper";
const UpcomingCars = () => {
    const swiper = useSwiper();
    const swiperRef = React.useRef();
    return (
        <div className='relative w-full h-full overflow-hidden z-0 before:content-[""] before:absolute before:bg-[url("./src/assets/upcomingBg.jpg")] before:bg-cover before:bg-center before:top-0 before:bottom-0 before:right-0 before:left-0 before:opacity-[0.3] mt-10 lg:mt-0' style={{
            
          
       }}>
            <section className='relative flex flex-col lg:flex-row   z-50' >
                <div className='lg:w-[300px] px-[5%] text-center'>
                    <h1 className='text-[5rem] whitespace-nowrap text-center'>18+</h1>
                    <h4 className='text-[1.5rem] whitespace-nowrap'>UPCOMING CARS</h4>
                    <div className='flex items-center justify-center lg:justify-end gap-6 my-4 lg:mt-10'>
                    <button onClick={() => swiperRef.current?.slidePrev()} className='bg-[#373f44] text-white text-[1.8rem] h-10 w-10 flex items-center justify-center '><FaAngleLeft/></button>
                   <button onClick={() => swiperRef.current?.slideNext()} className='bg-[#373f44] text-white text-[1.8rem] h-10 w-10 flex items-center justify-center'><FaAngleRight/></button>
                    </div>
                    </div>
                     <div className='lg:max-w-[80%]'>
                     <Swiper
        spaceBetween={0}
        slidesPerView={2}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768 : {
                slidesPerView:3,
                spaceBetween:0
            }
          }}

          
      >
        
            {
                upcoming.map((item) => {
                 return (
                        <SwiperSlide  key={item.id}>
                            <figure className='lg:h-[200px]'>
                            <img src={`./assets/${item.image}`} alt='' className="cover " />
                            </figure>
                            <div className='p-3 before:bg-white relative w-full h-full overflow-hidden z-0 before:content-[""] before:absolute before:bg-[url("./src/assets/upcomingBg.jpg")] before:bg-cover before:bg-center before:top-0 before:bottom-0 before:right-0 before:left-0 before:opacity-[0.1]' >
                                <h4 className='relative z-[99] opacity-1'>{item.date}</h4>
                                <p className='relative z-[99] opacity-1'>{item.name}</p>
                            </div>
                        
                        </SwiperSlide> 
                    )
                    
                })
            }
           
           
        
      </Swiper>
      
                    
                     
                </div>
            </section>
        </div>
    )
}

export default UpcomingCars
