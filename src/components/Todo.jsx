import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../style/Todo.css';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
    setTodo('');
  };

  const handleChange = (todo) => {
    setTodo(todo);
  };

  return (
    <div className="todo">
      <div className="content">
        <h2>To-do List</h2>
        <p>~ Today i need to ~</p>
        <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <div className="batas">
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default Todo;
