import Image from 'next/image';
import Navbar from './components/navbar/Navbar'
import Button from './components/button/Button';
export default function Home() {
  return (
    <div className="bg-[#2b2b2b] h-screen min-w-full z-0  text-white">
      <Navbar />

      <div className="px-[125px] py-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[45px] ">
        <div className="p-2">
          <h1 className="text-[28px] md:text-[38px] lg:text-[68px] font-[600]  leading-tight text-balance ">Discover <span className=""></span> Digital Art & <span className=""></span> Collect NFTs</h1>
          <p className="text-[22px] font-[400] pt-3">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
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
    <div className=""></div>
    
    </div>
  );
}
