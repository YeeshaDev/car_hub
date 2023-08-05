import React from 'react';
import {IoCalendar,IoChatbubblesOutline,IoLocationOutline, IoMegaphoneOutline} from 'react-icons/io5'
import { motion } from 'framer-motion';
const AboutUs = () => {
    return (
      <main >
        <div className='relative'>
            <div className='absolute text-[10rem] top-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-400 opacity-20'>W</div>
            <div className='flex flex-col items-center my-20'>
            <p className='text-[var(--primary)]'>Welcome To Our Website</p>
        <h2 className='text-[2rem] lg:text-[2.5rem] font-semibold '>CAR DEALERSHIP</h2>
        <p className='mt-8 lg:w-[70%] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard
             dummy text ever since the been when an unknown printer.</p>
            </div>
        <section className='grid grid-cols-1 lg:grid-cols-3 place-items-center gap-2 px-5'>
            <div className='bg-[#f6f6f6] p-10 w-full h-[250px] flex flex-col items-center justify-center hover:relative hover:after:z-10 hover:bg-[url("../assets/car3.jpg")] hover:bg-cover hover:text-white hover:bg-center hover:after:content-[""] hover:after:absolute hover:after:bg-[rgba(0,0,0,0.3)] hover:after:w-full  hover:after:top-0 hover:after:bottom-0 hover:after:left-0 hover:after:right-0'>
              <IoChatbubblesOutline className='text-[4rem] mb-5 text-[var(--primary)] hover:relative ' />
              <div>
                <h3 className='opacity-1 hover:opacity-1 hover:relative'>24/7 Customer Online Support</h3>
                <p>Call us Anywhere Anytime</p>
                </div>  
            </div>
            <div className='bg-[#f6f6f6]  h-[250px] p-10 w-full flex flex-col items-center justify-center hover:relative hover:after:z-10 hover:bg-[url("../assets/car4.jpg")] hover:bg-cover hover:text-white hover:bg-center hover:after:content-[""] hover:after:absolute hover:after:bg-[rgba(0,0,0,0.3)] hover:after:w-full  hover:after:top-0 hover:after:bottom-0 hover:after:left-0 hover:after:right-0'>
              <IoCalendar className='text-[4rem] mb-5 text-[var(--primary)]'/>
              <div>
                <h3>Reservation Anytime You Want</h3>
                <p>24/7 Customer Online Support</p>
                </div>  
            </div>
            <div className='bg-[#f6f6f6] h-[250px] p-10 w-full flex flex-col items-center justify-center hover:relative hover:after:z-10 hover:bg-[url("../assets/car5.jpg")] hover:bg-cover hover:text-white hover:bg-center hover:after:content-[""] hover:after:absolute hover:after:bg-[rgba(0,0,0,0.3)] hover:after:w-full  hover:after:top-0 hover:after:bottom-0 hover:after:left-0 hover:after:right-0'>
              <IoLocationOutline className='text-[4rem] mb-5 text-[var(--primary)]' />
              <div>
                <h3>Lots Of Pickin Locaton</h3>
                <p>250+ Locations</p>
                </div>  
            </div>
            <div>
              
            </div>
        </section>
        </div>
        <section className='bg-[url("../assets/aboutBg.jpg")] bg-bottom  bg-no-repeat mt-[-2rem]  pt-[7%]'>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between px-5 py-[3rem] lg:gap-5 relative' >
        <div className='absolute text-[10rem] top-[10rem] left-[3rem] translate-x-[-50%] translate-y-[-50%] text-gray-400 opacity-20'>A</div> 
        <div className='my-20'>
            <p className='text-[var(--primary)]'>Know More About Us</p>
        <h2 className='text-[2rem] lg:text-[2.5rem] font-semibold '>WHAT WE DO</h2>
        <p className='mt-8 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
         standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         <p>We working since 1980 with 4.000 customers
All brand & type cars in our garage
1.000+ picking locations around the world</p>
<figure className='mt-5'>
 <img src='./assets/signature.png' alt='signature' className='w-[7rem]' />
 <p className='text-[var(--primary)] whitespace-nowrap'>CAR HUB FOUNDER</p>
 </figure>
 
            </div>
          
          <motion.div 
          className='lg:w-[150%]'
          initial={{opacity: 0, x:100}}
          whileInView={{
            opacity:1,
            x:0,
            transition:{duration:0.4, delay:0.5}
          }}
          >
            <img src='./assets/aboutCar.png' alt='about red car'
            className='object-cover '
            />
          </motion.div>
        </div>
        </section>

        
        </main>
    )
}

export default AboutUs
