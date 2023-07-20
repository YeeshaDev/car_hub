import React from 'react';

const PagesHero = ({text,image,page}) => {
    return (
        <section>
           <figure className='w-[100%]'>
            <img src={image} alt='hero' className='object-cover w-full'/>
            </figure> 
            <h2>{text}</h2>
            <div>
                <h3>Home / {page}</h3>
            </div>
        </section>
    )
}

export default PagesHero
