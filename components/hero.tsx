"use client";

import Image from 'next/image';
import { CustomButton } from '.';

const hero = () => {
  const handleScroll = () => {
    // Your code here
  }
  
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='hero__title capitalize'>find, book or rent a car 
            -- quickly and easily!
            </h1>
            <p className='hero__subtitle'>Streamline your car rental experience 
            with our effortless booking process.
            </p>
            <CustomButton
            title="explore cars"
            containerstyles="bg-primary-blue text-white rounded-full mt-10"
            handleclick={handleScroll} />
        </div>
    </div>
  )
}

export default hero
