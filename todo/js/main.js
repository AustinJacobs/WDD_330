const list_of_todos = [];

class TodoTask {
    constructor(item) {
        this.primaryElement = item;
    }

    addTask() {
        let task_text = document.querySelector("#user_task_text").value;
        if (task_text == "") {
            alert("You did not enter any item!")
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
        console.log(list_of_todos[selectedTodoIndex].isDone);
        list_of_todos[selectedTodoIndex].isDone == false ? list_of_todos[selectedTodoIndex].isDone = true : list_of_todos[selectedTodoIndex].isDone = false;
        this.display();
    }

    deleteElement(z) {
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
            const paragraph = document.createElement("p");

            paragraph.setAttribute("class", "todos_words");

            checkbox.type = "checkbox";
            checkbox.setAttribute("class", "checkboxes");

            paragraph.innerHTML = object_item.todoText;
            paragraph.setAttribute("data-id", object_item.id);
            divElement.setAttribute("class", "todos_div");

            delete_button.setAttribute("data-id", object_item.id);
            delete_button.setAttribute("class", "close");
            delete_button.innerHTML = "X";

            divElement.appendChild(checkbox);
            divElement.appendChild(paragraph);
            divElement.appendChild(delete_button);
            
            delete_button.addEventListener("click", function (e) {
                const deleteId = e.target.getAttribute("data-id");
                UserTodoList.deleteElement(deleteId);
            })

            divElement.addEventListener("click", function (e) {
                const selectedId = e.target.getAttribute("data-id");
                UserTodoList.done_undone(selectedId);
            })

            if (object_item.isDone) {
                paragraph.classList.add("checked");
            }

            let ulAppend = document.querySelector(".todos");

            ulAppend.appendChild(divElement);

            let tasksLeft = document.getElementById("items_left");
            tasksLeft.innerHTML = list_of_todos.length;
        })
    }
}

////-----MAIN PROGRAM------------
const listSection = document.querySelector(".todos");

UserTodoList = new TodoTask(listSection);

document.querySelector("#add_button").addEventListener("click", function () {
    UserTodoList.addTask()
})

document.querySelector("#user_task_text").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        UserTodoList.addTask()
    }
})