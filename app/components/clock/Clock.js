'use client'
import React, { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()) // update every second
    }, 1000)

    return () => clearInterval(interval) // cleanup
  }, [])

  // format time to always show 2 digits (e.g. 09:05:04)
  const formatTime = (num) => num.toString().padStart(2, '0')

  const hours = formatTime(time.getHours())
  const minutes = formatTime(time.getMinutes())
  const seconds = formatTime(time.getSeconds())

  return (
    <div className="flex justify-center items-cente bg-[#2B2B2B] bg-opacity-50 text-white  rounded-[20px] ">
      <div className="text-6xl font-mono p-[30px] ">
        <p className="text-[12px]">Auction Ends in : </p>
        <div className="flex pt-4">
            <p className="text-[38px] font-bold ">{hours} : <br /> <span className="text-[12px] leading-none ">Hours</span></p>
            <p className="text-[38px] font-bold">{minutes} : <br /> <span className="text-[12px]">Minutes</span></p>
            <p className="text-[38px] font-bold">{seconds}  <br /> <span className="text-[12px]">Seconds</span></p>
            
        </div>
       
      </div>
    </div>
  )
}
