import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marquee from './components/marquee'
import About from './components/About'

function App() {
  return (
    <div className='w-full min-h-screen overflow-x-hidden  text-white'>
      <NavBar />
      <LandingPage />
      <Marquee />
      <About/>
    </div>
  )
}

export default App
