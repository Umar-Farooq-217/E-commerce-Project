import React from 'react'
import Image from 'next/image'
export default function TopCard(props) {
  return (
    <div className='bg-[#3b3b3b] w-full h-[240px] rounded-[20px] flex lg:block p-3 '>
      <div className="flex  lg:block justify-center ">
  <h2 className="text-[#504f4f] bg-[#2b2b2b] h-[30px] w-[30px] rounded-full flex justify-center items-center   ">{props.count}</h2>
      <Image className='flex mx-auto' src={props.first} width={110} height={120} alt='Image' />
      </div>
    
      <h1 className="text-center text-[22px] font-[600] pt-3 ">{props.heading}</h1>
      <p className="text-center pt-1 text-[16px] text-[#858584] ">Total Sales : <span className="text-white">63.45 ETH</span></p>
    </div>
  )
}
