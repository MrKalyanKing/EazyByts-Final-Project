import React from 'react'
import Home from './components/pages/Home'
import {Routes, Route } from 'react-router-dom'
import Festival from './components/Festival/Festival'
import Conference from './components/Conference/Conference'
import Catering from './components/Catering/Catering'
import Birthday from './components/Birthday/Birthday'
import Ceremony from './components/Ceremony/Ceremony'
import Marriage from './components/Marriage/Marriage'
import PricingSection from './components/PricingSection/PricingSection'
import Contact from './components/Contact/Contact'
import Booking from './components/Booking/Booking'

const App = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/festival' element={<Festival/>}/>
        <Route path='/conference' element={<Conference/>}/>
        <Route path='/catering' element={<Catering/>}/>
        <Route path='/brithday' element={<Birthday/>}/>
        <Route path='/ceremony' element={<Ceremony/>}/>
        <Route path='/pricing' element={<Marriage/>}/>
        {/* <Route path='/pricing' element={<PricingSection/>}/> */}
        <Route path='/contact' element={<Contact/>}/>
        <Route path='booking' element={<Booking/>}/>
      </Routes>
      </>
  )
}

export default App
