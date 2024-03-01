import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marquee from './components/marquee'
import About from './components/About'
import Eyes from './components/eyes'
import Featured from './components/Featured'

function App() {
  return (
    <div className='w-full min-h-screen overflow-x-hidden  text-white'>
      <NavBar />
      <LandingPage />
      <Marquee />
      <About/>
      <Eyes/>
      <Featured/>
   
    </div>
  )
}

export default App
