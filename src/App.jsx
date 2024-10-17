import React from 'react'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import AboutUs from './components/AboutUs/AboutUs'
import MyPortFolio from './components/MyPortFolio/MyPortFolio'
import Client from './components/Client/Client'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <AboutUs/>
      <MyPortFolio/>
      <Client/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
