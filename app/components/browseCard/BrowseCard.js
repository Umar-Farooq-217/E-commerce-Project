import Image from "next/image";
import React from "react";

export default function BrowseCard({  src, heading, bgImage }) {
  return (
    <div className="rounded-[20px] bg-[#3b3b3b] ">
    
      <div className="relative h-[240px] flex justify-center items-center ">
     
       
        <Image
          className="relative z-10 h-[100px] w-[100px] object-cover"
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
