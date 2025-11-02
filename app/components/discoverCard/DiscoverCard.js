import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function DiscoverCard(props) {
  return (
    <div className='hover:scale-105  transition-all ease-in  rounded-[20px]'>
     
        <Image className='w-full h-[296px] rounded-tl-[20px] rounded-tr-[20px] object-cover ' src={props.img} width={400} height={400} alt='Image' />
        <div className="bg-[#3b3b3b]  pt-[20px] px-[30px] pb-[25px] rounded-bl-[20px] rounded-br-[20px] ">
          <h1 className='lg:text-[22px] text-[20px] font-semibold '>{props.heading}</h1>
          <div className="flex items-center pt-1">
            <Image src={props.logo} width={24} height={24} alt='Image' />
            <p className='text-[16px] pl-2 font-normal text-[#FFFFFF]'>{props.name}</p>
          </div>
          <div className="flex justify-between pt-5">
            <div className="">
              <p className="text-[12px] text-[#858584] ">Price</p>
              <p className="text-[16px] ">1.63 ETH</p>
            </div>
            <div className="">
              <p className="text-[12px] text-[#858584] ">Highest Bid</p>
              <p className="text-[16px] ">0.33 wETH</p>
            </div>
          </div>
        </div>
    </div>
  )
}
