import {Component} from "react";

import './Main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            tasks: [],
            error: '',
        };
    }

    addTask = () => {
        const { task, tasks } = this.state;
        if (task.trim() === '') {
            this.setState({ error: 'Field cannot be empty' });
            return;
        }
        this.setState({
            tasks: [...tasks, task],
            task: '',
            error: '',
        });
    };

    deleteTask = (index) => {
        const { tasks } = this.state;
        const newTasks = tasks.filter((_, i) => i !== index);
        this.setState({ tasks: newTasks });
    };

    render() {
        const { task, tasks, error } = this.state;
        return (
            <div>
                <h1>TODO</h1>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => this.setState({ task: e.target.value })}
                    placeholder="Enter a task"
                />
                <button onClick={this.addTask}>Add Task</button>
                {error && <div>{error}</div>}
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={() => this.deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Main;