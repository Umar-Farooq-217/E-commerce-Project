import React from 'react'
import Image from 'next/image'

export default function DiscoverCard(src , logo , name  , heading ) {
  return (
    <div className='rounded-[20px]'>
     <Image src={src} width={100} height={100} alt='Image' />
     <div className="">
     <h1>{heading}</h1>
     <div className="">
         <Image src={logo} width={10} height={10} alt='Image' />
         <p>{name}</p>
     </div>
     <div className="">
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
