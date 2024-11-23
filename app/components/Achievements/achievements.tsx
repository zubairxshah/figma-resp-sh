import React from 'react';

const Achievements = () => {
  return (
    <div className="min-h-screen py-8 md:py-0 flex flex-col justify-center items-center space-y-6 px-4 md:px-0">
      {/* Heading */}
      <h5 className="font-bold text-[32px] md:text-[48px] leading-[38px] md:leading-[57.6px] text-center">
        Our Achievements
      </h5>

      {/* Paragraph Box */}
      <div className="w-full md:w-[80%] max-w-[1152px] p-4">
        <p className="font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          suscipit veniam magni error quas, itaque distinctio sunt. Nulla
          facilis magnam adipisci, officia eaque pariatur sunt repudiandae
          ullam. Totam, quod et.
        </p>
      </div>

      {/* Rating Boxes */}
      <div className="grid grid-cols-2 md:flex md:justify-center md:items-center gap-4 md:space-x-6 w-full px-4 md:px-0">
        {/* Box 1 */}
        <div className="flex flex-col w-full md:w-[296px] h-24 p-4 bg-smokey/20 rounded-lg">
          <h3 className="font-bold text-[28px] md:text-[40px] leading-[24px] md:leading-[27px] text-center">
            +200
          </h3>
          <p className="font-normal text-[16px] md:text-[18px] leading-[36px] md:leading-[48px] text-center">
            Courses
          </p>
        </div>
        
        {/* Box 2 */}
        <div className="flex flex-col w-full md:w-[296px] h-24 p-4 bg-smokey/20 rounded-lg">
          <h3 className="font-bold text-[28px] md:text-[40px] leading-[24px] md:leading-[27px] text-center">
            50K
          </h3>
          <p className="font-normal text-[16px] md:text-[18px] leading-[36px] md:leading-[48px] text-center">
            Members
          </p>
        </div>
        
        {/* Box 3 */}
        <div className="flex flex-col w-full md:w-[296px] h-24 p-4 bg-smokey/20 rounded-lg">
          <h3 className="font-bold text-[28px] md:text-[40px] leading-[24px] md:leading-[27px] text-center">
            370K
          </h3>
          <p className="font-normal text-[16px] md:text-[18px] leading-[36px] md:leading-[48px] text-center">
            Students
          </p>
        </div>
        
        {/* Box 4 */}
        <div className="flex flex-col w-full md:w-[296px] h-24 p-4 bg-smokey/20 rounded-lg">
          <h3 className="font-bold text-[28px] md:text-[40px] leading-[24px] md:leading-[27px] text-center">
            +100
          </h3>
          <p className="font-normal text-[16px] md:text-[18px] leading-[36px] md:leading-[48px] text-center">
            Recognition
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
