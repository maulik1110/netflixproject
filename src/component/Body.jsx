import React, { useEffect } from 'react'
import Loginpage from './Loginpage'
import Browse from './Browse'
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlics'

const Body = () => {
    const dispatch = useDispatch()

    const appRouter=createBrowserRouter([
        {
            path: "/",
            element: <Loginpage/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid , email:email, displayName: displayName}));
              console.log(user);
              // ...
            } else {
              // User is signed out
              dispatch(removeUser())
              // ...
            }
          });
    },[])
  return (
    <div>
        <RouterProvider router={appRouter}/>
        {/* <Loginpage/>
        <Browse/> */}
    </div>
  )
}

export default Body