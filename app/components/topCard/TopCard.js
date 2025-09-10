import React from 'react'
import Image from 'next/image'
export default function TopCard(props) {
  return (
    <div className='bg-[#3b3b3b] w-full h-[240px] rounded-[20px] flex lg:block  '>
      <h2 className="text-[#3b3b3b] bg-[#2b2b2b] h-[30px] w-[30px] rounded-full">{props.count}</h2>
      <Image className='' src={props.first} width={100} height={100} alt='Image' />
      <h1 className="">{props.heading}</h1>
      <p className="">Total Sales : <span className="">63.45 ETH</span></p>
    </div>
  )
}
