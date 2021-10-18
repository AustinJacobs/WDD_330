const taskObjectList = [];

const list_task_area = document.querySelector(".todos");

document.querySelector("#add_task_button").addEventListener("click", addTodo);
document.querySelector(".task_text").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        addTodo()
    }
});

//-------GETTING VALUES FROM INPUT TO ARRAY OF OBJECTS-------
function addTodo() {
    const todoText = document.querySelector(".task_text").value;

    if (todoText == "") {
        alert("You did not enter any text.");
    } else {
        const todoObjectList = {
            id: taskObjectList.length,
            todoText: todoText,
            isDone: false,
        };

        //---WITH UNSHIFT WE ADD THE NEW ELEMENT TO THE BEGINNING OF THE ARRAY
        //--SO THAT THE NEW ITEMS SHOW UP ON TOP
        taskObjectList.unshift(todoObjectList);
        displayTodos();
    }
}

//------CHANGING THE isDone VALUE TO TRUE WHEN THE ELEMENT IS CLICKED
//------OR TO FALSE IF IT WAS TRUE BEFORE
function doneTodo(todoId) {
    const selectedTodoIndex = taskObjectList.findIndex((item) => item.id == todoId);

    taskObjectList[selectedTodoIndex].isDone ?
        (taskObjectList[selectedTodoIndex].isDone = false) :
        (taskObjectList[selectedTodoIndex].isDone = true);
    displayTodos();
}

//----TO DELETE AN ITEM; FROM THE LIST
function deleteItem(x) {
    taskObjectList.splice(
        taskObjectList.findIndex((item) => item.id == x),
        1
    );
    displayTodos();
}

//---------DISPLAYING THE ENTERED ITEMS ON THE SCREEN------
function displayTodos() {
    list_task_area.innerHTML = "";
    document.querySelector(".task_text").value = "";

    taskObjectList.forEach((item) => {
        let divElement = document.createElement("div");
        let checkbox = document.createElement("input");
        let task_p = document.createElement("p");
        let delete_button = document.createElement("button");

        task_p.innerText = taskObjectList_item.todoText;

        divElement.setAttribute("class", "todos_div");

        divElement.setAttribute("data-id", taskObjectList_item.id);

        checkbox.setAttribute("class", "checkboxes");

        delete_button.setAttribute("class", "close");
        delete_button.innerHTML = "X";

        checkbox.type = "checkbox";
        checkbox.value = "unchecked"

        delete_button.setAttribute("data-id", taskObjectList_item.id);

        let list_task_area = document.querySelector(".todos");

        list_task_area.appendChild(divElement);
        divElement.appendChild(checkbox);
        divElement.appendChild(task_p);
        divElement.appendChild(delete_button);

        if (item.isDone) {
            divElement.classList.add("checked");
        }

        divElement.addEventListener("click", function (e) {
            const selectedId = e.target.getAttribute("data-id");
            doneTodo(selectedId);
        });

        delete_button.addEventListener("click", function (e) {
            const delId = e.target.getAttribute("data-id");
            deleteItem(delId);
        });

        list_task_area.appendChild(divElement);
    });
}