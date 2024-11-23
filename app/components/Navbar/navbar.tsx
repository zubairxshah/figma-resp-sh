"use client"

import React, { useState } from 'react'
import Link from "next/link";
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-smokey h-[72px] text-sblack flex items-center justify-between px-4 border-b-[1px] border-sblack shadow-inner mt-4">
      {/* Mobile View */}
      <div className="w-full md:hidden flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={"/Frame 1.svg"} alt="next-image" width={32.58} height={30.38}/>
          <h1 className="text-[20px] font-bold">Ddsgnr</h1>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2"
        >
          <div className="w-6 h-0.5 bg-sblack mb-1"></div>
          <div className="w-6 h-0.5 bg-sblack mb-1"></div>
          <div className="w-6 h-0.5 bg-sblack"></div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[76px] left-0 right-0 bg-smokey p-4 shadow-md">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li><Link href="home" className="block">Home</Link></li>
                <li><Link href="courses">Courses</Link></li>
                <li><Link href="services">Services</Link></li>
                <li><Link href="achievement">Achievement</Link></li>
                <li><Link href="about">About us</Link></li>
                <li><Link href="testimonials">Testimonials</Link></li>
                <li className="pt-4 flex flex-col gap-2">
                  <button className="text-sblack py-2 px-4 font-normal text-[16px] w-full rounded-md border-[1px] border-black">Login</button>
                  <button className="text-swhite py-2 px-4 font-normal text-[16px] w-full rounded-md border-[1px] border-black bg-sblack">Sign Up</button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex box1 mx-auto items-center justify-between w-[1152px] h-[44px]">
        <h1 className="text-[25.07px] leading-[30.34px] font-bold w-[130.6px] h-[29.38px]">Ddsgnr</h1>
        <div className="absolute left-0"> 
          <Image src={"/Frame 1.svg"} alt="next-image" width={32.58} height={30.38}/>
        </div>

        <div className="box2 ml-10 h-[44px] w-[850px] bg-swhite">
          <nav>
            <ul className="flex space-x-12 items-center justify-between p-[8px] text-sblack font-normal text-[16px] leading-[24px] h-[44px] w-[687px]">
                <li><Link href="home" className="underline">Home</Link></li>
                <li><Link href="courses" >Courses</Link></li>
                <li><Link href="services">Services</Link></li>
                <li><Link href="achievement">Achievement</Link></li>
                <li><Link href="about">About us</Link></li>
                <li><Link href="testimonials">Testimonials</Link></li>
            </ul>
          </nav>
        </div>
        <div className="box2 flex space-x-2 h-[44px] w-[191px] gap-5">
          <button className="text-sblack py-1 px-2 font-normal text-[16px] w-[80px] h-[44px] rounded-md border-[1px] border-black p-4">Login</button>
          <button className="text-swhite py-1 px-2 font-normal text-[16px] w-[95px] h-[44px] rounded-md border-[1px] border-black p-4 bg-sblack">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header
