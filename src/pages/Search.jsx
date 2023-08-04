import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation to get the search term from the URL query
import useCarData from '../utils/useCars';

const Search = () => {
    const { cars } = useCarData();
    const location = useLocation(); // Get the location object
    const searchTerm = new URLSearchParams(location.search).get('q'); // Extract the search term from the query parameter
    
    const filteredData = cars
    ? cars.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

    return (
        <div className='px-5'>
        <h1 className='mt-20 text-[2rem]'>Your Results</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            
            {filteredData.map((item) => (

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
    );
};

export default Search;
