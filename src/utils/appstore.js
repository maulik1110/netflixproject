// import {configureStore} from "reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlics"

const appstore = configureStore({
    reducer: {
        user: userReducer,
    }
})

export default appstore;