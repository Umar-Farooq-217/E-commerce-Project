import React from 'react'
import Image from 'next/image'

export default function Button(props) {
  return (
    <button className={`flex  justify-center items-center  w-[152px] h-[60px]  rounded-3xl gap-3 ${props.className} `}>
        <Image src={props.img} width={20} height={20} alt='icon' className='h-[20px] w-[20px]' />
        <p className='text-[16px] font-[600] '> {props.title}</p>

     
    </button>
  )
}
