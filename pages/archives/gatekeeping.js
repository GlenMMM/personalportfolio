import Image from "next/image";
import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

function Gatekeeping() {
  return (
    <div>
      <Header title="Glen Marvin" description="freelance designer" />
      <Layout stroke="black">
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] px-[20px] md:px-0">
          <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px] xl:w-[800px] py-[40px] md:py-[80px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">Landing Page Design</p>
              <div className="border-b border-[#9E9E9E] w-[43px]" />
            </div>
            <div className="flex flex-col -mt-[15px] md:pr-[70px]">
              <h1>Gate Keeping</h1>
              <p className="text-[#9E9E9E]">
                This section is my take on how art gallery should adapt during
                pandemic, and that adaptation is to utilize online platform to
                make sure that people could visit or see the art on their
                offline gallery.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[1920px] items-start">
          <div className="w-full aspect-[1.548]">
            <Image
              src={`/gatekeeping/top.png`}
              alt="gatekeeping image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-center pt-[50px] px-[20px] md:px-0">
          <h2>A currated online art gallery</h2>
          <p className="font-light md:w-[500px] text-center pt-[10px] pb-[20px]">
            {` Delivering a new experience for people that longing to visit online gallery during the pandemic.`}
          </p>
        </div>
        <div className="w-full max-w-[1920px] flex flex-col items-center justify-center bg-black text-white px-[20px] md:px-0">
          <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-center pb-[40px] md:pb-[145px]">
            <div className="relative w-full items-start">
              <div className="w-full aspect-[0.356]">
                <Image
                  src={`/gatekeeping/mid.png`}
                  alt="gatekeeping image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <h2 className="md:w-[450px] text-center">
            A wide range of option for global audience
          </h2>
          <p className="font-light md:w-[500px] text-center pt-[10px] pb-[20px]">
            Delivering a new experience for people that longing to visit online
            gallery during the pandemic.
          </p>
        </div>
        <div className="relative w-full max-w-[1920px] items-start pb-[20px] md:pb-[90px] bg-black">
          <div className="w-full aspect-[0.711]">
            <Image
              src={`/gatekeeping/last.png`}
              alt="gatekeeping image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Gatekeeping;
