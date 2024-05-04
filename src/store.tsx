import todoReducer from "./slice/TodoSlice"
import testReducer from "./slice/test"
import { loggerMiddleware } from "./middleware"
import { todoApiService } from "./services/todoApi"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

// 當有許多reducer的時候可以利用 combineReducer 將 Reducer 做整合
const reducers = combineReducers(
    {
        todoReducer,
        testReducer,
        [todoApiService.reducerPath]: todoApiService.reducer,
    }
)


// 創建store提供給Provider使用
const store = configureStore({
    reducer: reducers,
    middleware:( getCurrentMiddlewares )=>{
        return getCurrentMiddlewares()
        // .concat(loggerMiddleware)
        .concat(todoApiService.middleware)
    }
    // middleware：dispatch 傳 action 到 UI 的中間層。
    //             1. 可以增加邏輯判斷、紀錄 log 訊息等動作
    //             2. call api 處理
})

// 導出store內會回傳的所有type，useSelector會自動推斷類型
export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
export default store