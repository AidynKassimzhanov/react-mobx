import { makeAutoObservable } from "mobx"

class Todo {
    todos = []
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodos(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }

    completedTodos(todo) {
        todo.completed = !todo.completed 
    }

    loadTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            this.todos = [...this.todos, ...json]
        })
    }
}

export default new Todo()