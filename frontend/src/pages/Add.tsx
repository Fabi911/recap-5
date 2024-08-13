import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [newToDo, setNewToDo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/todo", { description: newToDo, status: "OPEN" })
      .catch((error) => {
        console.error("Error adding todo: ", error.message);
      });
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={newToDo}
          onChange={(event) => setNewToDo(event.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
