import { ToDo } from "../types/toDo.ts";

import ToDoCard from "./ToDoCard.tsx";

export default function OpenStatusBoard({
  todos,
  fetchTodos,
}: {
  todos: ToDo[];
  fetchTodos: () => void;
}) {
  return (
    <div className={"board"}>
      <h2>My Open Status</h2>
      {todos.map((todo: ToDo) =>
        todo.status === "OPEN" ? (
          <ToDoCard key={todo.id} todo={todo} fetchTodos={fetchTodos} />
        ) : null,
      )}
    </div>
  );
}
