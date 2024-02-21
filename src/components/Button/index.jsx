import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    indigo_900: "bg-indigo-900 text-white-A700",
    gray_300: "bg-gray-300",
    pink_300: "bg-pink-300 shadow-bs",
    white_A700: "bg-white-A700 text-pink-300",
    white_A700_3f: "bg-white-A700_3f text-white-A700",
    gray_302: "bg-gray-302",
    light_blue_50: "bg-light_blue-50",
    lime_50: "bg-lime-50",
    red_50: "bg-red-50",
    indigo_900_67: "bg-indigo-900_67 text-indigo-900",
    gray_600_76: "bg-gray-600_76",
    gray_200: "bg-gray-200 text-bluegray-600",
    indigo_900_4f: "bg-indigo-900_4f",
  },
  outline: {
    indigo_201: "border-2 border-indigo-201 border-solid text-indigo-900",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-[9px]",
  md: "p-[13px]",
  lg: "pr-3.5 py-3.5",
  xl: "p-[18px]",
  "2xl": "pr-5 py-5",
  "3xl": "p-[21px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "fill",
  color = "indigo_900_4f",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_900",
    "gray_300",
    "pink_300",
    "white_A700",
    "white_A700_3f",
    "gray_302",
    "light_blue_50",
    "lime_50",
    "red_50",
    "indigo_900_67",
    "gray_600_76",
    "gray_200",
    "indigo_900_4f",
    "indigo_201",
  ]),
};

export { Button };
