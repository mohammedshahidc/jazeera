import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import FixedDeparture from './Components/FixedDeparture'
import Bus from './Components/Bus'
import HollydayPackage from './Components/HollydayPackages'
import WhyweAreTheBest from './Components/WeAreTheBest'
import Appdownload from './Components/Appdownload'
import Footer from './Components/Footer'
function App() {

  return (
    <>
    <Hero/>
    <FixedDeparture/>
    <Bus/>
    <HollydayPackage/>
    <WhyweAreTheBest/>
    <Appdownload/>
    <Footer/>
    </>
  )
}

export default App
