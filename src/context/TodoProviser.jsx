import React from "react"
import useTodo from "../hook/useTodo"
import { TodoContext } from "./todoContext"

function TodoProvider({ children }) {
  const {
    isOpenModal,
    setIsOpenModal,
    onCreateNewTodo,
    onFetchData,
    todos,
    handleEscapeOnCloseModal,
    onUpdatedTodo,
    isLoading,
    onDelete
  } = useTodo()
  //const [counter, setcounter] = useState(1)
  //const onIncrement = () => setcounter((prev) => ++prev)

  return (
    <TodoContext.Provider
      value={{
        //counter,
        //onIncrement,
        isOpenModal,
        setIsOpenModal,
        onCreateNewTodo,
        onFetchData,
        todos,
        handleEscapeOnCloseModal,
        onUpdatedTodo,
        isLoading,
        onDelete
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider