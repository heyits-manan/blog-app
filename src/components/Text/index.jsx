import React from "react";

const sizeClasses = {
  txtPublicSansSemiBold18: "font-publicsans font-semibold",
  txtPublicSansMedium16: "font-medium font-publicsans",
  txtMerriweatherBlack36: "font-black font-merriweather",
  txtPublicSansLight18: "font-light font-publicsans",
  txtPublicSansLight14Black900: "font-light font-publicsans",
  txtMerriweatherBoldItalic18Gray600: "font-bold font-merriweather italic",
  txtPublicSansRegular18Gray600: "font-normal font-publicsans",
  txtPublicSansRegular24: "font-normal font-publicsans",
  txtMerriweatherBoldItalic18: "font-bold font-merriweather italic",
  txtMerriweatherBoldItalic18Gray900: "font-bold font-merriweather italic",
  txtPublicSansMedium18: "font-medium font-publicsans",
  txtMerriweatherBlack50: "font-black font-merriweather",
  txtMerriweatherBoldItalic36: "font-bold font-merriweather italic",
  txtPublicSansLight14: "font-light font-publicsans",
  txtPublicSansRegular18Indigo900: "font-normal font-publicsans",
  txtPublicSansLight16: "font-light font-publicsans",
  txtMerriweatherBold24: "font-bold font-merriweather",
  txtMerriweatherBoldItalic36WhiteA700: "font-bold font-merriweather italic",
  txtPublicSansRegular18Indigo901: "font-normal font-publicsans",
  txtPublicSansLight18WhiteA700: "font-light font-publicsans",
  txtPublicSansSemiBold18WhiteA700: "font-publicsans font-semibold",
  txtNunitoSansExtraBold24WhiteA700: "font-extrabold font-nunitosans",
  txtPublicSansSemiBold24WhiteA700: "font-publicsans font-semibold",
  txtPublicSansMedium24: "font-medium font-publicsans",
  txtPublicSansLight14WhiteA700: "font-light font-publicsans",
  txtPublicSansSemiBold24: "font-publicsans font-semibold",
  txtPublicSansLight24Bluegray600: "font-light font-publicsans",
  txtPublicSansLight18Bluegray600: "font-light font-publicsans",
  txtMerriweatherBoldItalic48: "font-bold font-merriweather italic",
  txtPublicSansBold18WhiteA700: "font-bold font-publicsans",
  txtPublicSansRegular18: "font-normal font-publicsans",
  txtMerriweatherBoldItalic24: "font-bold font-merriweather italic",
  txtMerriweatherBold16: "font-bold font-merriweather",
  txtMerriweatherBold24Bluegray600: "font-bold font-merriweather",
  txtPublicSansBold18Indigo900: "font-bold font-publicsans",
  txtMerriweatherBold18: "font-bold font-merriweather",
  txtPublicSansBold14: "font-bold font-publicsans",
  txtPublicSansLight24: "font-light font-publicsans",
  txtPublicSansBold36: "font-bold font-publicsans",
  txtPublicSansBold18: "font-bold font-publicsans",
  txtPublicSansRegular24Bluegray600: "font-normal font-publicsans",
  txtNunitoSansExtraBold24: "font-extrabold font-nunitosans",
  txtPublicSansLight18Indigo901: "font-light font-publicsans",
  txtPublicSansLight18Indigo900: "font-light font-publicsans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
