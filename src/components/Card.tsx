import React from 'react'; 
import Link from 'next/link';
// import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';

interface CardProps {
     
    item: Record<string, any>

}

const Card: React.FC<CardProps> = ({
    
    item,

}) => {
  return (
    <Link href={`/gigs?cat=design`}>

    <div className="relative w-64 h-80 rounded-md cursor-pointer translate-x-96">
        <Image 
            src={item.img}
            alt=""
            fill
            style={{objectFit: "cover"}}
            
        />
        <span className="font-light absolute top-4 left-2 text-white">{item.desc}</span>
        <span className="font-medium text-2xl absolute left-4 top-10 text-white">{item.title}</span>

    </div>
    </Link>
  )
}

export default Card