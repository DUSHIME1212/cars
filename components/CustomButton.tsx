"use client";
import { CustomButtonProps } from '@/types';
import image from 'next/image';

const CustomButton = ({title,containerstyles,handleclick}:CustomButtonProps ) => {
  return (
    <button
    disabled = {false}
    type='button'
    className={'custom-btn capitalize'}
    onClick={() => {}}
    >
        <span className='flex-1 '>
            
        </span>
    </button>
  )
}

export default CustomButton