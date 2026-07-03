import React, { useState } from 'react'
import NavBar from './Components/Navbar'
import Hero from './Components/Hero'
import Trusted from './Components/Trusted'
import Services from './Components/Services'
import OurWork from './Components/OurWork'
import Teams from './Components/Teams'
import ConstactUs from './Components/ConstactUs'
import {Toaster} from  'react-hot-toast'
import Footer from './Components/Footer'
import MouseMove from './Components/MouseMove'

const App = () => {

  const [theme , setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='bg-white dark:bg-black relative'>
      <MouseMove />
      <Toaster />
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero />
      <Trusted />
      <Services />
      <OurWork />
      <Teams />
      <ConstactUs />
      <Footer theme={theme}/>
    </div>
  )
}

export default App