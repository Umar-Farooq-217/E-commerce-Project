import React from 'react'

export default function TopCard(props) {
  return (
    <div>
      <h2 className="">{props.count}</h2>
      <Image className='' src={props.first} width={100} height={100} alt='Image' />
      <h1 className="">{props.heading}</h1>
      <p className="">Total Sales : <span className="">63.45 ETH</span></p>
    </div>
  )
}
