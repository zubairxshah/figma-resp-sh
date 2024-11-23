"use client"

import React, { useState } from "react";
import Image from "next/image";

const services = () => {
  const [showAll, setShowAll] = useState(false);

  const serviceItems = [
    {
      title: "Design & Development",
      courses: "50+ Courses Available",
    },
    {
      title: "Marketing",
      courses: "40+ Courses Available",
    },
    {
      title: "Development",
      courses: "30+ Courses Available",
    },
    {
      title: "Communication",
      courses: "50+ Courses Available",
    },
    {
      title: "Digital Marketing",
      courses: "40+ Courses Available",
    },
    {
      title: "Self Development",
      courses: "30+ Courses Available",
    },
    {
      title: "Business",
      courses: "50+ Courses Available",
    },
    {
      title: "Finance",
      courses: "40+ Courses Available",
    },
    {
      title: "Consulting",
      courses: "30+ Courses Available",
    },
  ];

  return (
    <div className="h-auto">
      {/* Header */}
      <div className="px-4 md:px-16 py-8 md:py-16">
        <Image 
          src={"/Content.svg"} 
          alt="next-image" 
          width={768} 
          height={109}
          className="w-full h-auto"
          priority 
        />
      </div>

      {/* Services Section */}
      <div className="h-auto px-4 md:px-6 py-4 md:py-6 space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Show only first 3 items on mobile when showAll is false */}
          {serviceItems.slice(0, showAll ? serviceItems.length : (typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : serviceItems.length)).map((service, index) => (
            <div 
              key={index} 
              className="flex w-full md:w-[410.67px] h-[132px] bg-smokey rounded-md"
            >
              <div className="p-4">
                <Image 
                  src={"/Frame 292.svg"} 
                  alt="next-image" 
                  width={100} 
                  height={100}
                  priority 
                />
              </div>
              <div className="flex flex-col ml-2">
                <p className="font-semibold text-[20px] leading-[30px] mt-4">
                  {service.title}
                </p>
                <p className="font-normal text-[18px] leading-[27px]">
                  {service.courses}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Courses Button */}
      <div className="flex justify-center items-center py-8">
        {/* Show "View More" button only on mobile when there are hidden items */}
        <button 
          className="md:hidden text-sblack py-1 px-2 font-normal text-[16px] w-[155px] h-[48px] rounded-md border-[1px] border-black"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'View More'}
        </button>

        {/* Show "View All Courses" button always on desktop */}
        <button className="hidden md:block text-sblack py-1 px-2 font-normal text-[16px] w-[155px] h-[48px] rounded-md border-[1px] border-black">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default services;
