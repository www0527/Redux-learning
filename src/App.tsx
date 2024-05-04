import { useSelector } from 'react-redux';
import './App.css';
import styled from 'styled-components'
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from './hook';
import TodoSlice from './slice/TodoSlice';
import { submitTodo, recordTimesStamp } from "./slice/TodoSlice"
import { myType, useGetTodoListQuery } from './services/todoApi';

const Wrapper = styled.div`
  padding: 1.5rem;
`

const Title = styled.h2`
  font-weight: 900;
  margin-top: 2rem;
`

const NoteInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: .5rem;
  box-sizing: border-box;
`

const SubmitBtn = styled.button`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
  border: 0;
  font-weight: 900;
  margin-top: 1rem;

  :active {
    background: #000000be;
  }
`

const Item = styled.div`
  margin-top: 1rem;

  > b {
    margin-right: .5rem;
  }
`


function App() {

  const [input, setInput] = useState("")
  
  const [apiInput, setApiInput] = useState("")
  const [dataSelector, setDataSelector] = useState("")
  const { data, error, isLoading, refetch } = useGetTodoListQuery(dataSelector);
  useEffect(()=>{
    setDataSelector(apiInput)
  },[apiInput])
  console.log(data);

  // 利用 useAppSelector拿到 reducer 提供的內容
  const todoReducer = useAppSelector(state => state.todoReducer)
  const todoList = todoReducer.todoList
  const dispatch = useAppDispatch()

  return (
    <Wrapper>
      <Title>TODO LIST</Title>
      <NoteInput
        type="text"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value)
        }} />
      <SubmitBtn
        onClick={() => {
          dispatch(submitTodo(input))
        }}
      >
        Submit
      </SubmitBtn>
      <SubmitBtn
        onClick={() => { dispatch(recordTimesStamp()) }}
      >
        Record Timestamp
      </SubmitBtn>
      <Title>List</Title>
      {
        todoList.map((data, index) => {
          return (
            <Item
              key={data}
            >
              <b>{index + 1}</b>
              {data}
            </Item>
          )
        })
      }
      <Title>List 2</Title>
      {
        isLoading ? <p>isLoading</p> :
          data ? (
            <div>
              <p>User ID: {data.id}</p>
              <p>Title: {data.title}</p>
              <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
            </div>
          ) : (
            <p>No data available</p>
          )
      }
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setApiInput(e.target.value)
        }} 
        value={apiInput}
        />
    </Wrapper>
  );
}

export default App;
