import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <InputTodo />
      <TodoList />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 20px 0;
  background-color: skyblue;
`;
