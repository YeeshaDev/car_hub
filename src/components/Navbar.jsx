import React, { useState, useEffect } from 'react';
import { FaSearch, FaCar, FaBars, FaTimes, FaEquals } from 'react-icons/fa';
import SearchModal from './Features/SearchModal';
import { Link, NavLink, useLocation, useNavigation } from 'react-router-dom';
import {motion,AnimatePresence} from 'framer-motion'

const Navbar = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {pathname} = useLocation()
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

  
  const toggleSearchModal = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileMenu = (e) => {
    if(e){
      e.preventDefault();
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

const item={
  exit:{
    opacity:0,
    height:0,
    transition:{
      ease:"easeInOut",
      duration:0.3,
      delay:1.2
    }
  }
}

useEffect(()=> {
  setIsMobileMenuOpen(false)
},[pathname])

console.log(pathname)
  return (
    <header className="fixed w-full bg-[#313436] top-0 z-[99]">
      <motion.nav
      initial="closed"
        className={
          isScrolled
            ? 'flex justify-between py-5 px-7 bg-[#191f23] shadow-lg text-white '
            : 'flex justify-between py-5 px-7 bg-white '
        }
      >
        <Link to='/'>
          <div className="flex items-center gap-[0.2rem]">
            <h1 className='font-bold font-["Fraunces"]'>Carhub</h1>
            <FaCar className="text-[#94053a] text-[1.2rem]" />
          </div>
        </Link>
        <div className="">

           {/*-----------------------------------------
           -------------DESKTOP NAVIGATION----------- */}

          <motion.ul

          className=' nav-item hidden md:flex items-center justify-between gap-5'>
           <li className={(pathname == '/') ? 'text-[var(--primary)] hover:text-[var(--primary)]' : 'text-black hover:text-[var(--primary)]'}><Link  to='/'>Home </Link></li>
            <li className={pathname =='/about' ? 'text-[var(--primary)]' : 'text-black hover:text-[var(--primary)]'}><Link to='/about'>About Us</Link></li>
            <li className={pathname == '/cars' ? 'text-[var(--primary)]' : 'text-black hover:text-[var(--primary)]'}><Link to='/cars'>Cars</Link></li>
            <li className={pathname == '/blog' ? 'text-[var(--primary)]' : 'text-black hover:text-[var(--primary)]'}><Link to='/blog '>Blog</Link></li>
            <li className='cursor-pointer' onClick={toggleSearchModal}>
              <FaSearch />
            </li>
          </motion.ul>

          
           {/*-----------------------------------------
           -------------MOBILE NAVIGATION----------- */}

          <AnimatePresence key={pathname}>
          
          {isMobileMenuOpen && <motion.ul
           variants={item}
           initial={{height:0,opacity:0}}
           animate={{height:"100vh", opacity:1}} 
           transition={{duration:.5}}
           exit="exit"
          className='nav-item absolute top-0 w-full flex flex-col gap-y-5 md:hidden items-center justify-center md:justify-between left-0  p-5 bg-[var(--primary)]  md:static md:bg-inherit md:text-inherit md:p-0' >
            
            <motion.li
            initial={{y:80,opacity:0}}
            animate={{y:0, opacity:1}} 
            transition={{delay:.8}}
            exit={{
              opacity:0,
              y:90,
              transition:{
                ease:"easeInOut",
                delay:1
              }
            }}
            ><Link to='/'>Home</Link></motion.li>
            <motion.li
            initial={{y:80,opacity:0}}
            animate={{y:0, opacity:1}} 
            transition={{delay:.7}}
            exit={{
              opacity:0,
              y:90,
              transition:{
                ease:"easeInOut",
                delay:.8
              }
            }}
            ><Link to='/about'>About Us</Link></motion.li>
            <motion.li
            initial={{y:80,opacity:0}}
            animate={{y:0, opacity:1}} 
            transition={{delay:.6}}
            exit={{
              opacity:0,
              y:90,
              transition:{
                ease:"easeInOut",
                delay:.6
              }
            }}
            ><Link to='/cars'>Cars</Link></motion.li>
            <motion.li
            initial={{y:80,opacity:0}}
            animate={{y:0, opacity:1}} 
            transition={{delay:.5}}
            exit={{
              opacity:0,
              y:90,
              transition:{
                ease:"easeInOut",
                delay:.4
              }
            }}
            ><Link to='/blog'>Blog</Link></motion.li>
            <motion.li 
            initial={{y:80,opacity:0}}
            animate={{y:0, opacity:1}} 
            transition={{delay:.4}}
            exit={{
              opacity:0,
              y:90,
              transition:{
                ease:"easeInOut",
                delay:.2
              }
            }}
            className='cursor-pointer' onClick={toggleSearchModal}>
              <FaSearch />
            </motion.li>
          </motion.ul>}
          <div 
          
          className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            {!isMobileMenuOpen ? <FaEquals className={`absolute top-5 right-5 text-[1.5rem] text-[var(--deepblue)] ${isScrolled ? 'text-white' : 'text-inherent'}`}/> : <FaTimes className='absolute top-5 z-40 right-10 text-[1.5rem] text-white' />}
          </div>
          </AnimatePresence>
          
          
        </div>
      </motion.nav>
      {isSearchOpen && <SearchModal onClose={toggleSearchModal} />}
    </header>
  );
};

export default Navbar;
