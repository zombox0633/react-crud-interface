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

function Ul(){
    const {
    todos,
    isLoading,
    onUpdatedTodo,
    onDelete} = useContext(TodoContext)
    // const todoData = counterContext.todos
    // const loading = counterContext.isLoading
    // const update = counterContext.onUpdatedTodo
    // const Delete = counterContext.onDelete
    return(
        <Ui>
            {/* <h1>{counterContext.counter}</h1> */}
            {todos &&
                todos.map((todo,index)=>{
                    return (
                        <ContentList
                        key={todo.id}
                        status={todo.status}
                        onUpdatedTodo={onUpdatedTodo}
                        onDelete={onDelete}
                        id={todo.id}
                        data={todo}
                        disabled={isLoading}
                        >
                          {todo.content}
                        </ContentList>
                    )
            })}
        </Ui>
    )
}
export default Ul