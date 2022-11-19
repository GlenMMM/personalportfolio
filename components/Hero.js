import React from "react";

function Hero() {
  return (
    <div className="relative text-white">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="xl:text-[16px] animate-fadeIn1s -mt-[150px]">
          Hello, I&lsquo;m Glen Marvin
        </p>
        <h1 className="pt-[20px] max-w-[335px] md:max-w-[600px] text-center animate-fadeIn2s">
          I&lsquo;m a Freelance Designer trying to build digital experiences in
          Indonesia
        </h1>
        <div className="border border-white h-[120px] flex absolute bottom-0"></div>
      </div>
    </div>
  );
}

export default Hero;
