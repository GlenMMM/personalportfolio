import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

function Galerikeramik() {
  return (
    <div>
      <Header title="Glen Marvin" description="freelance designer" />
      <Layout stroke="black">
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] px-[20px] md:px-0">
          <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px] xl:w-[800px] py-[40px] md:py-[80px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">Website design</p>
              <div className="border-b border-[#9E9E9E] w-[43px]" />
            </div>
            <div className="flex flex-col -mt-[15px] md:pr-[70px]">
              <h1>Galeri Keramik</h1>
              <p className="text-[#9E9E9E]">
                Designing website from scratch, bringing together Galeri Keramik
                different products category, sevices, contact into an unified
                website experience.
              </p>
              <div className="flex flex-col md:flex-row gap-y-[10px] md:gap-y-0 pt-[20px] justify-between lg:w-[400px]">
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
          <div className="w-full aspect-[2.470]">
            <Image
              src={`/galerikeramik/top.png`}
              alt="galeri keramik image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-center justify-center pt-[40px] md:pt-[95px]">
          <div className="flex flex-col items-center">
            <h2 className="max-w-[430px] text-center">
              Delivering the best quality products.
            </h2>
            <p className="font-light max-w-[495px] text-center">
              Delivering a good quality products to create and enriched
              comfortable lifestyle and culture.
            </p>
          </div>
          <div className="relative w-full pt-[20px]">
            <div className="w-full aspect-[0.434] drop-shadow-2xl">
              <Image
                src={`/galerikeramik/mid.png`}
                alt="galeri keramik image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full pt-[40px] md:pt-[95px]">
          <div className="flex flex-col items-center">
            <h2 className="lg:w-[430px] text-center">Design Guideline</h2>
            <p className="font-light lg:w-[605px] text-center pb-[20px]">
              These are the sets of recommendations on how to apply design
              principles to enforce consistent and positive user experience
              throughout GaleriKeramik website.
            </p>
          </div>
          <div className="relative w-full">
            <div className="w-full max-w-[1920px] aspect-[1.492]">
              <Image
                src={`/galerikeramik/guide.png`}
                alt="galeri keramik image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-[40ox] md:mt-[95px] flex flex-col items-center justify-center bg-[#E9E9E9]">
          <div className="flex flex-col items-center pt-[50px] px-[20px] md:px-0">
            <h2 className="lg:w-[635px] text-center">
              Don&lsquo;t find customers for your products, find products for
              your customers.
            </h2>
            <p className="font-light lg:w-[500px] text-center">
              Because Galeri Keramik believe that customer only deserve a good
              quality product. Products are the things people need to assist
              them in doing things better.
            </p>
          </div>
          <div className="relative w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] pt-[20px]">
            <div className="w-full">
              <video
                src={`/galerikeramik/p1.mp4`}
                alt="galeri keramik gifs 1"
                autoPlay
                loop
                className="w-full"
              />
            </div>
            <div className="w-full py-[20px] md:pt-[50px] md:pb-[100px]">
              <video
                src={`/galerikeramik/p2.mp4`}
                alt="galeri keramik gifs 2"
                autoPlay
                loop
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] py-[40px] md:py-[95px]">
          <div className="w-full aspect-[1.139] drop-shadow-2xl">
            <Image
              src={`/galerikeramik/p3.png`}
              alt="galeri keramik image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full md:mt-[95px] flex flex-col items-center justify-center bg-[#FDF1D4]">
          <div className="relative w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] pt-[20px] pb-[40px] md:pt-[50px] md:pb-[80px]">
            <div className="w-full aspect-[1.069] drop-shadow-2xl">
              <Image
                src={`/galerikeramik/p4.png`}
                alt="galeri keramik image"
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

export default Galerikeramik;
