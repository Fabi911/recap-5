import IN_PROGRESS_Board from "./IN_PROGRESS_Board.tsx";
import DoneBoard from "./DoneBoard.tsx";
import OpenStatusBoard from "./OpenStatusBoard.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ToDo } from "../types/toDo.ts";
import axios from "axios";
import Add from "../pages/Add.tsx";

export default function ToDoBoard() {
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
      <Add fetchTodos={fetchTodos} />
      <p>Clicking the ToDo's, takes you to the next status.</p>
      <ContainerToDoBoard>
        <OpenStatusBoard todos={todos} fetchTodos={fetchTodos} />
        <Arrow>⇢</Arrow>
        <IN_PROGRESS_Board todos={todos} fetchTodos={fetchTodos} />
        <Arrow>⇢</Arrow>
        <DoneBoard todos={todos} fetchTodos={fetchTodos} />
      </ContainerToDoBoard>
    </>
  );
}

const ContainerToDoBoard = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;

const Arrow = styled.p`
  font-size: 40px;
  margin-top: 50px;
`;
