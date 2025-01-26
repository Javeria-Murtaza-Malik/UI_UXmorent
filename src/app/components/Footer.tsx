
import React from 'react';

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 px-5 w-full bg-white py-6">
      <div className="first w-full flex flex-wrap items-start justify-between gap-6">
        {/* Intro Section */}
        <div className="intro flex flex-col gap-2 w-full lg:w-auto">
          <h1 className="text-[#3563e9] text-2xl lg:text-3xl font-bold text-center lg:text-left">MORENT</h1>
          <p className="text-gray-500 text-center lg:text-left w-[280px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

   
        <div className="lists flex flex-wrap gap-6 justify-center lg:justify-between w-full lg:w-auto lg:mr-10">
          <div className="about">
            <ul className="flex flex-col gap-2  text-lg">
           <li> <h1 className="font-bold gap-3">About</h1></li>
              <li className="text-gray-500">How it works</li>
              <li className="text-gray-500">Featured</li>
              <li className="text-gray-500">Partnership</li>
              <li className="text-gray-500">Business Relation</li>
            </ul>
          </div>
          <div className="community">
            <ul className="flex flex-col gap-2 text-lg">
              <li className="font-bold gap-3"><h1>Community</h1></li>
              <li className="text-gray-500">Events</li>
              <li className="text-gray-500">Blog</li>
              <li className="text-gray-500">Podcast</li>
              <li className="text-gray-500">Invite a friend</li>
            </ul>
          </div>
          <div className="socials">
            <ul className="flex flex-col gap-2 text-lg">
              <li className="font-bold gap-3"><h1>Socials</h1></li>
              <li className="text-gray-500">Discord</li>
              <li className="text-gray-500">Instagram</li>
              <li className="text-gray-500">Facebook</li>
              <li className="text-gray-500">Twitter</li>
            </ul>
          </div>
        </div>
      </div>

 
      <div className="line border-t w-full border-[#13131366]"></div>

      <div className="last w-full flex flex-wrap items-center justify-between gap-4">
        <div className="first text-center lg:text-left w-full lg:w-auto">
          <h1 className="font-bold text-sm">©2022 MORENT. All rights reserved</h1>
        </div>
        <div className="second flex flex-wrap justify-center lg:justify-end items-center gap-8 w-full lg:w-auto">
          <h1 className="font-bold text-sm ">Privacy & Policy</h1>
          <h1 className="font-bold text-sm">Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
}
