import React from "react"
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

function ContentList({children}){
    return(
      <Li>
        <Content>
          <div>
              <Input type="checkbox" />
          </div>
          <span>{children}</span>
        </Content>
      </Li>
    )
}
export default ContentList