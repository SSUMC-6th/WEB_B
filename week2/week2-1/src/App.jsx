import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [taskInput, setTaskInput] = useState(""); // 입력된 값을 저장
  const [todoList, setTodoList] = useState([]); // 할 일 목록 리스트
  const [completedList, setCompletedList] = useState([]); // 완료된 목록 리스트 // [변수, 함수] set

  const addTask = () => {
    // 추가 버튼 눌렀을 때 실행
    const trimmedTask = taskInput.trim();
    if (trimmedTask === "") {
      alert("할 일을 입력하세요!");
      return;
    }
    const newTodoList = [...todoList, trimmedTask]; //기존 todoList에 trimmedTask 추가하여 배열 갱신하고
    setTodoList(newTodoList); // 갱신 배열로 함수 호출
    setTaskInput(""); //TaskInput은 다시 초기화
  };

  const moveToCompleted = (index) => {
    const taskToMove = todoList[index]; // 이동할 할일의 인덱스
    const newTodoList = todoList.filter((_, i) => i !== index); // 외워야 할 구문 // index가 아닌 애들로 새로운 배열 생성
    setTodoList(newTodoList);
    setCompletedList([...completedList, taskToMove]); // 기존 completedList에 taskToMove 추가
  };

  const deleteTask = (index) => {
    const newCompletedList = completedList.filter((_, i) => i !== index); // index 제외하고 새로운 배열 만들어
    setCompletedList(newCompletedList);
  };

  const handleKeyPress = (event) => {
    // event 들어오면 addTask 수행
    if (event.key === "Enter") {
      addTask();
    }
  };

  //여기서 부터 메인
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          id="taskInput"
          placeholder="Add new todo"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} // input의 값이 변경되었을 때 실행
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="todos-container" id="todoList">
        {todoList.map(
          (
            task,
            index // index를 돌며 todoList 를 순회 task에 값 저장
          ) => (
            <div key={index} className="task-message">
              <span>{task}</span>
              <button
                onClick={() => moveToCompleted(index)}
                className="completeButton"
              >
                완료
              </button>
            </div>
          )
        )}
      </div>
      <div className="completed-todos-container" id="completedList">
        <h2>Completed Todos</h2>
        {completedList.map((task, index) => (
          <div key={index} className="task-message">
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
