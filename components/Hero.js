import React from "react";

function Hero({ ...props }) {
  return (
    <div {...props}>
      
      <div className="relative flex flex-col items-center justify-center min-h-screen -mt-[120px] animate-fadeIn ">
        <p className="xl:text-[16px]">Hello, I{`’`}m Glen Marvin</p>
        <h1 className="xl:max-w-[600px] text-center">
          I{`’`}m a Freelance Designer trying to build digital experiences in
          Indonesia
        </h1>
        <div className="border border-white h-[120px] flex absolute bottom-0"></div>
      </div>
    </div>
  );
}

export default Hero;
