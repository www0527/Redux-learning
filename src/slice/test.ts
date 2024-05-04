import { createSlice } from "@reduxjs/toolkit";
import { Test } from "../type/DataType";


const initialState:Test ={
    testContent: ["我在做測試"], 
}

const TestSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        addTestContent: (state, action) => {
            state.testContent.push(action.payload)
        }
    }
})

export const {addTestContent} = TestSlice.actions
export default TestSlice.reducer