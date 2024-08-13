import ToDoBoard from "../components/ToDoBoard.tsx";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <h1>My ToDo's 📝</h1>

      <ToDoBoard />
    </Main>
  );
}

// Styled components

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;
