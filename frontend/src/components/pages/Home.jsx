import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Event from '../Event/Event'
import Schedule from '../EventSchedule/Schedule'
import About from '../About/About'
import HoverCarousel from '../Hover/HoverCarousel'
import EventSchedule from '../Schedule/EventSchedule'
import Testimonial from '../Testimonials/Testimonial'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Event autoplay={true} pauseOnHover={true}/>
      <Schedule/>
      <About/>  
      <HoverCarousel/>
      <EventSchedule/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
