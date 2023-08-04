import React from 'react'

const FilterCards = () => {
    return (
        <div className=' w-screen flex justify-center items-center xxsm:pr-5 px-3'>
            <ul className='xxsm:overflow-x-scroll sm:overflow-hidden flex items-start justify-center gap-3 cursor-pointer xxsm:p-3 w-full '>
            <li className='bg-white border border-solid border-black p-3 rounded-md hover:bg-[var(--primary)] hover:border-none hover:text-white cursor-pointer transition-all xxsm:ml-[5.1rem] sm:ml-2'>Popular</li>
                <li className='bg-white border border-solid border-black p-3 rounded-md hover:bg-[var(--primary)] hover:border-none hover:text-white cursor-pointer transition-all' >Business</li>
                <li className='bg-white border border-solid border-black p-3 rounded-md hover:bg-[var(--primary)] hover:border-none hover:text-white cursor-pointer transition-all'>Sports</li>
                <li className='bg-white border border-solid border-black p-3 rounded-md hover:bg-[var(--primary)] hover:border-none hover:text-white cursor-pointer transition-all '>Family</li>
                
            </ul>
        </div>
    )
}

export default FilterCards
