import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_tasks } from "./actions/loading-tasks";
import { post_task } from "./actions/post-task";
import { delete_task } from "./actions/delete-task";
import { toggle_task_status } from './todo-list';

import './Home.css';

function Home() {
    const [taskName, setTaskName] = useState('');
    const { tasks, loading, error } = useSelector((state) => state.todo_list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetch_tasks());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskName.trim()) {
            dispatch(post_task(taskName));
            setTaskName('');
        }
    };

    const toggle_task_status_button = (id) => {
        dispatch(toggle_task_status(id));
    };

    const delete_task_button = (id) => {
        dispatch(delete_task(id));
    };

    return (
        <div className="main-container">
            <form className='form-group' onSubmit={handleSubmit}>
                <input className='item' name="task" type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                <button className='item' type="submit">Add</button>
            </form>
            <hr/>
            {loading ? (
                <p>Загрузка...</p>
            ) : error ? (
                <p>Ошибка: {error}</p>
            ) : (
                <div className="container-tasks">
                    {tasks.map((task) => (
                        <div className="task" key={task.id}>
                            <span className="task-text" style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.title}</span>
                            <button onClick={() => toggle_task_status_button(task.id)} className='task-action-status'>
                                {task.completed ? 'Undone' : 'Done'}
                            </button>
                            <button onClick={() => delete_task_button(task.id)} className='task-action-delete'>Delete</button>
                        </div>
                    ))}
                </div>
            )}
            <p className="task-counter">Всего: {tasks.length}</p>
        </div>
    );
}

export default Home;