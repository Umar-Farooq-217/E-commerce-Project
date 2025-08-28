import Image from 'next/image';
import Navbar from './components/navbar/Navbar'
import Button from './components/button/Button';
export default function Home() {
  return (
   <div className="bg-[#2b2b2b] h-screen min-w-full z-0  text-white">
    <Navbar/>

    <div className="px-[125px] py-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[45px] ">
      <div className="">
        <h1 className="text-[28px] md:text-[38px] lg:text-[68px] font-[600]   ">Discover <span className=""></span> Digital Art & <span className=""></span> Collect NFTs</h1>
        <p className="text-[22px] font-[400] pt-3">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
        <div className="block">

        <Button className='bg-[#A259FF] h-[60px] w-[224px] ' img='RocketLaunch.svg'  title='Get Started'/>
        </div>
        <div>
          <div className="">
            <h4 className="">240k+</h4>
            <p className="">Total Sales</p>
          </div>
          
        </div>
      </div>
      <div className="">
        <Image className='w-full object-cover rounded-xl  h-[401px]' src='/space.png' width={510} height={401} alt="space man Image" />
        <h1 className="">Space Walking</h1>
        <div className="">
            <Image src='/smallicon.svg' width={24} height={24} alt="space man Image" />
            <p className="">Animakid</p>
        </div>
      </div>
    </div>
   </div>
  );
}
