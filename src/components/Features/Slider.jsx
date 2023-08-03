import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { EffectFade,Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {

    const images =[
        {
            id:1,
            img:'./src/assets/car1.jpg',
        },
        {
            id:2,
            img:'./src/assets/car2.jpg',
        },
        {
            id:3,
            img:'./src/assets/car3.jpg',
        },
        
    ]
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
         
          
        }}
        
        modules={[EffectFade,Autoplay, Pagination, Navigation]}
        className="mySwiper"

        
      >
            {
                images.map((item) => {
                 return (
                        <SwiperSlide  key={item.id}>
                            <figure className="relative bg-[#333] w-full h-[600px] lg:h-full overflow-hidden">
                            <img src={item.img} alt='' className="cover " />
                           <div className="absolute top-0 bottom-0 h-full w-full bg-[rgba(0,0,0,0.5)]"></div>
                            </figure>
                        
                        </SwiperSlide> 
                    )
                    
                })
            }
           
        
        
      </Swiper>
      
    </>
  );
    }
/* <img src='./src/assets/car1.jpg' />
        </SwiperSlide>
        <SwiperSlide><img src='./src/assets/car2.jpg' /></SwiperSlide>
        <SwiperSlide><img src='./src/assets/car3.jpg' /> */