function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value.trim(); // 입력된 텍스트에서 앞뒤 공백을 제거합니다.
    if (task === "") {
        alert("할 일을 입력하세요!");
        return;
    }

    var todoList = document.getElementById("todoList");
    var taskElement = document.createElement("div");
    taskElement.classList.add("task-message"); // 클래스 추가
    taskElement.innerHTML = `
        <span>${task}</span>
        <button onclick="moveToCompleted(this)" class = "completeButton">완료</button> <!-- 버튼 텍스트 변경 -->
    `;
    todoList.appendChild(taskElement);
    taskInput.value = "";
}

function moveToCompleted(button) {
    var taskElement = button.parentElement;
    var completedList = document.getElementById("completedList");
    completedList.appendChild(taskElement);
    button.innerText = "삭제"; // 버튼 텍스트 변경
    button.setAttribute("onclick", "deleteTask(this)"); // 클릭 이벤트를 완료 함수로 변경
}

function deleteTask(button) {
    var taskElement = button.parentElement;
    taskElement.remove();
}

document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
