import React from 'react'; 
import Image from 'next/image';

type Props = {}

const Avatar = (props: Props) => {
  return (
    <div className="relative h-9 w-9 rounded-full overflow-hidden cursor-pointer">

                            <Image 
                                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="NavImage"
                                fill
                            />
                            </div>
  )
}

export default Avatar