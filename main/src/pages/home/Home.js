import './Home.css';
import React, { useState, useEffect } from 'react';

function Home() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // Загрузка задач из локального хранилища при монтировании компонента
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            setTodos(savedTodos);
        }
    }, []);

    // Сохранение задач в локальное хранилище
    useEffect(() => {
        if (todos.length) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            const newTodoItem = { text: newTodo, completed: false };
            setTodos((prevTodos) => [...prevTodos, newTodoItem]);
            setNewTodo(''); // Очистка поля ввода
        }
    };

    const handleToggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="main-container">
            <h1>To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>

            <ul className="task-list">
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? 'completed' : ''}>
                        <span onClick={() => handleToggleTodo(index)}>{todo.text}</span>
                        <button
                            className="delete-button"
                            onClick={() => handleDeleteTodo(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;