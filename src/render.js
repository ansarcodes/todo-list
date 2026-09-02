import TodoItem from "./todo.js";
import Project from "./projects.js";
import { todoManipulation, projectList } from "./application.js";
import { mainController, projectController, projectTodoListController } from "./interface.js";
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
    function todoListeners() {
        document.querySelectorAll(".todo-checkbox").forEach((checkbox)=>{
            checkbox.addEventListener("click", () => {
                let projectId = checkbox.closest(".project").dataset.id;
                let todoId = checkbox.closest(".todo").dataset.id;
                todoManipulation.markComplete(projectList.get().find(project=>project.id==projectId).todoList.find(todo=>todo.id==todoId));
                // todoManipulation.markComplete(projectList.get().find(project=>project.todoList.includes(project.todoList.find(todo=>todo.id==event.target.dataset.id))).todoList.find(todo=>todo.id==event.target.dataset.id));
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
                let projectId = todoDiv.closest(".project").dataset.id;
                let todoId = todoDiv.dataset.id;
                let projectItem = projectList.get().find(project=>project.id==projectId);
                let todoItem = projectList.get().find(project=>project.id==projectId).todoList.find(todo=>todo.id==todoId);
                mainController(todoItem);
                // if (projectItem.todoList.includes(todoItem)){
                //     mainController(todoItem);
                // }
                // mainController(projectList.get().find(project=>project.todoList.includes(project.todoList.find(todo=>todo.id==todoDiv.querySelector(".todo-checkbox").dataset.id))).todoList.find(todo=>todo.id==todoDiv.querySelector(".todo-checkbox").dataset.id));
            })
        })
        document.querySelectorAll(".todo-edit-btn").forEach((button)=>{
            button.addEventListener("click", () => {
                let projectId = button.closest(".project").dataset.id;
                let todoId = button.closest(".todo").dataset.id;
                let todoItem = projectList.get().find(project=>project.id==projectId).todoList.find(todo=>todo.id==todoId);
                document.getElementById("edit-todo-dialog").dataset.openedBy = todoId;
                document.getElementById("edit-todo-title").value = todoItem.title;
                document.getElementById("edit-todo-description").value = todoItem.description;
                document.getElementById("edit-todo-due-date").value = todoItem.dueDate;
                document.getElementById("edit-todo-priority").value = todoItem.priority;

            })
        });
        document.querySelectorAll(".todo-remove-btn").forEach((button)=>{
            button.addEventListener("click", () => {
                let todoId = button.closest(".todo").dataset.id;
                document.getElementById("remove-todo-dialog").dataset.openedBy = todoId;
                // let projectId = button.closest(".project").dataset.id;
                // let projectItem = projectList.get().find(project=>project.id==projectId);
                // let todoItem = projectList.get().find(project=>project.id==projectId).todoList.find(todo=>todo.id==todoId);
                // document.querySelector(`[data-id="${todoId}"]`).remove();
                // projectItem.removeTodo(todoItem);
            })
        })
        //add edit button as well, google how to queryselectorall multiple selectors
        document.querySelectorAll(".project-add-todo-btn").forEach((button)=>{
            button.addEventListener("click", () => {
                document.getElementById("project-add-todo-dialog").dataset.openedBy = button.closest(".project").dataset.id;
            })
        })
        document.querySelectorAll(".project-edit-btn").forEach((button)=>{
            button.addEventListener("click", () => {
                let projectId = button.closest(".project").dataset.id;
                document.getElementById("edit-project-dialog").dataset.openedBy = projectId;
                document.getElementById("edit-project-title").value = projectList.get().find(project=>project.id == projectId).name;
            })
        });
    };
    todoListeners();
    
    document.getElementById("add-new-project-btn").addEventListener("click", (event)=>{
        event.preventDefault();
        let newProject = new Project(document.getElementById("new-project-title").value);
        projectList.add(newProject);
        document.getElementById("add-project-dialog-form").reset();
        document.getElementById("add-project-dialog").hidePopover();
        projectController(projectList.get());
        todoListeners();
        console.log(projectList.get());
    });
    
    document.getElementById("project-add-new-todo-btn").addEventListener("click", (event)=>{
        event.preventDefault();
        let newTodoTitle = document.getElementById("new-todo-title").value;
        let newTodoDescription = document.getElementById("new-todo-description").value;
        let newTodoDueDate = document.getElementById("new-todo-due-date").value;
        let newTodoPriority = document.getElementById("new-todo-priority").value;
        let newTodo = new TodoItem(newTodoTitle, newTodoDescription, newTodoDueDate, newTodoPriority);
        let projectId = document.getElementById("project-add-todo-dialog").dataset.openedBy;
        projectList.get().find(project=>project.id==projectId).addTodo(newTodo);
        // console.log(Array.from(document.querySelectorAll(".project-name")).find(projectNameDiv=>projectNameDiv.textContent==projectName).closest(".project"));
        // console.log(document.querySelector(".project"));
        // projectTodoListController(projectList.get());
        projectController(projectList.get());
        todoListeners();
        // console.log(projectList.get().find((project)=>project.name=="1"));
        // console.log(document.getElementById("project-add-todo-dialog"))
        document.getElementById("project-add-todo-dialog").close();
        document.getElementById("project-add-todo-form").reset();
    })

    document.getElementById("edit-project-btn").addEventListener("click", (event)=>{
        event.preventDefault();
        let projectId = document.getElementById("edit-project-dialog").dataset.openedBy;
        let projectNewName = document.getElementById("edit-project-title").value;
        projectList.get().find(project=>project.id==projectId).name = projectNewName;
        document.getElementById("edit-project-dialog").close();
        document.getElementById("edit-project-dialog-form").reset();
        projectController(projectList.get());
        todoListeners();
        console.log(projectList.get());
    });

    document.getElementById("edit-todo-btn").addEventListener("click", (event)=>{
    event.preventDefault();
    let todoId = document.getElementById("edit-todo-dialog").dataset.openedBy;
    let projectId = document.querySelector(`[data-id="${todoId}"]`).closest(".project").dataset.id;
    let todoItem = projectList.get().find(project=>project.id==projectId).todoList.find(todo=>todo.id==todoId);
    todoItem.title = document.getElementById("edit-todo-title").value;
    todoItem.description = document.getElementById("edit-todo-description").value;
    todoItem.dueDate = document.getElementById("edit-todo-due-date").value;
    todoItem.priority = document.getElementById("edit-todo-priority").value;

    projectController(projectList.get());
    mainController(todoItem);
    todoListeners();
    document.getElementById("edit-todo-dialog").close();
    document.getElementById("edit-todo-form").reset();
    })
    
    document.getElementById("remove-todo-btn").addEventListener("click", (event)=>{
        event.preventDefault();
        let todoId = document.getElementById("remove-todo-dialog").dataset.openedBy;
        let projectId = document.querySelector(`[data-id="${todoId}"]`).closest(".project").dataset.id;
        let projectItem = projectList.get().find(project=>project.id==projectId);
        let todoItem = projectList.get().find(project=>project.id==projectId).todoList.find(todo=>todo.id==todoId);
        projectItem.removeTodo(todoItem);

        projectController(projectList.get());
        todoListeners();
        document.getElementById("remove-todo-dialog").close();
        document.getElementById("remove-todo-form").reset();
    })
    
    // let projectListJSON = JSON.stringify(projectList.get());
    // console.log(projectListJSON);
    // let projectListJSONparsed = JSON.parse(projectListJSON);
    // console.log(projectListJSONparsed);
    // console.log(projectList.get());
    // localStorage.setItem("projects", projectListJSON);
    let something123 = [];
    // let something123JSON = JSON.stringify(something123);
    localStorage.setItem("something123", JSON.stringify(something123));
    let something321 = JSON.parse(localStorage.getItem("something123"));
    something321.push("nothing");
    console.log(something321);
    // JSON.parse(localStorage.getItem("something123")).push("nothing");
    // console.log(JSON.parse(localStorage.getItem("something123")).push("nothing"));
}

//edit project, maybe recycle dialog forms