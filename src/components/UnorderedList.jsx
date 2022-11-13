import React from "react";
import styled from "styled-components";
import ContentList from "./ContentList";

const Ui = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

function Ul({data}){
    return(
        <Ui>
            {data &&
                data.map((todo,index)=>{
                    return <ContentList key={todo.id}>{JSON.stringify(todo.content)}</ContentList>
                })
            }
        </Ui>
    )
}
export default Ul