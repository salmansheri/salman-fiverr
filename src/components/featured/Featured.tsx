"use client";

import { BsSearch } from "react-icons/bs";
import Input from "../Input/Input";
import Button from "../Button";
import Search from "./Search";
import Image from "next/image";

const buttons = ["Web Design", "WordPress", "Logo Design", "AI Services" ]

const Featured = () => {
  return (
    // featured
    <div className="h-[600px] flex justify-center bg-darkgreen text-white">
      {/* container  */}
      <div className="w-navWidth flex items-center justify-between">
        {/* Left  */}
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl">Find the perfect <i className="font-thin">freelance</i> services for your business</h1>
          {/* search  */}
          <div className="flex items-center justify-between rounded-md bg-white p-1">
            {/* searchInput  */}
            <Search />
          </div>
          <div className="flex flex-row gap-3 items-center">
            <span>Popular:</span>
            {buttons.map((button, index) => (
                <button className="border border-white rounded-full px-2 py-1 " key={index}>{button}</button>

            ))}
            

          </div>
        </div>
        {/* right  */}
        <div  className="">
            <Image 
                src="/img/man.png"
                alt=""
               width={900}
               height={100}
                style={{objectFit: "contain"}}
            />
        </div>
      </div>
    </div>
  );
};

export default Featured;
