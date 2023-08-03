import React from 'react'

const ProductCards = ({image,name,price}) => {
    return (
        <>
         <figure className='w-full h-[200px] lg:h-[250px]'>
                    <img src={image} alt='cars' className='object-contain rounded-t-md ' />

                 </figure>
                 
                 <div className='p-5 '>
                    <h1 className='text-[1.3rem] font-bold my-5 whitespace-nowrap'>{name}</h1>
                    <p>Start at  <span className='text-[var(--primary)] font-bold'>${price}</span> per day</p>
                 </div>   
        </>
    )
}

export default ProductCards
