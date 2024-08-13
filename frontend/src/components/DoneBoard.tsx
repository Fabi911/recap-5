import { ToDo } from "../types/toDo.ts";
import ToDoCard from "./ToDoCard.tsx";

export default function DoneBoard({
  todos,
  fetchTodos,
}: {
  todos: ToDo[];
  fetchTodos: () => void;
}) {
  return (
    <div className={"board"}>
      <h2>My Done Status</h2>
      {todos.map((todo) =>
        todo.status === "DONE" ? (
          <ToDoCard key={todo.id} todo={todo} fetchTodos={fetchTodos} />
        ) : null,
      )}
    </div>
  );
}
