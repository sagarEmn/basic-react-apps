import React from "react";
import { useState, useRef } from "react";

export default function Form({todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim(" ")) {
      const newTodo = {
        id: crypto.randomUUID(),
        text: inputValue.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="写下你想要做的事吧..."
        rows={1}
      />
      <button type="submit">添加</button>
    </form>
  );
}
