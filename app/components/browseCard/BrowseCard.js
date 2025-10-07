import Image from "next/image";
import React from "react";
import './BrowseCard.css'

export default function BrowseCard({  src, heading }) {
  return (
    <div className="rounded-[20px] bg-[#3b3b3b] overflow-hidden ">
    
      <div className={`h-[240px] flex justify-center items-center  overflow-hidden   `}>
     
       
        <Image
          className=" img w-full h-[240px] blur-sm   "
          width={100}
          height={100}
          alt={heading}
          src={src}
        />
      </div>

    
      <p className="pt-5  pb-6 pl-[30px] text-[22px] font-semibold">
        {heading}
      </p>
    </div>
  );
}
