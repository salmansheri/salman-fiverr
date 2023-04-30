'use client'; 

import Image from 'next/image';
import React from 'react'

const Feature = () => {
  return (
    <div className="bg-light-green flex justify-center py-24">
        {/* container  */}
        <div className="flex  justify-between flex-wrap w-navWidth">
            {/* item  */}
            <div className="basis-1/2  flex flex-col gap-4">
                <h1 className="font-semibold mb-3 text-3xl">A Whole world of freelance talent at your fingertips</h1>
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

            </div>

            <div className="basis-1/2">
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/sOMXnCERRlc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

            </div>
        </div>
    </div>
  )
}

export default Feature