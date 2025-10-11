import Image from 'next/image'
import React from 'react'

export default function Card(props) {
  return (
    <div>
      <Image className='h-[330px]  w-full rounded-xl   [image-rendering:smooth]' src={props.first} width={400} height={400} alt='Image' />
      <div className="flex justify-between gap-4 mt-3">
<Image className='' src={props.second} width={100} height={100} alt='Image' />
<Image className='' src={props.third} width={100} height={100} alt='Image' />
<h1 className='bg-[#A259FF] h-[100px] w-[100px] text-[22px] font-bold flex justify-center items-center rounded-2xl  '>1025+</h1>

      </div>
      <h1 className="text-[22px] font-semibold pt-2 ">{props.heading}</h1>
      <div className="flex items-center gap-2 pt-1" >
        <Image className='w-[24px] h-[24px]  ' src={props.four} width={100} height={100} alt='Image' />
        <p className="text-[10px]   ">{props.pera}</p>
      </div>
      
    </div>
  )
}
