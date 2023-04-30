'use client'; 

import { useSearchParams } from 'next/navigation';

import React from 'react'

const Header = () => {
    const searchParams = useSearchParams(); 
    const cat = searchParams.get('cat'); 
  return (
    <div>
    <span className="text-xs uppercase">{`FIVERR > ${cat}`} </span>
    <h1 className="font-semibold text-3xl uppercase">categories</h1>
    

</div>
  )
}

export default Header