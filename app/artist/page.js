import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import Button from '../components/button/Button'
import DiscoverCard from '../components/discoverCard/DiscoverCard'

export default function page() {
  return (
    <div className='bg-[#2b2b2b]    text-white'>
        <Navbar/>
<div className="bg-[url('/ship.png')] h-[370px] w-full bg-center bg-no-repeat bg-cover aspect-video   ">
<div className="bg-gradient-to-t from-[#A259FF]/90 from-10% to-transparent w-full h-full ">
</div>
<Image className='w-[120px] h-[120px] flex items-end relative lg::left-[125px] md:left-20 left-10  top-[-60px]' src='/Avatar.png' width={120} height={120} loading='lazy' alt='Image' />

</div>

<div className="lg:px-[125px] md:px-20  px-10 py-10  mt-[60px] ">
    <div className="lg:flex block justify-between items-center flex-wrap">
        <div className=""><h1 className="lg:text-[51px] text-[38px] font-semibold ">Animakid</h1></div>
        <div className="flex gap-5 flex-wrap lg:mt-auto mt-3">
            <Button img='/copy.png' title='0xc0E3...B79C' className='bg-[#A259FF] h-[60px] px-[50px] md:w-auto w-full ' />
             <Button img='/Plus.png' title='Follow' className=' border-[2px] border-[#A259FF] h-[60px] px-[50px] md:w-auto w-full' />
        </div>
    </div>
    <div className="flex md:gap-16 gap-10 pt-5">
        <div className="">
            <h1 className="lg:text-[28px] text-[22px] font-bold ">250k+</h1>
            <p className="lg:text-[22px] text-[16px] ">Volume</p>
        </div>
        <div className="">
            <h1 className="lg:text-[28px] text-[22px] font-bold ">50+</h1>
            <p className="lg:text-[22px] text-[16px] ">NFTs Sold</p>
        </div>
        <div className="">
            <h1 className="lg:text-[28px] text-[22px] font-bold ">3000+</h1>
            <p className="lg:text-[22px] text-[16px] ">Followers</p>
        </div>
        
    </div>

    <div className="pt-6">
        <h1 className="md:text-[22px] text-base text-[#858585] ">Bio</h1>
        <h1 className="md:text-[22px] text-base pt-3 ">The internet's friendliest designer kid.</h1>
    </div>
    <div className="pt-8">
        <h1 className="md:text-[22px] text-base text-[#858585] ">Links</h1>
        <div className="flex gap-[10px] h-[32px] pt-3 ">
            <Image src='/Globe.png' width={32} height={32} alt='logo' className='w-[32px] h-[32px] ' />
            <Image src='/DiscordLogo.png' width={32} height={32} alt='logo' className='w-[32px] h-[32px] ' />
            <Image src='/YoutubeLogo.png' width={32} height={32} alt='logo' className='w-[32px] h-[32px] ' />
            <Image src='/Vector.png' width={32} height={32} alt='logo' className='w-[32px] h-[32px] p-1 ' />
            <Image src='/InstagramLogo.png' width={32} height={32} alt='logo' className='w-[32px] h-[32px] ' />
        </div>
    </div>

</div>


    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-10 lg:px-[125px] md:px-20 px-10 md:py-20 py-10">
                <DiscoverCard img='/galaxy.png' heading='Distant Galaxy' logo='/moon.png' name='MoonDancer' />
                <DiscoverCard img='/life.png' heading='Life on Edena' logo='/nebulakid.png' name='NebulaKid' />
                <DiscoverCard img='/astro.png' heading='AstroFiction' logo='/spaceone.png' name='SpaceOne' />
                <DiscoverCard/>
              </div>






        <Footer/>
      
    </div>
  )
}
