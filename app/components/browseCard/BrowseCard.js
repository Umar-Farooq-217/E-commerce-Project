import Image from 'next/image'
import React from 'react'

export default function BrowseCard({ className, src, heading }) {
  return (
    <div className="rounded-[20px]">
    <div className={` h-[240px] rounded-tl-[20px] rounded-tr-[20px]   ${className}  `}>
        <Image className='h-[100px] w-[100px]    ' width={100} height={100} alt='Image' src={src}/>
        
      
    </div>
        <p className="">{heading}</p>
    </div>
  )
}
