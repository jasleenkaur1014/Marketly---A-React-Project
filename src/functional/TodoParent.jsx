import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoCard from "./TodoCard";

export default function TodoParent() {
  const [todo, setTodo] = useState([]);
  return (
    <>
      <TodoForm setTodo={setTodo} todo={todo} />
      <TodoCard todo={todo} setTodo={setTodo} />
    </>
  );
}
