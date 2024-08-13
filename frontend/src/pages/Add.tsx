import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Add({ fetchTodos }: { fetchTodos: () => void }) {
  const [newToDo, setNewToDo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/todo", { description: newToDo, status: "OPEN" })
      .catch((error) => {
        console.error("Error adding todo: ", error.message);
      })
      .then(() => fetchTodos());
    event.target.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="description"
        placeholder="Enter here your description"
        value={newToDo}
        required
        maxLength={250}
        onChange={(event) => setNewToDo(event.target.value)}
      />

      <Button type="submit">Add</Button>
    </Form>
  );
}

const Form = styled.form`
  background-color: #202020;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: none;
  width: 300px;
`;

const Button = styled.button`
  background-color: #606060;
  padding: 5px;
`;
