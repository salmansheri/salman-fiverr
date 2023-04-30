'use client'; 

import Image from 'next/image';
import React from 'react'

const BusinessSection = () => {
  return (
    <div className=" bg-dark text-white flex justify-center py-24">
        {/* container  */}
        <div className="flex  justify-between flex-wrap w-navWidth">
            {/* item  */}
            <div className="basis-1/2  flex flex-col gap-4">
                <h1 className="font-semibold mb-3 text-3xl">fiverr<i>business</i></h1>
                <h2 className="text-3xl font-medium">
                    A business solution designed for teams

                </h2>
                <p>
                    Upgrade to curated experience packed with tools and benefits, dedicated to businesses
                </p>
                <div className="flex">
                    <Image 
                        src="/img/check.png"
                        alt="featureImage"
                        width={30}
                       height={30}

                    />
                    The best for every budget
                
                </div >
                <p className="text-lg font-light text-gray">
                    Find high-quality services at every price pointer. No hourly rates, 
                    just project-based pricing
                </p>
                <div className="flex">
                    <Image 
                        src="/img/check.png"
                        alt="featureImage"
                        width={30}
                        height={30}

                    />
                    The best for every budget
                
                </div >
                <p className="break-normal">
                    Find high-quality services at every price pointer. No hourly rates, 
                    just project-based pricing
                </p>
                <div className="flex">
                    <Image 
                        src="/img/check.png"
                        alt="featureImage"
                        width={30}
                        height={30}

                    />
                    The best for every budget
                
                </div>
                <p className="break-normal">
                    Find high-quality services at every price pointer. No hourly rates, 
                    just project-based pricing
                </p>
                <div className="flex">
                    <Image 
                        src="/img/check.png"
                        alt="featureImage"
                        width={30}
                        height={30}

                    />
                    The best for every budget
                
                </div>
                <p className="break-normal">
                    Find high-quality services at every price pointer. No hourly rates, 
                    just project-based pricing
                </p>
                <button className="bg-green text-white py-3 px-5 rounded-md text-base mt-5 hover:bg-opacity-80">Explore Fiverr businesses</button>

            </div>

            <div className="basis-1/2 flex items-center justify-center">
           <Image 
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt="fiverr"
            width={1000}
            height={1000}
                
           />

            </div>
        </div>
    </div>
  )
}

export default BusinessSection; 