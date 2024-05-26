import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//Component
import Navbar from '../Component/Navbar';

//Icon slidebar
import { AiOutlineRollback } from "react-icons/ai";
import { IoChevronDown } from "react-icons/io5"
import { FaPause } from "react-icons/fa6";  
import { IoMdVolumeHigh } from "react-icons/io"; 
import { RiSettings3Fill } from "react-icons/ri"; 
import { FaChromecast } from "react-icons/fa"; 
import { MdOutlineFullscreen } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

//Icon steam-chat
import { RiArrowGoForwardFill } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaRegSmile } from "react-icons/fa";
import { LuCircleDotDashed } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";


function page() {
  return (
    <div id='channel-live'>
        <Navbar />
        <div id='con-Slidebar' className='flex justify-between'>
            <div id='Slidebar2' className='h-screen w-64 bg-[#1F1F23] text-[#fff]'>
                <div id='text-sdb' className='p-3 pb-2 flex justify-center items-center'>
                    <div className='flex gap-1 ml-3'>
                        <p className='text-sm font-semibold'>RECOMMENDED</p>
                        <p className='text-sm font-semibold'>CHANNELS</p>
                    </div>
                    <div id='icon-sdb' className='ml-2 mt-1 cursor-pointer bg-[#transparent] hover:bg-[#333] p-1.5 rounded-md'>
                        <AiOutlineRollback className='text-2xl cursor-pointer'/>
                    </div>
                </div>
                {/* info 1 */}
                <Link href="channellive" id='infochanel-sdb' className='pl-3 flex justify-center items-center bg-[transparent] hover:bg-[#26262C] cursor-pointer p-1'>
                    <div id='img-info'>
                        <Image src="/sdb/1.png" alt='' width={38} height={38} className='object-cover rounded-full'/>
                    </div>
                    <div id='text-info' className='w-full'>
                        <div id='text-top' className='w-full flex justify-between items-center'>
                            <div className='ml-2'><p className='font-medium text-sm'>viperdemon</p></div>
                            <div className='flex justify-center items-center'>
                                <div className='w-2 h-2 bg-[red] rounded-full mr-1'></div>
                                <p className='text-sm text-[#dedee3] font-semobold mr-2'>1.4K</p>
                            </div>
                        </div>
                        <div id='text-bottom'>
                            <div className='ml-2'> 
                                <p className='text-[#adadb8] text-sm font-medium'>VALORANT</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* info 1 */}

                {/* info 2 */}
                <Link href="/channellive" id='infochanel-sdb' className='pl-3 flex justify-center items-center bg-[transparent] hover:bg-[#26262C] cursor-pointer p-1'>
                    <div id='img-info'>
                        <Image src="/sdb/2.jpg" alt='' width={38} height={38} className='object-cover rounded-full'/>
                    </div>
                    <div id='text-info' className='w-full'>
                        <div id='text-top' className='w-full flex justify-between items-center'>
                            <div className='ml-2'><p className='font-medium text-sm'>Gssspotted</p></div>
                            <div className='flex justify-center items-center'>
                                <div className='w-2 h-2 bg-[red] rounded-full mr-1'></div>
                                <p className='text-sm text-[#dedee3] font-semobold mr-2'>4.2K</p>
                            </div>
                        </div>
                        <div id='text-bottom'>
                            <div className='ml-2'> 
                                <p className='text-[#adadb8] text-sm font-medium'>V Rising</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* info 2 */}

                {/* info 3 */}
                <Link href="/channellive" id='infochanel-sdb' className='pl-3 flex justify-center items-center bg-[transparent] hover:bg-[#26262C] cursor-pointer p-1'>
                    <div id='img-info'>
                        <Image src="/sdb/3.png" alt='' width={38} height={38} className='object-cover rounded-full'/>
                    </div>
                    <div id='text-info' className='w-full'>
                        <div id='text-top' className='w-full flex justify-between items-center'>
                            <div className='ml-2'><p className='font-medium text-sm'>BOOMBURAPA</p></div>
                            <div className='flex justify-center items-center'>
                                <div className='w-2 h-2 bg-[red] rounded-full mr-1'></div>
                                <p className='text-sm text-[#dedee3] font-semobold mr-2'>545</p>
                            </div>
                        </div>
                        <div id='text-bottom'>
                            <div className='ml-2'> 
                                <p className='text-[#adadb8] text-sm font-medium'>V Rising</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* info 3 */}

                {/* info 4 */}
                <Link href="/channellive" id='infochanel-sdb' className='pl-3 flex justify-center items-center bg-[transparent] hover:bg-[#26262C] cursor-pointer p-1'>
                    <div id='img-info'>
                        <Image src="/sdb/4.png" alt='' width={38} height={38} className='object-cover rounded-full'/>
                    </div>
                    <div id='text-info' className='w-full'>
                        <div id='text-top' className='w-full flex justify-between items-center'>
                            <div className='ml-2'><p className='font-medium text-sm'>HuaHed</p></div>
                            <div className='flex justify-center items-center'>
                                <div className='w-2 h-2 bg-[red] rounded-full mr-1'></div>
                                <p className='text-sm text-[#dedee3] font-semobold mr-2'>2.6K</p>
                            </div>
                        </div>
                        <div id='text-bottom'>
                            <div className='ml-2'> 
                                <p className='text-[#adadb8] text-sm font-medium'>Grand Theft Auto V</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* info 4 */}

                {/* info 5 */}
                <Link href="/channellive" id='infochanel-sdb' className='pl-3 flex justify-center items-center bg-[transparent] hover:bg-[#26262C] cursor-pointer p-1'>
                    <div id='img-info'>
                        <Image src="/sdb/5.png" alt='' width={38} height={38} className='object-cover rounded-full'/>
                    </div>
                    <div id='text-info' className='w-full'>
                        <div id='text-top' className='w-full flex justify-between items-center'>
                            <div className='ml-2'><p className='font-medium text-sm'>Jingggxd</p></div>
                            <div className='flex justify-center items-center'>
                                <div className='w-2 h-2 bg-[red] rounded-full mr-1'></div>
                                <p className='text-sm text-[#dedee3] font-semobold mr-2'>6.3K</p>
                            </div>
                        </div>
                        <div id='text-bottom'>
                            <div className='ml-2'> 
                                <p className='text-[#adadb8] text-sm font-medium'>VALORANT</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* info 5 */}

                {/* info 6 */}
                <Link href="/channellive" id='infochanel-sdb' className='pl-3 flex justify-center items-center bg-[transparent] hover:bg-[#26262C] cursor-pointer p-1'>
                    <div id='img-info'>
                        <Image src="/sdb/6.png" alt='' width={38} height={38} className='object-cover rounded-full'/>
                    </div>
                    <div id='text-info' className='w-full'>
                        <div id='text-top' className='w-full flex justify-between items-center'>
                            <div className='ml-2'><p className='font-medium text-sm'>FifaTargrean</p></div>
                            <div className='flex justify-center items-center'>
                                <div className='w-2 h-2 bg-[red] rounded-full mr-1'></div>
                                <p className='text-sm text-[#dedee3] font-semobold mr-2'>1.3K</p>
                            </div>
                        </div>
                        <div id='text-bottom'>
                            <div className='ml-2'> 
                                <p className='text-[#adadb8] text-sm font-medium'>Kingdom Come</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* info 6 */}

                {/* info 7 */}
                <Link href="/channellive" id='infochanel-sdb' className='pl-3 flex justify-center items-center bg-[transparent] hover:bg-[#26262C] cursor-pointer p-1'>
                    <div id='img-info'>
                        <Image src="/sdb/7.png" alt='' width={38} height={38} className='object-cover rounded-full'/>
                    </div>
                    <div id='text-info' className='w-full'>
                        <div id='text-top' className='w-full flex justify-between items-center'>
                            <div className='ml-2'><p className='font-medium text-sm'>RebirthzTV</p></div>
                            <div className='flex justify-center items-center'>
                                <div className='w-2 h-2 bg-[red] rounded-full mr-1'></div>
                                <p className='text-sm text-[#dedee3] font-semobold mr-2'>2.6K</p>
                            </div>
                        </div>
                        <div id='text-bottom'>
                            <div className='ml-2'> 
                                <p className='text-[#adadb8] text-sm font-medium'>Grand Theft Auto V</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* info 7 */}

                {/* info 8 */}
                <Link href="/channellive" id='infochanel-sdb' className='pl-3 flex justify-center items-center bg-[transparent] hover:bg-[#26262C] cursor-pointer p-1'>
                    <div id='img-info'>
                        <Image src="/sdb/8.png" alt='' width={38} height={38} className='object-cover rounded-full'/>
                    </div>
                    <div id='text-info' className='w-full'>
                        <div id='text-top' className='w-full flex justify-between items-center'>
                            <div className='ml-2'><p className='font-medium text-sm'>VALORANT_EMEA</p></div>
                            <div className='flex justify-center items-center'>
                                <div className='w-2 h-2 bg-[red] rounded-full mr-1'></div>
                                <p className='text-sm text-[#dedee3] font-semobold mr-2'>7.7K</p>
                            </div>
                        </div>
                        <div id='text-bottom'>
                            <div className='ml-2'> 
                                <p className='text-[#adadb8] text-sm font-medium'>VALORANT</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* info 8 */}

                {/* info 9 */}
                <Link href="/channellive" id='infochanel-sdb' className='pl-3 flex justify-center items-center bg-[transparent] hover:bg-[#26262C] cursor-pointer p-1'>
                    <div id='img-info'>
                        <Image src="/sdb/9.png" alt='' width={38} height={38} className='object-cover rounded-full'/>
                    </div>
                    <div id='text-info' className='w-full'>
                        <div id='text-top' className='w-full flex justify-between items-center'>
                            <div className='ml-2'><p className='font-medium text-sm'>vanotica_</p></div>
                            <div className='flex justify-center items-center'>
                                <div className='w-2 h-2 bg-[red] rounded-full mr-1'></div>
                                <p className='text-sm text-[#dedee3] font-semobold mr-2'>1.9K</p>
                            </div>
                        </div>
                        <div id='text-bottom'>
                            <div className='ml-2'> 
                                <p className='text-[#adadb8] text-sm font-medium'>Grand Theft Auto V</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* info 9 */}
            </div>
            <div id='content-video' className='p-4 bg-[#0E0E10]'>
                <p className='text-[#fff]'>content-video</p>
            </div>
            <div id='content-chat' className='h-full w-80 bg-[#18181B] border-l border-solid border-[#575757]'>
                <div id='steamer-chat' className='flex justify-between items-center border-b border-solid border-[#575757] p-4'>
                    <div className='cursor-pointer bg-[#transparent] hover:bg-[#333] p-1.5 rounded-md'>
                        <RiArrowGoForwardFill className='text-[#fff] text-xl'/>
                    </div>
                    <div>
                        <p className='text-[#fff] text-sm font-medium'>STEAMER CHAT</p>
                    </div>
                    <div className='cursor-pointer bg-[#transparent] hover:bg-[#333] p-1.5 rounded-md'>
                        <MdPeopleAlt className='text-[#fff] text-xl'/>
                    </div>
                </div>
                <div id='top-git-member' className='flex justify-between items-center mb-2 border-b border-solid border-[#575757] px-4'>
                    <div className='cursor-pointer bg-[#transparent] hover:bg-[#333] p-1.5 rounded-md'>
                        <RiArrowLeftSLine className='text-[#fff] text-2xl'/>
                    </div>
                    <div id='git-center' className='cursor-pointer bg-[#transparent] hover:bg-[#333] p-1.5 px-5 py-2'>
                        <div id='git-1' className='flex'>
                            <div className='mr-2'>
                                <Image src="/channellive/steamchat/git1.png" alt='' width={32} height={32} />
                            </div>
                            <div id='text-git-1' className='mr-4'>
                                <p className='text-[#fff] text-sm font-bold'>Dorail</p>
                                <div className='flex justify-center items-center'>
                                    <img src="https://static-cdn.jtvnw.net/badges/v1/052a5d41-f1cc-455c-bc7b-fe841ffaf17f/2" alt="" className='object-contain w-3.5 h-3.5 mr-1' />
                                    <p className='text-[#c5c5c5] text-sm font-semibold'>25</p>
                                </div>
                            </div>
                            <div id='git-2-3'>
                                <div id='git-2' className='flex justify-center items-center mr-4'>
                                    <div className='mr-2 mb-2'>
                                        <Image src="/channellive/steamchat/git2.png" alt='' width={19} height={19} />
                                    </div>
                                    <div>
                                        <p className='text-[#fff] text-sm font-bold'>Dorail</p>
                                    </div>
                                </div>
                                <div id='git-3' className='flex justify-center items-center mr-4'>
                                    <div className='mr-2'>
                                        <Image src="/channellive/steamchat/git3.png" alt='' width={19} height={19} />
                                    </div>
                                    <div>
                                        <p className='text-[#fff] text-sm font-bold'>Dorail</p>
                                    </div>
                                </div>
                            </div>
                            <div id='git-green'>
                                <div id='git-green-1' className='flex justify-center items-center'>
                                    <div className='mr-2 mb-2 mt-2'>
                                       <img src="https://static-cdn.jtvnw.net/badges/v1/ee113e59-c839-4472-969a-1e16d20f3962/2" alt="" className='object-contain w-3.5 h-3.5'/>
                                    </div>
                                    <div>
                                        <p className='text-[#c5c5c5] text-sm font-semibold'>5</p>
                                    </div>
                                </div>
                                <div id='git-green-2' className='flex justify-center items-center'>
                                    <div className='mr-2'>
                                       <img src="https://static-cdn.jtvnw.net/badges/v1/ee113e59-c839-4472-969a-1e16d20f3962/2" alt="" className='object-contain w-3.5 h-3.5'/>
                                    </div>
                                    <div>
                                        <p className='text-[#c5c5c5] text-sm font-semibold'>5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer bg-[#transparent] hover:bg-[#333] p-1.5 rounded-md'>
                        <RiArrowRightSLine className='text-[#fff] text-2xl'/>
                    </div>
                </div>
                <div id='chat-room'>
                    <div className='px-4 py-1'>
                        <div>
                            <p className='text-[#c7c7c7] text-sm'>Welcome to the chat room!</p>
                        </div>
                        {/* Chattext-1 */}
                        <div className='flex items-center mb-3 mt-3'>
                            <div className='mr-1'>
                                <p className='text-[#83da6d] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-1 */}

                        {/* Chattext-2 */}
                        <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#61beaf] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-2 */}

                         {/* Chattext-3 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#c059aa] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-3 */}

                         {/* Chattext-4 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#5c70c7] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-4 */}

                         {/* Chattext-5 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#a0cf61] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-5 */}

                         {/* Chattext-6 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#d2d459] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-6 */}

                         {/* Chattext-7 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#c153c5] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-7 */}

                         {/* Chattext-8 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#be6161] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-8 */}

                         {/* Chattext-9 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#61cec8] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-9 */}

                         {/* Chattext-10 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#cf6592] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-10 */}
                        {/* Chattext-1 */}
                        <div className='flex items-center mb-3 mt-3'>
                            <div className='mr-1'>
                                <p className='text-[#83da6d] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-1 */}

                        {/* Chattext-2 */}
                        <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#61beaf] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-2 */}

                         {/* Chattext-3 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#c059aa] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-3 */}

                         {/* Chattext-4 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#5c70c7] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-4 */}

                         {/* Chattext-5 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#a0cf61] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-5 */}

                         {/* Chattext-6 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#d2d459] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-6 */}

                         {/* Chattext-7 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#c153c5] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-7 */}

                         {/* Chattext-8 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#be6161] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-8 */}

                         {/* Chattext-9 */}
                         <div className='flex items-center mb-3'>
                            <div className='mr-1'>
                                <p className='text-[#61cec8] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-9 */}

                        {/* Chattext-9 */}
                        <div className='flex items-center mb-1'>
                            <div className='mr-1'>
                                <p className='text-[#ce7761] text-sm font-bold'>Dorail<span className='text-xs font-semibold text-[#fff]'>:</span></p>
                            </div>
                            <p className='text-[#fff] text-sm'>Hi Twitch-Clone</p>
                        </div>
                        {/* Chattext-9 */}
                    </div>
                    <div id='send-message' className='px-4 pb-4'>
                        <div className='relative'>
                            <input type="text" placeholder='Send a message' className='bg-transparent w-full py-2.5 px-2 pr-10 text-[#fff] outline-nonebg-[transparent] outline-none rounded-tl-md rounded-bl-md border border-solid border-[#999] focus:border focus:border-[#AA42FF] placeholder:text-[#999] text-sm'/>
                            <div className='absolute right-2 top-1 cursor-pointer bg-[#transparent] hover:bg-[#333] p-1.5 rounded-md'><FaRegSmile className='text-[#fff] text-xl'/></div>
                        </div>
                        <div id='send-chat' className='flex justify-between items-center mt-2'>
                            <div id='point-send-chat' className='flex justify-center items-center cursor-pointer bg-[#transparent] hover:bg-[#333] p-1.5 rounded-md'>
                                <div className='mr-2'>
                                    <LuCircleDotDashed className='text-[#fff] text-xl'/>
                                </div>
                                <div>
                                    <p className='text-[#c5c5c5] text-sm font-semibold'>0</p>
                                </div>
                            </div>
                            <div id='btn-send-chat' className='flex justify-center items-center'>
                                <div className='cursor-pointer bg-[#transparent] hover:bg-[#333] p-1.5 rounded-md'>
                                    <IoSettings className='text-[#fff] text-xl'/>
                                </div>
                                <div className='ml-2'>
                                    <button className='text-[#fff] font-semibold text-sm bg-[#AA42FF] hover:bg-[#A933FF] py-1.5 px-2 rounded-md'>Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page