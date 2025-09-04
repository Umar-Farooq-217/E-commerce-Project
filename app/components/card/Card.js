import Image from 'next/image'
import React from 'react'

export default function Card(props) {
  return (
    <div>
      <Image className='' src={props.first} width={100} height={100} alt='Image' />
      <div className="">
<Image className='' src={props.second} width={100} height={100} alt='Image' />
<Image className='' src={props.third} width={100} height={100} alt='Image' />
<Image className='' src={props.four} width={100} height={100} alt='Image' />
      </div>
      <h1 className="">{props.heading}</h1>
      <div className="">
        <Image className='' src={props.five} width={100} height={100} alt='Image' />
        <p className="">{props.pera}</p>
      </div>
      
    </div>
  )
}
