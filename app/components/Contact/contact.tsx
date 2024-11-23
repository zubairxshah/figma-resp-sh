import React from 'react'
import Image from 'next/image'

const contact = () => {
  return (
    <div className="min-h-[400px] md:h-[684px] p-4 md:p-20" >
      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-0">
        {/* Text Content */}
        <div className="font-semibold text-sblack text-[16px] leading-[27px] text-center md:text-left">
          <h5 className="text-[18px] md:text-[16px] mb-2">Subscribe to our newsletter</h5>
          <p className="font-normal text-sblack text-[14px] md:text-[16px] leading-6">
            Lorem ipsum dollar sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Subscribe Form */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 md:ml-96">
          <input 
            type="email" 
            placeholder="Enter your Email"
            className="text-dgrey py-1 px-2 font-normal text-[16px] w-full md:w-[265px] h-[48px] rounded-md border-[1px] border-black"
          />
          <button className="text-sblack font-normal text-[16px] w-full md:w-[95px] h-[44px] rounded-md border-[1px] border-black">
            Subscribe
          </button>
        </div>
      </div>

      {/* Privacy Policy Text */}
      <div>
        <p className="text-center md:text-left md:ml-[757px] font-normal text-[12px] leading-[18px] mt-4 md:mt-0">
          By subscribing you agree to with our <span className="font-normal underline">Privacy Policy</span>
        </p>

        {/* Links Images */}
        <div className="mt-8 md:mt-16 overflow-x-hidden">
          <div className="flex justify-center">
            <Image 
              src={"/Links1.svg"} 
              alt="next-image" 
              width={1120} 
              height={225}
              className="w-[95%] md:w-auto h-auto"
              priority
            />
          </div>
        </div>

        <div className="mt-8 md:mt-16 overflow-x-hidden">
          <div className="flex justify-center">
            <Image 
              src={"/lastline.svg"} 
              alt="next-image" 
              width={1120} 
              height={225}
              className="w-[95%] md:w-auto h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact
