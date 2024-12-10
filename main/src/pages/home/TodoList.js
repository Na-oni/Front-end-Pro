import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [{ text: 'task 1', completed: true }, { text: 'task 2', completed: false }],
        };
    }

    add_task = (object) => {
        this.setState((state) => ({
            tasks: [ ...state.tasks, { text: object.task, completed: false } ]
        }));
    };

    remove_task = (index) => {
        this.setState((state) => ({
            tasks: state.tasks.filter((_, i) => i !== index),
        }));
    };

    toggle_task_status = (index) => {
        this.setState((state) => ({
            tasks: state.tasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            ),
        }));
    };

    render() {
        const validation_schema = Yup.object({
            task: Yup.string()
                .trim()
                .min(5, "Длинна поля ввода должна содержать минимум 5 символов")
                .max(100, "Длинна поля ввода не может быть длиннее 100 символов")
                .required("Поле задачи обязательно"),
        });

        return (
            <>
                <h2>TODO List</h2>
                <Formik initialValues={{task: ''}} validationSchema={validation_schema}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            this.add_task(values);
                            setSubmitting(false);
                            resetForm();
                        }}>
                    {({isSubmitting}) => (
                        <Form>
                            <div className='form-group'>
                                <Field className='item field' name="task" type="text"/>
                                <button className='item button' type="submit" disabled={isSubmitting}>Add</button>
                            </div>

                            <ErrorMessage className='error' name="task" component="div"/>
                        </Form>
                    )}
                </Formik>
                <div className='container-tasks'>
                    {this.state.tasks.map((task, index) => (
                        <div className='task' key={index}>
                            <span className='task-text'
                                  style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                                {task.text}
                            </span>
                            <button className='task-action' onClick={() => this.toggle_task_status(index)}>
                                {task.completed ? 'Undone' : 'Done'}
                            </button>
                            <button className='task-action' onClick={() => this.remove_task(index)}>Delete</button>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default TodoList;