import './App.css';
import { useEffect, useState } from 'react';
import TodosList from "./components/TodosList";
import InputTodo from "./components/InputTodo";
import { v4 as uuidv4 } from "uuid"
import { FaReact } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState(getInitialTodos);

  function getInitialTodos() {
    const temp = JSON.parse(localStorage.getItem("todos"));

    return temp || [];
  }

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos])

  function handleChange(id) {
    setTodos(prevState => 
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  }

  function addTodo(title) {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([
      ...todos,
      newTodo
    ]);
  }

  function updateTodo(updatedTitle, id) {
    setTodos(prevState => 
      prevState.map(todo => {
        if (todo.id === id) {
          return { 
            ...todo, 
            title: updatedTitle 
          };
        }
        return todo;
      })
    )
  }

  return (
    <div className='container'>
      <div className='inner'>
        <header
          style={{
            padding: "20px, 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
          }}
        >
          <FaReact 
            style={{
              fontSize: "70px",
              marginBottom: "2rem",
              color: "#61DBFB",
            }}
          />
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "500",
              marginBottom: "3rem",
              // color: "#ececec",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            react todo list
          </h1>
        </header>
        <InputTodo addTodo={addTodo}/>
        <TodosList 
          todos={todos} 
          handleChange={handleChange}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
