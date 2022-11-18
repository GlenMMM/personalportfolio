import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

function Composuremagazine() {
  return (
    <div>
      <Layout>
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px]">
          <div className="flex pt-[25px] items-start gap-[16px] w-[800px] py-[80px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">Website re-design</p>
              <div className="border-b border-[#9E9E9E] w-[43px]" />
            </div>
            <div className="flex flex-col -mt-[15px] pr-[70px]">
              <h1>Composure Magazine</h1>
              <p className="text-[#9E9E9E]">
                Composure Magazine is a publication media that celebrates
                current fashion and beauty trends, while showcasing the style
                and lives of celebrities.
              </p>
              <div className="flex pt-[20px] justify-between w-[400px]">
                <div>
                  <p className="font-medium">Agency</p>
                  <p className="font-light text-[14px]">Freelance</p>
                </div>
                <div>
                  <p className="font-medium">Year</p>
                  <p className="font-light text-[14px]">2022</p>
                </div>
                <div>
                  <p className="font-medium">Role</p>
                  <p className="font-light text-[14px]">UI/UX Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[1920px] items-start">
          <div className="w-full aspect-[1.548]">
            <Image
              src={`/composure/top.png`}
              alt="composure magazine image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-center justify-center pt-[95px]">
          <div className="flex flex-col items-center">
            <h2 className="max-w-[430px] text-center">
              Connecting with today&lsquo;s generation.
            </h2>
            <p className="font-light max-w-[495px] text-center">
              featurIng brands for the woman who has a discerning sensibility
              for inspiration and the modern lifestyle
            </p>
          </div>
          <div className="relative w-full pt-[20px]">
            <div className="w-full aspect-[0.537] drop-shadow-2xl">
              <Image
                src={`/composure/mid.png`}
                alt="composure magazine image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-[95px] bg-[#FFD6A6]">
          <div className="relative w-full  max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] py-[60px]">
            <div className="w-full aspect-[0.303] drop-shadow-2xl">
              <Image
                src={`/composure/bot.png`}
                alt="composure magazine image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-center justify-center py-[95px]">
          <div className="relative w-full pt-[20px]">
            <div className="w-full aspect-[1.436] drop-shadow-2xl">
              <Image
                src={`/composure/last.png`}
                alt="composure magazine image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Composuremagazine;
