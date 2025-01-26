import React from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <div className='w-full  bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]'>
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <h1 className='text-[#3563e9] text-4xl font-bold'>MORENT</h1>
       <SearchBar/>
      </div>
      <div className="icons mt-4 md:mt-0">
        <Image src={'/Images/Profile & Notification.png'} alt='' width={236} height={44} />
      </div>
    </div>
  );
}