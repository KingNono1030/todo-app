import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import Button from './Button';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isInitialized, setIsinitialiszed] = useState(false);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
    setIsinitialiszed(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, isInitialized]);

  return (
    <div className="todo-container">
      <h1 className="todo-container__header-text">Todo List</h1>
      <input
        className="todo-container__todo-input"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <Button className="todo-container__button" onClick={addTodo}>
        Add
      </Button>
      {todos[0] && (
        <ul className="todo-container__todo-list">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              deleteTodo={() => deleteTodo(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
