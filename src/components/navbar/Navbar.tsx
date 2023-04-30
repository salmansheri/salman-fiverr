'use client'

import Button from "../Button";
import { Montserrat } from 'next/font/google'; 

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import Avatar from "./Avatar";
import { usePathname } from 'next/navigation'; 

const montserrat = Montserrat({
    subsets: ['latin']
})

interface NavbarProps {
    currentUser?: any; 
}


const Navbar: React.FC<NavbarProps> = () => {
    const pathname = usePathname(); 
   
    const [active, setActive] = useState<boolean>(false); 
    const [open, setOpen] = useState<boolean>(false); 

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
    }

    
    useEffect(() => {
        const isActive = () => 
           { window.scrollY > 0 ? setActive(true) : setActive(false)
        }
        window.addEventListener('scroll', isActive); 

        if(pathname !== "/") {
            setActive(true)
        }

        return () => {
            window.removeEventListener('scroll', isActive); 
        }

    }, [pathname]); 
    return(
        <div className={`z-50 flex flex-col justify-center items-center  
            ${active ? 'bg-white' : 'bg-darkgreen'}
            ${active ? "text-black" : "text-white"}
            sticky top-0 transition-all duration-[0.5s] ease-in
        `}>
            {/* container  */}
            <div className="w-navWidth  flex justify-between py-[20px]">
                {/* logo  */}
                <Link href="/">

                <div className="font-bold text-[34px]">
                    <span className="">fiverr</span>
                    <span className="text-green">.</span>

                </div>
                </Link>
                {/* Links  */}
                <div className={`flex gap-8 items-center font-medium ${montserrat.className} `}>
                    <span>fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                   {!currentUser.isSeller && (<span>Become a Seller</span>) }
                    {!currentUser ? (<Button label="Join" hasScrolled={active} />) : (
                         <div className="flex flex-row gap-2 items-center relative" onClick={() => setOpen(!open)}>
                           <Avatar />
                         <span className="cursor-pointer">{currentUser?.username}</span>
                         {/* option  */}

                         {open && (

                         <div className="absolute top-[50px] right-0 p-[20px] bg-white border-1 border-solid border-gray-500 rounded-md flex flex-col gap-5 text-neutral-700 w-52 font-light">
                            {currentUser?.isSeller && (
                                <>
                                    <Link href="/gigs">Gigs</Link>
                                    <Link href="/addgigs">Add New Gig</Link>

                                </>
                            )}
                            <Link href="/orders">Order</Link>
                            <Link href="/messages">Message</Link>
                            <span onClick={() => {}}>Log Out</span>

                         </div>
                         )}
                         
                     </div>

                    )}

                    
                       

                  
                    

                </div>
                
            </div>
            {active && (
                <>
            <hr className="w-full border border-neutral-700" />
               
                {/* menu  */}
                <div className={`w-navWidth  flex justify-between font-light  ${montserrat.className}`}>
                    <Link href="/">
                        Graphics & Design
                    </Link>
                    <Link href="/">
                        Video & Animation
                    </Link>
                    <Link href="/">
                        Writing & Translation
                    </Link>
                    <Link href="/">
                        Ai Services
                    </Link>
                    <Link href="/">
                        Digital Marketing 
                    </Link>
                    <Link href="/">
                        Digital Marketing
                    </Link>
                    

                    <Link href="/">
                        Music And Audio
                    </Link>
                    <Link href="/">
                        Programming And Tech
                        </Link>
                    <Link href="/">
                        Business
                        </Link>
                    <Link href="/">
                        Lifestyle
                        </Link>
                    

                </div>
                </>
            )}
        </div>
    )

}

export default Navbar; 