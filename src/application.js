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
    let projectListArray = JSON.parse(localStorage.getItem("projectListArray")) || [{
        name: "Default", 
        todoList:[
            {
                title: "Note 1",
                description: "The Samsung Galaxy Note 1 is a 2011 pioneering large-screen smartphone that popularized the phablet category.",
                dueDate:"2026-09-05",
                priority:"High",
                isComplete:false,
                id:"f9588ad8-1cba-431d-9f20-5b3f3d1841e7"
            },
            {
                title: "Note 2",
                description: "The Samsung Galaxy Note II is a phablet smartphone released by Samsung in September 2012 as the successor to the original Galaxy Note.",
                dueDate:"2026-09-06",
                priority:"Mid",
                isComplete:false,
                id:"807f876c-9e06-4a15-ba0d-ea22ba00a677"
            },
            {
                title: "Note 3",
                description: "The Samsung Galaxy Note 3 is an Android phablet that was released by Samsung in September 2013.",
                dueDate:"2026-09-07",
                priority:"Low",
                isComplete:false,
                id:"c5b75b41-f37c-4832-84ca-09fad5cb5e95"
            },
        ],
        id: "899334d7-4b21-40d4-9165-1c14ff532ea4"}];
    // if (localStorage.getItem("projectListArray")) {
    //     projectListArray = JSON.parse(localStorage.getItem("projectListArray"));
    // } else {
    //     localStorage.setItem("projectListArray", JSON.stringify(projectListArray));
    //     projectListArray = JSON.parse(localStorage.getItem("projectListArray"));
    // }
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