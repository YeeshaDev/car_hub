import React,{ useState, useEffect } from 'react';
import {FaSearch,FaCar} from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <header className='fixed w-full bg-[#313436] top-0 z-[999] '>
         <nav className={isScrolled ? 'flex justify-between py-5 px-7 bg-[#191f23] shadow-lg text-white': 'flex justify-between py-5 px-7 bg-white '}>
            <div className='flex items-center gap-[0.2rem]'>
                <h1>Cars</h1> 
                <FaCar className='text-[#94053a] text-[1.2rem]'/> 
                </div>
            <div>
                <ul className='flex items-center justify-between gap-5'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Privacy Policy</li>
                    <li><FaSearch/></li>
                </ul>
            </div>
            </nav>   
        </header>
    )
}

export default Navbar
