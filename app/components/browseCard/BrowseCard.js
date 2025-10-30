import Image from "next/image";
import React from "react";
import "./BrowseCard.css";

export default function BrowseCard({ src, heading , front }) {
  return (
    <div className="rounded-[20px] bg-[#3b3b3b] overflow-hidden">
      {/* Add class .img-container to use ::before */}
      <div className='h-[240px] flex justify-center items-center overflow-hidden img-container  '
        style={{ "--front-image": `url(${front})` }}
      >
        <Image
          className="w-full h-[240px] object-cover blur-sm hover:blur-0 transition-all ease-in duration-200"
          width={500}
          height={240}
          alt={heading}
          src={src}
        />
      </div>

      <p className="py-4 text-center  text-[22px] font-semibold">
        {heading}
      </p>
    </div>
  );
}
