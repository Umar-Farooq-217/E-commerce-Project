import React from 'react'
import Image from 'next/image'
export default function WorksCard(props) {
  return (
    <div className='bg-[#3B3B3B] rounded-[20px] pt-[10px] px-[30px] pb-[30px] hover:scale-105 '>
         <Image src={props.src} className=' w-[250px] h-[250px] object-cover flex mx-auto' width={240} height={240} alt='Image' />
         <h1 className="text-[22px] font-semibold text-center pt-2">{props.heading}</h1>
         <p className="text-[16px] pt-2">{props.pera}</p>
    </div>
  )
}
