import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">LandingPage</Link>
        </li>
        <li>
          <Link to="/blogdetails">BlogDetails</Link>
        </li>
        <li>
          <Link to="/contactus">ContactUs</Link>
        </li>
        <li>
          <Link to="/bloggerdetails">BloggerDetails</Link>
        </li>
      </ul>
    </>
  );
};
export default Home;
