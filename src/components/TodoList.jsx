import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import Button from './Button';

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
    <div className="py-8 px-12">
      <h1 className="font-bold text-5xl">Todo List</h1>
      <form className="">
        <input
          className="mr-3"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <Button className="" onClick={addTodo}>
          Add
        </Button>
      </form>
      {todos[0] && (
        <ul className="list-none p-0">
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
