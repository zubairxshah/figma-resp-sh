import React from 'react'
import Image from 'next/image'

const footer = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[228px] bg-smokey border-t-[1px] border-sblack px-4 md:px-0 py-8 md:py-0">
      <h5 className="font-bold text-sblack text-left md:text-left text-[20px] md:text-[24px] leading-[28px] md:leading-[33.6px] w-full md:w-[340px] md:h-[68px] md:py-20">
        Trusted by 2000+ companies worldwide
      </h5>
      <div className="flex justify-center md:justify-start mt-8 md:mt-0 md:ml-20">
        <Image 
          src={"/Logos.svg"} 
          alt="next-image" 
          width={880} 
          height={56}
          className="w-[90%] md:w-auto h-auto"
          priority
        />
      </div>
    </div>
  )
}

export default footer
