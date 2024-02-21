import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-center mb-[35px] mt-[65px] mx-auto w-[78%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-end w-[31%] md:w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start mt-0.5 w-[43%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="defaultNoData.png"
                  alt="edit One"
                />
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl uppercase"
                  size="txtNunitoSansExtraBold24WhiteA700"
                >
                  Blogsly
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start w-[48%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_favorite.svg"
                  alt="favorite"
                />
                <Text
                  className="text-lg text-white-A700"
                  size="txtPublicSansMedium18"
                >
                  Build with heart
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-[50px] items-start justify-center md:mt-0 mt-[23px] w-[43%] md:w-full">
              <Text
                className="text-lg text-white-A700"
                size="txtPublicSansLight18WhiteA700"
              >
                Home
              </Text>
              <Text
                className="text-lg text-white-A700"
                size="txtPublicSansLight18WhiteA700"
              >
                Podcast
              </Text>
              <Text
                className="text-lg text-white-A700"
                size="txtPublicSansLight18WhiteA700"
              >
                Blog
              </Text>
              <Text
                className="text-lg text-white-A700"
                size="txtPublicSansLight18WhiteA700"
              >
                About
              </Text>
              <Text
                className="text-lg text-white-A700"
                size="txtPublicSansLight18WhiteA700"
              >
                Contact
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[178px] w-[11%] md:w-full">
              <Text
                className="text-lg text-white-A700"
                size="txtPublicSansBold18WhiteA700"
              >
                Follow Me on
              </Text>
              <Img
                className="h-[25px] w-full"
                src="images/img_group94.svg"
                alt="GroupNinetyFour"
              />
            </div>
          </div>
          <Text
            className="text-sm text-white-A700"
            size="txtPublicSansLight14WhiteA700"
          >
            Powered by Blogsly
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
