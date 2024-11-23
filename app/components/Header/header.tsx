import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const header = () => {
  return (
    <header className="hidden md:block bg-smokey h-[54px] text-sblack items-center justify-between px-4 border-4 border-double border-sblack shadow-inner">
      <div className="box mx-auto flex items-center justify-between w-[90%] md:w-[1154px] h-[54px]">
        <h1 className="text-bold text-sumera font-normal text-[14px] leading-3">
          Phone Number: 956 742 455 678 | Email:info@ddsgnr.com
        </h1>
        {/* Right side: Icons */}
        <div className="flex items-center space-x-4 h-[24px] w-[132px]">
          <FaFacebook className="h-6 w-6 text-sblack" />
          <FaInstagram className="h-6 w-6 text-sblack" />
          <FaTwitter className="h-6 w-6 text-sblack" />
          <FaLinkedin className="h-6 w-6 text-sblack" />
        </div>
      </div>
    </header>
  );
};

export default header;
