const inputDiv = document.getElementById("inputDiv");
const haveTodo = document.getElementById("haveTodoList");
const doneTodo = document.getElementById("doneTodoList");
const remove = document.getElementsByClassName("remove");
inputDiv.addEventListener("keydown", (e) => appendTodo(e));
function appendTodo(e) {
  if (e.keyCode === 13) {
    const todo = document.createElement("div");
    todo.className = "todo";
    const todoContent = document.createElement("span");
    todoContent.innerHTML = e.target.value;
    todo.appendChild(todoContent);
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "완료";
    doneBtn.addEventListener("click", handleDone);
    todo.appendChild(doneBtn);
    haveTodo.appendChild(todo);
    e.target.value = "";
    console.log(todo);
  }
}
function handleDone(e) {
  const todo = e.target.parentElement;
  const done = document.createElement("div");
  done.className = "todo";
  done.innerHTML = todo.querySelector("span").innerHTML;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "삭제";
  deleteBtn.addEventListener("click", handleDelete);
  done.appendChild(deleteBtn);
  doneTodo.appendChild(done);
  todo.remove();
}
function handleDelete(e) {
  const todo = e.target.parentElement;
  todo.remove();
}
