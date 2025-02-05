import useAsyncStorage from "./useAsyncStorage";

const useTodos = () => {
  const [todos, setTodos] = useAsyncStorage("todos", []);

  const onCreateTodo = (title) => {
    if (!title) return;
    setTodos([...todos, {id: Math.ceil(Math.random() * 10000), title}]);
  }

  const onDeleteTodo = (id) => {
    setTodos(todos.filter(i => i.id !== id));
  }

  return {
    todos,
    onCreateTodo,
    onDeleteTodo
  }
}

export default useTodos;