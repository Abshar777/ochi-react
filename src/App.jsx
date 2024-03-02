import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marquee from './components/marquee'
import About from './components/About'
import Eyes from './components/eyes'
import Featured from './components/Featured'
  
import gsap,{Power1,Power3} from 'gsap'
import LocomotiveScroll from 'locomotive-scroll'
function App() {

  const [height,setHeight]=useState(false)
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const comp=useRef(null)
  useLayoutEffect(()=>{
    
    const ctx=gsap.context(()=>{
      const t1=gsap.timeline({onComplete:()=>{setHeight(true),setLoadingPercentage(100)}})
      t1.from('#intro',{
        
       y:'40%',
        duration:.5,
        ease:Power1
      }).from('#c0',{
        x:'-100%',
        duration:.4,
        delay:.5,
        ease:Power3
      }).from('#c1',{
        x:'100%',
        duration:.4,
        delay:-.3,
        ease:Power3
      }).to('#intro',{
    
        scale:1,
        duration:.7,
        delay:.2,
        ease:Power1
      }).to('#intro',{
        borderRadius:0,
        delay:-.1
      })
    },comp);
    return ()=>ctx.revert()
  },[]);
  useEffect(()=>{
    const scroll = new LocomotiveScroll({
      el: document.getElementById('scroll-container'),
      smooth: true,
    });
  })


  return (
    <div   ref={comp}  className=" relative bg-zinc-800 overflow-x-hidden">
      {[...Array(2)].map((item,index)=>(<div id={"c"+index} key={index} className={`absolute ${index==0?'translate-x-11 scale-[.76]  bg-zinc-500 z-[3]':'translate-x-24 scale-[.72]  bg-zinc-600 z-[2]'}  w-full h-screen rounded-xl  overflow-x-hidden overflow-y-hidden  text-white`}></div>))}
     <div  id='intro' className={` w-full relative z-[999] ${height ?'min-h-screen scale-[1] ':"h-screen rounded-xl scale-[.8]"}  overflow-x-hidden overflow-y-hidden  text-white`}>
      <NavBar animation={height}  />
    <div data-scroll-container className="" id='scroll-container'>
      <LandingPage animation={height}  />
      <Marquee />
      <About/>
      <Eyes/>
      <Featured/>
      </div>
    </div>
    </div>
  )
}

export default App
