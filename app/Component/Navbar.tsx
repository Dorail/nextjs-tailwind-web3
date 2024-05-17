import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

//Icon
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

function Navbar() {
  return (
    <div id='Navbar' className='bg-[#18181B] w-full h-full p-1 border-b border-solid border-[#000] sticky top-0'>
        <div className='text-[#fff] flex justify-between items-center'>
            <div id='left' className='flex justify-start items-center w-1/3'>
                <Link href="/" className='logo'>
                    <Image src="/twitchlogo.png" width={54} height={54} />
                </Link>
                <div id='left-logo' className='ml-4'>
                    <Link href="/" className='text-[#fff] hover:text-[#AA42FF] cursor-pointer text-lg font-semibold'>Browse</Link>
                </div>
                <div id='left-icon' className='ml-4 bg-[#transparent] hover:bg-[#333] p-1.5 rounded-md cursor-pointer'>
                    <BsThreeDotsVertical className='text-xl'/>
                </div>
            </div>
            <div id='center' className='w-1/3 flex justify-center items-center'>
                <div id='input-center'>
                    <input type="text" placeholder='Search' className='bg-[transparent] outline-none rounded-tl-md rounded-bl-md border border-solid border-[#999] focus:border-4 focus:border-[#AA42FF] p-1.5 w-96 placeholder:text-[#999] text-sm'/>
                </div>
                <div id='icon-center' className='p-1.5 bg-[#333] hover:bg-[#414141] rounded-tr-md rounded-br-md cursor-pointer'>
                    <LuSearch className='text-[#fff] text-2xl font-bold'/>
                </div>
            </div>
            <div id='right' className='w-1/3 flex justify-end items-center'>
                <div id='crown-icon-right' className='cursor-pointer bg-[#transparent] hover:bg-[#333] p-1.5 rounded-md mx-2'>
                    <CgCrown className='text-lg'/>
                </div>
                <div id='btn-right'>
                    <button className='text-[#fff] text-sm font-semibold bg-[#333] hover:bg-[#4b4b4b] px-3 py-2 rounded-md mr-3'>Log In</button>
                    <button className='text-[#fff] text-sm font-semibold bg-[#AA42FF] hover:bg-[#A933FF] px-3 py-2 rounded-md'>Sign Up</button>
                </div>
                <div id='user-icon-right' className='cursor-pointer bg-[#transparent] hover:bg-[#333] p-1.5 rounded-md mx-2'>
                    <FaUser className='text-lg'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar