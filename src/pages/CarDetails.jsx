import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { fetchCars } from '../utils/supabase';
import {useQuery} from 'react-query'
import { HiStar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {RiRoadsterFill, RiSettings3Fill,RiMapPinFill,
    RiTimerFlashLine,RiWheelchairFill,RiBuildingLine} from 'react-icons/ri'
import Swal from 'sweetalert2';
import Bookings from '../components/Bookings';
import PaymentMethod from '../components/PaymentMethod';
const CarDetails = () => {
    const {name} = useParams()
    const { data: cars, isLoading, isError } = useQuery('cars', fetchCars, {
        refetchInterval: 300000
    });


                
    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    if (isError) {
      return <div>Error retrieving data</div>
    }

    const carInfo = cars.find((item) => item.name === name)
 
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [carInfo]);
        
    return (
        
           
            <motion.section
            initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:1.7}}
        exit={{
           
            opacity:0,
        }}
             key={carInfo.id} >
                <div className='flex flex-col lg:flex-row items-center gap-8 mb-4 lg:mt-5'>
            <figure>
                <img src={carInfo.image} alt='' />
            </figure>
            <div className='lg:max-w-[50%] lg:mt-10 px-5 lg:px-2'>
                <h2 className='text-[1.6rem] font-bold'>{carInfo.name}</h2>
                <div className='flex items-center gap-5'>
                <p>${carInfo.price}.00 / Day</p>
                 <span className='flex items-center gap-1'>
                    <HiStar className='text-orange-500'/>
                    <HiStar className='text-orange-500' />
                    <HiStar className='text-orange-500' />
                    <HiStar className='text-orange-500' />
                    <HiStar className='text-orange-500' />
                    <p>(4.85)</p>
                    </span> 
                </div>
                <p className='tracking-wide leading-8 my-8'>{carInfo.longDesc}</p>
                <div className='car_settings grid grid-cols-2 sm:grid-cols-3 gap-y-6 mt-5'>
                  <span><RiRoadsterFill className='text-[var(--primary)] text-[1.4rem] '/> 
                  {carInfo.model}</span>
                  <span><RiBuildingLine className='text-[var(--primary)] text-[1.4rem]'/>{carInfo.brand}</span>
                  <span><RiSettings3Fill className='text-[var(--primary)] text-[1.4rem]'/>{carInfo.type}</span> 
                  <span><RiTimerFlashLine className='text-[var(--primary)] text-[1.4rem]'/>{carInfo.speed}</span> 
                  <span><RiWheelchairFill className='text-[var(--primary)] text-[1.4rem]'/>{carInfo.seat}</span>
                  <span><RiMapPinFill className='text-[var(--primary)] text-[1.4rem]'/>GPS Navigation</span>
                </div>
                
            </div>
            <div>

            </div>
            </div>
            <div className='lg:flex gap-[10rem] max-w-[100%] px-5 mt-10'>
            <div className=' '>
                <h2 className='text-[1.6rem] font-bold text-[var(--primary)]'>Booking Information</h2>
                
                <Bookings />
                </div>
            <div>
            <h2 className='text-[1.6rem] font-bold my-5 text-[var(--primary)]'>Payment Information</h2>
                <PaymentMethod />
            </div>

            
            </div>
            </motion.section>           
        
        
    )
}

export default CarDetails
