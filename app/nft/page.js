import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import Clock from '../components/clock/Clock'
import Button from '../components/button/Button'
import Link from 'next/link'
import DiscoverCard from '../components/discoverCard/DiscoverCard'

export default function page() {
    return (
        <div className='bg-[#2b2b2b] text-white '>
            <Navbar />
            <Image className='w-full lg:h-[560px] md:h-[420px] h-[320px] object-cover' src='/nftship.png' height={560} width={1880} alt='Image' loading='lazy' />

            <div className="lg:px-[125px] md:px-20 px-10 pt-10 ">
                <div className="md:flex block ">
                    <div className="flex-grow-[1]">
                        <h1 className="lg:text-[51px] text-[38px] font-semibold">The Orbitians</h1>
                        <p className="text-[22px] text-[#858584]">Minted on Sep 30, 2022</p>
                        <div className="md:block hidden pt-11">
<p className="text-[22px] text-[#858584] ">Created By</p>
                    <div className="flex  items-center gap-3  ">
                        <Image className='w-[24px] h-[24px]' src='/orbitian.png' width={24} height={24} alt='Image' />
                        <p className="text-[22px] lg:font-bold font-normal">Orbitian</p>
                    </div>
                    </div>
                    </div>
                    <div className="md:mt-0 mt-8">
                        <Clock title='Place Bid' className='bg-[#3B3B3B] ' />
                    </div>
                </div>
            </div>
           
                <div className="lg:px-[125px] md:px-20 px-10 md:hidden block pt-7 ">
                    <p className="text-[22px] text-[#858584]">Created By</p>
                    <div className="flex  items-center gap-3">
                        <Image className='w-[24px] h-[24px]' src='/orbitian.png' width={24} height={24} alt='Image' />
                        <p className="text-[22px] lg:font-bold font-normal">Orbitian</p>
                    </div>
                </div>
                <div className="lg:px-[125px] md:px-20 px-10 md:pb-10 pb-7  lg:w-[75%]  md:w-[65%] ">
                    <p className="text-[22px] text-[#858584] pt-7">Description</p>
                    <p className="text-[22px]  font-[400]">The Orbitians</p>
                    <p className="text-[22px]  font-[400]">is a collection of 10,000 unique NFTs on the Ethereum blockchain,</p>
                    <p className="text-[22px]  font-[400] pt-7">There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.</p>
                    <p className="text-[22px]  font-[400] pt-7">They live in a metal space machines, high up in the sky and only have one foot on Earth.</p>
                    <p className="text-[22px]  font-[400]">These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</p>

                    <div className="pt-5">
                        <p className="text-[22px] text-[#858584]">Details</p>
                        <div className="flex  items-center gap-2 pt-2">
                            <Image className='w-[24px] h-[24px]' src='/globe.png' width={24} height={24} alt='Image' />
                            <p className="text-[22px]">View On Etherscan</p>
                        </div>
                        <div className="flex  items-center gap-3 pt-2">
                            <Image className='w-[24px] h-[24px]' src='/globe.png' width={24} height={24} alt='Image' />
                            <p className="text-[22px]">View Original</p>
                        </div>
                    </div>
                    <div className="pt-5">
                        <p className="text-[22px] text-[#858584]">Tags</p>
                        <div className="lg:flex block  gap-5 ">
                            <p className="bg-[#3B3B3B] w-fit py-2 px-6 rounded-[20px] mt-4">ANIMATION</p>
                            <p className="bg-[#3B3B3B] w-fit py-2 px-6 rounded-[20px] mt-3">ILLUSTRATION</p>
                            <p className="bg-[#3B3B3B] w-fit py-2 px-6 rounded-[20px] mt-3">MOON</p>
                            <p className="bg-[#3B3B3B] w-fit py-2 px-6 rounded-[20px] mt-3">ANIMATION</p>
                        </div>
                    </div>



                </div>
           

            <div className="lg:px-[125px] md:px-20 px-10 md:py-10  py-5 bg-green-500">
                <div className="flex justify-between items-center ">
                    <h1 className="lg:text-[38px] text-[28px] font-semibold  ">More From This Artist</h1>
                    <Link className='md:block hidden' href='/'> <Button img='/ArrowRight.png' title='Go to Artist Page' className='border-[2px] border-[#A259FF] h-[60px] px-12  ' /></Link>

                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-10 py-12">
                    <DiscoverCard img='/art1.png' logo='/orbitian.png' name='Orbitian' heading='Foxy Life'  />
                    <DiscoverCard img='/art2.png' logo='/orbitian.png' name='Orbitian' heading='Cat From Future'  />
                    <DiscoverCard img='/art3.png' logo='/orbitian.png' name='Orbitian' heading='Psyco Dog'  />
                    <DiscoverCard img='/art4.png' logo='/orbitian.png' name='Orbitian' heading='Designer Bear'  />
                    <DiscoverCard img='/art5.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robot456'  />
                    <DiscoverCard img='/art6.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robat 4346'  />
                    <DiscoverCard img='/art7.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robat 4346'  />
                    <DiscoverCard img='/art8.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robat 4346'  />
                    <DiscoverCard img='/art9.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robat 4346'  />
                    
                </div>
                <div className="">
                    <Link className='md:hidden block ' href='/'> <Button img='/ArrowRight.png' title='Go to Artist Page' className='border-[2px] border-[#A259FF] h-[60px] px-12  flex mx-auto' /></Link>
                </div>


            </div>


            <Footer />

        </div>
    )
}
