import { createContext } from "react"

export const TodoContext = createContext({
  counter: 0,
  onIncrement: () => {}
})