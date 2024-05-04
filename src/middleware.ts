// 需要引入 Type-MiddleWare
import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "./store";


export const loggerMiddleware:Middleware<{},RootState> = store => nextDispatch => action => {
    // 啟動 Dispatch 之前先 log出 action
    // alert(`dispatching${action}`);
    console.log('dispatching', action);
    // 更新 store 的內容
    let result = nextDispatch(action);
    // log 出 store 更新後的 state
    // alert(`next state,${store.getState()}`);
    console.log('next state', store.getState());
    return result;
}