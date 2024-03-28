import { createSlice } from "@reduxjs/toolkit";

const Gptslice = createSlice({
    name: "gpt",
    initialState: {
        showgpt: false,
    },
    reducers: {
        toggleGptSearchView: (state)=>{
            state.showgpt =!state.showgpt;
        }
    }
})


export const {toggleGptSearchView} = Gptslice.actions;
export default Gptslice.reducer;