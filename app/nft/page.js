import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import Clock from '../components/clock/Clock'

export default function page() {
  return (
    <div className='bg-[#2b2b2b] text-white'>
        <Navbar/>
        <Image className='w-full lg:h-[560px] md:h-[420px] h-[320px] object-cover' src='/nftship.png' height={560} width={1880} alt='Image' loading='lazy' />

        <div className="lg:px-[125px] md:px-20 px-10 py-10 ">
            <div className="flex">
            <div className="flex-grow-[1]">
<h1 className="">The Orbitians</h1>
<p className="">Minted on Sep 30, 2022</p>

            </div>
            <div className="">
                <Clock title='Place Bid' className='bg-[#3B3B3B] ' />
            </div>
            </div>
        </div>
        <div className="lg:px-[125px] md:px-20 px-10 py-10">
            <p className="">Created By</p>
            <div className="flex  items-center gap-3">
                <Image className='w-[24px] h-[24px]' src='/orbitian.png' width={24} height={24} alt='Image'  />
                <p className="">Orbitian</p>
            </div>
        </div>
        <div className="lg:px-[125px] md:px-20 px-10 py-10 ">
            <p className="">The Orbitians</p>
            <p className="">is a collection of 10,000 unique NFTs on the Ethereum blockchain,</p>
            <p className="">There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.</p>
            <p className="">They live in a metal space machines, high up in the sky and only have one foot on Earth.</p>
            <p className="">These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</p>

            <div className="">
                <p className="">Details</p>
                <div className="flex  items-center gap-2">
                <Image className='w-[24px] h-[24px]' src='/globe.png' width={24} height={24} alt='Image'  />
                <p className="">View On Etherscan</p>
            </div>
             <div className="flex  items-center gap-3">
                <Image className='w-[24px] h-[24px]' src='/globe.png' width={24} height={24} alt='Image'  />
                <p className="">View Original</p>
            </div>
            </div>
            <div className="">
                <p className="">Tags</p>
                <div className="flex gap-5">
                    <p className="bg-[#3B3B3B] w-fit py-2 px-6 rounded-[20px]">ANIMATION</p>
                    <p className="bg-[#3B3B3B] w-fit py-2 px-6 rounded-[20px]">ILLUSTRATION</p>
                    <p className="bg-[#3B3B3B] w-fit py-2 px-6 rounded-[20px]">MOON</p>
                    <p className="bg-[#3B3B3B] w-fit py-2 px-6 rounded-[20px]">ANIMATION</p>
                </div>
            </div>

        </div>


        <Footer/>
      
    </div>
  )
}
