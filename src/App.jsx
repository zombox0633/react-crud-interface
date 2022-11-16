import React from 'react';

import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import AddTaskButton from './components/AddTaskButton';
import CreateTodoModal from './components/CreateTodoModal';
import Ul from './components/UnorderedList';
import useTodo from './hook/useTodo';
import TodoProvider from './context/TodoProviser';

const Container = styled.div`
  background-color: #8c64e6;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

const ListWrapper =styled.div`
  width: 500px;
  min-height: 500px;
  border-radius: 12px;
  background-color: #fff;
`
const ButtonWrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
  justify-content: flex-end;
  align-items: center;

`

// let rerender = 0;
// const x = 'h'

function App() {
  const {
    isOpenModal,
    setIsOpenModal,
  } = useTodo()
  //console.log(process.env.REACT_APP_BASE_URL_API)
  return (
    <TodoProvider>
      <Container customPadding='2rem 0'>
        <ToastContainer/>
        {isOpenModal &&(
          <CreateTodoModal
          onClose = {()=>{
            setIsOpenModal((prev)=>!prev)
          }}
        />
        )}
        <ButtonWrapper>
          <AddTaskButton
            onClick={()=>{
              setIsOpenModal((prev)=>!prev)
            }}
          />
        </ButtonWrapper>
        <ListWrapper>
          <Ul/>
        </ListWrapper>
      </Container>
    </TodoProvider>
  )
}
export default App;
