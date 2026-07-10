import TodoItem from "./todo.js";
import Project from "./projects.js";
import todoManipulation from "./application.js";

let item = new TodoItem("test title", "test description", "01012027", "1");
console.log(item.isComplete);
todoManipulation(item).markComplete();
console.log(item.isComplete);
// console.log(item.title);
// console.log(item);


// let defaultProject = new Project("Default");
// defaultProject.addTodo(item);
// console.log(defaultProject);
// console.log(defaultProject.todoList);

// todoManipulation(item).markComplete;

// console.log(item);
