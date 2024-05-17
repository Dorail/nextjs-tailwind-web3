import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

//icon
import { AiOutlineRollback } from "react-icons/ai";
import { IoChevronDown } from "react-icons/io5"
import { FaPause } from "react-icons/fa6";  
import { IoMdVolumeHigh } from "react-icons/io"; 
import { RiSettings3Fill } from "react-icons/ri"; 
import { FaChromecast } from "react-icons/fa"; 
import { MdOutlineFullscreen } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6"; 

function Main() {
  return (
    <div id='Main' className='flex h-full w-full'>
        <div id='Slidebar' className='h-screen w-64 bg-[#1F1F23] text-[#fff]'>
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
                    <Image src="/sdb/1.png" width={38} height={38} className='object-cover rounded-full'/>
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
                    <Image src="/sdb/2.jpg" width={38} height={38} className='object-cover rounded-full'/>
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
                    <Image src="/sdb/3.png" width={38} height={38} className='object-cover rounded-full'/>
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
                    <Image src="/sdb/4.png" width={38} height={38} className='object-cover rounded-full'/>
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
                    <Image src="/sdb/5.png" width={38} height={38} className='object-cover rounded-full'/>
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
                    <Image src="/sdb/6.png" width={38} height={38} className='object-cover rounded-full'/>
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
                    <Image src="/sdb/7.png" width={38} height={38} className='object-cover rounded-full'/>
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
                    <Image src="/sdb/8.png" width={38} height={38} className='object-cover rounded-full'/>
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
                    <Image src="/sdb/9.png" width={38} height={38} className='object-cover rounded-full'/>
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
        <div id='Content' className='p-4 bg-[#0E0E10]'>
            <div id='content-video-slide' className='relative'>
                <div id='iconLeft' className='absolute left-5 top-36 text-xl cursor-pointer bg-[#transparent] hover:bg-[#333] p-2.5 rounded-md'>
                    <FaChevronLeft className='text-[#fff]'/>
                </div>
                <div id='iconRight' className='absolute right-5 top-36 text-xl cursor-pointer bg-[#transparent] hover:bg-[#333] p-2.5 rounded-md'>
                    <FaChevronRight className='text-[#fff]'/>
                </div>
                <div id='con-video' className='container mx-auto my-0 mb-4'>
                    <div id='info-video' className='hidden 2xl:flex justify-center'>
                        <div className='flex justify-center items-center relative'>
                            <Image src="/content/videoslick/1.jpg" width={550} height={550} className='object-cover z-50'/>
                            <div id='iconVideo' className='absolute top-1 left-2'>
                                <button className='text-xs text-[#fff] bg-[red] font-bold py-0.5 px-1 rounded'>LIVE</button>
                            </div>
                            <div id='iconVideo' className='absolute bottom-1 left-2'>
                                <FaPause className='text-[#fff] text-xl cursor-pointer'/>
                            </div>
                            <div id='iconVideo' className='absolute bottom-1 left-10'>
                                <IoMdVolumeHigh className='text-[#fff] text-xl cursor-pointer'/>
                            </div>
                            <div id='iconVideo' className='absolute bottom-0.5 right-2'>
                                <MdOutlineFullscreen className='text-[#fff] text-2xl cursor-pointer'/>
                            </div>
                            <div id='iconVideo' className='absolute bottom-1 right-10'>
                                <FaChromecast className='text-[#fff] text-lg cursor-pointer'/>
                            </div>
                            <div id='iconSetting' className='absolute bottom-1 right-16'>
                                <RiSettings3Fill className='text-[#fff] text-lg cursor-pointer'/>
                            </div>
                            <div id='img11' className='absolute -left-40 z-30 cursor-pointer hover:scale-105 bg-[#000]'>
                                <div className='relative'>
                                    <Image src="/content/videoslick/left1.jpg" width={440} height={440} className='object-cover'/>
                                </div>
                                <div id='overlay' className='absolute bg-[red] left-0 top-0 w-full h-full'>
                                </div>
                            </div>
                            <div id='img22' className='absolute -left-80 z-10 cursor-pointer hover:scale-105'>
                                <div className='relative'>
                                    <Image src="/content/videoslick/left2.jpg" width={350} height={350} className='object-cover'/>
                                </div>
                                <div id='overlay' className='absolute bg-[red] left-0 top-0 w-full h-full'>
                                </div>
                            </div>
                            <div id='img11' className='absolute -right-96 z-30 cursor-pointer hover:scale-105'>
                                <div className='relative'>
                                    <Image src="/content/videoslick/left1.jpg" width={440} height={440} className='object-cover'/>
                                </div>
                                <div id='overlay' className='absolute bg-[red] left-0 top-0 w-full h-full'>
                                </div>
                            </div>
                            <div id='img22right' className='absolute -right-96 z-10 cursor-pointer hover:scale-105'>
                                <div className='relative'>
                                    <Image src="/content/videoslick/right2.jpg" width={350} height={350} className='object-cover'/>
                                </div>
                                <div id='overlay' className='absolute bg-[red] left-0 top-0 w-full h-full'>
                                </div>
                            </div>
                        </div>
                        <div id='con-info-video' className='bg-[#18181B] p-4 w-52 z-50'>
                        <div className='flex'>
                            <Image src="/content/videoslick/profile1.png" width={48} height={48} className='object-contain rounded-full'/>
                            <div className='ml-4 mt-1'>
                                <a href="#" className='text-[#AA42FF] hover:underline text-sm font-semibold'>BurkeBlack</a><br />
                                <a href="#" className='text-[#AA42FF] hover:underline text-sm font-semibold'>Homeworld 3</a>
                                <p className='text-[#fff] text-xs font-medium pt-1'>3.6K viewers</p>
                            </div>
                        </div>
                        <div id='btn-info-video' className='my-1.5 mb-4'>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>NoPolitics</button>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Pirate</button>
                        </div>
                        <div>
                            <p className='text-[#fff] text-xs font-medium my-1'>Check out this stream from</p>
                            <p className='text-[#fff] text-xs font-medium'>burkeblack!</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div id='section-content-live-channel' className='mb-2'>
                <p className='text-lg font-semibold text-[#fff]'><a href="#" className='text-[#AA42FF] text-lg font-semibold hover:underline'>Live channels</a> we think you'll like</p>
            </div>
            <div id='content-live-channel' className='grid grid-cols-5 gap-x-2'>
                {/* info-live 1 */}
                <div id='con-info-live'>
                    <div id='info-live-video' className='relative'>     
                        <div>
                            <Image id='hoverImg' src="/content/livechannel/1.jpg" width={360} height={360} className='object-cover cursor-pointer'/>
                        </div>
                        <div className='absolute top-1 left-2'>
                            <button className='text-xs text-[#fff] bg-[red] font-bold py-0.5 px-1 rounded'>LIVE</button>
                        </div>
                        <div className='absolute bottom-2 left-2'>
                            <p id='text-viewer' className='text-[#fff] w-fit text-xs py-0.5 px-1'>55.7K viewers</p>
                        </div>
                    </div>
                    <div id='info-live-desc' className='flex gap-2 my-2'>
                        <div>
                            <Image src="/content/liveprofile/1.png" width={38} height={38} className='object-cover rounded-full cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-1'>
                            <p className='text-sm font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer text-[#fff]'>FNC vs TL | DAY 10 | MSI 2024</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 cursor-pointer'>Riot Games</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer'>League of Legends</p>
                            <div id='info-live-btn'>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>English</button>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Esports</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* info-live 1 */}

                {/* info-live 2 */}
                <div id='con-info-live'>
                    <div id='info-live-video' className='relative'>     
                        <div>
                            <Image id='hoverImg' src="/content/livechannel/1.jpg" width={360} height={360} className='object-cover cursor-pointer'/>
                        </div>
                        <div className='absolute top-1 left-2'>
                            <button className='text-xs text-[#fff] bg-[red] font-bold py-0.5 px-1 rounded'>LIVE</button>
                        </div>
                        <div className='absolute bottom-2 left-2'>
                            <p id='text-viewer' className='text-[#fff] w-fit text-xs py-0.5 px-1'>55.7K viewers</p>
                        </div>
                    </div>
                    <div id='info-live-desc' className='flex gap-2 my-2'>
                        <div>
                            <Image src="/content/liveprofile/1.png" width={38} height={38} className='object-cover rounded-full cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-1'>
                            <p className='text-sm font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer text-[#fff]'>FNC vs TL | DAY 10 | MSI 2024</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 cursor-pointer'>Riot Games</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer'>League of Legends</p>
                            <div id='info-live-btn'>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>English</button>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Esports</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* info-live 2 */}

                {/* info-live 3 */}
                <div id='con-info-live'>
                    <div id='info-live-video' className='relative'>     
                        <div>
                            <Image id='hoverImg' src="/content/livechannel/1.jpg" width={360} height={360} className='object-cover cursor-pointer'/>
                        </div>
                        <div className='absolute top-1 left-2'>
                            <button className='text-xs text-[#fff] bg-[red] font-bold py-0.5 px-1 rounded'>LIVE</button>
                        </div>
                        <div className='absolute bottom-2 left-2'>
                            <p id='text-viewer' className='text-[#fff] w-fit text-xs py-0.5 px-1'>55.7K viewers</p>
                        </div>
                    </div>
                    <div id='info-live-desc' className='flex gap-2 my-2'>
                        <div>
                            <Image src="/content/liveprofile/1.png" width={38} height={38} className='object-cover rounded-full cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-1'>
                            <p className='text-sm font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer text-[#fff]'>FNC vs TL | DAY 10 | MSI 2024</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 cursor-pointer'>Riot Games</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer'>League of Legends</p>
                            <div id='info-live-btn'>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>English</button>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Esports</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* info-live 3 */}

                {/* info-live 4 */}
                <div id='con-info-live'>
                    <div id='info-live-video' className='relative'>     
                        <div>
                            <Image id='hoverImg' src="/content/livechannel/1.jpg" width={360} height={360} className='object-cover cursor-pointer'/>
                        </div>
                        <div className='absolute top-1 left-2'>
                            <button className='text-xs text-[#fff] bg-[red] font-bold py-0.5 px-1 rounded'>LIVE</button>
                        </div>
                        <div className='absolute bottom-2 left-2'>
                            <p id='text-viewer' className='text-[#fff] w-fit text-xs py-0.5 px-1'>55.7K viewers</p>
                        </div>
                    </div>
                    <div id='info-live-desc' className='flex gap-2 my-2'>
                        <div>
                            <Image src="/content/liveprofile/1.png" width={38} height={38} className='object-cover rounded-full cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-1'>
                            <p className='text-sm font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer text-[#fff]'>FNC vs TL | DAY 10 | MSI 2024</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 cursor-pointer'>Riot Games</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer'>League of Legends</p>
                            <div id='info-live-btn'>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>English</button>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Esports</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* info-live 4 */}

                {/* info-live 5 */}
                <div id='con-info-live'>
                    <div id='info-live-video' className='relative'>     
                        <div>
                            <Image id='hoverImg' src="/content/livechannel/1.jpg" width={360} height={360} className='object-cover cursor-pointer'/>
                        </div>
                        <div className='absolute top-1 left-2'>
                            <button className='text-xs text-[#fff] bg-[red] font-bold py-0.5 px-1 rounded'>LIVE</button>
                        </div>
                        <div className='absolute bottom-2 left-2'>
                            <p id='text-viewer' className='text-[#fff] w-fit text-xs py-0.5 px-1'>55.7K viewers</p>
                        </div>
                    </div>
                    <div id='info-live-desc' className='flex gap-2 my-2'>
                        <div>
                            <Image src="/content/liveprofile/1.png" width={38} height={38} className='object-cover rounded-full cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-1'>
                            <p className='text-sm font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer text-[#fff]'>FNC vs TL | DAY 10 | MSI 2024</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 cursor-pointer'>Riot Games</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer'>League of Legends</p>
                            <div id='info-live-btn'>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>English</button>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Esports</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* info-live 5 */}
            </div>
            <div id='content-live-channel-showmore' className='my-4 flex justify-center items-center'>
                <div className='text-center mx-auto my-0 flex justify-center items-center relative'>
                    <div id='showMore' className='flex justify-center items-center hover:bg-[#2b2b2b] p-1 px-2.5 rounded cursor-pointer text-[#AA42FF] hover:text-[#EFEFEF]'>
                        <p className='text-sm font-bold'>Show more</p>
                        <IoChevronDown className='text-xl font-bold ml-1'/>
                    </div>
                    <div className='absolute left-32'>
                        <div id='lineShowmore' className='bg-[#2F2F35] h-0.5 w-80'></div>
                    </div>
                    <div className='absolute right-32'>
                        <div id='lineShowmore' className='bg-[#2F2F35] h-0.5 w-80'></div>
                    </div>
                </div>
            </div>
            <div id='section-content-categories-game' className='mb-2'>
                <p className='text-lg font-semibold text-[#fff]'><a href="#" className='text-[#AA42FF] text-lg font-semibold hover:underline'>Categories</a> we think you'll like</p>
            </div>
            <div id='content-categories-game' className='grid grid-cols-10 gap-2'>
                {/* info-categories-game 1 */}
                <div id='info-categories-game'>
                    <div>
                        <Image id='hoverImg' src="/content/categories/1.jpg" width={160} height={160} className='cursor-pointer'/>
                    </div>
                    <div className='ml-0.5'>
                        <div className='mt-2'>
                            <p className='font-bold text-sm hover:text-[#AA42FF] text-[#fff] cursor-pointer'>VALORANT</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#999] cursor-pointer'>96.4K viewers</p>
                        </div>
                        <div id='btn-info-categories-game' className='mt-0.5'>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>FPS</button>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Shooter</button>
                        </div>
                    </div>
                </div>
                {/* info-categories-game 1 */}

                {/* info-categories-game 2 */}
                <div id='info-categories-game'>
                    <div>
                        <Image id='hoverImg' src="/content/categories/2.jpg" width={160} height={160} className='cursor-pointer'/>
                    </div>
                    <div className='ml-0.5'>
                        <div className='mt-2'>
                            <p className='font-bold text-sm hover:text-[#AA42FF] text-[#fff] cursor-pointer'>Just Chatting</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#999] cursor-pointer'>136K viewers</p>
                        </div>
                        <div id='btn-info-categories-game' className='mt-0.5'>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>IRL</button>
                        </div>
                    </div>
                </div>
                {/* info-categories-game 2 */}

                {/* info-categories-game 3 */}
                <div id='info-categories-game'>
                    <div>
                        <Image id='hoverImg' src="/content/categories/3.jpg" width={160} height={160} className='cursor-pointer'/>
                    </div>
                    <div className='ml-0.5'>
                        <div className='mt-2'>
                            <p className='font-bold text-sm hover:text-[#AA42FF] text-[#fff] cursor-pointer'>Grand Theft Auto V</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#999] cursor-pointer'>66.8K viewers</p>
                        </div>
                        <div id='btn-info-categories-game' className='mt-0.5'>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>FPS</button>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Shooter</button>
                        </div>
                    </div>
                </div>
                {/* info-categories-game 3 */}

                {/* info-categories-game 4 */}
                <div id='info-categories-game'>
                    <div>
                        <Image id='hoverImg' src="/content/categories/4.jpg" width={160} height={160} className='cursor-pointer'/>
                    </div>
                    <div className='ml-0.5'>
                        <div className='mt-2'>
                            <p className='font-bold text-sm hover:text-[#AA42FF] text-[#fff] cursor-pointer'>V Rising</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#999] cursor-pointer'>16.7K viewers</p>
                        </div>
                        <div id='btn-info-categories-game' className='mt-0.5'>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>Action</button>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Survival</button>
                        </div>
                    </div>
                </div>
                {/* info-categories-game 4 */}

                {/* info-categories-game 5 */}
                <div id='info-categories-game'>
                    <div>
                        <Image id='hoverImg' src="/content/categories/5.png" width={160} height={160} className='cursor-pointer'/>
                    </div>
                    <div className='ml-0.5'>
                        <div className='mt-2'>
                            <p className='font-bold text-sm hover:text-[#AA42FF] text-[#fff] cursor-pointer'>Dota 2</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#999] cursor-pointer'>86.1K viewers</p>
                        </div>
                        <div id='btn-info-categories-game' className='mt-0.5'>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>Strategy</button>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>MOBA</button>
                        </div>
                    </div>
                </div>
                {/* info-categories-game 5 */}

                {/* info-categories-game 6 */}
                <div id='info-categories-game'>
                    <div>
                        <Image id='hoverImg' src="/content/categories/6.png" width={160} height={160} className='cursor-pointer'/>
                    </div>
                    <div className='ml-0.5'>
                        <div className='mt-2'>
                            <p className='font-bold text-sm hover:text-[#AA42FF] text-[#fff] cursor-pointer'>League of Legends</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#999] cursor-pointer'>397K viewers</p>
                        </div>
                        <div id='btn-info-categories-game' className='mt-0.5'>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>RPG</button>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Strategy</button>
                        </div>
                    </div>
                </div>
                {/* info-categories-game 6 */}

                {/* info-categories-game 7 */}
                <div id='info-categories-game'>
                    <div>
                        <Image id='hoverImg' src="/content/categories/7.jpg" width={160} height={160} className='cursor-pointer'/>
                    </div>
                    <div className='ml-0.5'>
                        <div className='mt-2'>
                            <p className='font-bold text-sm hover:text-[#AA42FF] text-[#fff] cursor-pointer'>Apex Legends</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#999] cursor-pointer'>32.8K viewers</p>
                        </div>
                        <div id='btn-info-categories-game' className='mt-0.5'>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>FPS</button>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Shooter</button>
                        </div>
                    </div>
                </div>
                {/* info-categories-game 7 */}

                {/* info-categories-game 8 */}
                <div id='info-categories-game'>
                    <div>
                        <Image id='hoverImg' src="/content/categories/8.jpg" width={160} height={160} className='cursor-pointer'/>
                    </div>
                    <div className='ml-0.5'>
                        <div className='mt-2'>
                            <p className='font-bold text-sm hover:text-[#AA42FF] text-[#fff] cursor-pointer'>TEKKEN 8</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#999] cursor-pointer'>10.8K viewers</p>
                        </div>
                        <div id='btn-info-categories-game' className='mt-0.5'>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>Fighting</button>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Action</button>
                        </div>
                    </div>
                </div>
                {/* info-categories-game 8 */}

                {/* info-categories-game 9 */}
                <div id='info-categories-game'>
                    <div>
                        <Image id='hoverImg' src="/content/categories/9.png" width={160} height={160} className='cursor-pointer'/>
                    </div>
                    <div className='ml-0.5'>
                        <div className='mt-2'>
                            <p className='font-bold text-sm hover:text-[#AA42FF] text-[#fff] cursor-pointer'>Overwatch 2</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#999] cursor-pointer'>13.1K viewers</p>
                        </div>
                        <div id='btn-info-categories-game' className='mt-0.5'>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>FPS</button>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Shooter</button>
                        </div>
                    </div>
                </div>
                {/* info-categories-game 9 */}

                {/* info-categories-game 10 */}
                <div id='info-categories-game'>
                    <div>
                        <Image id='hoverImg' src="/content/categories/10.jpg" width={160} height={160} className='cursor-pointer'/>
                    </div>
                    <div className='ml-0.5'>
                        <div className='mt-2'>
                            <p className='font-bold text-sm hover:text-[#AA42FF] text-[#fff] cursor-pointer'>Honkai: Star Rail</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#999] cursor-pointer'>17.3K viewers</p>
                        </div>
                        <div id='btn-info-categories-game' className='mt-0.5'>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>RPG</button>
                            <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Strategy</button>
                        </div>
                    </div>
                </div>
                {/* info-categories-game 10 */}
            </div>
            <div className='mt-10'>
                <div id='lineShowmore2' className='bg-[#2F2F35] h-0.5'></div>
            </div>
            <div id='section-content-live-channel' className='mb-2 mt-8'>
                <p className='text-lg font-semibold text-[#fff]'>Recommended <a href="#" className='text-[#AA42FF] text-lg font-semibold hover:underline'>League of Legends</a> channels</p>
            </div>
            <div id='content-live-channel' className='grid grid-cols-5 gap-x-2'>
                {/* info-live 1 */}
                <div id='con-info-live'>
                    <div id='info-live-video' className='relative'>     
                        <div>
                            <Image id='hoverImg' src="/content/livechannel/1.jpg" width={360} height={360} className='object-cover cursor-pointer'/>
                        </div>
                        <div className='absolute top-1 left-2'>
                            <button className='text-xs text-[#fff] bg-[red] font-bold py-0.5 px-1 rounded'>LIVE</button>
                        </div>
                        <div className='absolute bottom-2 left-2'>
                            <p id='text-viewer' className='text-[#fff] w-fit text-xs py-0.5 px-1'>55.7K viewers</p>
                        </div>
                    </div>
                    <div id='info-live-desc' className='flex gap-2 my-2'>
                        <div>
                            <Image src="/content/liveprofile/1.png" width={38} height={38} className='object-cover rounded-full cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-1'>
                            <p className='text-sm font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer text-[#fff]'>FNC vs TL | DAY 10 | MSI 2024</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 cursor-pointer'>Riot Games</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer'>League of Legends</p>
                            <div id='info-live-btn'>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>English</button>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Esports</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* info-live 1 */}

                {/* info-live 2 */}
                <div id='con-info-live'>
                    <div id='info-live-video' className='relative'>     
                        <div>
                            <Image id='hoverImg' src="/content/livechannel/1.jpg" width={360} height={360} className='object-cover cursor-pointer'/>
                        </div>
                        <div className='absolute top-1 left-2'>
                            <button className='text-xs text-[#fff] bg-[red] font-bold py-0.5 px-1 rounded'>LIVE</button>
                        </div>
                        <div className='absolute bottom-2 left-2'>
                            <p id='text-viewer' className='text-[#fff] w-fit text-xs py-0.5 px-1'>55.7K viewers</p>
                        </div>
                    </div>
                    <div id='info-live-desc' className='flex gap-2 my-2'>
                        <div>
                            <Image src="/content/liveprofile/1.png" width={38} height={38} className='object-cover rounded-full cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-1'>
                            <p className='text-sm font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer text-[#fff]'>FNC vs TL | DAY 10 | MSI 2024</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 cursor-pointer'>Riot Games</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer'>League of Legends</p>
                            <div id='info-live-btn'>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>English</button>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Esports</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* info-live 2 */}

                {/* info-live 3 */}
                <div id='con-info-live'>
                    <div id='info-live-video' className='relative'>     
                        <div>
                            <Image id='hoverImg' src="/content/livechannel/1.jpg" width={360} height={360} className='object-cover cursor-pointer'/>
                        </div>
                        <div className='absolute top-1 left-2'>
                            <button className='text-xs text-[#fff] bg-[red] font-bold py-0.5 px-1 rounded'>LIVE</button>
                        </div>
                        <div className='absolute bottom-2 left-2'>
                            <p id='text-viewer' className='text-[#fff] w-fit text-xs py-0.5 px-1'>55.7K viewers</p>
                        </div>
                    </div>
                    <div id='info-live-desc' className='flex gap-2 my-2'>
                        <div>
                            <Image src="/content/liveprofile/1.png" width={38} height={38} className='object-cover rounded-full cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-1'>
                            <p className='text-sm font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer text-[#fff]'>FNC vs TL | DAY 10 | MSI 2024</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 cursor-pointer'>Riot Games</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer'>League of Legends</p>
                            <div id='info-live-btn'>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>English</button>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Esports</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* info-live 3 */}

                {/* info-live 4 */}
                <div id='con-info-live'>
                    <div id='info-live-video' className='relative'>     
                        <div>
                            <Image id='hoverImg' src="/content/livechannel/1.jpg" width={360} height={360} className='object-cover cursor-pointer'/>
                        </div>
                        <div className='absolute top-1 left-2'>
                            <button className='text-xs text-[#fff] bg-[red] font-bold py-0.5 px-1 rounded'>LIVE</button>
                        </div>
                        <div className='absolute bottom-2 left-2'>
                            <p id='text-viewer' className='text-[#fff] w-fit text-xs py-0.5 px-1'>55.7K viewers</p>
                        </div>
                    </div>
                    <div id='info-live-desc' className='flex gap-2 my-2'>
                        <div>
                            <Image src="/content/liveprofile/1.png" width={38} height={38} className='object-cover rounded-full cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-1'>
                            <p className='text-sm font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer text-[#fff]'>FNC vs TL | DAY 10 | MSI 2024</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 cursor-pointer'>Riot Games</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer'>League of Legends</p>
                            <div id='info-live-btn'>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>English</button>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Esports</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* info-live 4 */}

                {/* info-live 5 */}
                <div id='con-info-live'>
                    <div id='info-live-video' className='relative'>     
                        <div>
                            <Image id='hoverImg' src="/content/livechannel/1.jpg" width={360} height={360} className='object-cover cursor-pointer'/>
                        </div>
                        <div className='absolute top-1 left-2'>
                            <button className='text-xs text-[#fff] bg-[red] font-bold py-0.5 px-1 rounded'>LIVE</button>
                        </div>
                        <div className='absolute bottom-2 left-2'>
                            <p id='text-viewer' className='text-[#fff] w-fit text-xs py-0.5 px-1'>55.7K viewers</p>
                        </div>
                    </div>
                    <div id='info-live-desc' className='flex gap-2 my-2'>
                        <div>
                            <Image src="/content/liveprofile/1.png" width={38} height={38} className='object-cover rounded-full cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-1'>
                            <p className='text-sm font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer text-[#fff]'>FNC vs TL | DAY 10 | MSI 2024</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 cursor-pointer'>Riot Games</p>
                            <p className='text-xs text-[#999] font-semibold pb-1 hover:text-[#AA42FF] cursor-pointer'>League of Legends</p>
                            <div id='info-live-btn'>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2 mr-1'>English</button>
                                <button className='text-[#999] hover:bg-[#DDDDE1] hover:text-[#333] text-xs font-semibold bg-[#29292E] rounded-full py-0.5 px-2'>Esports</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* info-live 5 */}
            </div>
            <div id='content-live-channel-showmore' className='my-4 flex justify-center items-center'>
                <div className='text-center mx-auto my-0 flex justify-center items-center relative'>
                    <div id='showMore' className='flex justify-center items-center hover:bg-[#2b2b2b] p-1 px-2.5 rounded cursor-pointer text-[#AA42FF] hover:text-[#EFEFEF]'>
                        <p className='text-sm font-bold'>Show more</p>
                        <IoChevronDown className='text-xl font-bold ml-1'/>
                    </div>
                    <div className='absolute left-32'>
                        <div id='lineShowmore' className='bg-[#2F2F35] h-0.5 w-80'></div>
                    </div>
                    <div className='absolute right-32'>
                        <div id='lineShowmore' className='bg-[#2F2F35] h-0.5 w-80'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main