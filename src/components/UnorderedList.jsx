import React,{useContext} from "react";
import styled from "styled-components";
import ContentList from "./ContentList";
import { TodoContext } from "../context/todoContext";

const Ui = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

function Ul({data,onUpdatedTodo,disabled}){
    const counterContext = useContext(TodoContext)
    return(
        <Ui>
            <h1>{counterContext.counter}</h1>
            {data &&
                data.map((todo,index)=>{
                    return (
                        <ContentList
                        key={todo.id}
                        status={todo.status}
                        onUpdatedTodo={onUpdatedTodo}
                        id={todo.id}
                        data={todo}
                        disabled={disabled}
                        >
                            {todo.content}
                        </ContentList>
                    )
            })}
        </Ui>
    )
}
export default Ul