import React from 'react'

const FilterCards = () => {
    return (
        <div>
            <ul className='flex items-center justify-center gap-3 cursor-pointer'>
            <li className='bg-white border border-solid border-black p-3 rounded-md hover:bg-[var(--primary)] hover:border-none hover:text-white cursor-pointer transition-all'>Popular</li>
                <li className='bg-white border border-solid border-black p-3 rounded-md hover:bg-[var(--primary)] hover:border-none hover:text-white cursor-pointer transition-all' >Buisness</li>
                <li className='bg-white border border-solid border-black p-3 rounded-md hover:bg-[var(--primary)] hover:border-none hover:text-white cursor-pointer transition-all'>Sports</li>
                <li className='bg-white border border-solid border-black p-3 rounded-md hover:bg-[var(--primary)] hover:border-none hover:text-white cursor-pointer transition-all'>Family</li>
                
            </ul>
        </div>
    )
}

export default FilterCards
