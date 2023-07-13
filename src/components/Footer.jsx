import React from 'react'
import {FaCar, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='mt-10 p-5 bg-[#191f23] text-white'>
            <div className='grid gap-x-[5rem] gap-y-4 items-center justify-center grid-cols-2 lg:grid-cols-4  p-5'>
            <section>
            <div className='flex items-center gap-[0.2rem]'>
                <h1>Cars</h1> 
                <FaCar className='text-[#94053a] text-[1.2rem]'/> 
                </div>
                <p>CarZone is simply dummy text of the printing 
                    and in type setting industry. Lorem Ipsum has bee the industry's standard...</p>
                   <form className='flex items-center mt-5'>
                    <input type='email' className='p-3 border-[0.3px] solid border-[var(--primary)] '
                    placeholder='Enter Your Email' />
                    <span className='text-white p-[1.1rem] bg-[var(--primary)] ml-[-10px]'><FaEnvelope /></span>
                   </form>
            </section>
            <section >
              <h2 className='uppercase mb-3 text-[var(--primary)] font-[600]'>Our Info</h2>
              <ul>
                <li>About us</li>
                <li>privacy policy</li>
                <li>cars</li>
                <li>Blog</li>
                <li>Help</li>
                </ul>  
            </section>
            <section >
              <h2 className='uppercase mb-3 text-[var(--primary)] font-[600]'>Account Information</h2>
              <ul>
                <li>About us</li>
                <li>privacy policy</li>
                <li>cars</li>
                <li>Blog</li>
                <li>Help</li>
                </ul>  
            </section>
            <section>
              <h2 className='uppercase mb-3 text-[var(--primary)] font-[600]'>Useful links</h2>
              <ul>
                <li>About us</li>
                <li>privacy policy</li>
                <li>cars</li>
                <li>Blog</li>
                <li>Help</li>
                </ul>  
            </section>
            </div>
            <hr/>
            <p className='my-4 text-[15px]'>&copy; Copyright 2020 carhub developed by yeeshadev</p>

            </footer>
            
    )
}

export default Footer
