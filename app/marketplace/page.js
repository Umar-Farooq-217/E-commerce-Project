import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import DiscoverCard from '../components/discoverCard/DiscoverCard'
export default function page() {
  return (
    <div className='text-white'>
      <Navbar/>
      <div className="bg-[#2b2b2b] lg:px-[125px] lg:py-20 md:py-16 py-10 md:px-20 px-10  ">
      <h1 className="lg:text-[51px] font-semibold  text-[38px]  ">Browse Marketplace</h1>
      <p className="text-[22px]">Browse through more than 50k NFTs on the NFT Marketplace.</p>
      <div className="py-3 md:px-5 px-3 border-[1px] border-[#858584] flex justify-between items-center rounded-[20px] mt-3">
        <input className=' outline-none bg-[#2b2b2b] text-base w-full' type="text" placeholder='Search Your Favourite NFTs' />
        <Image className='w-[24px] h-[24px] ' src='/search.png' width={30} height={30} alt='Image' />
      </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  py-12 bg-[#2b2b2b] lg:px-[125px]    md:px-20 px-10">
                          <DiscoverCard img='/art1.png' logo='/orbitian.png' name='Orbitian' heading='Foxy Life'  />
                          <DiscoverCard img='/art2.png' logo='/orbitian.png' name='Orbitian' heading='Cat From Future'  />
                          <DiscoverCard img='/art3.png' logo='/orbitian.png' name='Orbitian' heading='Psyco Dog'  />
                          <DiscoverCard img='/art4.png' logo='/orbitian.png' name='Orbitian' heading='Designer Bear'  />
                          <DiscoverCard img='/art5.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robot456'  />
                          <DiscoverCard img='/art6.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robat 4346'  />
                          <DiscoverCard img='/art7.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robat 4346'  />
                          <DiscoverCard img='/art8.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robat 4346'  />
                          <DiscoverCard img='/art9.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robat 4346'  />
                          <DiscoverCard img='/art10.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robat 4346'  />
                          <DiscoverCard img='/art11.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robat 4346'  />
                          <DiscoverCard img='/art12.png' logo='/orbitian.png' name='Orbitian' heading='Dancing Robat 4346'  />
                          
                      </div>





      <Footer/>
    </div>
  )
}
