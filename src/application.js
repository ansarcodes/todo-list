import Project from "./projects.js";
import TodoItem from "./todo.js";
// export default function todoManipulation(todo){
//     const markComplete = () => {
//         todo.isComplete = !todo.isComplete;
//     };
//     return { markComplete };
// };
// const todoManipulation = (() => {
//     const markComplete = (todo) => {
//         todo.isComplete = !todo.isComplete;
//     };
//     return { markComplete };
// })();
// const todoManipulation = {
//     markComplete(todo){
//         todo.isComplete = !todo.isComplete;
//     }
// };
// todoManipulation.markComplete= "123";

const todoManipulation = (()=>{
    const changeTitle = (todo, title) => {
        todo.title = title;
    }
    const changeDescription = (todo, description) => {
        todo.description = description;
    }
    const changeDueDate = (todo, dueDate) => {
        todo.dueDate = dueDate;
    }
    const changePriority = (todo, priority) => {
        todo.priority = priority;
    }
    const markComplete = (todo) => {
        todo.isComplete = !todo.isComplete;
    };
    return { changeTitle, changeDescription, changeDueDate, changePriority, markComplete };
})();

const projectList = (() => {
    const rawProjectListArray = JSON.parse(localStorage.getItem("storedProjects")) || [new Project("Default", crypto.randomUUID(), [new TodoItem("Note 1", "The Samsung Galaxy Note 1 is a 2011 pioneering large-screen smartphone that popularized the phablet category.", "2026-09-05", "High"), new TodoItem("Note 2", "The Samsung Galaxy Note II is a phablet smartphone released by Samsung in September 2012 as the successor to the original Galaxy Note.", "2026-09-06", "Mid"), new TodoItem("Note 3", "The Samsung Galaxy Note 3 is an Android phablet that was released by Samsung in September 2013.", "2026-09-07", "Low")])];
    // const projectListArray = JSON.parse(localStorage.getItem("storedProjects")).map(project=>new Project(project.name, project.id, project.todoList.map(todo=>new TodoItem(todo.title, todo.description, todo.dueDate, todo.priority, todo.id)))) || [new Project("Default", [new TodoItem("Note 1", "The Samsung Galaxy Note 1 is a 2011 pioneering large-screen smartphone that popularized the phablet category.", "2026-09-05", "High"), new TodoItem("Note 2", "The Samsung Galaxy Note II is a phablet smartphone released by Samsung in September 2012 as the successor to the original Galaxy Note.", "2026-09-06", "Mid"), new TodoItem("Note 3", "The Samsung Galaxy Note 3 is an Android phablet that was released by Samsung in September 2013.", "2026-09-07", "Low")])];
    localStorage.setItem("storedProjects", JSON.stringify(rawProjectListArray));
    const projectListArray = JSON.parse(localStorage.getItem("storedProjects")).map(project=>new Project(project.name, project.id, project.todoList.map(todo=>new TodoItem(todo.title, todo.description, todo.dueDate, todo.priority, todo.id))));
    const get = () => {
        localStorage.setItem("storedProjects", JSON.stringify(projectListArray));
        return projectListArray;
    }
    const add = (project) => {
        projectListArray.push(project);
        localStorage.setItem("storedProjects", JSON.stringify(projectListArray));
    }
    const remove = (project) => {
        projectListArray.splice(projectListArray.indexOf(project), 1);
        localStorage.setItem("storedProjects", JSON.stringify(projectListArray));
    }
    return { get, add, remove };
})();

export { todoManipulation, projectList };

//figure out how to make localstorage work on this project, where actually put things