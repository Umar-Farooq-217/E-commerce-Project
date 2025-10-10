import Image from 'next/image';
import Navbar from './components/navbar/Navbar'
import Button from './components/button/Button';
import Card from './components/card/Card'
import TopCard from './components/topCard/TopCard'
import BrowseCard from './components/browseCard/BrowseCard'
import DiscoverCard from './components/discoverCard/DiscoverCard'
export default function Home() {
  return (
    <div className="bg-[#2b2b2b]  min-w-full z-0  text-white">
      <Navbar />
      <div className="px-[125px] pt-[80px]">
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
        <div className="py-[80px] ">
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="text-[28px] lg:text-[38px] font-[600] ">Top Creators</h1>
              <p className="text-[16px] lg:text-[22px] font-[400] ">Checkout our Weekly Updated Trending Collection</p>

            </div>
            <Button className='border-[#A259FF] border-[2px] px-[50px] py-3 ' img='/b rocket.svg' title='View Rankings' />
          </div>

          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-16">
            <TopCard first='/Artist Avatar (2).png' count='1' heading='Keepitreal' />
            <TopCard first='/Artist Avatar (1).png' count='2' heading='DigiLab' />
            <TopCard first='/Artist Avatar.png' count='3' heading='GravityOne' />
            <TopCard first='/Avatar Placeholder-6.png' count='4' heading='Juanie' />
            <TopCard first='/Artist Avatar22.png' count='5' heading='BlueWhale' />
            <TopCard first='/Avatar Placeholder00.png' count='6' heading='Mr Fox' />
            <TopCard first='/Avatar Placeholder-122.png' count='7' heading='Shroomie' />
            <TopCard first='/Avatar Placeholder-222.png' count='8' heading='Robotica' />
            <TopCard first='/Avatar Placeholder-4.png' count='9' heading='Animakid' />
            <TopCard first='/Avatar Placeholder-5.png' count='10' heading='Dotgu' />
            <TopCard first='/Avatar Placeholder-6.png' count='11' heading='Giblier' />
            <TopCard first='/Artist Avatar (2).png' count='12' heading='Keepitreal' />
          </div>
        </div>

        {/* 4th//////////////////////////////// */}
        <div className="py-[80px]">
           <h1 className="text-[28px] lg:text-[38px] font-[600] ">Browse Categories</h1>
           <div className="grid lg:grid-cols-4 gap-8 py-10">
            <BrowseCard  src='/sky.png' front='/PaintBrush.png'  heading='Art'  />
            <BrowseCard   src='/monkey.png'  heading='Collectibles' front='/Swatches.png'  />
            <BrowseCard  src='/flower.png'  heading='Music' front='/MusicNotes.png' />
            <BrowseCard   src='/old.png' heading='Photography' front='/Camera.png' />
            <BrowseCard  src='/walk.png'  heading='video' front='/VideoCamera.png' />
            <BrowseCard   src='/key.png' heading='Utility' front='/MagicWand.png'  />
            <BrowseCard   src='/ball.png' heading='Sport' front='/Basketball.png' />
            <BrowseCard    src='/badal.png'  heading='Virtual Worlds' front='/Planet.png'  />
           </div>


        </div>

        {/* 5th//////////////////////////// */}
        <div className="py-[80px]  ">
           <h1 className="text-[28px] lg:text-[38px] font-[600] ">Discover More NFTs</h1>
              <p className="text-[16px] lg:text-[22px] font-[400] ">Explore New Trending NFTs</p>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-10">
                <DiscoverCard img='/galaxy.png' heading='Distant Galaxy' logo='/moon.png' name='MoonDancer' />
                <DiscoverCard img='/life.png' heading='Life on Edena' logo='/nebulakid.png' name='NebulaKid' />
                <DiscoverCard img='/astro.png' heading='AstroFiction' logo='/spaceone.png' name='SpaceOne' />
              </div>


        </div>
      </div>
      <div className="bg-[url('/mushrooms.png')] h-[640px] w-full bg-no-repeat bg-cover  ">
        
      </div>
    </div>
  );
}
