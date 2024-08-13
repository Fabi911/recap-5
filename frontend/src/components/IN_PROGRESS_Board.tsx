import ToDoCard from "./ToDoCard.tsx";
import { ToDo } from "../types/toDo.ts";

export default function IN_PROGRESS_Board({
  todos,
  fetchTodos,
}: {
  todos: ToDo[];
  fetchTodos: () => void;
}) {
  return (
    <div className={"board"}>
      <h2>My IN_PROGRESS Status</h2>
      {todos.map((todo) =>
        todo.status === "IN_PROGRESS" ? (
          <ToDoCard key={todo.id} todo={todo} fetchTodos={fetchTodos} />
        ) : null,
      )}
    </div>
  );
}
