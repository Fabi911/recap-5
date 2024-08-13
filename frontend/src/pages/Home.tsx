import ToDoBoard from "../components/ToDoBoard.tsx";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Main>
      <h1>My ToDo</h1>
      <Link to="/add">Add ToDo</Link>
      <ToDoBoard />
    </Main>
  );
}

// Styled components

const Main = styled.div`
  display: flex;
  warp: wrap;
  justify-content: center;
`;
