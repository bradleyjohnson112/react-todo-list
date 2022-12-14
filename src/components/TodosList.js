import TodoItem from "./TodoItem";

function TodosList({ 
  todos, 
  handleChange, 
  deleteTodo,
  updateTodo,
}) {

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  )
}

export default TodosList;