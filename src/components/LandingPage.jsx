import React from 'react'

function LandingPage() {
    return (
        <div className='w-full h-screen bg-zinc-900 text-white pt-1'>
            <div className="textStructur mt-40 px-16">
                {['we creat', 'Eye-Openging', 'presntations'].map((item, index) => (<div className="masker uppercase ">
                    <h1 key={index} className='text-9xl leading-[6rem]'>{item}</h1>
                </div>))}

            </div>
            <div className="border-t-[1.5px] border-zinc-600  w-full mt-20"></div>
            <div className="flex px-20 justify-between items-center py-2 ">
                {['For public and private companies','From the first pitch to IPO'].map((e,i)=>(
                    <a href='' key={i}>{e}</a>
                ))}
                <div className="start ">
                    <div className="px-4 capitalize font-normal py-1 border-[1px] rounded-3xl">start the project</div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
