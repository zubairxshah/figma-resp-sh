import React from 'react'
import Image from 'next/image'

const heroSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 pt-8 md:pt-56 px-4 md:px-20">
        <Image 
          src={"/Column.svg"} 
          alt="next-image" 
          width={640} 
          height={340}
          className="w-full h-auto"
          priority
        />
      </div>
      <div className="hidden w-full md:w-1/2 justify-center mt-8 md:mt-0">
        <Image 
          src={"/ddsgnr-girl.svg"} 
          alt="next-image" 
          width={640} 
          height={900}
          className="w-[100%] md:w-full h-auto"
          priority
        />
      </div>
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image 
          src={"/girl-mobile.png"} 
          alt="next-image" 
          width={428} 
          height={390}
          className="w-[100%] md:w-full h-auto"
          priority
        />
      </div>
    </div>
  )
}

export default heroSection
