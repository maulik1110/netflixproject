// import {configureStore} from "reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit";


import userReducer from "./userSlics"
import moviesReducer from "./movieSlice";
import GptSliceReducer from "./GptSlice";

const appstore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        Gpt: GptSliceReducer
    }
})

export default appstore;