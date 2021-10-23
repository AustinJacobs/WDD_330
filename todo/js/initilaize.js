const taskSection = document.querySelector(".todos");

UserTodoList = new TodoTask(taskSection);
UserTodoList.display()

document.querySelector("#add_button").addEventListener("click", function () {
    UserTodoList.addTask()
})

document.querySelector("#user_task_text").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        UserTodoList.addTask()
    }
});