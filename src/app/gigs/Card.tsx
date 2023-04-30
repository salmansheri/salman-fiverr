"use client";

import { useSearchParams, useParams } from "next/navigation";
import Image from "next/image";

import React from "react";
import Link from "next/link";
import { Url } from "url";
import Avatar from "@/components/navbar/Avatar";
import { AiFillHeart } from "react-icons/ai";

interface CardProps {
    item: Record<string, any>; 
    id: any
   
}

const Card: React.FC<CardProps> = ({
  item,
  id
  
}) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("cat");

  return (
    // card
    <Link href={`/gigs/${id}`}>
  <div className=" flex  flex-col w-[300px] h-[400px] border rounded-lg overflow-hidden cursor-pointer">
    
    <div className="relative h-[50%] w-full">
        
    <Image 
        src={item.img}
        alt="itemimg"
        fill
        style={{ objectFit: "cover" }}
        
     
        
        />
    </div>
    <div className="  p-3 flex  gap-5">
      {/* info  */}
      <div className="flex flex-col gap-2 border-b ">
        <div className="flex gap-2 items-center">

        <Avatar />
        {item.username}
        </div>

        <p>

       
          {item.desc}
        </p>
       
        <div className="flex gap-2 items-center">
          <Image 
            src="/img/star.png"
            alt="star"
            width={20}
            height={20}
          />
          <span>{item.star}</span>
        </div>
      </div>
      {/* details  */}
    </div>
      <div className="flex flex-row w-full justify-between items-center p-3">
        <AiFillHeart />
        <div>

        <p>starting At</p>
        <h2>$ {item.price}</h2>
        </div>
      </div>


  </div>
        </Link>
  );
};

export default Card;
