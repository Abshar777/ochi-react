import React from "react";
import { motion, useAnimation } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.19' className='mt-10 w-full py-20 bg-[#CDEA68] rounded-tl-[25px] font-["neue_montreal"] text-[#212121]  overflow-hidden rounded-tr-[25px]'>
      <div className="text px-10">
        <h1 className="font-['neue_montreal'] w-[90%] text-[3.4rem] leading-none">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>
      <div className="border-t-[1px] border-[#a1b562] mt-10"></div>
      <div className="w-[90%] py-8 text-md    flex justify-between px-10">
        <p>What you can expect:</p>
        <div className="flex h-fit">
          <div className="flex flex-col w-[17rem] gap-6">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex h-100 mt-14 underline flex-col w-[14rem] gap-6 items-center justify-center">
            <p>s:</p>
            <div className="links flax flex-col">
              {["instagram", "behance", "facebook", "linkedin"].map((e, index) => (
                <div key={index} className="">
                  <a className="capitalize" href="">
                    {e}
                  </a>
                  <br  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-[1px] gap-5 mt-12 px-10 flex py-8 border-t-[#a1b562] w-full">
        <div className="w-1/2">
          <h1 className="text-6xl tracking-tight">Our approach:</h1>
          <button className="btn0 bg-zinc-900 relative overflow-hidden group text-white py-4 mt-3 px-7 flex gap-7 items-center justify-between rounded-full uppercase">
            <span className="relative z-10">Read More</span>
            <span style={{transition:'all ease 0.3s'}} className="rounded-[50%]   relative z-10 text-[50%] group-hover:scale-[4] text-zinc-900  bg-white w-[.7rem] h-[.7rem] flex items-center justify-center"><MdArrowOutward style={{transition:'all ease 0.3s'}} className="w-0 opacity-0 group-hover:opacity-100 group-hover:w-1/2"/></span>
          </button>
        </div>
        <div className="img w-1/2 h-[70vh] rounded-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")'}}></div>
      </div>
    </div>
  );
}

export default About;
