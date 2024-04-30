document
    .getElementById("inputForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        var plan = document.getElementById("plan").value;
        if (plan) {
            var li = document.createElement("li");
            li.textContent = plan;
            li.className = "task";

            var completeButton = document.createElement("button");
            completeButton.textContent = "완료";
            completeButton.className = "complete";
            completeButton.addEventListener("click", function () {
                document.getElementById("completedList").appendChild(li);
                li.removeChild(completeButton);
                li.appendChild(deleteButton);
            });

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "삭제";
            deleteButton.className = "delete";
            deleteButton.addEventListener("click", function () {
                li.parentNode.removeChild(li);
            });

            li.appendChild(completeButton);

            document.getElementById("todoList").appendChild(li);
            document.getElementById("plan").value = "";
        }
    });
