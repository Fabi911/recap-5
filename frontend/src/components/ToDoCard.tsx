import styled from "styled-components";
import { ToDo } from "../types/toDo.ts";
import axios from "axios";

export default function ToDoCard({
  todo,
  fetchTodos,
}: {
  todo: ToDo;
  fetchTodos: () => void;
}) {
  function updateStatus(status: string) {
    axios
      .put(`/api/todo/${todo.id}`, {
        ...todo,
        status: status,
      })
      .then(() => fetchTodos());
  }

  const handleButtonClick = async () => {
    if (todo.status === "OPEN") {
      updateStatus("IN_PROGRESS");
    } else if (todo.status === "IN_PROGRESS") {
      updateStatus("DONE");
    } else if (todo.status === "DONE") {
      axios.delete(`/api/todo/${todo.id}`).then(() => fetchTodos());
    }
  };

  return (
    <button onClick={handleButtonClick}>
      <CardBox key={todo.id}>
        <p>{todo.description}</p>
      </CardBox>
    </button>
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
