import React from "react";

import { Img, Line, Text } from "components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center p-6 sm:px-5 w-full">
          <div className="header-row mt-0.5 mb-[5px]">
            <div className="flex flex-row gap-3.5 items-center justify-center">
              <Img className="h-6 w-6" src="images/img_edit.svg" alt="edit" />
              <Link
                to={"/"}
                className="text-3xl md:text-[22px] text-gray-600 sm:text-xl uppercase font-sans"
                size="txtNunitoSansExtraBold24"
              >
                Ace Blog
              </Link>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-start md:ml-[0] ml-[211px] w-[29%] md:w-full">
            <ul className="flex flex-row ">
              <li className="mr-4">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-900 text-lg tracking-[0.12px]"
                      : "text-gray-500 text-lg tracking-[0.12px]"
                  }
                  size="txtPublicSansBold18Indigo900"
                >
                  Home
                </NavLink>
              </li>
              <li className="mr-4">
                <NavLink
                  to={"/blogdetails"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-900 text-lg tracking-[0.12px]"
                      : "text-gray-500 text-lg tracking-[0.12px]"
                  }
                  size="txtPublicSansBold18Indigo900"
                >
                  Blog
                </NavLink>
              </li>{" "}
              <li className="mr-4">
                <NavLink
                  to={"/bloggerdetails"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-900 text-lg tracking-[0.12px]"
                      : "text-gray-500 text-lg tracking-[0.12px]"
                  }
                  size="txtPublicSansBold18Indigo900"
                >
                  About
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  to={"/contactus"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-900 text-lg tracking-[0.12px]"
                      : "text-gray-500 text-lg tracking-[0.12px]"
                  }
                  size="txtPublicSansBold18Indigo900"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Img
            className="h-[30px] sm:hidden mb-0.5 md:ml-[0] ml-[324px] w-[30px]"
            src="images/img_search.svg"
            alt="search"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
