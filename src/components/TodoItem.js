import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css";

function TodoItem({ 
  todo, 
  handleChange,
  deleteTodo,
  updateTodo,
}) {
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const hideStyle = {
    display: "none",
  }

  function handleEditing() {
    setEditing(true);
  }

  function handleUpdateDone(e) {
    if (e.key === "Enter") {
      setEditing(false);
    }
  }

  return (
    <li className={styles.item}>
      <div 
        onDoubleClick={handleEditing}
        style={editing ? hideStyle : null}
      >
        <input 
          type="checkbox" 
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
        <button 
          onClick={() => deleteTodo(todo.id)}
        >
          <FaTrash 
            style={{ color: "orangered", fontSize: "16px" }}
          />
        </button>
        <span 
          style={
            todo.completed 
            ? completedStyle 
            : null
          }
        >
          {todo.title}
        </span>
      </div>
      <input 
        type="text"
        style={editing ? null : hideStyle}
        value={todo.title}
        onChange={e => updateTodo(e.target.value, todo.id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  )
}

export default TodoItem;