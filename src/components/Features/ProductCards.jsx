import React from 'react'
import { motion } from 'framer-motion'

const ProductCards = ({image,name,price}) => {
    return (
        <>
         <motion.figure 
         whileHover={{scale:1.05,
            transition:{duration:0.4, delay:0.5}
        }}
         whileTap={{scale:0.9}}
         className='w-full h-[200px] lg:h-[250px]'>
                    <img src={image} alt='cars' className='object-contain rounded-t-md ' />

                 </motion.figure>
                 
                 <div className='p-5 '>
                    <h1 className='text-[1.3rem] font-bold my-5 whitespace-nowrap'>{name}</h1>
                    <p>Start at  <span className='text-[var(--primary)] font-bold'>${price}</span> per day</p>
                 </div>   
        </>
    )
}

export default ProductCards
