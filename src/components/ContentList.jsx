import React, { memo } from "react";
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

function ContentList({children, status, onUpdatedTodo, id, data,disabled}){
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
          <span>{children ? children : "test"}</span>
        </Content>
      </Li>
    )
}
export default memo(ContentList)