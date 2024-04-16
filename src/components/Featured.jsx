import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";



function Featured() {

    const cards = Array.from({ length: 4 }, () => useAnimation());
    const container= Array.from({ length: 4 }, () => useAnimation());
    const handleHover=(i)=>{   cards[i].start({y:'0',scale:1}); container[i].start({scale:1.2})} 
    const handleHoverEnd=(i)=>{cards[i].start({y:'100%',scale:.6}); container[i].start({scale:1})} 
  
  const Card = ({i, name, img, btn }) => (
    <motion.div  className=" w-1/2 flex flex-col flex-shrink-0 ">
      <motion.h1 className="name pointer-events-none overflow-hidden flex text-[#CDEA68] absolute z-[999] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-9xl">
        {name.split("").map((item, index) => (
          <motion.span initial={{y:'100%',scale:.6}} animate={cards[i]} transition={{ease:[0.33, 1, 0.68, 1],delay:index*.02,}}  key={index} className="inline-block">{item}</motion.span>
        ))}
      </motion.h1>
      <h1 className="flex gap-3 items-center pb-4 rounded-full uppercase">
        <span className="rounded-[50%] bg-[#212121] w-[.7rem] h-[.7rem]"></span>
        {name}
      </h1>
      <motion.div onHoverStart={()=>handleHover(i)}   onHoverEnd={()=>handleHoverEnd(i)} className="cursor-pointer overflow-hidden  w-full h-[80vh]">
      <motion.div  style={{transition:'all ease 0.3s'}} className="card hover:scale-[.95] cursor-pointer  w-full h-[80vh] overflow-hidden rounded-lg">
        <motion.img initial={{scale:1}} animate={container[i]} transition={{duration:.3}} className="w-full h-full object-cover" src={img} alt="" />
      </motion.div>
      </motion.div>
      <div className="flex gap-1 mt-4 group">
        {btn.map((e, i) => (
          <button
            key={i}
            className={` relative btn0   bg-transparent flex items-center justify-center rounded-full border-[1px] px-3 py-1 border-[#212121]`}
         
         >
            <span className={`tex relative z-[10] `}>{e}</span>
        
          </button>
        ))}
      </div>
    </motion.div>
  );
  const [data1, setData] = useState([
    {
      name: "fyde",
      img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
      btn: ["audit", "copywrite", "sales duck", "slides design"],
    },
    {
      name: "vise",
      img: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      btn: ["agency", "company presentation"],
    },
  ]);
  const [data2, setData2] = useState([
    {
      name: "trawa",
      img: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
      btn: ["brand identity", "design resarech", "investor desk"],
    },
    {
      name: "PREMIUM BLEND",
      img: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
      btn: ["brand template"],
    },
  ]);
  return (
    <div data-scroll data-scroll-container data-scroll-speed='-.1' className='w-full mt-[-2rem] bg-[#F1F1F1] py-20 font-["neue_montreal"]  text-[#212121]'>
      <div className="w-full px-16">
        <h1 className="text-6xl">Featured projects</h1>
      </div>
      <div className="cards w-full px-16 border-t-[.5px] flex flex-col   gap-14 mt-10 py-10 border-zinc-500">
        <div className="relative w-full flex gap-7">
          {data1.map((item, index) => (
            <Card key={index} i={index} name={item.name} img={item.img} btn={item.btn} />
          ))}
        </div>
        <div className="relative w-full flex gap-7">
          {data2.map((item, index) => (
            <Card key={index} i={index+2} name={item.name} img={item.img} btn={item.btn} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
