"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Customer = () => {
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, placeat! Recusandae inventore ducimus ullam, provident dolorum, corporis dolorem tempore nesciunt nemo distinctio eligendi vel dicta placeat modi architecto voluptate voluptatum.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, placeat! Recusandae inventore ducimus ullam, provident dolorum, corporis dolorem tempore nesciunt nemo distinctio eligendi vel dicta placeat modi architecto voluptate voluptatum.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, placeat! Recusandae inventore ducimus ullam, provident dolorum, corporis dolorem tempore nesciunt nemo distinctio eligendi vel dicta placeat modi architecto voluptate voluptatum.",
    },
  ];

  return (
    <div className="min-h-screen md:h-[830.89px] bg-white px-4 md:px-0">
      {/* Section Title */}
      <div className="p-4 md:p-20 flex justify-center">
        <Image 
          src="/Section Title-2.svg" 
          alt="Section Title" 
          width={560} 
          height={190}
          className="w-[90%] md:w-auto h-auto"
          priority
        />
      </div>

      {/* Testimonial Boxes */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4 md:px-16">
        {testimonials
          .slice(0, showAll ? testimonials.length : (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : testimonials.length))
          .map((testimonial) => (
            <div 
              key={testimonial.id}
              className="h-auto md:h-[321.89px] w-full md:w-[362.67px] border-[1px] border-black flex flex-col justify-between p-4 mb-4 md:mb-0"
            >
              <div>
                <Image 
                  src="/Stars.svg" 
                  alt="Stars" 
                  width={116} 
                  height={18.89}
                  className="w-[116px] h-auto"
                  priority
                />
              </div>
              <p className="text-sm text-justify my-4 md:my-0">
                {testimonial.text}
              </p>
              <div className="flex justify-center mt-4 md:mt-0">
                <Image 
                  src="/james.svg" 
                  alt="James" 
                  width={254} 
                  height={56}
                  className="w-[80%] md:w-[254px] h-auto"
                  priority
                />
              </div>
            </div>
          ))}
      </div>

      {/* View More/Less Button (Mobile Only) */}
      <div className="flex justify-center mt-8 mb-8 md:hidden">
        <button 
          className="text-sblack py-2 px-4 font-normal text-[16px] w-[160px] h-[48px] rounded-md border-[1px] border-black"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'View More Reviews'}
        </button>
      </div>
    </div>
  );
};

export default Customer;
