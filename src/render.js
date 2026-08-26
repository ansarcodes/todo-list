import TodoItem from "./todo.js";
import Project from "./projects.js";
import { todoManipulation, projectList } from "./application.js";
import { mainController, projectController } from "./interface.js";
export default function renderPage(){
    let project1 = new Project("1");
    let project2 = new Project("2");
    let item1 = new TodoItem("title", "description", "2026-07-25", "High");
    let item2 = new TodoItem("title2", "description2", "2026-07-25", "Mid");
    let item3 = new TodoItem("title3", "description3", "2026-08-08", "Low");
    let item4 = new TodoItem("title4", "description4", "2026-08-18", "Mid");
    project1.addTodo(item1);
    project1.addTodo(item2);
    project1.addTodo(item3);
    project2.addTodo(item4);
    projectList.add(project1);
    projectList.add(project2);
    // console.log(project1.todoList);
    projectController(projectList.get());
    mainController(item1);
    // mainController(item2);
    // console.log(item1.id);
    document.querySelectorAll(".todo-checkbox").forEach((checkbox)=>{
        checkbox.addEventListener("click", (event) => {
            todoManipulation.markComplete(projectList.get().find(project=>project.todoList.includes(project.todoList.find(todo=>todo.id==event.target.dataset.id))).todoList.find(todo=>todo.id==event.target.dataset.id));
            // projectList.get().find(project=>project.todoList.find(todo=>todo.id==event.target.dataset.id))
            // projectList.get().forEach((project)=>{
            //     project.todoList.find()
            //     todoManipulation.markComplete(project.todoList.find(todo=>todo.id==event.target.dataset.id));
            // })
            // mainController(item1);
            // console.log(project1.todoList.find(todo=>todo.id==event.target.dataset.id))
        })
    })
    document.querySelectorAll(".todo").forEach((todoDiv)=>{
        todoDiv.addEventListener("click", () => {
            mainController(projectList.get().find(project=>project.todoList.includes(project.todoList.find(todo=>todo.id==todoDiv.querySelector(".todo-checkbox").dataset.id))).todoList.find(todo=>todo.id==todoDiv.querySelector(".todo-checkbox").dataset.id));
        })
    })
    document.getElementById("add-new-project-btn").addEventListener("click", (event)=>{
        event.preventDefault();
        let newProject = new Project(document.getElementById("new-project-title").value);
        projectList.add(newProject);
        document.getElementById("add-project-dialog-form").reset();
        document.getElementById("add-project-dialog").hidePopover();
        projectController(projectList.get());
        eventListeners();
    });
    //add edit button as well, google how to queryselectorall multiple selectors
    document.querySelectorAll(".project-add-todo-btn").forEach((button)=>{
        button.addEventListener("click", () => {
            document.getElementById("project-add-todo-dialog").dataset.openedBy = button.parentElement.querySelector(".project-name").textContent;
        })
    })
    document.getElementById("project-add-new-todo-btn").addEventListener("click", (event)=>{
        event.preventDefault();
        let newTodoTitle = document.getElementById("new-todo-title").value;
        let newTodoDescription = document.getElementById("new-todo-description").value;
        let newTodoDueDate = document.getElementById("new-todo-due-date").value;
        let newTodoPriority = document.getElementById("new-todo-priority").value;
        let newTodo = new TodoItem(newTodoTitle, newTodoDescription, newTodoDueDate, newTodoPriority);
        let projectName = document.getElementById("project-add-todo-dialog").dataset.openedBy;
        // projectList.get().find(project=>project.name==document.getElementById("project-add-todo-dialog").dataset.openedBy).addTodo(newTodo);
        // console.log(projectList.get().find((project)=>project.name=="1"));
        // console.log(document.getElementById("project-add-todo-dialog"))
        // document.getElementById("project-add-todo-dialog").close();
        // document.getElementById("project-add-todo-form").reset();
    })
}