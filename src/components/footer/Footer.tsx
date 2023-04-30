'use client';
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from 'react-icons/ai'

 

const Footer = () => {
    return(
        // footer
        <div>

        <div className="flex items-center justify-center pt-10 bg-grey">
            <div className="container w-navWidth flex flex-col items-center justify-center">
                {/* top  */}
                <div className="flex flex-row justify-between w-full">
                    {/* item  */}
                    <div className="flex flex-col gap-4">
                        <h2>Categories</h2>
                        <span>Graphics and Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing And Transition</span>
                        <span>Video and Animation</span>
                        <span>Music and Audio</span>
                        <span>Programming and Tech</span>
                        <span>Data</span>
                        <span>bussiness</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>Categories</h2>
                        <span>Graphics and Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing And Transition</span>
                        <span>Video and Animation</span>
                        <span>Music and Audio</span>
                        <span>Programming and Tech</span>
                        <span>Data</span>
                        <span>bussiness</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>Categories</h2>
                        <span>Graphics and Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing And Transition</span>
                        <span>Video and Animation</span>
                        <span>Music and Audio</span>
                        <span>Programming and Tech</span>
                        <span>Data</span>
                        <span>bussiness</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>Categories</h2>
                        <span>Graphics and Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing And Transition</span>
                        <span>Video and Animation</span>
                        <span>Music and Audio</span>
                        <span>Programming and Tech</span>
                        <span>Data</span>
                        <span>bussiness</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                    </div>


                </div>
                {/* bottom */}
                <div className="flex items-center justify-between w-full py-10">
                    {/* left  */}
                    <div>
                        <h2>fiverr</h2>
                        <span>©️ Fiverr Internation ltd. 2023</span>
                    </div>
                    {/* right  */}
                    <div className="flex flex-row  gap-10 ">
                        
                        <BsTwitter  size={30}  className="hover:text-opacity-90 text-gray-500 cursor-pointer" />
                        <AiFillFacebook size={30} className="hover:text-opacity-90 text-gray-500 cursor-pointer" />
                        <BsLinkedin size={30} className="hover:text-opacity-90 text-gray-500 cursor-pointer"/>
                    </div>

                </div>
            </div>
            


        </div>
        </div>
    )
}

export default Footer; 