import { motion } from 'framer-motion';
import gsap,{Power4} from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";

function LandingPage(props) {
    
   const [a,b]=useState(0)
    const comp1=useRef(null);
   

        useEffect(()=>{
      
            const count = setInterval(() => {
                b((a) => {
                  if (a < 100 && props.animation!==true) {
                    return a + 1;
                  } else {
                    clearInterval(count);
                    return 100;
                  }
                });
              }, 50);
              const ctx=gsap.context(()=>{
                const t1=gsap.timeline()
          if(props.animation){
            gsap.to('#img',{
                width:'8rem',
                duration:.5,
                ease:'expo.in'
               
            })
            t1.to('#line',{
                width:'100%',
                duration:.5,
            }).to('.name',{
                opacity:0,
                display:'none'
            }).to('.footerLink',{
                y:10,
                opacity:1,
                display:'flex',
                delay:'-.2',
                stagger:.1
            })
          }
              
             
            },comp1);
            return ()=>ctx.revert()
          },[props.animation]);
 
    return (
        <div ref={comp1} data-scroll data-scroll-section data-scroll-speed='-.6' className='w-full  h-screen bg-[#F1F1F1] text-[#212121] pt-1'>
            <div className="textStructur mt-40 px-16">
          
                {['we creat', 'Eye-Openging', 'presntations'].map((item, index) => (<div key={index} className="masker uppercase ">
                <div className="flex w-fit  items-center">
                 
                    {index==1 && (<motion.div id='img'  className='w-[0rem] h-[5rem] rounded-[10px] mt-2   bg-center bg-no-repeat bg-cover'  style={{ backgroundImage: 'url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")', transition:'all ease 0.3s' }}></motion.div>)}
                    <h1 key={index} className='text-9xl leading-[6rem]'>{item}</h1></div>
                </div>))}

            </div>
            <div id='line' className={`${ 'border-t-[1.5px] border-zinc-600 w-0'}   mt-20`} style={{transition:'all ease 0.3s'}}></div>
            <div className="flex px-20 justify-between items-center py-2 ">
                {['For public and private companies','From the first pitch to IPO'].map((e,i)=>(
                    <a href='' className='group link footerLink opacity-0' key={i}>
                          <span className='inline-block transition duration-300 ease-out group-hover:-translate-y-3/4 group-hover:opacity-0'>{e}</span>
                        <span className='inline-block transition duration-300 opacity-0 ease-out absolute left-0 translate-y-3/4 group-hover:translate-y-0 group-hover:opacity-100'>{e}</span></a>
                ))}
                <div className="footerLink group text-zinc-900   btn rounded-3xl opacity-0 start   items-center justify-center gap-1 hidden">
                    <div className="px-4    font-sm capitalize group-hover:text-zinc-50 group-hover:border-transparent border-zinc-600 overflow-hidden relative cursor-pointer font-normal py-1 border-[1px]  rounded-3xl"><h1 className=''>start the project</h1>
                    <span style={{transition:'all ease 0.5s'}} className='w-full h-full opacity-0   
                     rounded-3xl z-[-1]  bg-zinc-900 absolute top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%] group-hover:opacity-100'></span>
                    </div>
                    <div className="w-8 h-8 relative rounded-full flex justify-center items-center border-[1px] group-hover:text-zinc-100  border-zinc-600"><MdArrowOutward />
                    <span style={{transition:'all ease 0.5s'}} className='w-0 h-0 opacity-0   
                     rounded-3xl z-[-1]  bg-zinc-900 absolute top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%] group-hover:opacity-100 group-hover:w-full group-hover:h-full'></span>
                  
                    </div>
                </div>
                <h1  className='text-7xl font-thin name leading-[6rem]'>{a}<span className='text-5xl'> %</span></h1>
                
            </div>
        </div>
    )
}

export default LandingPage
