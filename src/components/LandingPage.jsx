import React from 'react';
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
    return (
        <div className='w-full h-screen bg-[#F1F1F1] text-[#212121] pt-1'>
            <div className="textStructur mt-40 px-16">
                {['we creat', 'Eye-Openging', 'presntations'].map((item, index) => (<div className="masker uppercase ">
                <div className="flex w-fit  items-center">
                    {index==1 && (<div className='w-[8rem] h-[5rem] rounded-[10px] mt-2 mr-5  bg-center bg-no-repeat bg-cover'  style={{ backgroundImage: 'url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")' }}></div>)}
                    <h1 key={index} className='text-9xl leading-[6rem]'>{item}</h1></div>
                </div>))}

            </div>
            <div className="border-t-[1.5px] border-zinc-600  w-full mt-20"></div>
            <div className="flex px-20 justify-between items-center py-2 ">
                {['For public and private companies','From the first pitch to IPO'].map((e,i)=>(
                    <a href='' key={i}>{e}</a>
                ))}
                <div className="start flex items-center justify-center gap-1">
                    <div className="px-4 font-sm capitalize border-zinc-600 cursor-pointer font-normal py-1 border-[1px] rounded-3xl">start the project</div>
                    <div className="w-8 h-8 rounded-full flex justify-center items-center border-[1px] border-zinc-600"><MdArrowOutward /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
