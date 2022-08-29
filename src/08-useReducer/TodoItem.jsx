export const TodoItem = ({ todos, onDeleteTodo, onToggleTodo }) => {
    return (
        todos.map( todos => (
            <li key={todos.id} className="list-group-item d-flex justify-content-between" >
                <span 
                    className={`align-self-center ${ todos.done ? 'text-decoration-line-through' : ''}`}
                    onClick={ () => onToggleTodo( todos.id )}
                >
                    {todos.description}
                </span>
                <button 
                    className="btn btn-danger"
                    onClick={ () => onDeleteTodo( todos.id )}
                >Borrar</button>
            </li>
        ))
    )
}