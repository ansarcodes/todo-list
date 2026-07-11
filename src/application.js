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
    const projectListArray = [];
    const get = () => {
        return projectListArray;
    }
    const add = (project) => {
        projectListArray.push(project);
    }
    const remove = (project) => {
        projectListArray.splice(projectListArray.indexOf(project), 1);
    }
    return { get, add, remove };
})();

export { todoManipulation, projectList };