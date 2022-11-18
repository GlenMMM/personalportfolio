import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";

function index() {
  return (
    <div>
      <Layout stroke="black">
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] px-[20px] md:px-0">
          <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px] xl:w-[800px] py-[80px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">Personal Porfolio </p>
              <div className="border-b border-[#9E9E9E] w-[43px]" />
            </div>
            <div className="flex flex-col -mt-[15px] md:pr-[70px]">
              <h1>Archives</h1>
              <p className="text-[#9E9E9E]">
                A compilation of personal past projects that I&lsquo;ve worked
                on that unfortunately never happened or not strong enough to be
                on my portfolio. Including a random exploration that I did to
                try something different.
              </p>
            </div>
          </div>
          <Link href="/focuscult">
            <div>
              <div className="relative w-full items-start">
                <div className="w-full aspect-[1.694]">
                  <Image
                    src={`/focus/top.png`}
                    alt="focus cult image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px] py-[80px]">
                <div className="flex items-center gap-[10px]">
                  <p className="xl:w-[135px]">UI/UX Research</p>
                  <div className="border-b border-[#9E9E9E] w-[43px]" />
                </div>
                <div className="flex flex-col -mt-[15px] md:pr-[70px]">
                  <h1>Focus Cult</h1>
                  <p className="text-[#9E9E9E]">
                    Focus cult is an initiative answer to lessen the impact of
                    smarphone addiction by making its user close down the phone
                    and record their choosen activity.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/archives/gatekeeping">
            <div>
              <div className="relative w-full items-start">
                <div className="w-full aspect-[1.694]">
                  <Image
                    src={`/gatekeeping/top.png`}
                    alt="gatekeeping image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px] py-[80px]">
                <div className="flex items-center gap-[10px]">
                  <p className="xl:w-[135px]">Landing Page Design</p>
                  <div className="border-b border-[#9E9E9E] w-[43px]" />
                </div>
                <div className="flex flex-col -mt-[15px] md:pr-[70px]">
                  <h1>Gate Keeping</h1>
                  <p className="text-[#9E9E9E]">
                    This section is my take on how art gallery should adapt
                    during pandemic, and that adaptation is to utilize online
                    platform to make sure that people could visit or see the art
                    on their offline gallery.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/archives/travellux">
            <div>
              <div className="relative w-full items-start">
                <div className="w-full aspect-[1.694]">
                  <Image
                    src={`/travellux/top.png`}
                    alt="travellux image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px] py-[80px]">
                <div className="flex items-center gap-[10px]">
                  <p className="xl:w-[135px]">Mobile App Design</p>
                  <div className="border-b border-[#9E9E9E] w-[43px]" />
                </div>
                <div className="flex flex-col -mt-[15px] md:pr-[70px]">
                  <h1>Travellux</h1>
                  <p className="text-[#9E9E9E]">
                    Travellux is a digital travel journals where travellers
                    could share their personal travel experience. They could
                    also give a like and commend on their friend post and travel
                    location.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/archives/scruffy">
            <div>
              <div className="relative w-full items-start">
                <div className="w-full aspect-[1.694]">
                  <Image
                    src={`/scruffy/top.png`}
                    alt="scruffy image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px] py-[80px]">
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
          </Link>
        </div>
      </Layout>
    </div>
  );
}

export default index;
