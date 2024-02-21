import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const LandingPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[90px] items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1030px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col gap-8 justify-start">
                <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-full">
                  <Img
                    className="h-[61px] md:mt-0 mt-[66px] w-[61px]"
                    src="images/img_cart.svg"
                    alt="cart"
                  />
                  <div className="flex flex-col gap-[30px] items-center justify-start">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-600 w-full"
                      size="txtMerriweatherBlack50"
                    >
                      Share via writing and podcasts, hope you enjoy
                    </Text>
                    <Text
                      className="leading-[35.00px] text-2xl md:text-[22px] text-center text-gray-601 sm:text-xl w-[78%] sm:w-full"
                      size="txtPublicSansRegular24"
                    >
                      Increase your knowledge by reading new things and I will
                      share whatever I know for you, as long as I enjoy it
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-end md:ml-[0] ml-[259px] rounded-[35.5px] w-[56%] md:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[221px] rounded-[35.5px] shadow-bs1 text-2xl md:text-[22px] text-center sm:text-xl tracking-[0.12px]"
                    color="indigo_900"
                    size="3xl"
                  >
                    Read More
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[271px] rounded-[35.5px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[0.12px]"
                    color="indigo_201"
                    size="3xl"
                    variant="outline"
                  >
                    Listen to Podcasts
                  </Button>
                </div>
              </div>
              <Img
                className="h-[61px] md:mt-0 mt-[205px] w-[61px]"
                src="images/img_ticket.svg"
                alt="ticket"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-start max-w-[1111px] mt-[162px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[39%] sm:w-full">
                <Button
                  className="flex h-[76px] items-center justify-center w-[76px]"
                  shape="circle"
                  color="gray_300"
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
                    className="mt-[5px] text-2xl md:text-[22px] text-gray-601 sm:text-xl tracking-[0.12px]"
                    size="txtPublicSansRegular24"
                  >
                    Get started on latest episodes
                  </Text>
                </div>
              </div>
              <Text
                className="text-indigo-901 text-sm tracking-[0.12px]"
                size="txtPublicSansBold14"
              >
                See all podcasts
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group1209.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] rounded-[50%] w-[72px]"
                      shape="circle"
                      color="gray_600_76"
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
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group1210.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] rounded-[50%] w-[72px]"
                      shape="circle"
                      color="gray_600_76"
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
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group1211.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] rounded-[50%] w-[72px]"
                      shape="circle"
                      color="gray_600_76"
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
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group1212.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] rounded-[50%] w-[72px]"
                      shape="circle"
                      color="gray_600_76"
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
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-[29px] items-start justify-start max-w-[1110px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[50px] justify-start w-[66%] md:w-full">
              <List
                className="flex flex-col gap-[50px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                      <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[34%] sm:w-full">
                        <Img
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          src="images/img_ellipse5.png"
                          alt="EllipseFive"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-bluegray-600 text-lg"
                            size="txtPublicSansSemiBold18"
                          >
                            By Jhone Leonardo
                          </Text>
                          <Text
                            className="mt-[5px] text-bluegray-600 text-sm"
                            size="txtPublicSansLight14"
                          >
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        <span className="text-bluegray-600 font-publicsans text-left font-light">
                          Category{" "}
                        </span>
                        <span className="text-pink-300 font-merriweather text-left text-lg font-black">
                          Writing
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="italic ml-0.5 md:ml-[0] mt-[30px] text-5xl sm:text-[38px] md:text-[44px] text-gray-600 tracking-[0.12px] w-full"
                      size="txtMerriweatherBoldItalic48"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Img
                      className="h-[390px] sm:h-auto ml-0.5 md:ml-[0] mt-[30px] object-cover rounded-[5px] w-full"
                      src="images/img_rectangle11.png"
                      alt="RectangleEleven"
                    />
                    <Text
                      className="leading-[30.00px] ml-0.5 md:ml-[0] mt-[30px] text-bluegray-900 text-lg w-full"
                      size="txtPublicSansLight18"
                    >
                      We all know that every person has his or her own desire to
                      work, but do you know that we can actually be consistent
                      in making works if we want, now in this article I want to
                      invite all of you to learn to be consistent in creating.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-5 w-[65%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="light_blue_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          5 minutes ago
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center w-[24%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="lime_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[23%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="red_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_location.svg"
                            alt="location"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[255px] mt-5 pl-7 py-[25px]"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          className="h-[25px] mt-6 mb-[23px] ml-[19px] mr-[29px]"
                          src="images/img_arrowright.svg"
                          alt="arrow_right"
                        />
                      }
                      shape="round"
                      color="indigo_900_67"
                    >
                      <div className="font-bold font-publicsans leading-[normal] sm:pl-5 text-left text-lg tracking-[0.12px]">
                        Continue Reading
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                      <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[34%] sm:w-full">
                        <Img
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          src="images/img_ellipse5.png"
                          alt="EllipseFive One"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-bluegray-600 text-lg"
                            size="txtPublicSansSemiBold18"
                          >
                            By Jhone Leonardo
                          </Text>
                          <Text
                            className="mt-[5px] text-bluegray-600 text-sm"
                            size="txtPublicSansLight14"
                          >
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        <span className="text-bluegray-600 font-publicsans text-left font-light">
                          Category{" "}
                        </span>
                        <span className="text-pink-300 font-merriweather text-left text-lg font-black">
                          Writing
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="italic ml-0.5 md:ml-[0] mt-[30px] text-5xl sm:text-[38px] md:text-[44px] text-gray-600 tracking-[0.12px] w-full"
                      size="txtMerriweatherBoldItalic48"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Img
                      className="h-[390px] sm:h-auto ml-0.5 md:ml-[0] mt-[30px] object-cover rounded-[5px] w-full"
                      src="images/img_rectangle11_390X728.png"
                      alt="RectangleEleven One"
                    />
                    <Text
                      className="leading-[30.00px] ml-0.5 md:ml-[0] mt-[30px] text-bluegray-900 text-lg w-full"
                      size="txtPublicSansLight18"
                    >
                      We all know that every person has his or her own desire to
                      work, but do you know that we can actually be consistent
                      in making works if we want, now in this article I want to
                      invite all of you to learn to be consistent in creating.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-5 w-[65%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="light_blue_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_clock.svg"
                            alt="clock One"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          5 minutes ago
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center w-[24%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="lime_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark One"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[23%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="red_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_location.svg"
                            alt="location One"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[255px] mt-5 pl-7 py-[25px]"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          className="h-[25px] mt-6 mb-[23px] ml-[19px] mr-[29px]"
                          src="images/img_arrowright.svg"
                          alt="arrow_right"
                        />
                      }
                      shape="round"
                      color="indigo_900_67"
                    >
                      <div className="font-bold font-publicsans leading-[normal] sm:pl-5 text-left text-lg tracking-[0.12px]">
                        Continue Reading
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                      <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[34%] sm:w-full">
                        <Img
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          src="images/img_ellipse5.png"
                          alt="EllipseFive Two"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-bluegray-600 text-lg"
                            size="txtPublicSansSemiBold18"
                          >
                            By Jhone Leonardo
                          </Text>
                          <Text
                            className="mt-[5px] text-bluegray-600 text-sm"
                            size="txtPublicSansLight14"
                          >
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        <span className="text-bluegray-600 font-publicsans text-left font-light">
                          Category{" "}
                        </span>
                        <span className="text-pink-300 font-merriweather text-left text-lg font-black">
                          Writing
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="italic ml-0.5 md:ml-[0] mt-[30px] text-5xl sm:text-[38px] md:text-[44px] text-gray-600 tracking-[0.12px] w-full"
                      size="txtMerriweatherBoldItalic48"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Img
                      className="h-[390px] sm:h-auto ml-0.5 md:ml-[0] mt-[30px] object-cover rounded-[5px] w-full"
                      src="images/img_rectangle11_1.png"
                      alt="RectangleEleven Two"
                    />
                    <Text
                      className="leading-[30.00px] ml-0.5 md:ml-[0] mt-[30px] text-bluegray-900 text-lg w-full"
                      size="txtPublicSansLight18"
                    >
                      We all know that every person has his or her own desire to
                      work, but do you know that we can actually be consistent
                      in making works if we want, now in this article I want to
                      invite all of you to learn to be consistent in creating.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-5 w-[65%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="light_blue_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_clock.svg"
                            alt="clock Two"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          5 minutes ago
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center w-[24%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="lime_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark Two"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[23%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          color="red_50"
                          size="md"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_location.svg"
                            alt="location Two"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPublicSansLight14Black900"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[255px] mt-5 pl-7 py-[25px]"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          className="h-[25px] mt-6 mb-[23px] ml-[19px] mr-[29px]"
                          src="images/img_arrowright.svg"
                          alt="arrow_right"
                        />
                      }
                      shape="round"
                      color="indigo_900_67"
                    >
                      <div className="font-bold font-publicsans leading-[normal] sm:pl-5 text-left text-lg tracking-[0.12px]">
                        Continue Reading
                      </div>
                    </Button>
                  </div>
                </div>
              </List>
              <div className="flex flex-row items-center justify-end md:ml-[0] ml-[450px] w-[29%] md:w-full">
                <Text
                  className="bg-indigo-900 flex h-10 items-center justify-center rounded-[50%] text-center text-lg text-white-A700 w-10"
                  size="txtPublicSansRegular18"
                >
                  1
                </Text>
                <Text
                  className="bg-white-A700 flex h-10 items-center justify-center ml-5 rounded-[50%] text-center text-indigo-900 text-lg w-10"
                  size="txtPublicSansRegular18Indigo900"
                >
                  2
                </Text>
                <div className="flex flex-row gap-[15px] items-start justify-between ml-10 w-[34%]">
                  <Text
                    className="text-indigo-900 text-lg"
                    size="txtPublicSansLight18Indigo900"
                  >
                    Next
                  </Text>
                  <Img
                    className="h-4 mt-[3px] w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright Three"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start w-[32%] md:w-full">
              <div
                className="common-pointer flex flex-col items-start justify-start rounded-[5px] w-full"
                onClick={() => navigate("/bloggerdetails")}
              >
                <Img
                  className="h-[400px] sm:h-auto object-cover rounded-[5px] w-full"
                  src="images/img_rectangle10.png"
                  alt="RectangleTen"
                />
                <div className="flex flex-col items-start justify-start mt-5">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-600 sm:text-xl"
                    size="txtMerriweatherBold24"
                  >
                    Jhone Leonardo
                  </Text>
                  <Text
                    className="mt-[5px] text-base text-bluegray-600"
                    size="txtPublicSansMedium16"
                  >
                    Podcaster & Blogger
                  </Text>
                </div>
                <Text
                  className="leading-[30.00px] mt-[26px] text-bluegray-600 text-lg w-full"
                  size="txtPublicSansLight18Bluegray600"
                >
                  I want to share knowledge in my own style. I have been working
                  on various things that I think I really need to share with you
                  all. I am a jhone podcaster and blogger
                </Text>
              </div>
              <div className="flex flex-col font-merriweather gap-5 items-start justify-start w-[56%] md:w-full">
                <Text
                  className="text-gray-600 text-lg"
                  size="txtMerriweatherBold18"
                >
                  Follow Me On
                </Text>
                <div className="flex flex-col font-publicsans gap-[15px] items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-evenly w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_email1.svg"
                      alt="emailOne"
                    />
                    <Text
                      className="text-base text-bluegray-600"
                      size="txtPublicSansLight16"
                    >
                      Hellojhone@gmail.com
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[77%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_camera.svg"
                      alt="camera"
                    />
                    <Text
                      className="ml-[5px] text-base text-bluegray-600"
                      size="txtPublicSansLight16"
                    >
                      @Johoe_Podcast
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[78%] md:w-full">
                    <Img
                      className="common-pointer h-5 w-5"
                      src="images/img_twitter.svg"
                      alt="twitter"
                      onClick={handleNavigate}
                    />
                    <Text
                      className="ml-[5px] text-base text-bluegray-600"
                      size="txtPublicSansLight16"
                    >
                      @JohoeLeonardo
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-merriweather items-start justify-start w-full">
                <Text
                  className="text-gray-600 text-lg"
                  size="txtMerriweatherBold18"
                >
                  Tranding Blog
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start mt-5 rounded-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_bloghead.png')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2.5 h-[200px] items-start justify-end p-[26px] sm:px-5 rounded-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_title.png')" }}
                  >
                    <Text
                      className="italic ml-3.5 md:ml-[0] mt-[71px] text-lg text-white-A700 w-[91%] sm:w-full"
                      size="txtMerriweatherBoldItalic18"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Text
                      className="ml-3.5 md:ml-[0] text-sm text-white-A700"
                      size="txtPublicSansLight14WhiteA700"
                    >
                      5 minutes ago
                    </Text>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-5 items-center mt-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      src="images/img_rectangle14.png"
                      alt="RectangleFourteen"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="italic text-gray-600 text-lg w-full"
                        size="txtMerriweatherBoldItalic18Gray600"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      src="images/img_rectangle14_96X96.png"
                      alt="RectangleFourteen One"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="italic text-gray-600 text-lg w-full"
                        size="txtMerriweatherBoldItalic18Gray600"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      src="images/img_rectangle14_1.png"
                      alt="RectangleFourteen Two"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="italic text-gray-600 text-lg w-full"
                        size="txtMerriweatherBoldItalic18Gray600"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      src="images/img_rectangle14_2.png"
                      alt="RectangleFourteen Three"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start">
                      <Text
                        className="italic text-gray-600 text-lg w-full"
                        size="txtMerriweatherBoldItalic18Gray600"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtPublicSansLight14"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col font-merriweather gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-600 text-lg tracking-[0.12px]"
                  size="txtMerriweatherBold18"
                >
                  Categories
                </Text>
                <div className="flex flex-col font-publicsans gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      Writing
                    </Text>
                    <Text
                      className="bg-blue-50 flex h-10 items-center justify-center rounded-[50%] text-center text-gray-600 text-lg w-10"
                      size="txtPublicSansRegular18Gray600"
                    >
                      1
                    </Text>
                  </div>
                  <Line className="bg-bluegray-100 h-[0.5px] w-full" />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      Working
                    </Text>
                    <Text
                      className="bg-blue-50 flex h-10 items-center justify-center rounded-[50%] text-center text-gray-600 text-lg w-10"
                      size="txtPublicSansRegular18Gray600"
                    >
                      5
                    </Text>
                  </div>
                  <Line className="bg-bluegray-100 h-[0.5px] w-full" />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtPublicSansLight18Bluegray600"
                    >
                      Podcaster
                    </Text>
                    <Text
                      className="bg-blue-50 flex h-10 items-center justify-center rounded-[50%] text-center text-gray-600 text-lg w-10"
                      size="txtPublicSansRegular18Gray600"
                    >
                      3
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-50 flex flex-col items-center justify-end max-w-[1110px] mt-[100px] mx-auto p-[50px] md:px-5 rounded-[5px] w-full">
            <div className="flex md:flex-col flex-row md:gap-[53px] items-start justify-between mt-8 w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-indigo-900 text-lg"
                  size="txtPublicSansLight18Indigo900"
                >
                  NEWSLETTER
                </Text>
                <Text
                  className="mt-[5px] text-4xl sm:text-[32px] md:text-[34px] text-gray-600 w-full"
                  size="txtMerriweatherBlack36"
                >
                  Subscribe to our website newsletter to receive news and
                  updates.
                </Text>
                <Text
                  className="mt-5 text-bluegray-900 text-lg"
                  size="txtPublicSansLight18"
                >
                  Get special offers directly to your email every week!
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] justify-start w-[44%] md:w-full">
                <div className="flex flex-col gap-5 items-start justify-start rounded-[5px] w-full">
                  <Input
                    name="field"
                    placeholder="Your Email"
                    className="font-bold leading-[normal] p-0 placeholder:text-indigo-900_79 text-left text-lg w-full"
                    wrapClassName="border border-indigo-900 border-solid w-full"
                    type="email"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[137px] text-center text-lg"
                    shape="round"
                    color="indigo_900"
                    size="xl"
                  >
                    Subscribe
                  </Button>
                </div>
                <Button
                  className="flex h-[77px] items-center justify-center md:ml-[0] ml-[283px] mr-[77px] rounded-[50%] w-[77px]"
                  color="pink_300"
                  size="sm"
                >
                  <Img
                    className="h-[55px]"
                    src="images/img_ticket_77X77.svg"
                    alt="ticket One"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-600 flex items-center justify-center mt-[129px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
