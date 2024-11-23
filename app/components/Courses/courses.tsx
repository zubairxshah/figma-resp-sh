import React from 'react'
import Image from 'next/image'

const courses = () => {
  return (
    <div className="min-h-screen md:h-[1742px] px-4 md:px-0">
      {/* Course1 Image */}
      <div className="flex justify-center md:justify-start md:ml-64 mt-8 md:mt-0">
        <Image 
          src={"/course1.svg"} 
          alt="next-image" 
          width={768} 
          height={118}
          className="w-[90%] md:w-auto h-auto"
          priority
        />
      </div>

      {/* Categories Image */}
      <div className="flex justify-center md:ml-[470px] mt-8">
        <Image 
          src={"/Categories.svg"} 
          alt="next-image" 
          width={336} 
          height={40}
          className="w-[80%] md:w-auto h-auto"
          priority
        />
      </div>

      {/* First Row Image */}
      <div className="flex justify-center mt-8 overflow-x-hidden">
        <Image 
          src={"/Row.svg"} 
          alt="next-image" 
          width={1312} 
          height={534}
          className="w-[95%] md:w-auto h-auto"
          priority
        />
      </div>

      {/* Second Row Image */}
      <div className="flex justify-center mt-8 overflow-x-hidden">
        <Image 
          src={"/Row -2.svg"} 
          alt="next-image" 
          width={1312} 
          height={534}
          className="w-[95%] md:w-auto h-auto"
          priority
        />
      </div>

      {/* View All Courses Button */}
      <div className="flex justify-center md:justify-start md:ml-[550px] mt-8 md:mt-16 mb-8 md:mb-0">
        <button className="text-sblack py-2 px-4 font-normal text-[16px] w-[160px] h-[49px] rounded-md border-[1px] border-sblack">
          View All Courses
        </button>
      </div>
    </div>
  )
}

export default courses
