import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";

function Travellux() {
  return (
    <div>
      <Layout stroke="black">
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] px-[20px] md:px-0">
          <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px] xl:w-[800px] py-[40px] md:py-[80px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">Mobile App Design</p>
              <div className="border-b border-[#9E9E9E] w-[43px]" />
            </div>
            <div className="flex flex-col -mt-[15px] md:pr-[70px]">
              <h1>Travellux</h1>
              <p className="text-[#9E9E9E]">
                Travellux is a digital travel journals where travellers could
                share their personal travel experience. They could also give a
                like and commend on their friend post and travel location.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[1920px] items-start">
          <div className="w-full aspect-[1.548]">
            <Image
              src={`/travellux/top.png`}
              alt="travellux image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-center pt-[50px]">
          <h2>User Flow</h2>
          <p className="font-light md:w-[500px] text-center pt-[10px] px-[20px] md:px-0">
            User flow reflects the user&lsquo;s progress from the launch of the
            application to the discovery of all functionalities in the app and
            doing some actions.
          </p>
          <div className="relative w-full items-start px-[10px] md:px-[40px]">
            <div className="w-full aspect-[1.888]">
              <Image
                src={`/travellux/flow.png`}
                alt="travellux image"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative w-full items-start my-[90px]">
            <div className="w-full aspect-[0.501]">
              <Image
                src={`/travellux/last.png`}
                alt="travellux image"
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

export default Travellux;
