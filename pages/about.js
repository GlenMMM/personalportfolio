import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

function About() {
  return (
    <div className="bg-black min-h-screen">
      <Header
        title="Glen Marvin - About Me"
        description="Hi I’m Glen Marvin, a Digital Designer based on Surabaya, Indonesia. "
      />
      <Layout className="text-white" stroke="white">
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex items-center justify-center px-[20px] md:px-0">
          <div className="text-white xl:px-[80px] py-[100px] flex flex-col flex-grow">
            <p className="font-extralight pb-[10px] md:pb-[20px] animate-fadeIn1s">
              Hi, nice to meet you.
            </p>
            <h3 className="pb-[20px] md:pb-[10px] animate-fadeIn2s">
              I&lsquo;m Glen, passionate interface and experience designer from
              Surabaya, Indonesia.
            </h3>
            <p className="pb-[10px] text-justify animate-fadeIn2s">
              I am originally majored in economics & finances, graduated in late
              2018. After I graduated I work as Credit Analyst at a bank for a
              year, then continuing as Assistant Property Valuer for another
              year. But during the pandemic I got layed off from my job as
              assistant property valuer because I got covid. During the pandemic
              I had the opportunity to learn more about myself and finding what
              my passion is, and that passion is design. Since then, I&lsquo;ve
              been working as a full-time digital designer as a freelancer.
            </p>
            <p className="pb-[10px] text-justify animate-fadeIn2s">
              I&lsquo;ve been lucky enough to have had the chances to work with
              amazing client that encouraged me to keep challenging myself. My
              study in design is mostly self-thaught, but this summer (2022)
              I&lsquo;m taking coursera course on UI/UX designer to complete my
              resume. It was both challenging, inspiring, and rewarding study
              experience in this year so far. Learning more about design really
              help me to overcome the mental block that I usually experienced as
              a designer.
            </p>
            <p className="pb-[10px] text-justify animate-fadeIn2s">
              I&lsquo;m currently based in Surabaya, Indonesia creating digital
              product that could help people elevate their brand and business
              experiences.
            </p>
            <p className="pb-[10px] animate-fadeIn2s">
              If you want to know more about me, feel free to download my resume
              or reach me by email. I would love to hear from you.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default About;
