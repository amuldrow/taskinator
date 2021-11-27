var formEl = document.querySelector("#task-form");
var tasksTodoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.classname = "task-item";
    listItemEl.textcontent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
    console.log(event);
};
formEl.addEventListener("submit", createTaskHandler);
