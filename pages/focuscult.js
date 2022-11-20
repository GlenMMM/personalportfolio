import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

function Focuscult() {
  return (
    <div>
      <Header
        title="Glen Marvin - UI/UX, Graphic & Digital Designer"
        description="Hi I’m Glen Marvin, a Digital Designer based on Surabaya, Indonesia. "
      />
      <Layout stroke="black">
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] px-[20px] md:px-0">
          <div className="flex flex-col md:flex-row pt-[25px] items-start gap-[16px] xl:w-[900px] py-[40px] md:py-[80px]">
            <div className="flex items-center gap-[10px]">
              <p className="xl:w-[135px]">UI/UX Research</p>
              <div className="border-b border-[#9E9E9E] w-[43px]" />
            </div>
            <div className="flex flex-col -mt-[15px] md:pr-[70px]">
              <h1>Focus Cult</h1>
              <p className="text-[#9E9E9E]">
                Focus cult is an initiative answer to lessen the impact of
                smarphone addiction by making its user close down the phone and
                record their choosen activity.
              </p>
              <div className="flex flex-col md:flex-row gap-y-[10px] md:gap-y-0 pt-[20px] justify-between md:w-[500px]">
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
                  <p className="font-light text-[14px] w-[250px]">
                    Researcher, User Persona, User Flow, LoFi - Wireframe, HiFi
                    Mockup, Illustration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[1920px] items-start">
          <div className="w-full aspect-[2.47]">
            <Image
              src={`/focus/top.png`}
              alt="focus cult image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-center justify-center pt-[40px] md:pt-[95px] px-[20px] md:px-0">
          <div className="flex flex-col items-center">
            <h2 className="lg:w-[690px] text-center">Problem Context</h2>
            <p className="font-light 2xl:w-[1104px] text-justify md:text-center">
              In this digital era people are much empowered by convinience.
              Mobilephone are part of our everyday life, it&lsquo;s undenyable
              that smartphone has aid our daily activity tremendously. With
              it&lsquo;s good trait it also come with some bad trait to our
              daily life. This dependency on smartphone would soon turned into a
              smartphone addiction, that bring negative impact to our daily
              life. It&lsquo;s proneness to disrupt both sleep and daily
              productivity.
              <br />
              <br />
              Focus cult is an initiative answer to lessen the impact of
              smarphone addiction by making its user close down the phone and
              record their choosen activity.
            </p>
          </div>
        </div>
        <div className="w-full bg-[#121212] mt-[40px] md:mt-[90px] py-[55px] flex justify-center text-white">
          <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-start justify-center px-[20px] md:px-0">
            <h2 className=" px-[22px] md:px-0">Project Overview</h2>
            <div className="flex items-center gap-[7px] md:gap-[16px] pt-[20px]">
              <div className="w-[25px] md:w-[72px] border border-white border-opacity-50 -ml-[10px] md:ml-0 mt-[4px]" />
              <h4>Current Situation</h4>
            </div>
            <div className="px-[22px] md:px-[88px] w-full">
              <p className="font-light">
                Addiction is considered by WHO as dependence, as the continous
                usage of something for the sake of relief, comfort or
                stimulation, which often causes cravings when it absent. The two
                major categories of addiction involve either substance addiction
                or behavorial addiction such as mobile phone addiction.
                <br />
                <br /> In International hournal of community medecine and health
                public health 2019 have found that teen and young adults both
                are prone to be addicted to their smartphone on daily average.
              </p>
              <div className="relative w-full items-start py-[30px]">
                <div className="w-full aspect-[19.74]">
                  <Image
                    src={`/focus/people.png`}
                    alt="focus cult image"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="font-light">
                Out of 399 survey participant (242 are male & 157 are female)
                42.4% of them visit their phone 6-20 times a day and 30% of them
                usually spend around 60 minute or more during the day.
              </p>
              <h4 className="pt-[50px] pb-[10px]">Breakdown Chart</h4>
              <p className="font-medium">Phone visit during the day</p>
              <div className="flex flex-col gap-[10px] pt-[10px] pb-[30px]">
                <div className="flex gap-[15px] items-center">
                  <div className="w-[70px] sm:w-[140px] lg:w-[211px] h-[20px] bg-[#FFACA0] text-black flex items-center justify-center">
                    21.1%
                  </div>
                  <p className="pb-[2.5px] font-light">{`< 5 times`}</p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <div className="w-[140px] sm:w-[280px] lg:w-[423px] h-[20px] bg-[#FFACA0] text-black flex items-center justify-center">
                    42.3%
                  </div>
                  <p className="pb-[2.5px] font-light">{`6-20 times`}</p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <div className="w-[120px] sm:w-[240px] lg:w-[366px] h-[20px] bg-[#FFACA0] text-black flex items-center justify-center">
                    36.6%
                  </div>
                  <p className="pb-[2.5px] font-light">{`> 20 times`}</p>
                </div>
              </div>
              <p className="font-medium">Phone usage before sleep</p>
              <div className="flex flex-col gap-[10px] pt-[10px] pb-[30px]">
                <div className="flex flex-col gap-[5px] justify-center">
                  <div className="w-[110px] sm:w-[220px] lg:w-[346px] h-[20px] bg-[#FFACA0] text-black flex items-center justify-center">
                    34.6%
                  </div>
                  <p className="pb-[2.5px] font-light">
                    Doesn&lsquo;t use their phone
                  </p>
                </div>

                <div className="flex flex-col gap-[5px] justify-center">
                  <div className="w-[220px] sm:w-[440px] lg:w-[654px] h-[20px] bg-[#FFACA0] text-black flex items-center justify-center">
                    65.4%
                  </div>
                  <p className="pb-[2.5px] font-light">{`Use their phone`}</p>
                </div>
              </div>
              <p className="font-medium">Duration spent per day</p>
              <div className="flex flex-col gap-[10px] pt-[10px] pb-[30px]">
                <div className="flex flex-col gap-[5px]">
                  <div className="w-[120px] sm:w-[240px] lg:w-[364px] h-[20px] bg-[#FFACA0] text-black flex items-center justify-center">
                    36.4%
                  </div>
                  <p className="pb-[2.5px] font-light">{`< 90 minutes`}</p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <div className="w-[110px]  sm:w-[220px] lg:w-[338px] h-[20px] bg-[#FFACA0] text-black flex items-center justify-center">
                    33.8%
                  </div>
                  <p className="pb-[2.5px] font-light"> 90-120 minutes</p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <div className="w-[100px] sm:w-[200px] lg:w-[298px] h-[20px] bg-[#FFACA0] text-black flex items-center justify-center">
                    29.8%
                  </div>
                  <p className="pb-[2.5px] font-light">{`> 120 minutes`}</p>
                </div>
              </div>
              <p className="font-light">
                {`The impact of this is out of 399 participants feel that their
                productive time duration has been impaired due to phone usage,
                154 (53,1%) participant feel that their concentration has been
                affected due to phone usage, and 142 (35,6%) feel that their
                sleep has been hampered due to excessive phone usage.`}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-[40px] md:pt-[90px] flex flex-col items-center justify-center ">
          <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-start justify-center px-[20px] md:px-0">
            <div className="px-[22px] md:px-[88px] text-center md:text-left">
              <h2>Design Process</h2>
              <p className="font-light">
                To find and formulate the solution, I used double diamond design
                approach throughout the process to find to solution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-[20px] md:gap-y-0 md:flex pt-[30px] md:px-[48px] w-full justify-between ">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-[50px] md:w-[80px] aspect-square">
                    <Image
                      src={`/focus/dp1.png`}
                      alt="focus cult image"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="font-medium pt-[15px]">Discover & Define</p>
                <p className="font-light text-center pt-[5px]">
                  Problem Identicification
                  <br />
                  User Research
                  <br />
                  User Persona
                  <br />
                  Design Research
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-[50px] md:w-[80px] aspect-square">
                    <Image
                      src={`/focus/dp2.png`}
                      alt="focus cult image"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="font-medium pt-[15px]">Ideate</p>
                <p className="font-light text-center pt-[5px]">
                  Ideate User Flow
                  <br />
                  Sketch Wireframe
                  <br />
                  Information Architecture
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-[50px] md:w-[80px] aspect-square">
                    <Image
                      src={`/focus/dp3.png`}
                      alt="focus cult image"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="font-medium pt-[15px]">Design</p>
                <p className="font-light text-center pt-[5px]">
                  Low-Fi Wireframe
                  <br />
                  Hi-Fi Mockups
                  <br />
                  Hi-Fi Prototypes
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-[50px] md:w-[80px] aspect-square">
                    <Image
                      src={`/focus/dp4.png`}
                      alt="focus cult image"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="font-medium pt-[15px] text-center">
                  Deliverance & Evaluate
                </p>
                <p className="font-light text-center pt-[5px]">
                  Feedback
                  <br />
                  Revise
                </p>
              </div>
            </div>
            <div className="px-[22px] md:px-[88px] pt-[40px] md:pt-[90px]">
              <h2>User Research</h2>
              <p className="font-light">
                I conducted interviews on 15 participants and created empathy
                maps to understand the user that I&lsquo;m designing for and
                their needs. There are 3 user groups that can be identified from
                this interview.
              </p>
              <ul className="font-bold list-disc list-inside pt-[15px] text-[12px] md:text-[16px]">
                Interview Goals
                <li className="pl-[8px]">
                  The pain point for both of the user group
                </li>
                <li className="pl-[8px]">
                  Figuring out what makes them spend their time on phone more
                  than necessary
                </li>
                <li className="pl-[8px]">
                  {`Figuring out how much it (spending too much time on phone)
                  affect their daily life`}
                </li>
              </ul>
              <div className="relative pt-[30px]">
                <p className="font-bold">Key Findings</p>
                <div className="flex pt-[5px] gap-[5px] md:gap-[10px] text-[12px] md:text-[16px]">
                  <div className="border p-[5px] border-[#379298] text-[#379298]">
                    Teen
                  </div>
                  <div className="border p-[5px] border-[#1A4F9D] text-[#1A4F9D]">
                    Young Adult
                  </div>
                  <div className="border p-[5px] border-[#7B57C9] text-[#7B57C9]">
                    Scholar
                  </div>
                  <div className="border p-[5px] border-[#AC3893] text-[#AC3893]">
                    Work Environment
                  </div>
                </div>

                <div className="pt-[20px]">
                  <div className="relative -left-[21px]">
                    <div className="absolute border border-[#A8A8A8] h-[585px] sm:h-[510px] md:h-[555px] lg:h-[505px] xl:h-[460px] 2xl:h-[400px] top-[25px]" />
                    <div className="absolute rounded-full w-[10px] h-[10px] top-[15px] xl:top-[20px] -left-[4px] bg-[#FA7B7B]" />
                    <div className="absolute rounded-full w-[10px] h-[10px] top-[270px] sm:top-[260px] md:top-[285px] lg:top-[250px] xl:top-[225px] 2xl:top-[212px] -left-[4px] bg-[#7BFAE3]" />
                    <div className="absolute rounded-full w-[10px] h-[10px] top-[605px] sm:top-[530px] md:top-[580px] lg:top-[530px] xl:top-[480px] 2xl:top-[418px] -left-[4px] bg-[#857BFA]" />
                  </div>
                  <div className="flex pt-[5px] gap-[5px] md:gap-[10px] items-center text-[12px] md:text-[16px]">
                    <div className="border p-[5px] border-[#379298] text-[#379298]">
                      Teen
                    </div>
                    <div className="border p-[5px] border-[#1A4F9D] text-[#1A4F9D]">
                      Young Adult
                    </div>
                    <p>who is a</p>
                    <div className="border p-[5px] border-[#7B57C9] text-[#7B57C9]">
                      Scholar
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-[10px] lg:gap-y-0 lg:flex-row pt-[15px] lg:pt-[30px] justify-between">
                    <div className="flex flex-wrap w-[300px] sm:w-full lg:w-[350px] gap-x-[5px] md:gap-x-[15px] gap-y-[5px] md:gap-y-[10px] text-[14px] md:text-[16px]">
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light h-[36px] items-center justify-center flex">
                        Time management
                      </div>
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light h-[36px] items-center justify-center flex">
                        Study
                      </div>
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light h-[36px] items-center justify-center flex">
                        Focus
                      </div>
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light h-[36px] items-center justify-center flex">
                        Sleep Schedule
                      </div>
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light h-[36px] items-center justify-center flex">
                        College Life
                      </div>
                    </div>
                    <div className="w-[300px] sm:w-full lg:w-1/2">
                      <p>
                        Both teen / young adult who&lsquo;s a scholar feels the
                        negative influence of being addicted to phone. As they
                        tend to procrastinate more while they should be studying
                        / attending to lecture.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap pt-[20px] sm:pt-[30px] lg:pt-[45px] gap-[5px] md:gap-[10px] items-center text-[12px] md:text-[16px]">
                    <div className="border p-[5px] border-[#379298] text-[#379298]">
                      Teen
                    </div>
                    <div className="border p-[5px] border-[#1A4F9D] text-[#1A4F9D]">
                      Young Adult
                    </div>
                    <p>who is on</p>
                    <div className="border p-[5px] border-[#AC3893] text-[#AC3893]">
                      Work Environment
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-[10px] lg:gap-y-0 lg:flex-row pt-[15px] lg:pt-[30px] justify-between text-[14px] md:text-[16px]">
                    <div className="flex flex-wrap w-[300px] sm:w-full lg:w-[350px] gap-x-[5px] md:gap-x-[15px] gap-y-[5px] md:gap-y-[10px]">
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light h-[36px] items-center justify-center flex">
                        Time management
                      </div>
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light h-[36px] items-center justify-center flex">
                        Adjusting Habits
                      </div>

                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light  h-[36px] items-center justify-center flex">
                        Sleep Schedule
                      </div>
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light h-[36px] items-center justify-center flex">
                        Lack of Guidance
                      </div>
                    </div>
                    <div className="w-[300px] sm:w-full lg:w-1/2">
                      <p>
                        As the teen / young adult on their work environment,
                        they already felt exhausted because first they had to
                        adjust their habits from college. They also feel phone
                        addiction not only affected their daily productivity but
                        also ruining their sleep schedule
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap pt-[20px] sm:pt-[30px] lg:pt-[45px] gap-[5px] md:gap-[10px] items-center text-[12px] md:text-[16px]">
                    <div className="border p-[5px] border-[#379298] text-[#379298]">
                      Teen
                    </div>
                    <div className="border p-[5px] border-[#1A4F9D] text-[#1A4F9D]">
                      Young Adult
                    </div>
                    <p>who is a</p>
                    <div className="border p-[5px] border-[#7B57C9] text-[#7B57C9]">
                      Scholar
                    </div>
                    <p>and on</p>
                    <div className="border p-[5px] border-[#AC3893] text-[#AC3893]">
                      Work Environment
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-y-[10px] lg:gap-y-0 pt-[15px] lg:pt-[30px] justify-between">
                    <div className="flex flex-wrap w-[300px] sm:w-full lg:w-[350px] gap-[5px] md:gap-x-[15px] md:gap-y-[10px] text-[14px] md:text-[16px]">
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light h-[36px] items-center justify-center flex">
                        Time management
                      </div>
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light h-[36px] items-center justify-center flex">
                        Adjusting Habits
                      </div>

                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light  h-[36px] items-center justify-center flex">
                        Sleep Schedule
                      </div>
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light  h-[36px] items-center justify-center flex">
                        Focus
                      </div>
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light  h-[36px] items-center justify-center flex">
                        Study
                      </div>
                      <div className="bg-[#545454] text-[#F0F0F0] p-[5px] font-light h-[36px] items-center justify-center flex">
                        Lack of Guidance
                      </div>
                    </div>
                    <div className="w-[300px] sm:w-full lg:w-1/2">
                      <p>
                        On this demographic they feel even harder to manage
                        their time as they had to study and work at the same
                        time. They feel they had to be able to focus for the day
                        to day task, if they do procastinate it would damage not
                        only their study, but also their work productivity and
                        sleep schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[22px] md:px-[88px] pt-[40px] md:pt-[90px]">
              <h2>User Persona</h2>
              <p className="font-light pt-[5px]">
                Based on the user group that I sorted out from the interviewers,
                I start to build a persona that could represent the common need
                of the potential users that the platform would base to buid on.
              </p>
              <div className="bg-black rounded-[20px] mt-[32px] text-white flex items-center -mx-[22px]">
                <div className="px-[16px] md:px-[30px] 2xl:px-[80px] py-[40px] flex flex-col ">
                  <div className="flex gap-[12px] md:gap-[20px] lg:gap-[50px]">
                    <div className="relative">
                      <div className="w-[50px] md:w-[110px] lg:w-[140px] aspect-square">
                        <Image
                          src={`/focus/user.png`}
                          alt="focus cult image"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <p className="font-semibold italic xl:w-[600px] text-[12px] md:text-[18px] lg:text-[20px]">
                        &ldquo;I want to be able to focus both on my job and
                        study effectively during the day, and sleep effectively
                        without being distracted by my phone.&rdquo;
                      </p>
                      <div className="hidden lg:flex">
                        <div className="relative">
                          <div className="w-[15px] aspect-square">
                            <Image
                              src={`/focus/ui1.png`}
                              alt="focus cult image"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <p className="font-light text-[14px] pl-[5px] pr-[15px]">
                          Intern, Student
                        </p>
                        <div className="relative">
                          <div className="w-[15px] aspect-square">
                            <Image
                              src={`/focus/ui2.png`}
                              alt="focus cult image"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <p className="font-light text-[14px] pl-[5px] pr-[15px]">
                          Peri Petra
                        </p>
                        <div className="relative">
                          <div className="w-[15px] aspect-square">
                            <Image
                              src={`/focus/ui3.png`}
                              alt="focus cult image"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <p className="font-light text-[14px] pl-[5px] pr-[15px]">
                          CS, Undergraduate
                        </p>
                        <div className="relative">
                          <div className="w-[7.5px] aspect-[0.5]">
                            <Image
                              src={`/focus/ui4.png`}
                              alt="focus cult image"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <p className="font-light text-[14px] pl-[5px]">
                          Surabaya, Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap lg:hidden pt-[10px]">
                    <div className="flex items-center w-1/2">
                      <div className="relative">
                        <div className="w-[10px] md:w-[16px] aspect-square">
                          <Image
                            src={`/focus/ui1.png`}
                            alt="focus cult image"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <p className="font-light pl-[5px] pr-[5px] text-[12px] md:text-[16px]">
                        Intern, Student
                      </p>
                    </div>
                    <div className="flex items-center w-1/2">
                      <div className="relative">
                        <div className="w-[10px] md:w-[16px] aspect-square">
                          <Image
                            src={`/focus/ui2.png`}
                            alt="focus cult image"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <p className="font-light pl-[5px] pr-[15px] text-[12px] md:text-[16px]">
                        Peri Petra
                      </p>
                    </div>
                    <div className="flex items-center w-1/2">
                      <div className="relative">
                        <div className="w-[10px] md:w-[16px] aspect-square">
                          <Image
                            src={`/focus/ui3.png`}
                            alt="focus cult image"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <p className="font-light pl-[5px] pr-[15px] text-[12px] md:text-[16px]">
                        CS, Undergraduate
                      </p>
                    </div>
                    <div className="flex items-center w-1/2">
                      <div className="relative">
                        <div className="w-[5px] md:w-[8px] aspect-[0.5]">
                          <Image
                            src={`/focus/ui4.png`}
                            alt="focus cult image"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <p className="font-light pl-[5px] text-[12px] md:text-[16px]">
                        Surabaya, Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between gap-x-[55px] py-[30px]">
                    <ul className="font-light list-disc list-inside text-[12px] md:text-[16px]">
                      <p className="font-bold text-[12px] md:text-[16px]">
                        GOALS
                      </p>
                      <li className="pl-[8px]">
                        100% attention during lectures
                      </li>
                      <li className="pl-[8px]">Complete assignment on time</li>
                      <li className="pl-[8px]">
                        To be able to sleep early without being distracted with
                        his phone
                      </li>
                      <li className="pl-[8px]">
                        Being able to focus while working or studying
                      </li>
                    </ul>
                    <ul className="font-light list-disc list-inside text-[12px] md:text-[16px]">
                      <p className="font-bold text-[12px] md:text-[16px]">
                        FRUSTRATION
                      </p>
                      <li className="pl-[8px]">
                        Addicted to phone and social media
                      </li>
                      <li className="pl-[8px]">
                        Easily distracted during the day
                      </li>
                      <li className="pl-[8px]">
                        Having a hard time to fall asleep at night
                      </li>
                    </ul>
                  </div>
                  <p className=" text-[12px] md:text-[16px]">
                    Peri is a computer science under graduate who currently
                    working in a leading tech company as an intern. As his last
                    year on his study coming to end, he needs to put his
                    attention on his final project and his intern program.
                    Because of this he has a tight working and studying schedule
                    but he always try to balance his work, study and life. Peri
                    would like to have an easy way to keeping him off his phone,
                    keep track, and improve his time management. Allowing him to
                    improve his productivity both on studying his last year of
                    uni and working at his intern program.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-[40px] md:pt-[90px] px-[22px] md:px-[88px] text-center md:text-left">
              <h2>Product Values</h2>
              <p className="font-light">
                By synthesizing all the data from user research, insight are
                generated, groupe, and prioritized. As a result, value
                propositions for Focus Cult are established.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-[20px] md:gap-y-0 md:flex pt-[30px] md:px-[48px] w-full justify-between gap-x-[15px]">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-[50px] md:w-[80px] aspect-square">
                    <Image
                      src={`/focus/val1.png`}
                      alt="focus cult image"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="font-medium pt-[15px]">Accessible</p>
                <p className="font-light text-center pt-[5px]">
                  Present a clear and relevant information with clear structure
                  that assist users to achieve and comprehend data easily.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-[50px] md:w-[80px] aspect-square">
                    <Image
                      src={`/focus/val2.png`}
                      alt="focus cult image"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="font-medium pt-[15px]">Seamless</p>
                <p className="font-light text-center pt-[5px]">
                  Present a clear and relevant information with clear structure
                  that assist users to achieve and comprehend data easily.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-[50px] md:w-[80px] aspect-square">
                    <Image
                      src={`/focus/val3.png`}
                      alt="focus cult image"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="font-medium pt-[15px]">Reliable</p>
                <p className="font-light text-center pt-[5px]">
                  Present a clear and relevant information with clear structure
                  that assist users to achieve and comprehend data easily.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-[50px] md:w-[80px] aspect-square">
                    <Image
                      src={`/focus/val4.png`}
                      alt="focus cult image"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="font-medium pt-[15px]">Flexible</p>
                <p className="font-light text-center pt-[5px]">
                  Present a clear and relevant information with clear structure
                  that assist users to achieve and comprehend data easily.
                </p>
              </div>
            </div>

            <div className="px-[22px] md:px-[88px] pt-[40px] md:pt-[90px] w-full">
              <h2 className="pb-[30px]">Main User Flow</h2>
              <div className="relative -mx-[22px] sm:-mx-[70px]">
                <div className="w-full aspect-[1.77]">
                  <Image
                    src={`/focus/userflow.png`}
                    alt="focus cult image"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="px-[22px] md:px-[88px] pt-[40px] md:pt-[90px] w-full">
              <h2>Wireframes</h2>
              <p className="font-light pt-[5px]">
                Taking the time to draft iterations of each screens of the app
                on paper ensured that the element that made it to digital
                wireframe would be well suited addressing to the user pain
                points. I prioritized a quick menu load out to streamline the
                process and esay waty to acces the status overview to help the
                user.
              </p>
              <div className="-mx-[87px] pt-[30px]">
                <div className="relative">
                  <div className="w-full aspect-[1.05]">
                    <Image
                      src={`/focus/wireframes.png`}
                      alt="focus cult image"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[22px] md:px-[88px] pt-[40px] md:pt-[90px] w-full">
              <h2>Affinity Diagram</h2>
              <p className="font-light pt-[5px]">
                I synthesized the data from the previous studies and started
                categorizing to generate insight and finding the common themes.
              </p>
              <div className="-mx-[30px] md:-mx-[40px] grid grid-cols-3 md:flex flex-wrap gap-x-[15px] md:gap-x-[20px] gap-y-[15px] md:gap-y-[24px] justify-center py-[15px] md:py-[30px] text-[12px] md:text-[16px]">
                <div className="bg-[#545454] text-[#f0f0f0] md:h-[36px] p-[5px] flex  items-center">
                  Troubled by the bright home screen
                </div>
                <div className="bg-[#545454] text-[#f0f0f0] md:h-[36px] p-[5px] flex  items-center">
                  Confused by the home information
                </div>
                <div className="bg-[#545454] text-[#f0f0f0] md:h-[36px] p-[5px] flex  items-center">
                  Confused by the history information
                </div>
                <div className="bg-[#545454] text-[#f0f0f0] md:h-[36px] p-[5px] flex  items-center">
                  Overwhelmed by the ammount of information
                </div>
                <div className="bg-[#545454] text-[#f0f0f0] md:h-[36px] p-[5px] flex  items-center">
                  No night mode on home screen
                </div>
                <div className="bg-[#545454] text-[#f0f0f0] md:h-[36px] p-[5px] flex  items-center">
                  Frustated on lack of guidance
                </div>
                <div className="bg-[#545454] text-[#f0f0f0] md:h-[36px] p-[5px] flex  items-center">
                  Frustated having to re-configure profile
                </div>
                <div className="bg-[#545454] text-[#f0f0f0] md:h-[36px] p-[5px] flex  items-center">
                  Confused by the home screen
                </div>
              </div>
              <div className="flex flex-col -mx-[22px] md:-mx-[40px] lg:-mx-0">
                <div className="flex flex-col md:flex-row justify-between gap-y-[15px] md:gap-y-0 gap-x-[20px] lg:gap-x-0">
                  <ul className="font-light list-disc list-inside md:w-1/2">
                    <p className="font-bold">Functionality</p>
                    <li className="pl-[8px]">
                      Troubled by lacking of guidance from the start of the apps
                    </li>
                    <li className="pl-[8px]">
                      Confused by having to log in ( is log in important )
                    </li>
                    <li className="pl-[8px]">Complete 1 focus session</li>
                    <li className="pl-[8px]">
                      Successfully setup task and timer on focus session
                    </li>
                    <li className="pl-[8px]">
                      Successfully cancel and change session
                    </li>
                    <li className="pl-[8px]">
                      Troubled by the bright ui and there is no Dark Mode
                    </li>
                  </ul>
                  <ul className="font-light list-disc list-inside md:w-1/2">
                    <p className="font-bold">Information architecture</p>
                    <li className="pl-[8px]">
                      Frustated there is no pause button for a session
                    </li>
                    <li className="pl-[8px]">
                      Frustated about too much information on statistic page
                    </li>
                    <li className="pl-[8px]">
                      Troubled by information hierarchy on statistic page
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col md:flex-row justify-between py-[21px] gap-y-[15px] md:gap-y-0 gap-x-[20px] lg:gap-x-0">
                  <ul className="font-light list-disc list-inside md:w-1/2">
                    <p className="font-bold">Content</p>
                    <li className="pl-[8px]">
                      Troubled by lacking of guidance from the start of the apps
                    </li>
                    <li className="pl-[8px]">
                      Overwhelmed by the amount of information on statistic
                    </li>
                    <li className="pl-[8px]">
                      Confuse by the information on statistic
                    </li>
                    <li className="pl-[8px]">
                      Thinks the statistic page are overwhelming
                    </li>
                    <li className="pl-[8px]">
                      Dislike having to reconfigure the profile page
                    </li>
                  </ul>
                  <ul className="font-light list-disc list-inside md:w-1/2">
                    <p className="font-bold">Interaction</p>
                    <li className="pl-[8px]">
                      Frustated there is no pause button for a session
                    </li>
                    <li className="pl-[8px]">
                      Frustated about too much information on statistic page
                    </li>
                    <li className="pl-[8px]">Troubled cancelling session</li>
                    <li className="pl-[8px]">
                      Troubled creating a new task for a session
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-y-[15px] md:gap-y-0 gap-x-[20px] lg:gap-x-0">
                  <ul className="font-light list-disc list-inside md:w-1/2">
                    <p className="font-bold">Terminology</p>
                    <li className="pl-[8px]">
                      Confused by the term of “summoning pool”
                    </li>
                  </ul>
                  <ul className="font-light list-disc list-inside md:w-1/2">
                    <p className="font-bold">Usefullness</p>
                    <li className="pl-[8px]">
                      This app really help me to focus
                    </li>
                    <li className="pl-[8px]">
                      This app help me to sleep faster
                    </li>
                    <li className="pl-[8px]">
                      this app help me to not use my phone
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-black text-white flex flex-col items-center justify-center py-[55px] mt-[90px]">
            <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-start justify-center">
              <div className="px-[22px] md:px-[88px]">
                <h2 className="px-[20px] md:px-0">High Fidelity Mockups</h2>
                <p className="font-light pb-[30px] px-[20px] md:px-0">
                  High Fidelity Mockups also known as visual design are the
                  final design element of the process. These design represent
                  how the app finally looks like after developed.
                </p>
                <div className="relative md:-mx-[60px] lg:-mx-0">
                  <div className="w-full aspect-[0.419]">
                    <Image
                      src={`/focus/hifi.png`}
                      alt="focus cult image"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-start justify-center pt-[40px] md:pt-[90px]">
            <div className="px-[22px] md:px-[88px] w-full">
              <h2 className="pb-[30px] text-center md:text-left">
                Typography & Colors
              </h2>
              <div className="relative md:-mx-[60px] lg:-mx-0">
                <div className="w-full aspect-[1.195]">
                  <Image
                    src={`/focus/typography.png`}
                    alt="focus cult image"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h2 className="pb-[30px] pt-[40px] md:pt-[90px] text-center md:text-left">
                Design System
              </h2>
              <p className="font-bold pb-[10px]">Grid System</p>
              <div className="relative md:-mx-[60px] lg:-mx-0">
                <div className="w-full aspect-[2.117] drop-shadow-xl">
                  <Image
                    src={`/focus/grid.png`}
                    alt="focus cult image"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="font-bold pt-[30px] pb-[20px]">Button & Links</p>
              <div className="flex flex-col lg:flex-row gap-y-[20px] lg:gap-y-0 w-full">
                <div className="flex flex-col w-1/2">
                  <div className="flex gap-[37px] lg:gap-[20px] xl:gap-[37px]">
                    <div className="flex flex-col items-start">
                      <p className="pb-[15px]">Primary</p>
                      <div className="relative">
                        <div className="w-[110px] sm:w-[139px] aspect-[3.089] drop-shadow-xl">
                          <Image
                            src={`/focus/but1.png`}
                            alt="focus cult image"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <p className="pb-[15px] pt-[15px] md:pt-[30px]">Icon</p>
                      <div className="relative">
                        <div className="w-[130px] sm:w-[160px] aspect-[2.107]">
                          <Image
                            src={`/focus/icon.png`}
                            alt="focus cult image"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="pb-[15px]">Secondary</p>
                      <div className="relative">
                        <div className="w-[110px] sm:w-[139px] aspect-[3.089] drop-shadow-xl">
                          <Image
                            src={`/focus/but2.png`}
                            alt="focus cult image"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <p className="pb-[15px] pt-[15px] md:pt-[30px]">
                        Radio Button
                      </p>
                      <div className="relative">
                        <div className="w-[80px] aspect-[5.714]">
                          <Image
                            src={`/focus/radio.png`}
                            alt="focus cult image"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col items-start">
                  <p className="pb-[20px]">Option Button</p>
                  <div className="relative">
                    <div className="w-[300px] sm:w-[334px] aspect-[1.909] drop-shadow-xl">
                      <Image
                        src={`/focus/option.png`}
                        alt="focus cult image"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="pt-[40px] md:pt-[90px] text-center md:text-left">
                Illustration
              </h2>
              <div className="relative -mx-[22px] sm:-mx-[88px]">
                <div className="w-full aspect-[1.434] drop-shadow-xl">
                  <Image
                    src={`/focus/illustration.png`}
                    alt="focus cult image"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-black text-white flex flex-col items-center justify-center py-[55px] gap-y-[20px]">
            <div className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] flex flex-col items-start justify-center">
              <div className="px-[42px] md:px-[88px]">
                <h2>Dark Mode & Light Mode</h2>
                <p className="font-light py-[15px] md:py-[30px]">
                  A dedicated nightmode dashboard for more enjoyable user
                  experiences. From main menu, home, setting, history, summoning
                  pool and achievement.
                  <br />
                  <br /> Visit this link if you interested to try the prototype
                  of my research.
                  <Link
                    href="https://www.figma.com/proto/gV6Y58TPDZdY8dLdKWp7sC/Focus-app?node-id=0%3A1&viewport=-371%2C-824%2C0.08&scaling=min-zoom&starting-point-node-id=88%3A1874&show-proto-sidebar=1"
                    target="_blank"
                    className="underline pb-[30px]"
                  >
                    https://www.figma.com/proto/gV6Y58TPDZdY8dLdKWp7sC/Focus-app?node-id=0%3A1&viewport=-371%2C-824%2C0.08&scaling=min-zoom&starting-point-node-id=88%3A1874&show-proto-sidebar=1
                  </Link>
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <div className="w-full sm:aspect-[1.117] aspect-[0.7]">
                <Image
                  src={`/focus/darklight.png`}
                  alt="focus cult image"
                  fill
                  className="object-cover sm:object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Focuscult;
