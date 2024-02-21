import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const BloggerDetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans gap-10 items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="bg-gray-600 flex flex-row items-center justify-start mx-auto pb-[166px] md:pr-10 sm:pr-5 pr-[166px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-2.5 w-full">
                <div className="md:h-[315px] h-[349px] relative w-[63%] md:w-full">
                  <Img
                    className="absolute h-[315px] left-[0] object-cover top-[0] w-[51%]"
                    src="images/img_group146.png"
                    alt="Group146"
                  />
                  <div className="absolute bottom-[0] flex flex-col items-start justify-start right-[0] w-4/5">
                    <Button
                      className="cursor-pointer font-light font-publicsans leading-[normal] min-w-[82px] text-center text-lg"
                      shape="round"
                      color="white_A700_3f"
                      size="xs"
                    >
                      Writer
                    </Button>
                    <Text
                      className="italic mt-[30px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[0.12px] w-full"
                      size="txtMerriweatherBoldItalic36WhiteA700"
                    >
                      Eps 3 : How to write a book properly and correctly by
                      paying attention to various parts to support the story
                    </Text>
                    <div className="flex flex-row font-publicsans gap-3.5 items-center justify-start mt-5 w-[37%] md:w-full">
                      <Img
                        className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                        src="images/img_ellipse5.png"
                        alt="EllipseFive"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-lg text-white-A700 tracking-[0.12px]"
                          size="txtPublicSansSemiBold18WhiteA700"
                        >
                          By Jhone Leonardo
                        </Text>
                        <Text
                          className="mt-[5px] text-sm text-white-A700"
                          size="txtPublicSansLight14WhiteA700"
                        >
                          Podcaster & Blogger
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_3f flex md:flex-1 flex-col items-center justify-start mb-[21px] md:mt-0 mt-[81px] p-8 sm:px-5 rounded-[5px] w-[28%] md:w-full">
                  <div className="flex flex-col gap-[25px] items-center justify-start my-[11px] w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.12px] w-full"
                      size="txtPublicSansSemiBold24WhiteA700"
                    >
                      Find and make it easy for yourself in listening to our
                      podcasts on
                    </Text>
                    <div className="flex flex-row gap-7 items-center justify-between w-full">
                      <Img
                        className="h-[50px] mb-0.5 w-[50px]"
                        src="images/img_volume.svg"
                        alt="volume"
                      />
                      <Img
                        className="h-[50px] mb-0.5 w-[50px]"
                        src="images/img_volume_50X50.svg"
                        alt="volume One"
                      />
                      <Img
                        className="h-[50px] mb-0.5 w-[50px]"
                        src="images/img_signal_50X50.svg"
                        alt="signal"
                      />
                      <Img
                        className="h-[50px] mt-0.5 w-[50px]"
                        src="images/img_camera_50X50.svg"
                        alt="camera"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end mt-[-106px] mx-auto p-[21px] sm:px-5 rounded-[5px] shadow-bs5 w-[64%] z-[1]">
              <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between mt-2 w-full">
                <Img
                  className="h-[215px] md:h-auto object-cover rounded-[5px]"
                  src="images/img_rectangle39.png"
                  alt="RectangleThirtyNine"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-light leading-[normal] min-w-[74px] text-base text-center"
                      shape="round"
                      color="gray_200"
                      size="xs"
                    >
                      Writer
                    </Button>
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtPublicSansLight14"
                    >
                      25 August, 2020{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start mt-5 w-full">
                    <Text
                      className="italic text-gray-900 text-lg tracking-[0.12px] w-full"
                      size="txtMerriweatherBoldItalic18Gray900"
                    >
                      Eps 3 : How to write a book properly and correctly by
                      paying attention to various parts to support the story
                    </Text>
                    <Text
                      className="leading-[25.00px] text-bluegray-600 text-sm w-full"
                      size="txtPublicSansLight14"
                    >
                      Did you come here for something in particular or just
                      general Riker-bashing? And blowing into maximum warp
                      speed, you appeared for an instant to be in two places at
                      once. We have a sabot...
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start mt-2.5 w-[42%] md:w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[132px]"
                      leftIcon={
                        <Img
                          className="h-5 mt-[13px] mb-3 ml-[21px] mr-2.5"
                          src="images/img_play.svg"
                          alt="play"
                        />
                      }
                      shape="round"
                      color="indigo_900"
                      size="lg"
                    >
                      <div className="font-light leading-[normal] text-left text-sm">
                        Play Now
                      </div>
                    </Button>
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtPublicSansLight14"
                    >
                      Go to Spotify Now
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1106px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start w-2/5 md:w-full">
              <Button
                className="flex h-[76px] items-center justify-center w-[76px]"
                shape="circle"
                color="gray_302"
                size="md"
              >
                <Img
                  className="h-[50px]"
                  src="images/img_microphone.svg"
                  alt="microphone"
                />
              </Button>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="ml-0.5 md:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-gray-600"
                  size="txtMerriweatherBlack36"
                >
                  Latest Podcasts{" "}
                </Text>
                <Text
                  className="mt-[5px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl tracking-[0.12px]"
                  size="txtPublicSansRegular24Bluegray600"
                >
                  Get started on latest episodes
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-5 w-full">
              <div className="md:gap-5 gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1216.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1215.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1218.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1217.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group Three"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1220.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group Four"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1219.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group Five"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1222.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group Six"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1221.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group Seven"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1224.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group Eight"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1223.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group Nine"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1215.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group Ten"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mb-3 mt-0.5 rounded-[5px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-end p-[67px] md:px-10 sm:px-5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group1225.png')",
                      }}
                    >
                      <Button
                        className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                        shape="circle"
                        size="xl"
                      >
                        <Img
                          className="h-[35px]"
                          src="images/img_group.svg"
                          alt="Group Eleven"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtMerriweatherBold16"
                      >
                        The secrets of writing a good book
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start mt-[50px] w-1/5 md:w-full">
              <Text
                className="bg-indigo-901 flex h-10 items-center justify-center rounded-[50%] text-center text-lg text-white-A700 w-10"
                size="txtPublicSansRegular18"
              >
                1
              </Text>
              <Text
                className="bg-white-A700 flex h-10 items-center justify-center ml-5 rounded-[50%] text-center text-indigo-901 text-lg w-10"
                size="txtPublicSansRegular18Indigo901"
              >
                2
              </Text>
              <div className="flex flex-row gap-[15px] items-start justify-between ml-10 w-[34%]">
                <Text
                  className="text-indigo-901 text-lg"
                  size="txtPublicSansLight18Indigo901"
                >
                  Next
                </Text>
                <Img
                  className="h-4 mt-[3px] w-4"
                  src="images/img_arrowright_indigo_901.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <Footer className="bg-gray-600 flex items-center justify-center mt-[97px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default BloggerDetailsPage;
