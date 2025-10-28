import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import Button from '../components/button/Button'

export default function page() {
  return (
    <div className='bg-[#2b2b2b]    text-white'>
        <Navbar/>
<div className="bg-[url('/ship.png')] h-[370px] w-full bg-center bg-no-repeat bg-cover aspect-video   ">
<div className="bg-gradient-to-t from-[#A259FF]/90 from-10% to-transparent w-full h-full ">
</div>
<Image className='w-[120px] h-[120px] flex items-end relative left-[125px] top-[-60px]' src='/Avatar.png' width={120} height={120} alt='Image' />

</div>

<div className="lg:px-[125px] md:px-20  px-10 py-10  mt-[60px] ">
    <div className="">
        <div className=""><h1 className="lg:text-[51px] text-[38px] font-semibold ">Animakid</h1></div>
        <div className="flex gap-5 flex-wrap">
            <Button img='/copy.png' title='0xc0E3...B79C' className='bg-[#A259FF] h-[60px] px-[50px] md:w-auto w-full ' />
             <Button img='/Plus.png' title='Follow' className=' border-[2px] border-[#A259FF] h-[60px] px-[50px] md:w-auto w-full' />
        </div>
    </div>

</div>



        <Footer/>
      
    </div>
  )
}
