var buttonEl = document.querySelector("#save-task");
var tasksTodoEl = document.querySelector("#tasks-to-do");

var createTaskhandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.classname = "task-item";
    listItemEl.textcontent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};
buttonEl.addEventListener("click", createTaskHandler); 
