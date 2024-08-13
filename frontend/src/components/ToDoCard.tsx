import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToDo } from "../types/toDo.ts";

export default function ToDoCard() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function fetchTodos() {
    axios
      .get("/api/todo")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todos: ", error.message);
      });
  }
  return (
    <>
      {todos.map((todo) => (
        <CardBox key={todo.id}>
          <p>{todo.description}</p>
        </CardBox>
      ))}
    </>
  );
}

const CardBox = styled.div`
  background-color: #f0f0f0;
  color: #333;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  heigth: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
