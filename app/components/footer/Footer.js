import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="bg-[#3B3B3B] py-10 lg:px-[125px] md:px-[80] px-5 mt-16">
    <div className='  grid lg:grid-cols-2 grid-cols-1 gap-8  '>
     <div className="flex gap-8 px-6 ">
       <div className=" ">
<div className="lg:flex block items-center gap-2" >
    <Image src='/Storefront.png' width={32} height={32} alt='Image' />
    <p className="text-[22px] font-bold ">NFT Marketplace</p>
</div>
<p className="text-base text-[#CCCCCC] pt-4">NFT marketplace UI created with Anima for Figma.</p>
<p className="text-base text-[#CCCCCC] pt-4">Join Our Community.</p>
<div className="flex gap-[10px] pt-2">
     <Image src='/DiscordLogo.png' width={25} height={22} alt='Image' />
     <Image src='/YoutubeLogo.png' width={25} height={22} alt='Image' />
     <Image src='/Vector.png' className='p-[3px]' width={25} height={25} alt='Image' />
     <Image src='/InstagramLogo.png' width={25} height={25} alt='Image' />
</div>
      </div>
      <div className="ml-auto ">
          <p className="text-[22px] font-bold ">Explore</p>
          <p className="text-base text-[#CCCCCC] pt-4 ">Marketplace</p>
          <p className="text-base text-[#CCCCCC] pt-3">Rankings</p>
          <p className="text-base text-[#CCCCCC] pt-3">Connect a Wallet</p>
      </div>
     </div>
      <div className="lg:ml-20 ml-0 ">
         <p className="text-[22px] font-bold ">Join Our Weekly Digest</p>
         <p className="text-base text-[#CCCCCC] pt-7">Get exclusive promotions & updates straight to your inbox.</p>
          <div className="flex mt-4">
      <input type="text" name="" id="" className='py-4 pl-5 text-[16px] font-semibold outline-none text-black rounded-[20px]' placeholder='Enter your email here' />
      <button className='flex justify-center items-center gap-4 bg-[#A259FF] py-4 px-16 rounded-[20px] relative right-9 '><img src="/EnvelopeSimple.png" className='w-[20px] h-[20px] ' alt="Icon" /> <span className="font-semibold text-[16px]">Subscribe</span></button>
    </div>
      </div>
    </div>
    <p className="w-full h-[1px] bg-[#858584] mt-7"></p>
    <p className="text-[12px] text-[#CCCCCC] pt-4 ">Ⓒ NFT Market. Umar Farooq made this project</p>
    </div>
  )
}
