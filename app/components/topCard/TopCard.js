import React from 'react'
import Image from 'next/image'
export default function TopCard(props) {
  return (
    <div className='bg-[#3b3b3b] w-full h-auto rounded-[20px] flex lg:block p-3 '>
      <div className="flex gap-2 items-center  lg:block justify-center ">
        <div className="md:relative">

  <h2 className="text-[#504f4f] bg-[#2b2b2b] h-[30px] w-[30px] rounded-full flex justify-center items-center md:absolute lg:top-0 lg:left-0 md:top-[-10px] md:left-[-5px] ">{props.count}</h2>
      <Image className='flex mx-auto md:w-[60px] h-[60px] ' src={props.first} width={110} height={120} alt='Image' />
        </div>
      </div>
    
        <div className="">

      <h1 className="text-center text-[22px] font-[600] pt-3 ">{props.heading}</h1>
      <p className="text-center flex flex-wrap  justify-center pt-1 text-[16px] text-[#858584] ">Total Sales : <span className="text-white pl-2">63.45 ETH</span></p>
        </div>
    </div>
  )
}
