import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";

function Morningrooster() {
  return (
    <div>
      <Layout stroke="black">
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] px-[20px] md:px-0">
          <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px] xl:w-[800px] py-[40px] md:py-[80px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">Brand design & Guideline</p>
              <div className="border-b border-[#9E9E9E] w-[43px]" />
            </div>
            <div className="flex flex-col -mt-[15px] md:pr-[70px]">
              <h1>Morning Rooster</h1>
              <p className="text-[#9E9E9E]">
                Morning Rooster is a small roastery, where it intends to expand
                their business by selling a high quality coffee beans and coffee
                drip product. My role was to help developing a visual identity
                that could be notice in an already competitive region, through
                wich it could express it&lsquo;s commitment to it&lsquo;s
                customer and specialized supplier.
              </p>
              <div className="flex pt-[20px] justify-between lg:w-[400px]">
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
                  <p className="font-light text-[14px]">
                    Brand Design & Guideline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[1920px] items-start">
          <div className="w-full aspect-[2.47]">
            <Image
              src={`/morning/top.png`}
              alt="morning rooster image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-center justify-center pt-[40px] md:pt-[95px] px-[20px] md:px-0">
          <div className="flex flex-col items-center">
            <h2 className="max-w-[430px] text-center">
              Initial Logo Design Concept
            </h2>
            <p className="font-light max-w-[495px] text-center">
              The name &ldquo;Morning Rooster &rdquo; indicates, for example, a
              journey of quick and meaningful morning routine experience.
              Providing high quality quick to brew coffee drip for a target
              audience that likes to drink coffee in the morning, but
              don&lsquo;t have much time to brew their own coffee.
            </p>
          </div>
          <div className="relative flex items-center justify-center pt-[20px]">
            <div className="w-[335px] md:w-[512px] aspect-[5.565] drop-shadow-2xl">
              <Image
                src={`/morning/logo.png`}
                alt="morning rooster image"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start pt-[40px]">
            <h4>Color Pallete</h4>
            <div className="flex w-full pt-[10px] justify-between gap-[16px]">
              <div className="relative bg-[#232F56] w-1/4 aspect-square">
                <h4 className="absolute bottom-[5px] left-[5px] md:bottom-[10px] md:left-[15px] text-[#FFEBCF] font-bold">
                  232F56
                </h4>
              </div>
              <div className="relative bg-[#FF5C2F] w-1/4 aspect-square">
                <h4 className="absolute bottom-[5px] left-[5px] md:bottom-[10px] md:left-[15px] text-[#FFC26E] font-bold">
                  FF5C2F
                </h4>
              </div>
              <div className="relative bg-[#FFC26E] w-1/4 aspect-square">
                <h4 className="absolute bottom-[5px] left-[5px] md:bottom-[10px] md:left-[15px] text-[#FF5C2F] font-bold">
                  FFC26E
                </h4>
              </div>
              <div className="relative bg-[#FFEBCF] w-1/4 aspect-square">
                <h4 className="absolute  bottom-[5px] left-[5px] md:bottom-[10px] md:left-[15px] text-[#232F56] font-bold">
                  FFEBCF
                </h4>
              </div>
            </div>
            <h4 className="pt-[50px]">Typography</h4>
            <div className="relative flex w-full pt-[10px] md:pt-[32px]">
              <div className="w-full aspect-[1.8]">
                <Image
                  src={`/morning/ranille.png`}
                  alt="morning rooster image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h4 className="pt-[50px]">Pattern & Logo</h4>
            <div className="relative flex w-full pt-[10px] md:pt-[32px]">
              <div className="w-full aspect-[0.548]">
                <Image
                  src={`/morning/pattern.png`}
                  alt="morning rooster image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h4 className="pt-[50px]">Icon Set</h4>
          </div>
        </div>
        <div className="relative flex w-full pt-[10px] md:pt-[32px] max-w-[1920px]">
          <div className="w-full aspect-[3.69]">
            <Image
              src={`/morning/icon.png`}
              alt="morning rooster image"
              fill
              className="object-contain px-[20px]"
            />
          </div>
        </div>
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-center justify-center pt-[50px] px-[20px] md:px-0">
          <div className="w-full flex flex-col items-start justify-start">
            <h4>Sticker Set</h4>
            <div className="relative flex w-full pt-[10px] md:pt-[32px] justify-between">
              <div className="w-full aspect-[2.95]">
                <Image
                  src={`/morning/sticker.png`}
                  alt="morning rooster image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-full max-w-[1920px] mt-[75px]">
          <div className="w-full aspect-[1.19]">
            <Image
              src={`/morning/p1.png`}
              alt="morning rooster image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="relative flex w-full max-w-[1920px]">
          <div className="w-full aspect-[1.5]">
            <Image
              src={`/morning/p2.png`}
              alt="morning rooster image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="relative flex w-full max-w-[1920px]">
          <div className="w-full aspect-[1.38] ">
            <Image
              src={`/morning/p3.png`}
              alt="morning rooster image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Morningrooster;
