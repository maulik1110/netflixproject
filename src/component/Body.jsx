import React, { useEffect } from "react";
import Loginpage from "./Loginpage";
import Browse from "./Browse";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlics";

const Body = () => {
 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Loginpage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  


  return (
    <div>
      <RouterProvider router={appRouter} />
      {/* <Loginpage/>
        <Browse/> */}
    </div>
  );
};

export default Body;
