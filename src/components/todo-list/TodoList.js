import './TodoList.css'

const TodoList = (props) => {
    return (
        <ul className='todo-list'>
            {
                props.dataTodos.map((data) => {
                    return <li key={data.id}>{data.title}</li>
                })
            }
        </ul>
    )
}

export default TodoList