import { motion } from "framer-motion";
import React from "react";
function marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.2' className="w-full py-16 mt-36   bg-[#004D43] rounded-tl-[20px] overflow-hidden rounded-tr-[20px]">
      <div className="text leading-none  flex whitespace-nowrap border-t-[0.1px] border-b-[0.1px]">
        <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{repeat:Infinity,ease:'linear',duration:5}}  className="text-[17rem] pl-5 uppercase leading-none">we are ochi</motion.h1>
        <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{repeat:Infinity,ease:'linear',duration:5}}  className="text-[17rem] pl-5 uppercase leading-none">we are ochi</motion.h1>
        <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{repeat:Infinity,ease:'linear',duration:5}}  className="text-[17rem] pl-5 uppercase leading-none">we are ochi</motion.h1>
      </div>
    </div>
  );
}

export default marquee;
