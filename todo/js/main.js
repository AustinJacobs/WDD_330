let list_of_todos = JSON.parse(localStorage.getItem("list_of_todos") || "[]");

class TodoTask {
    constructor(item) {
        this.primaryElement = item;
    }

    addTask() {
        let task_text = document.querySelector("#user_task_text").value;
        if (task_text == "") {
            alert("Please enter a task!")
        } else {
            const todoObject = {
                id: list_of_todos.length,
                todoText: task_text,
                isDone: false,
            }

            list_of_todos.unshift(todoObject);
            this.display();
            document.querySelector("#user_task_text").value = '';
        }
    }

    done_undone(x) {
        const selectedTodoIndex = list_of_todos.findIndex((item) => item.id == x);
        list_of_todos[selectedTodoIndex].isDone == false ? list_of_todos[selectedTodoIndex].isDone = true : list_of_todos[selectedTodoIndex].isDone = false;
        this.display();
    }

    deleteTask(z) {
        const selectedDelIndex = list_of_todos.findIndex((item) => item.id == z);

        list_of_todos.splice(selectedDelIndex, 1);

        this.display();
    }

    display() {
        this.primaryElement.innerHTML = "";

        list_of_todos.forEach((object_item) => {

            const divElement = document.createElement("div");
            const delete_button = document.createElement("button");
            const checkbox = document.createElement("input");
            const span = document.createElement("span");

            span.setAttribute("class", "todos_words");

            checkbox.type = "checkbox";
            checkbox.setAttribute("class", "checkboxes");
            checkbox.setAttribute("data-id", object_item.id);

            span.innerHTML = object_item.todoText;
            span.setAttribute("data-id", object_item.id);
            divElement.setAttribute("class", "todos_div");

            delete_button.setAttribute("data-id", object_item.id);
            delete_button.setAttribute("class", "close");
            delete_button.innerHTML = "X";

            divElement.appendChild(checkbox);
            divElement.appendChild(span);
            divElement.appendChild(delete_button);

            delete_button.addEventListener("click", function (e) {
                const deleteId = e.target.getAttribute("data-id");
                UserTodoList.deleteTask(deleteId);
            })

            span.addEventListener("click", function (e) {
                const selectedId = e.target.getAttribute("data-id");
                UserTodoList.done_undone(selectedId);
            })

            checkbox.addEventListener("click", function (e) {
                const selectedId = e.target.getAttribute("data-id");
                UserTodoList.done_undone(selectedId);
            })

            if (object_item.isDone) {
                span.classList.add("checked");
                checkbox.checked = true;
            }

            let ulAppend = document.querySelector(".todos");

            ulAppend.appendChild(divElement);

            let tasksLeft = document.getElementById("items_left");
            tasksLeft.innerHTML = list_of_todos.length;
        })

        localStorage.setItem("list_of_todos", JSON.stringify(list_of_todos));

        let tasksLeft = document.getElementById("items_left");
        if (list_of_todos.length == 0) {
            tasksLeft.innerHTML = "0";
        }
    }
}

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

const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");

all.addEventListener("click", function () {
    all.setAttribute("class", "on");
    if (active.classList.contains("on")) {
        active.classList.remove("on");
    } else if (completed.classList.contains("on")) {
        completed.classList.remove("on");
    }
})

active.addEventListener("click", function () {
    active.setAttribute("class", "on");
    if (all.classList.contains("on")) {
        all.classList.remove("on");
    } else if (completed.classList.contains("on")) {
        completed.classList.remove("on");
    }
})

completed.addEventListener("click", function () {
    completed.setAttribute("class", "on");
    if (all.classList.contains("on")) {
        all.classList.remove("on");
    } else if (active.classList.contains("on")) {
        active.classList.remove("on");
    }
})