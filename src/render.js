import TodoItem from "./todo.js";
import Project from "./projects.js";
import { todoManipulation, projectList } from "./application.js";
import { mainController, projectController } from "./interface.js";
export default function renderPage(){
    let project1 = new Project("1");
    let item1 = new TodoItem("title", "description", "2026-07-25", "High");
    let item2 = new TodoItem("title2", "description2", "2026-07-25", "Mid");
    project1.addTodo(item1);
    project1.addTodo(item2);
    projectList.add(project1);
    console.log(project1.todoList);
    projectController(projectList.get());
    mainController(item1);
}