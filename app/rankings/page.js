import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Ranking from '../components/ranking/Ranking'
export default function page() {
    return (
        <div className='bg-[#2b2b2b] text-white'>
            <Navbar />
            <div className="lg:px-[125px] md:px-20 px-10  ">
                <div className="lg:py-20 md:py-16 py-10">
                    <h1 className="lg:text-[51px] text-[38px] font-semibold ">Top Creators</h1>
                    <p className="lg:text-[22px] text-[16px]  ">Check out top ranking NFT artists on the NFT Marketplace.</p>
                </div>


                <div className="">
                    <div className="md:grid flex justify-between items-center  lg:grid-cols-2 md:grid-cols-2 text-[16px] text-[#858584] border-[1px] border-[#858584] px-5 py-2 rounded-[20px] ">

                        <div className="flex items-center gap-3 ">
                            <p className="w-2 h-2 rounded-full bg-[#858584]"></p>
                            <p className="">Artist</p>
                        </div>
                        <div className="flex lg:justify-between justify-end  items-center ">
                            <p className=" pr-16 md:block hidden ">Change</p>
                            <p className="lg:block hidden ">NFTs Sold</p>
                            <p className="md:text-[16px] text-[12px]">Volume</p>
                        </div>
                    </div>

                    <div className="">
                        {/* <Ranking img='/Artist Avatar (2).png' name='Jaydon Ekstrom' cout='1' />
                        <Ranking img='/Artist Avatar (1).png' name='Ruben Carder' cout='2' />
                        <Ranking img='/Artist Avatar.png' name='Alfredo Septimus' cout='3' />
                        <Ranking img='/Avatar Placeholder-3.png' name='Kiana Donin' cout='4' />
                        <Ranking img='/Avatar Placeholder-4.png' name='Angel Luben' cout='5' />
                        <Ranking img='/Avatar Placeholder-5.png' name='Davis Workman' cout='6' />
                        <Ranking img='/Avatar Placeholder-6.png' name='Randy Carder' cout='7' />
                         <Ranking img='/Artist Avatar (2).png' name='Jaydon Ekstrom' cout='8' />
                        <Ranking img='/Artist Avatar (1).png' name='Ruben Carder' cout='9' />
                        <Ranking img='/Artist Avatar.png' name='Alfredo Septimus' cout='10' />
                        <Ranking img='/Avatar Placeholder-3.png' name='Kiana Donin' cout='11' />
                        <Ranking img='/Avatar Placeholder-4.png' name='Angel Luben' cout='12' />
                        <Ranking img='/Avatar Placeholder-5.png' name='Davis Workman' cout='13' />
                        <Ranking img='/Avatar Placeholder-6.png' name='Randy Carder' cout='14' />
                         <Ranking img='/Artist Avatar (2).png' name='Jaydon Ekstrom' cout='15' />
                        <Ranking img='/Artist Avatar (1).png' name='Ruben Carder' cout='16' />
                        <Ranking img='/Artist Avatar.png' name='Alfredo Septimus' cout='17' />
                        <Ranking img='/Avatar Placeholder-3.png' name='Kiana Donin' cout='18' />
                        <Ranking img='/Avatar Placeholder-4.png' name='Angel Luben' cout='19' />
                        <Ranking img='/Avatar Placeholder-5.png' name='Davis Workman' cout='20' /> */}
                      

                        
                       
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}
