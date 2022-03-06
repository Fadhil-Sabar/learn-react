import './Todo.css'
import { useState } from 'react'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'

const Todo = () => {
    const [getTodos, setTodos] = useState([
        { id: 1, title: 'Makan' },
        { id: 2, title: 'Turu' },
        { id: 3, title: 'Ngoding' }
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
    }

    return (
        <div>
            <a href='/fetch'>fetch</a>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList dataTodos={getTodos} />
        </div>
    )
}

export default Todo