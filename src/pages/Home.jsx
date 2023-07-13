import React from 'react'
import Hero from '../components/Hero'
import UpcomingCars from '../components/UpcomingCars'
import AboutUs from '../components/AboutUs'
import Product from '../components/Product'
import Testimonials from '../components/Testimonials'
import Dealers from '../components/Dealers'
import Blog from '../components/Blog'

const Home = () => {
    return (
        <div>
           
           <Hero/>
           <UpcomingCars/>
           <AboutUs/>
           <Product />
           <Testimonials />
           <Dealers/>
           <Blog/>
        </div>
    )
}

export default Home
