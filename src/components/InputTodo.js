import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function InputTodo({ addTodo }) {
  const [form, setForm] = useState({
    title: "",
  });

  function onChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.title.trim()) {
      addTodo(form.title);
      setForm({
        title: "",
      });
      return;
    }
    alert("Please write item");
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input 
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={form.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusCircle 
          style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
        />
      </button>
    </form>
  )
}

export default InputTodo;