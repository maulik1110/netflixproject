import React from 'react'
import Loginpage from './Loginpage'
import Browse from './Browse'
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from 'react-router-dom'

const Body = () => {

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
  return (
    <div>
        <RouterProvider router={appRouter}/>
        {/* <Loginpage/>
        <Browse/> */}
    </div>
  )
}

export default Body