import { motion } from "framer-motion";
import React from "react";
function marquee() {
  return (
    <div className="w-full py-10   bg-[#004D43] rounded-tl-[20px] overflow-hidden rounded-tr-[20px]">
      <div className="text  flex whitespace-nowrap border-t-[0.1px] border-b-[0.1px]">
        <motion.h1 className="text-[15rem] uppercase leading-none">we are ochi</motion.h1>
        <motion.h1 className="text-[15rem] uppercase leading-none">we are ochi</motion.h1>
      </div>
    </div>
  );
}

export default marquee;
