import logo from './logo.svg';
import React,{ useState } from 'react';
import Lottery from "./components/Lottery"
import { randomNumber } from './utils/randomNumber';

import styled from 'styled-components';
import AddTaskButton from './components/AddTaskButton'
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
  height: 500px;
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

  return (
    <Container>
    {/* <Lottery defaulNumber={[1,2,3,4,5,6]} 
    onRandomNuber={()=>randomNumber()}/>
    <Lottery defaulNumber={[5,5,5,5,5,5]} onRandomNuber={()=>randomNumber()}/> */}
      <ButtonWrapper>
        <AddTaskButton></AddTaskButton>
      </ButtonWrapper>
      <ListWrapper>
        <ul>
          <li>
            <input type="checkbox" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure.</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure.</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure.</span>
          </li>
        </ul>
      </ListWrapper>
    </Container>
    

  )
}
export default App;
