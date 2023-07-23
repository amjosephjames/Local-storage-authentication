import React from "react";
import { useRoutes } from "react-router-dom";
import Homescreen from "./homescreen";
import Signup from "./signup";
import Signin from "./signin";
import Mainscreen from "./mainscreen";
import Forgotpassword from "./forgotpassword";
import Resetpassword from "./resetpassword";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Homescreen />,
        },
        {
          path: "/",
          element: <Homescreen />,
        },
      ],
    },
    {
      path: "/signup",
      children: [
        {
          index: true,
          element: <Signup />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "/signin",
      children: [
        {
          index: true,
          element: <Signin />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
      ],
    },
    {
      path: "/forgotpassword",
      children: [
        {
          index: true,
          element: <Forgotpassword />,
        },
        {
          path: "/forgotpassword",
          element: <Forgotpassword />,
        },
      ],
    },
    {
      path: "/resetpassword",
      children: [
        {
          index: true,
          element: <Resetpassword />,
        },
        {
          path: "/resetpassword",
          element: <Resetpassword />,
        },
      ],
    },
    {
      path: "/mainscreen",
      children: [
        {
          index: true,
          element: <Mainscreen />,
        },
        {
          path: "/mainscreen",
          element: <Mainscreen />,
        },
      ],
    },
  ]);

  return element;
};
export default AllRoutes;
