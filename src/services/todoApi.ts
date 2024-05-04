import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface myType {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}

export const todoApiService = createApi({
    // store 中要使用的 reducer 名稱
    reducerPath: 'todoApi',
    // 基礎路徑
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    // 建立 get、post、delete function 的地方
    endpoints: (builder) => ({
        // .query 配對 baseQuery 與這個方法內的路徑
        // any = return 回來的資料
        // string = 傳入的參數類型
        getTodoList: builder.query<myType, string>({
            query: (id) => `/todos/${id}`,
        }),
    }),
})

export const { useGetTodoListQuery } = todoApiService

