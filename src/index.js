import { todoItem } from "./todo.js";
import Project from "./projects.js";

let item = new todoItem("test title", "test description", "01012027", "1");

console.log(item);

let defaultProject = new Project("Default");
defaultProject.addTodo(item);
console.log(defaultProject);
console.log(defaultProject.todoList);