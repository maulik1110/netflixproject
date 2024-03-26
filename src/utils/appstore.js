// import {configureStore} from "reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit";


import userReducer from "./userSlics"
import moviesReducer from "./movieSlice";

const appstore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    }
})

export default appstore;