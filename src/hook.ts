import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux";
import { RootState,AppDispatch } from "./store";

// 需要修改內容時使用
export const useAppDispatch = () => useDispatch<AppDispatch>()
// 獲取資料時使用(讓TS去自動判定Type)
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

