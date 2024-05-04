
import { createSlice } from "@reduxjs/toolkit"
import { TodoList } from "../type/DataType"

const initialState: TodoList = {
    todoList: [],
}

const todoSlice = createSlice({
    name: "todo",   // slice name
    initialState,   // default state
    reducers: {     // 設定type payload
        submitTodo: (state, action) => {
            // 將action會拿到的字串，存入initially(todoList)中
            state.todoList.push(action.payload) 
        },
        recordTimesStamp: (state) => {
            state.todoList.push(Date.now().toString())
        },
    }
})

export const { submitTodo, recordTimesStamp } = todoSlice.actions

export default todoSlice.reducer