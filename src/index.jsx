import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "Layout";
import ContactUsPage from "pages/ContactUs";
import LandingPage from "pages/LandingPage";
import BlogDetailsPage from "pages/BlogDetails";
import BloggerDetailsPage from "pages/BloggerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "blogdetails",
        element: <BlogDetailsPage />,
      },
      {
        path: "bloggerdetails",
        element: <BloggerDetailsPage />,
      },

      {
        path: "contactus",
        element: <ContactUsPage />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
