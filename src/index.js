import TodoItem from "./todo.js";
import Project from "./projects.js";
import { todoManipulation, projectList } from "./application.js";

let item = new TodoItem("test title", "test description", "01012027", "1");
console.log(item.isComplete);
// todoManipulation.markComplete(item);
// console.log(item.isComplete);
// console.log(item.title);
// console.log(item);


let defaultProject = new Project("Default");
defaultProject.addTodo(item);
console.log(defaultProject);
console.log(defaultProject.todoList);

projectList.add(defaultProject);
console.log(projectList);
console.log(projectList.get());

// todoManipulation(item).markComplete;

// console.log(item);

// console.log(todoManipulation);
// todoManipulation.markComplete = "ast";
// console.log(todoManipulation);
// todoManipulation.markComplete(item);
// console.log(item);