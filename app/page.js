import Image from 'next/image';
import Navbar from './components/navbar/Navbar'
import Button from './components/button/Button';
import Card from './components/card/Card'
import TopCard from './components/topCard/TopCard'
import BrowseCard from './components/browseCard/BrowseCard'
import DiscoverCard from './components/discoverCard/DiscoverCard'
import WorksCard from './components/worksCard/WorksCard'
import Clock from './components/clock/Clock'
import Footer from './components/footer/Footer'
export default function Home() {
  return (
    <div className="lg:bg-[#2b2b2b] md:bg-black sm:bg-green-300  min-w-full z-0  text-white">
      <Navbar />
      <div className="lg:px-[125px] lg:pt-[80px] md:py-7 md:px-20">
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
            <Image className='w-full object-cover rounded-tl-xl rounded-tr-xl  h-[401px]' src='/space.png' width={510} height={401} alt="space man Image" />
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
        <div className="lg:py-[80px] md:py-7">
          <h1 className="text-[28px] lg:text-[38px] font-[600] pt-7">Trending Collections</h1>
          <p className="text-[16px] lg:text-[22px] font-[400] ">Checkout our Weekly Updated Trending Collection</p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 my-16">
            <Card first='/Primary Photo Placeholder.png' second='/Secondary Photo Placeholder.png' third='/Secondary Photo Placeholder-1.png' four='/Avatar Placeholder.png' heading='DSGN Animals' pera='MrFox' />
            <Card first='/Primary Photo Placeholder-1.png' second='/Secondary Photo Placeholder-2.png' third='/Secondary Photo Placeholder-3.png' four='/Avatar Placeholder-1.png' heading='Magic Mashrooms' pera='Shroomie' />
            <Card first='/Primary Photo Placeholder-2.png' second='/Secondary Photo Placeholder-4.png' third='/Secondary Photo Placeholder-5.png' four='/Avatar Placeholder-2.png' heading='Disco Machine' pera='Bekind2Robots' />
          </div>
        </div>

        {/* 3rd///////////////////////////////// */}
        <div className="lg:py-[80px] md:py-7 ">
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
        <div className="lg:py-[80px] md:py-7">
          <h1 className="text-[28px] lg:text-[38px] font-[600] ">Browse Categories</h1>
          <div className="grid lg:grid-cols-4 gap-8 py-10">
            <BrowseCard src='/sky.png' front='/PaintBrush.png' heading='Art' />
            <BrowseCard src='/monkey.png' heading='Collectibles' front='/Swatches.png' />
            <BrowseCard src='/flower.png' heading='Music' front='/MusicNotes.png' />
            <BrowseCard src='/old.png' heading='Photography' front='/Camera.png' />
            <BrowseCard src='/walk.png' heading='video' front='/VideoCamera.png' />
            <BrowseCard src='/key.png' heading='Utility' front='/MagicWand.png' />
            <BrowseCard src='/ball.png' heading='Sport' front='/Basketball.png' />
            <BrowseCard src='/badal.png' heading='Virtual Worlds' front='/Planet.png' />
          </div>


        </div>

        {/* 5th//////////////////////////// */}
        <div className="lg:py-[80px] md:py-10  ">
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="text-[28px] lg:text-[38px] font-[600] ">Discover More NFTs</h1>
              <p className="text-[16px] lg:text-[22px] font-[400] ">Explore New Trending NFTs</p>
            </div>
            <div className="">
              <Button className='border-[#A259FF] border-[2px] px-[40px] py-3 ' img='/Eye.png' title='See All' />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-10">
            <DiscoverCard img='/galaxy.png' heading='Distant Galaxy' logo='/moon.png' name='MoonDancer' />
            <DiscoverCard img='/life.png' heading='Life on Edena' logo='/nebulakid.png' name='NebulaKid' />
            <DiscoverCard img='/astro.png' heading='AstroFiction' logo='/spaceone.png' name='SpaceOne' />
          </div>


        </div>
      </div>

      {/* 6/////////////////// */}
      <div className="bg-[url('/mushrooms.png')] h-[640px] w-full bg-no-repeat bg-cover bg-[center_top_40%]   ">
        <div className="bg-gradient-to-t from-[#A259FF]/90 to-transparent w-full h-full px-[125px] flex justify-between items-end pb-12">
          <div className="">
            <div className="bg-[#2B2B2B] rounded-[20px] px-[20px] py-[10px] flex items-center w-fit ">
              <Image src='/Avatar Placeholder-1.png' width={24} height={24} alt='Image' />
              <p className="text-[16px] pl-2">Shroomie</p>
            </div>
            <h1 className="lg:text-[51px] text-[38px] font-[600] py-6">Magic Mashrooms</h1>
            <div className="">
              <Button className='bg-white px-[40px] py-3  ' textColor='text-black' img='/Eye.png' title='See NFT' />
            </div>
          </div>
          <div className="">
            <Clock/>
          </div>


        </div>

      </div>

{/* 7///////////////////////// */}

<div className="lg:py-[80px] md:py-10 lg:px-[125px] md:px-20">
     <h1 className="text-[28px] lg:text-[38px] font-[600] ">How It Works </h1>
              <p className="text-[16px] lg:text-[22px] font-[400] ">Find Out How To Get Started</p>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mt-12">
                <WorksCard src='/Icon.png' heading='Setup Your Wallet' pera='Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.' />
                <WorksCard src='/Icon (1).png' heading='Create Collections' pera='Upload your work and setup your collection. Add a description, social links and floor price.' />
                <WorksCard src='/Icon (2).png' heading='Start Earning' pera='Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.' />
              </div>


</div>

{/* 8th/////////////////// */}
<div className=" lg:p-16 md:py-10 mt-20 lg:mx-[125px] md:px-[30px] bg-[#3B3B3B] rounded-[20px]  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-20 md:gap-[30px]  ">
  <div className="">
      <Image src='/Astronauts.png' className=' w-full h-[310px]  object-cover rounded-[20px]  ' width={240} height={240} alt='Image' />
  </div>
  <div className="p-5">
    <h1 className="text-[38px] font-semibold">Join Our Weekly Digest</h1>
    <p className="text-[22px] font-[400]">Get exclusive promotions & updates straight to your inbox.</p>
    <div className="lg:flex block mt-12">
      <input type="text" name="" id="" className='h-16  pl-5 lg:w-auto w-full text-[16px] font-semibold outline-none text-black rounded-[20px]' placeholder='Enter your email here' />
      <button className='flex justify-center items-center gap-2 bg-[#A259FF] h-16  px-19 rounded-[20px] lg:relative lg:right-9 lg:mt-0 md:w-full md:mt-3 '><img src="/EnvelopeSimple.png" className='w-[20px] h-[20px] ' alt="Icon" /> <span className="font-semibold text-[16px]">Subscribe</span></button>
    </div>
  </div>

</div>


<Footer/>







    </div>
  );
}
