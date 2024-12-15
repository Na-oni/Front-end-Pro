import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './todo-list';

import './Home.css';

function Home() {
    const [taskName, setTaskName] = useState(''); // Локальное состояние для текста задачи
    const tasks = useSelector((state) => state.todo_list.tasks || []); // Достаем задачи из состояния
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskName.trim()) {
            dispatch(add(taskName));
            setTaskName('');
        }
    };

    return (
        <div className="main-container">
            <form className='form-group' onSubmit={handleSubmit}>
                <input className='item' name="task" type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                <button className='item' type="submit">Add</button>
            </form>
            <hr/>
            <div className='container-tasks'>
                {tasks.map((task, index) => (
                    <div className='task' key={index}>
                        <span className='task-text'>{task.name}</span>
                    </div>
                ))}
            </div>
            <p className='task-counter'>Всего: {tasks.length}</p>
        </div>
    );
}

export default Home;