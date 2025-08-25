import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const CustomButton = ({ active, linkto, children }) => {
  return (
    <a
      href={linkto}
      className={`px-6 py-2.5 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-md 
        ${
          active
            ? 'bg-[#00FFD1] text-black hover:bg-[#00e6bd] hover:shadow-lg hover:scale-105'
            : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
        }`}
    >
      {children}
    </a>
  );
};

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div
      className={`flex ${position} my-10 justify-between flex-col lg:gap-20 gap-10 mb-20`}
    >
      {/* left part */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8 mb-10">
        {heading}
        <div className="text-gray-400 text-base font-bold w-[85%] -mt-3">
          {subheading}
        </div>
        <div className="flex gap-7 mt-7">
          {/* <CustomButton
            active={ctabtn1.active}
            linkto={ctabtn1.linkto}
            onClick={ctabtn1.onClick} // ✅ support scroll
          >
            {ctabtn1.btnText} <ArrowRight className="w-4 h-4" />
          </CustomButton> */}

          <CustomButton
            active={ctabtn2.active}
            linkto={ctabtn2.linkto}
            onClick={ctabtn2.onClick} // ✅ support scroll
          >
            {ctabtn2.btnText}
          </CustomButton>
        </div>

        {/* <div className="flex gap-7 mt-7">
          <CustomButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            {ctabtn1.btnText} <ArrowRight className="w-4 h-4" />
          </CustomButton>

          <CustomButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CustomButton>
        </div> */}
      </div>

      {/* Right part */}
      <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
        {backgroundGradient}
        <div className="text-center flex flex-col w-[10%] select-none text-gray-400 font-inter font-bold ">
          {[...Array(15)].map((_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>

        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, '']}
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
            style={{ whiteSpace: 'pre-line', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
