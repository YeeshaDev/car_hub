import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation to get the search term from the URL query
import useCarData from '../utils/useCars';
import { FaLightbulb } from 'react-icons/fa';

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
        
            
            {filteredData.length === 0 ? 
            (
                <div className='mt-20 flex flex-col-reverse lg:flex-row items-center justify-center text-[var(--deepblue)]'>
                    <div className='flex flex-col items-center justify-center mt-7 mb-12 lg:my-0'>
                <h2 className='text-[1.5rem]'>This item is not Available</h2>
                <p className='my-2 '>Please you can go back to the home page or  check all the available cars here.</p>
                <p className='flex gap-1 font-bold justify-center my-2'>TIP <FaLightbulb className='text-yellow-500'/> : <span>You can input the first 2 letters of the car you are looking for to check if it is available.</span></p>
                <Link to='/cars'>
                <button className="btn w-[180px]">
        <svg width="180px" height="60px" viewBox="0 0 180 60" className="svg-border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>Check all cars </span>
        </button>
        </Link>
        </div>
                <div className=' w-full h-[400px] lg:h-[500px]'>
                    <img src='./assets/error.svg' className=' w-full h-full object-contain' />
                    </div>
                </div>
            )
            : 
            (          
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <h1 className='mt-20 text-[2rem]'>Your Results</h1>
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
            
            
            
        </div>)
}
        </div>
        
    );
};

export default Search;
