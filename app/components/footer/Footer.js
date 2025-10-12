import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-[#3B3B3B] py-10 px-[125px] mt-16 flex gap-8  '>
      <div className="">
<div className="flex items-center gap-2" >
    <Image src='/Storefront.png' width={32} height={32} alt='Image' />
    <p className="text-[22px] font-bold ">NFT Marketplace</p>
</div>
<p className="text-base text-[#CCCCCC] ">NFT marketplace UI created with Anima for Figma.</p>
<p className="text-base text-[#CCCCCC] ">Join Our Community.</p>
<div className="flex gap-[10px]">
     <Image src='/DiscordLogo.png' width={25} height={22} alt='Image' />
     <Image src='/YoutubeLogo.png' width={25} height={22} alt='Image' />
     <Image src='/Vector.png' className='p-[3px]' width={25} height={25} alt='Image' />
     <Image src='/InstagramLogo.png' width={25} height={25} alt='Image' />
</div>
      </div>
      <div className="">
          <p className="text-[22px] font-bold ">Explore</p>
          <p className="text-base text-[#CCCCCC] ">Marketplace</p>
          <p className="text-base text-[#CCCCCC] ">Rankings</p>
          <p className="text-base text-[#CCCCCC] ">Connect a Wallet</p>
      </div>
      <div className="">
         <p className="text-[22px] font-bold ">Join Our Weekly Digest</p>
         <p className="text-base text-[#CCCCCC] ">Get exclusive promotions & updates straight to your inbox.</p>
          <div className="flex mt-12">
      <input type="text" name="" id="" className='py-4 pl-5 text-[16px] font-semibold outline-none text-black rounded-[20px]' placeholder='Enter your email here' />
      <button className='flex justify-center items-center gap-4 bg-[#A259FF] py-4 px-16 rounded-[20px] relative right-9 '><img src="/EnvelopeSimple.png" className='w-[20px] h-[20px] ' alt="Icon" /> <span className="font-semibold text-[16px]">Subscribe</span></button>
    </div>
      </div>
    </div>
  )
}
