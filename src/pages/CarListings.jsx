import React from 'react'
import PagesHero from '../components/Features/PagesHero';
import { fetchCars } from '../utils/supabase';
import {useQuery} from 'react-query';
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';
import {HiOutlineSortAscending} from 'react-icons/hi'
import ProductCards from '../components/Features/ProductCards';
const CarListings = () => {

    const { data: cars, isLoading, isError } = useQuery('cars', fetchCars, {
        refetchInterval: 300000
    });
                
    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    if (isError) {
      return <div>Error retrieving data</div>;
    }
    return (
        <motion.section 
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:1.7}}
        exit={{
           
            opacity:0,
        }} >
           <PagesHero
           image='./src/assets/aboutusBg.jpg'
           text='Car Listings'
           page='Cars'
           /> 

           <div className='px-3 mt-3'>
            <div className='flex items-center gap-3 mb-5'>
            <span className='flex items-center gap-2'><HiOutlineSortAscending/> Sort by</span>
            <select className='p-3 rounded-sm'>
                <option>Select</option>
                <option value='low'>Low to high</option>
                <option value='high'>High to low</option>
            </select> 
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
             {cars.map((item) => (
                <div key={item.id} className='flex flex-col  items-center gap-4 justify-centermb-10 shadow-md rounded-md mt-4'>
                    <Link to={`/cars/${item.name}`}>
                    <figure className='w-full '>
                    <img src={item.image} className='object-cover'/>
                    </figure>
                   
                   <div className='p-5 '>
                    <h1 className='text-[1.3rem] font-bold my-5 whitespace-nowrap'>{item.name}</h1>
                    <p>Start at  <span className='text-[var(--primary)] font-bold'>${item.price}</span> per day</p>
                 </div> 
                 </Link> 
                </div>
             ))}
           </div>
           </div>
        </motion.section>
    )
}

export default CarListings
