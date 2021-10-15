// function Task() {
//     this.instanceData = "Go to the store";

//     this.createTask = function() {
// let div = document.createElement("div");
// div.setAttribute("id", "div_task")
// let span = document.createElement("span");
// let checkbox = document.createElement("input");
// checkbox.type = "checkbox";
// checkbox.value = 1;
// let ex = document.createElement("button");
// ex.innerHTML = "X"
// ex.setAttribute("id", "close_task")

// span.innerHTML = this.instanceData;

// document.getElementById("tasks").appendChild(div);
// div.appendChild(checkbox);
// div.appendChild(span);
// div.appendChild(ex);

//     }

//     this.closeTask = function() {

//     }
// }



// let classInstance = new Task();
// let button = document.getElementById("task_addition_button");
// if (button.addEventListener) {
//     button.addEventListener('click', function () {
//         classInstance.createTask();
//     }, false);
// } else if (button.attachEvent) {
//     button.attachEvent('onclick', function () {
//         classInstance.createTask();
//     });
// } else {
//     // Very old browser, complain
// };

function createTask() {
    // Create a dynamic div element that will store the task contents.
    let div = document.createElement("div");
    // Set the div id to div_task.
    div.setAttribute("id", "div_task")
    // Create a span that will hold all of the individual elements of the task.
    let span = document.createElement("span");
    // Create a checkbox that will be able to be checked when a task is complete.
    let checkbox = document.createElement("input");
    // Set the input to a checkbox.
    checkbox.type = "checkbox";
    // Give the checkbox an initial value of true.
    checkbox.value = true;
    // Create a button that will ex out the task.
    let ex = document.createElement("button");
    // Set the innerHTMl of the button to show an X.
    ex.innerHTML = "X"
    // Set the id of the ex button to close_task.
    ex.setAttribute("id", "close_task")

    // Set the innerHTML of the span to whatever the user put in the input field.
    span.innerHTML = document.getElementById("task_input").value;

    // Get the id of the section where the task divs will be appended.
    document.getElementById("tasks").appendChild(div);
    // Append the checkbox first to the div.
    div.appendChild(checkbox);
    // Then add the span with the text into the div.
    div.appendChild(span);
    // Lastly, add the ex out button to the end of the div.
    div.appendChild(ex);
}

// Get the id of the button that will run the createTask function.
let button = document.getElementById("task_addition_button");
// Determine if the button has been clicked and then run the createTask function.
if (button.addEventListener) {
    button.addEventListener('click', function () {
        createTask();
    })
};

function deleteTask() {
    document.getElementById("div_task").style.display = "none";
}

let delete_button = document.getElementById("close_task");

if (delete_button.addEventListener) {
    delete_button.addEventListener('click', function () {
        deleteTask();
    }) 
};