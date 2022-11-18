import React from "react";
import Image from "next/image";
import Link from "next/link";

function Highlight() {
  return (
    <div className="w-full text-white flex flex-col gap-y-[125px] px-[20px] md:px-0">
      <Link href="/focuscult">
        <div id="focus cult">
          <div className="relative w-full aspect-[1.694]">
            <Image
              src={`/homepage/focuscult.png`}
              alt="focus cult image"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col md:flex-row  pt-[25px] items-start gap-[16px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">UI/UX Research</p>
              <div className="border-b border-[#9E9E9E] w-[43px] hidden md:flex" />
            </div>
            <div className="flex flex-col -mt-[15px] md:pr-[70px]">
              <h1>Focus Cult</h1>
              <p className="text-[#9E9E9E]">
                Focus cult is an initiative answer to lessen the impact of
                smarphone addiction by making its user close down the phone and
                record their choosen activity.
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/galerikeramik">
        <div id="work">
          <div className="relative w-full aspect-[1.593]">
            <Image
              src={`/homepage/galerikeramik.png`}
              alt="galeri keramik image"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">Website design</p>
              <div className="border-b border-[#9E9E9E] w-[43px] hidden md:flex" />
            </div>
            <div className="flex flex-col -mt-[15px] md:pr-[70px]">
              <h1>Galeri Keramik</h1>
              <p className="text-[#9E9E9E]">
                Designing website from scratch, bringing together Galeri Keramik
                different products category, sevices, contact into an unified
                website experience.
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/composuremagazine">
        <div id="composure">
          <div className="relative w-full aspect-[1.884]">
            <Image
              src={`/homepage/composuremagazine.png`}
              alt="composure magazine image"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">Website re-design</p>
              <div className="border-b border-[#9E9E9E] w-[43px] hidden md:flex" />
            </div>
            <div className="flex flex-col -mt-[15px] md:pr-[70px]">
              <h1>Composure Magazine</h1>
              <p className="text-[#9E9E9E]">
                Redesigning and improving Composure Magazine website design,
                including it&lsquo;s user experience, and design.
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/morningrooster">
        <div id="morning rooster">
          <div className="relative w-full aspect-[1.694]">
            <Image
              src={`/homepage/morningrooster.png`}
              alt="morning rooster image"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">Brand design & Guideline</p>
              <div className="border-b border-[#9E9E9E] w-[43px] hidden md:flex" />
            </div>
            <div className="flex flex-col -mt-[15px] md:pr-[70px]">
              <h1>Morning Rooster</h1>
              <p className="text-[#9E9E9E]">
                Morning Rooster is a small roastery, where it intends to expand
                their business by selling a high quality coffee beans and coffee
                drip product. My role was to help developing a visual identity
                that could be notice in an already competitive region, through
                which it could express it&lsquo;s commitment to it&lsquo;s
                customer and specialized supplier.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Highlight;
