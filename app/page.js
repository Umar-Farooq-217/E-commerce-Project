import Image from 'next/image';
import Navbar from './components/navbar/Navbar'
import Button from './components/button/Button';
import Card from './components/card/Card'
import TopCard from './components/topCard/TopCard'
export default function Home() {
  return (
    <div className="bg-[#2b2b2b]  min-w-full z-0  text-white">
      <Navbar />
<div className="px-[125px] py-[80px]">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[45px] py-7 ">
        <div className="p-2">
          <h1 className="text-[28px] md:text-[38px] lg:text-[68px] font-[600]  leading-tight text-balance ">Discover <span className=""><br className='hidden lg:block' /></span> Digital Art & <span className=""><br className='hidden lg:block' /></span> Collect NFTs</h1>
          <p className="text-[22px] font-[400] pt-3">NFT marketplace UI created with Anima for Figma. <br className='hidden lg:block' />Collect, buy and sell art from more than 20k NFT artists.</p>
          <div className="mt-6">

            <Button className='bg-[#A259FF] h-[60px] w-[224px] ' img='RocketLaunch.svg' title='Get Started' />
          </div>
          <div className='grid grid-cols-3 mt-6'>
            <div className="">
              <h4 className="text-[28px] font-[700] ">240k+</h4>
              <p className="text-[23px] font-[400]">Total Sales</p>
            </div>
            <div className="">
              <h4 className="text-[28px] font-[700] ">100k+</h4>
              <p className="text-[23px] font-[400]">Auctions</p>
            </div>
            <div className="">
              <h4 className="text-[28px] font-[700] ">240k+</h4>
              <p className="text-[23px] font-[400]">Artists</p>
            </div>

          </div>
        </div>
        <div className="bg-[#3b3b3b] mb-4 rounded-xl">
          <Image className='w-full object-cover rounded-xl  h-[401px]' src='/space.png' width={510} height={401} alt="space man Image" />
          <div className=" px-6 py-6 ">
            <h1 className="text-[22px] font-semibold ">Space Walking</h1>
            <div className="flex mt-3">
              <Image src='/smallicon.svg' width={24} height={24} alt="space man Image" />
              <p className="text-[16px] pl-3 ">Animakid</p>
            </div>

          </div>
        </div>
      </div>
      {/* ///////////////////////////////////// */}
      <div className="py-[80px]">
        <h1 className="text-[28px] lg:text-[38px] font-[600] pt-7">Trending Collections</h1>
        <p className="text-[16px] lg:text-[22px] font-[400] ">Checkout our Weekly Updated Trending Collection</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
          <Card first='/Primary Photo Placeholder.png' second='/Secondary Photo Placeholder.png' third='/Secondary Photo Placeholder-1.png' four='/Avatar Placeholder.png' heading='DSGN Animals' pera='MrFox' />
          <Card first='/Primary Photo Placeholder-1.png' second='/Secondary Photo Placeholder-2.png' third='/Secondary Photo Placeholder-3.png' four='/Avatar Placeholder-1.png' heading='Magic Mashrooms' pera='Shroomie' />
          <Card first='/Primary Photo Placeholder-2.png' second='/Secondary Photo Placeholder-4.png' third='/Secondary Photo Placeholder-5.png' four='/Avatar Placeholder-2.png' heading='Disco Machine' pera='Bekind2Robots' />
        </div>
        </div>

        {/* 3rd///////////////////////////////// */}
        <div className="">
            <h1 className="text-[28px] lg:text-[38px] font-[600] pt-7">Top Creators</h1>
            <div className="">
        <p className="text-[16px] lg:text-[22px] font-[400] ">Checkout our Weekly Updated Trending Collection</p>
        <Button />
            </div>

<div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
  <TopCard first='/Artist Avatar (2).png' count='1' heading='Keepitreal'  />
  <TopCard first='/Artist Avatar (1).png' count='2' heading='DigiLab'  />
  <TopCard first='/Artist Avatar.png' count='3' heading='GravityOne'  />
  <TopCard first='/Avatar Placeholder-6.png' count='4' heading='Juanie'  />
  <TopCard first='/Artist Avatar22.png' count='5' heading='BlueWhale'  />
  <TopCard first='/Avatar Placeholder00.png' count='6' heading='Mr Fox'  />
  <TopCard first='/Avatar Placeholder-122.png' count='7' heading='Shroomie'  />
  <TopCard first='/Avatar Placeholder-222.png' count='8' heading='Robotica'  />
  <TopCard first='/Avatar Placeholder-4.png' count='9' heading='Animakid'  />
  <TopCard first='/Avatar Placeholder-5.png' count='10' heading='Dotgu'  />
  <TopCard first='/Avatar Placeholder-6.png' count='11' heading='Giblier'  />
  <TopCard first='/Artist Avatar (2).png' count='12' heading='Keepitreal'  />
</div>


        </div>
   
    </div>
    </div>
  );
}
