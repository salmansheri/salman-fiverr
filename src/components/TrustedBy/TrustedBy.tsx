'use client'; 

import Image from 'next/image';
import React from 'react'

const TrustedBy = () => {
  return (
    // trusted by
    <div className="flex flex-row items-center gap-4 bg-gray-100 h-28 justify-center">
      <div className="w-[760px] flex items-center gap-5 text-gray-400 font-medium justify-center">

      <span>Trusted by:</span>
      <Image src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" alt="" width="100" height="50"  />
        <Image src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt=""  width="100" height="50"/>
        <Image src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt="" width="100" height="50" />
        <Image src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt="" width="100" height="50" />
        <Image src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt="" width="100" height="50" />
      </div>

    </div>
  )
}

export default TrustedBy