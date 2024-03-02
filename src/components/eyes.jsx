import React, { useEffect, useState } from "react";


function eyes() {
    const [rotate,setRotate]=useState(0)
   
    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2; 
            let deltaY = mouseY - window.innerHeight / 2; 
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
  return (
    <div className="eyes overflow-hidden font-['neue_montreal'] w-full h-screen">
      <div  data-scroll data-scroll-speed='-.2' className="relative flex items-center justify-center w-full h-full bg-center bg-cover  bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div  data-scroll data-scroll-speed='-.1' className="flex items-center justify-center gap-10 ">
          <div className="w-[12rem] flex items-center justify-center h-[12rem] rounded-full bg-zinc-100">
            <div  className="w-3/5 h-3/5  relative flex items-center justify-center  bg-zinc-900 rounded-full">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" line absolute top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%]  w-full h-8">
                <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
              </div>
                <h1 className="capitalize">play</h1>
            </div>
          </div>
          <div className="w-[12rem] flex items-center justify-center h-[12rem] rounded-full bg-zinc-100">
            <div className="w-3/5 h-3/5 flex items-center justify-center  relative  bg-zinc-900 rounded-full">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line  absolute top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%] w-full h-8">
                <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
              </div>
              <h1 className="capitalize">play</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default eyes;
