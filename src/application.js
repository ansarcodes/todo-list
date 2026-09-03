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
const storageUpdate = (()=>{
    const set = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }
    const get = (key) => {
        JSON.parse(localStorage.getItem(key))
    }
    return {set,get}
})();
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
    let projectListArray = [];
    if (localStorage.getItem("projectListArray")) {
        projectListArray = JSON.parse(localStorage.getItem("projectListArray"));
    } else {
        localStorage.setItem("projectListArray", JSON.stringify(projectListArray));
        projectListArray = JSON.parse(localStorage.getItem("projectListArray"));
    }
    const get = () => {
        // if (!localStorage.getItem("projectListArray")){
        //     localStorage.setItem("projectListArray", JSON.stringify(projectListArray));
        //     return JSON.parse(localStorage.getItem("projectListArray"));
        // } else {
        //     return JSON.parse(localStorage.getItem("projectListArray"));
        // }
        return projectListArray;
    }
    const add = (project) => {
        projectListArray.push(project);
        localStorage.setItem("projectListArray", JSON.stringify(projectListArray));
    }
    const remove = (project) => {
        projectListArray.splice(projectListArray.indexOf(project), 1);
        localStorage.setItem("projectListArray", JSON.stringify(projectListArray));
    }
    return { get, add, remove };
})();

export { todoManipulation, projectList };

//figure out how to make localstorage work on this project, where actually put things