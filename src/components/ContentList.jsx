import React, { memo} from "react";
import styled from "styled-components";


const Li = styled.li`
  list-style: none;
  width: 340px;
  min-height: 48px;
  padding: 1rem 0.5rem;
`

const Content = styled.div`
display: flex;
gap: 1rem;
`
const Input = styled.input`
  appearance: none;
  height: 24px;
  width: 24px;
  background-color: linear-gradient(180deg, #ffffff 0%, #e8eaee 100%);
  border-radius: 7px;
  border: 3px solid #ced1da;
  cursor: pointer;
  user-select: none;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    background-color: #e2e2e2;
  }

  &:after {
    content: "\f00c";
    font: var(--fa-font-solid);
    font-size: 1rem;
    color: #000;
    display: none;
  }

  &:checked:after {
    display: block;
  }
`
const Span = styled.span`
margin-right: auto;
`
const deleteItem = styled.button`
  background-color: #fff;
  width: 1.5rem;
  height: 1.5rem;
  &:hover{
    box-shadow: 0px 10px 39px 0px rgba(0,0,0,0.1);
    cursor: pointer;
  }
  &:focus{
    outline: 1px solid #fff;
    outline-offset: 2px;
  }
  &:active{
    outline: 1px solid #fff;
    outline-offset: 2px;
    transform: scale(0.98);
    transition: 0.35s ease-in;
  }
  &:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
    &:active {
      transform: scale(1);
    }
  }
`

function ContentList({children, status, onUpdatedTodo, id, data,disabled,onDelete}){
    return(
      <Li>
        <Content>
          <div>
              <Input
                type="checkbox"
                checked={status === "DONE"}
                onChange={(e) => {
                onUpdatedTodo(id, "DONE", data)
              }}
              disabled={disabled}
              />
          </div>
          <Span>{children ? children : "test"}</Span>
          <deleteItem
            type="button"
            onChange={(e)=>{
            onDelete(id)
            }}
            disabled={disabled}
          >
            <i className="fa-solid fa-xmark"></i>
          </deleteItem>
        </Content>
      </Li>
    )
}
export default memo(ContentList)