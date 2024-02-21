import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[111px] items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1103px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[45px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-bluegray-600"
                  size="txtPublicSansBold36"
                >
                  Contact us
                </Text>
                <Text
                  className="mt-[5px] text-bluegray-600 text-lg"
                  size="txtPublicSansLight18Bluegray600"
                >
                  Complete the form to contact us
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start w-[29%] md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-bluegray-600"
                    size="txtPublicSansBold36"
                  >
                    Info
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[44%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="text-bluegray-600 text-lg"
                        size="txtPublicSansLight18Bluegray600"
                      >
                        0331223282
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[3px] w-[67%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_mail.svg"
                        alt="mail"
                      />
                      <Text
                        className="text-bluegray-600 text-lg"
                        size="txtPublicSansLight18Bluegray600"
                      >
                        Hellolaos@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[9px] items-start justify-start md:ml-[0] ml-[3px] w-full">
                      <Img
                        className="h-5 mt-[5px] w-[6%]"
                        src="images/img_location_20X17.svg"
                        alt="location"
                      />
                      <Text
                        className="sm:flex-1 leading-[30.00px] text-bluegray-600 text-lg w-[92%] sm:w-full"
                        size="txtPublicSansLight18Bluegray600"
                      >
                        Massachusetts Ave NW, Washington, DC 20036
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-1 p-[26px] sm:px-5 rounded-[10px] shadow-bs4 w-[69%] md:w-full">
                  <div className="flex flex-col gap-[30px] items-start justify-start my-[17px] rounded-[5px] w-full">
                    <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-full">
                      <Input
                        name="field"
                        placeholder="Your Name"
                        className="font-light leading-[normal] md:text-[22px] p-0 placeholder:text-gray-400 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        type="text"
                      ></Input>
                      <Input
                        name="field One"
                        placeholder="Your Email"
                        className="font-light leading-[normal] md:text-[22px] p-0 placeholder:text-gray-400 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        type="email"
                      ></Input>
                    </div>
                    <Input
                      name="field Two"
                      placeholder="Your Subject"
                      className="font-light leading-[normal] md:text-[22px] p-0 placeholder:text-gray-400 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="w-full"
                    ></Input>
                    <TextArea
                      className="bg-transparent border border-gray-301 border-solid font-light leading-[normal] pb-[35px] pl-[25px] pr-[35px] pt-[19px] sm:px-5 rounded-[5px] text-2xl md:text-[22px] placeholder:text-gray-400 text-gray-400 text-left sm:text-xl w-full"
                      name="field Three"
                      placeholder="Description"
                    ></TextArea>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[190px] py-6 text-center text-lg"
                      shape="round"
                      color="indigo_900"
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-600 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
