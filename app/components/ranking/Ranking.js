import Image from 'next/image'
import React from 'react'

export default function Ranking(props) {
  return (
    <div className='bg-[#3B3B3B] md:grid flex justify-between  lg:grid-cols-2 grid-cols-2 text-[16px] text-[#858584]  px-5 py-[11px] md:py-[6px] rounded-[20px] my-5'>
        <div className="flex items-center  gap-3 ">
            <p className="lg:bg-[#2b2b2b] lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center ">{props.cout}</p>
            <Image className='lg:w-[60px] lg:h-[60px] w-[24px] h-[24px] ' src={props.img} width={50} height={50} alt='Image' />
            <h1 className="lg:text-[22px] md:font-semibold text-[16px] text-white  ">{props.name}</h1>
        </div>
        <div className="flex lg:justify-between justify-end items-center ">
                            <p className=" text-green-400 pr-14 md:block hidden ">-1.41%</p>
                            <p className="lg:block hidden">603</p>
                            <p className="md:text-[16px] text-[12px]  ">12.4 ETH</p>
                        </div>

      
    </div>
  )
}
