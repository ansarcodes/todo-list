export default class Project {
    constructor(name, id, todoList) {
        this.name = name;
        this.todoList = todoList || [];
        this.id = id || crypto.randomUUID();
    }
    addTodo(todo){
        this.todoList.push(todo);
    };
    removeTodo(todo){
        this.todoList.splice(this.todoList.indexOf(todo), 1);
    };
    todoList(){
        return this.todoList;
    }
}