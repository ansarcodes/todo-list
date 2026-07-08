export default class Project {
    constructor(name) {
        this.name = name;
        this.todoList = [];
    }
    addTodo(todo){
        this.todoList.push(todo);
    };
    removeTodo(todo){
        this.todoList.splice(this.todoList.indexOf(todo),1);
    };
    todoList(){
        return this.todoList;
    }
}