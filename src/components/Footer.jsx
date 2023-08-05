import React, { useState } from 'react'
import {FaCar, FaEnvelope} from 'react-icons/fa'
import Swal from 'sweetalert2';

const Footer = () => {
const [email,setEmail] = useState('')
  const sweetAlert =(e) => {
    const emailValue = e.target.value; // Access the email value from the event object
    setEmail(emailValue); //
    if(emailValue !== ""){
      Swal.fire({
        title:"Good Job!",
        text:"Email Sent Sucesfully",
        icon:"success"
      })
    } else if(emailValue === "") {
      Swal.fire({
        title:"Oops!",
        text:"Please check your email",
        icon:"error"
      })
    }
    
  }
    return (
        <footer className='mt-10 p-5 bg-[#191f23] text-white'>
          
            <div className='flex  flex-col items-start lg:flex-row justify-center lg:items-center gap-10 p-5'>
            <section>
            <div className="flex items-center gap-[0.2rem] mb-5">
            <h1 className='font-bold font-["Fraunces"]'>Carhub</h1>
            <FaCar className="text-[#94053a] text-[1.2rem]" />
          </div>
                <p className='text-[0.8rem] w-[70%]'>CarZone is simply dummy text of the printing 
                    and in type setting industry. Lorem Ipsum has bee the industry's standard...</p>
                   <form className='flex items-center mt-5' onSubmit={(e) => e.preventDefault()}>
                    <input type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                     className='p-3 border-[0.3px] solid border-[var(--primary)] text-black w-[75%] sm:w-[90%]'
                    placeholder='Enter Your Email' />
                    <span className='text-white p-[1.1rem] bg-[var(--primary)] ml-[-10px]' onClick={sweetAlert}><FaEnvelope /></span>
                   </form>
            </section>
            <section className=''>
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
           
            </div>
            <hr/>
            <p className='my-4 text-[15px]'>&copy; Copyright 2020 carhub developed by yeeshadev</p>

            </footer>
            
    )
}

export default Footer
