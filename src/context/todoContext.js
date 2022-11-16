import { createContext } from "react"

export const TodoContext = createContext({
  // counter: 0,
  // onIncrement: () => {}
  isOpenModal:false,
  setIsOpenModal: () => {},
  onCreateNewTodo: () => {},
  onFetchData: () => {},
  todos:undefined,
  handleEscapeOnCloseModal: () => {},
  onUpdatedTodo: () => {},
  isLoading:false,
  onDelete:()=>{}
})