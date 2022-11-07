import styled from "styled-components"

const Button = styled.button`
  background-color: #1e1e1e;
  width: 129px;
  height: 44px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #7f56d9;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  user-select: none;

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
`
function AddTaskButton(){
    return(
        <Button>Add task<i className='fa-solid fa-plus'></i></Button>
    )
}
export default AddTaskButton