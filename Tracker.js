import React, { useState } from 'react';
import './Tracker.css';

const Tracker = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, { text: taskInput, completed: false }]);
            setTaskInput('');
        }
    };

    const handleRemoveTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleCompleteTask = (index) => {
        const newTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    };

    return (
        <div className="tracker-container">
            <h2>Task Tracker</h2>
            <div className="task-input-container">
                <input 
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Add a new task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'completed' : ''}>
                        <span onClick={() => handleCompleteTask(index)}>
                            {task.text}
                        </span>
                        <button onClick={() => handleRemoveTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tracker;