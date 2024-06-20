import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
            placeholder="Adicionar tarefa"
          />
        </div>
        <div className="col-6">
          <button type="submit" className="btn btn-primary">Adicionar</button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
