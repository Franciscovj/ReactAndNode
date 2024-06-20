import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.text}
      </span>
      <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
        <FaTrash /> 
      </button>
    </li>
  );
};

export default Task;


