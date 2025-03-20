import React from 'react'
import Image from 'next/image'
import profile from '@/public/foto.png'

export default function Fotoinsquare({className} : { className: string}) {
  return (
    <div className={className}>
        <div className="aspect-square w-full bg-[#4C4E41] rounded-3xl relative ">
            <Image priority className="absolute bottom-[-10%] min-[450px]:max-w-[90%] min-[450px]:bottom-[-4%] md:bottom-0 xl:bottom-[-5%]" src={profile} alt="Picture of the author"></Image>
        </div>
    </div>
  )
}
