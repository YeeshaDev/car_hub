import React from 'react'
import Testimonials from '../components/Testimonials'
import PagesHero from '../components/Features/PagesHero'
import { FaCheckCircle, FaPhone } from 'react-icons/fa'
import Dealers from '../components/Dealers'

const About = () => {
    return (
        <div> 
            <PagesHero
            image='./src/assets/aboutusBg.jpg'
            text='About us'
            page='About us'
            />
        <section className='flex flex-col items-center justify-center lg:justify-between lg:flex-row gap-10 max-w-full py-10 px-5 lg:mt-10'>
            <div className='lg:max-w-[50%]'>
            <h2 className=' text-[2rem] lg:text-[2.5rem] font-bold capitalize text-[var(--primary)]'>Welcome to car hub</h2>
            <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
         standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         <ul className='grid grid-cols-1 sm:grid-cols-2 my-5'>
        <li className='flex items-center gap-2 mt-3'><span className='text-[var(--deepblue)]'><FaCheckCircle/></span>Lorem Ipsum is simply dummy</li>
        <li className='flex items-center gap-2 mt-3'><span className='text-[var(--deepblue)]'><FaCheckCircle/></span>Lorem Ipsum is simply dummy</li>
        <li className='flex items-center gap-2 mt-3'><span className='text-[var(--deepblue)]'><FaCheckCircle/></span>Lorem Ipsum is simply dummy</li>
        <li className='flex items-center gap-2 mt-3'><span className='text-[var(--deepblue)]'><FaCheckCircle/></span>Lorem Ipsum is simply dummy</li>
         </ul>
     </div>
     <div>
        <img src='./src/assets/aboutCar.png' alt=''
/>     </div>
        </section>
        <section className='flex flex-col items-center justify-center lg:justify-between lg:flex-row-reverse gap-10 my-[3rem] pb-10  px-5'>
            <div  className='lg:max-w-[50%]'>
            <h2 className=' text-[2rem] text-[var(--primary)] lg:text-[2.5rem] font-bold capitalize'>We Provide you the best services in carhub</h2>
            <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
         standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         <p className='mt-4'>We working since 1980 with 4.000 customers
All brand & type cars in our garage
1.000+ picking locations around the world</p>
   <h4 className='text-[var(--deepblue)] mt-3 font-bold text-[1.1rem] uppercase'>Need any help</h4>
   <p className='flex items-center gap-2 mt-2'><span className='text-[var(--primary)]'> <FaPhone/></span> +23478685848</p>
     </div>
     <div>
        <img src='./src/assets/car2.jpg' alt=''
/>     </div>
        </section>
        <section className='mt-[2rem] lg:py-[3rem]'>
        <Dealers/>
        </section>
        <section className='mt-[2rem]'>
        <Testimonials/>
        </section>
        

        </div>
    )
}

export default About
