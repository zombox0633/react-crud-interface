import React, { useEffect, useState } from 'react';

import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import AddTaskButton from './components/AddTaskButton';
import CreateTodoModal from './components/CreateTodoModal';
import Ul from './components/UnorderedList';
import http from './config/axiosGlobalConfig';

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
  const [isOpenModal, setIsOpenModal] = useState(false)

  // console.log(process.env.REACT_APP_BASE_URL_API)

  const handIeEscapeOnCloseModal = (event)=>{
    if(event.code === "Escape"){
      setIsOpenModal(false)
    }
  }

  useEffect(() => {
    if (isOpenModal) {
      document.documentElement.style.overflowY = "hidden"
    }

    return () => {
      document.documentElement.style.overflowY = "auto"
    }
  }, [isOpenModal])

  useEffect(()=>{
    document.addEventListener("keyup",handIeEscapeOnCloseModal,false)
    return ()=>{
      document.removeEventListener("keyup",handIeEscapeOnCloseModal,false)
    }
  })

  const [todos, settodos] = useState()

    const onFetchData = async() =>{
        const response = await http.get("/rest/card/board")
        settodos(response.data)
    }
    useEffect(() => {
        onFetchData()
    }, [])

  return (
    <Container customPadding='2rem 0'>
      <ToastContainer/>
      {isOpenModal &&(
        <CreateTodoModal
        onFetchData={onFetchData}
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
        <Ul data={todos}/>
      </ListWrapper>
      {/* <Lottery defaulNumber={[1,2,3,4,5,6]} 
    onRandomNuber={()=>randomNumber()}/>
    <Lottery defaulNumber={[5,5,5,5,5,5]} onRandomNuber={()=>randomNumber()}/> */}
    </Container>
    

  )
}
export default App;
