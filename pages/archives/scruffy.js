import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";

function Scruffy() {
  return (
    <div>
      <Layout stroke="black">
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] px-[20px] md:px-0">
          <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px] xl:w-[800px] py-[40px] md:py-[80px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">Brand & Logo Design</p>
              <div className="border-b border-[#9E9E9E] w-[43px]" />
            </div>
            <div className="flex flex-col -mt-[15px] md:pr-[70px]">
              <h1>Scruffy</h1>
              <p className="text-[#9E9E9E]">
                My first exploration with a goal to learn about brand & logo
                design. Scruffy is a brand that provide sustainable pet care
                product for your fur buddy.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[1920px] items-start">
          <div className="w-full aspect-[1.548]">
            <Image
              src={`/scruffy/top.png`}
              alt="scruffy image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="relative w-full max-w-[1920px] items-start">
          <div className="w-full aspect-[0.468]">
            <Image
              src={`/scruffy/2nd.png`}
              alt="scruffy image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="relative w-full max-w-[1920px] items-start">
          <div className="w-full aspect-[1.415]">
            <Image
              src={`/scruffy/3rd.png`}
              alt="scruffy image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="relative w-full max-w-[1920px] items-start">
          <div className="w-full aspect-[1.415]">
            <Image
              src={`/scruffy/last.png`}
              alt="scruffy image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Scruffy;
