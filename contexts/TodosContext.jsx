import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const TodoContext = createContext();

const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    console.log("chargement initial des todos");
    try {
      const res = await axios.get("http://10.0.2.2:3000/todos");
      setTodos(res.data)
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <TodoContext.Provider value={[todos, setTodos, fetchTodos]}>
      {children}
    </TodoContext.Provider>
  )
}

const useTodosContext = () => {
  return useContext(TodoContext);
}

export default TodoProvider;
export {useTodosContext};