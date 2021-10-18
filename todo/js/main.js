// Get the id of the button that will be used to add tasks to the array of tasks.
let add_task = document.getElementById("add_task_btn");
// Get the class of the input field where the user will input their text so that we can use built in methods to clean it up.
let todo_text = document.querySelector(".task_text");
// Add an click event listener to the add_task button which will check if the item or in this case, the todo task, is not in LocalStorage. If it isn't then the task will be added to an empty array. If the task is in the LocalStorage, then it will use the .getItem to retrieve it.
add_task.addEventListener("click", function () {
    let item = todo_text.value.trim();
    if (item) {
        todo_text.value = "";
        let todo_items = !localStorage.getItem("todo_items") ? [] :
            JSON.parse(localStorage.getItem("todo_items"));
        // Create a current todo object that will store the item, or todo task, and also create a property of isCompleted and set that to false. In the future I will update this isCompleted to true in order to filter out certain tasks.
        let currentTodo = {
            item,
            isCompleted: false,
        };
        // Call the addTodo function and pass the array with the currentTodo into it. Then add the currentTodo to the todo_items. Add it to LocalStorage.
        addTodo([currentTodo]);
        todo_items.push(currentTodo);
        localStorage.setItem("todo_items", JSON.stringify(todo_items));
    }
});

function addTodo(todo_items = JSON.parse(localStorage.getItem("todo_items"))) {
    if (!todo_items) {
        return null;
    }
    let itemsLeft = document.getElementById("items_left");
    // Using a forEach method on the todo_items array, create all of the elements that are needed to display.
    todo_items.forEach(function (todo) {
        let todo_item = document.createElement("div");
        let checkbox = document.createElement("input");
        let todo_p = document.createElement("p");
        let close_button = document.createElement("button");

        // Add classes
        todo_item.classList.add("todos_div");
        checkbox.classList.add("checkboxes");
        todo_p.classList.add("todos_words")
        close_button.classList.add("close")

        // Set checkbox attribute
        checkbox.setAttribute("type", "checkbox");
        close_button.innerHTML = "X";

        // Set the textContent of the todo to the input of the user.
        todo_p.textContent = todo.item;


        if (todo.isCompleted) {
            todo_item.classList.add("checked");
            checkbox.setAttribute("checked", "checked");
        }

        // Add click listener to checkbox
        checkbox.addEventListener("click", function () {
            let checked_task = this.parentElement.parentElement;
            const checked = this.checked;
            stateTodo(
                [...document.querySelectorAll(".todo_items .todo_item")].indexOf(
                    checked_task
                ),
                checked
            );
            checked
                ?
                checked_task.classList.add("checked") :
                checked_task.classList.remove("checked");
            itemsLeft.textContent = document.querySelectorAll(
                ".todo_items .todo_item:not(.checked)"
            ).length;
        });

        // Add click listener to clear button
        close_button.addEventListener("click", function () {
            let checked_task = this.parentElement;
            checked_task.classList.add("fall");
            removeTodo(
                [...document.querySelectorAll(".todo_items .todo_item")].indexOf(
                    checked_task
                )
            );
            checked_task.addEventListener("animationend", function () {
                setTimeout(function () {
                    checked_task.remove();
                    itemsLeft.textContent = document.querySelectorAll(
                        ".todo_items .todo_item:not(.checked)"
                    ).length;
                }, 100);
            });
        });

        // parent.appendChild(child)
        todo_item.appendChild(checkbox);
        todo_item.appendChild(todo_p);
        todo_item.appendChild(close_button);
        document.querySelector(".todos").appendChild(todo_item);
    });
    // Update itemsLeft
    itemsLeft.textContent = document.querySelectorAll(
        ".todo_items .todo_item:not(.checked)"
    ).length;
}