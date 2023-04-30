'use client'; 

import React from 'react'; 
import Card from '../Card';
import { cards } from '@/data';




const Slider = () => {
  return (
    // slider 
    <div className="flex justify-center items-center overflow-hidden">
      {/* container  */}
      <div className="flex flex-row gap-4  w-navWidth justify-center items-center overflow-auto ">
        {cards.map((card: Record<string, any>, index: number) => (

        <Card key={card.id} item={card}  />
        ))}

      </div>
    </div>
  )
}

export default Slider