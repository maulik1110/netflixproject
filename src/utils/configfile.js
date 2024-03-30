import { createSlice } from "@reduxjs/toolkit";

const congigfile = createSlice({
    name: "config",
    initialState: {
        lang: "en",
    },
    reducers: {
        changelang: (state,action) =>{
            state.lang = action.payload;
        }
    }
})


export const { changelang } = congigfile.actions;
export default congigfile.reducer