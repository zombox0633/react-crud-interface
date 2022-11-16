import React, { useState } from "react"
import { TodoContext } from "./todoContext"

function TodoProvider({ children }) {
  const [counter, setcounter] = useState(1)
  const onIncrement = () => setcounter((prev) => ++prev)

  return (
    <TodoContext.Provider
      value={{
        counter,
        onIncrement
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider