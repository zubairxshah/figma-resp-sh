"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Team = () => {
  const [showAll, setShowAll] = useState(false);

  const teamMembers = [
    {
      name: "James Nduku",
      role: "Marketing Director",
      image: "/mkt-dir.svg"
    },
    {
      name: "Joseph Munyambu",
      role: "Nursing Assistant",
      image: "/mkt-dir.svg"
    },
    {
      name: "Joseph Ngumbau",
      role: "Medical Assistant",
      image: "/mkt-dir.svg"
    },
    {
      name: "Eric Kipkemboi",
      role: "Web Designer",
      image: "/mkt-dir.svg"
    },
    {
      name: "Stephen Kerubo",
      role: "President of sales",
      image: "/mkt-dir.svg"
    },
    {
      name: "John Leboo",
      role: "Dog Trainer",
      image: "/mkt-dir.svg"
    }
  ];

  return (
    <div className="bg-smokey px-4 md:px-16 py-8 md:py-16">
      {/* Section Title */}
      <div className="flex justify-center mb-8 md:mb-16">
        <Image 
          src="/Section Title.svg" 
          alt="Section Title" 
          width={768} 
          height={118}
          className="w-[90%] md:w-auto h-auto"
          priority
        />
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {teamMembers
          .slice(0, showAll ? teamMembers.length : (typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : teamMembers.length))
          .map((member, index) => (
            <div 
              key={index} 
              className="box w-full md:w-[394.67px] h-[209px] p-4 bg-white rounded-lg shadow-sm flex flex-col items-center justify-between"
            >
              <div className="flex justify-center items-center">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={80} 
                  height={80}
                  priority
                />
              </div>
              <p className="font-semibold text-[20px] leading-[30px] text-center">
                {member.name}
              </p>
              <p className="font-normal text-[18px] leading-[27px] text-center">
                {member.role}
              </p>
              <div className="mt-4 flex justify-center">
                <Image 
                  src="/Social Icons.svg" 
                  alt="Social Icons" 
                  width={100} 
                  height={24}
                  priority
                />
              </div>
            </div>
          ))}
      </div>

      {/* View More/Less Button (Mobile Only) */}
      <div className="flex justify-center mt-8">
        <button 
          className="md:hidden text-sblack py-2 px-4 font-normal text-[16px] w-[160px] h-[48px] rounded-md border-[1px] border-black"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default Team;
