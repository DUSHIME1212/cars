"use client";

import Image from 'next/image';
import { CustomButton } from '.';
import { CustomButtonProps } from "@types";
import Image from "next/image";
import Image from 'next/image';

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

export default heroexport const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain" />
      </div>
    )}
  </button>
);

