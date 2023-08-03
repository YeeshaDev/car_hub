import React from 'react'
import Hero from '../components/Hero'
import UpcomingCars from '../components/UpcomingCars'
import AboutUs from '../components/AboutUs'
import Product from '../components/Product'
import Testimonials from '../components/Testimonials'
import Dealers from '../components/Dealers'
import Blog from '../components/Blog'
import { motion } from 'framer-motion'
const Home = () => {
    return (
        <motion.div
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:1.7}}
        exit={{
           
            opacity:0,
        }}
        >
           
           <Hero/>
           <UpcomingCars/>
           <AboutUs/>
           <Product />
           <Testimonials />
           <Dealers/>
           <Blog/>
        </motion.div>
    )
}

export default Home
