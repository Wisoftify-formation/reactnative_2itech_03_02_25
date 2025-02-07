import { useEffect, useState } from "react";
import useAsyncStorage from "./useAsyncStorage";
import axios from "axios";
import { useTodosContext } from "../contexts/TodosContext";

const useTodos = () => {
  const [todos, setTodos] = useTodosContext();

  const onCreateTodo = async (title) => {
    try {
      if (!title) return;
      const res = await axios.post("http://192.168.1.22:3000/todos", {
        title
      });
      setTodos([...todos, res.data]);
    } catch (e) {
      console.error(e);
    }
  }

  const onDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://192.168.1.22:3000/todos/${id}`);
      setTodos(todos.filter(i => i.id !== id));
    } catch (e) {
      console.error(e);
    }
  }

  const onUpdateTodo = async (uid, data) => {
    try {
      const {id, ...rest} = data;
      const res = await axios.put(`http://192.168.1.22:3000/todos/${id}`, rest);

      setTodos(todos.map(i => i.id === uid ? res.data : i));
    } catch (e) {
      console.error(e);
    }
  }

  return {
    todos,
    onCreateTodo,
    onDeleteTodo,
    onUpdateTodo
  }
}

export default useTodos;