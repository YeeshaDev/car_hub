import React from 'react'
import {IoArrowForwardCircleOutline} from 'react-icons/io5'
import { blog } from '../constants/BlogData';
import PagesHero from '../components/Features/PagesHero';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Blog = () => {
    
    return (
        <motion.div
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:1.7}}
        exit={{
           
            opacity:0,
        }}
         >
            <PagesHero
            image='./src/assets/aboutusBg.jpg'
            text='Blog'
            page='Blog'
            />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center justify-center  gap-4 px-3 mt-5'>
           {blog.map((item) => (
            <div key={item.id} className='w-full'>
                <Link to={`/blog/${item.title}`}>
             <figure className='  lg:h-[250px] last:h-[100px]'>
                    <img src={item.image} alt='blog' className='w-full object-contain h-full' />  
                    </figure>
                  
                  <div>
                    <p className='text-[var(--primary)] font-bold uppercase mt-2 text-left ml-2'>20 may, 2020</p>   
                    <h3 className=' capitalize font-semibold lg:text-[1.5rem]  text-left  ml-2  mt-3'>{item.title}</h3>
                    <p className='mt-2 text-[1rem] text-left ml-[0.5rem] w-full '>{item.text}</p>
                    <button className='flex items-center gap-1 ml-2 mt-2 text-[var(--primary)] font-[600] cursor-pointer'>Read more <IoArrowForwardCircleOutline/></button>
                    
                  </div>
                  </Link>
            </div>
           ))} 
        </div>
        </motion.div>
    )
}

export default Blog
