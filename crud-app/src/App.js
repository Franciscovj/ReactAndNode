import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
//import Navbar from './navbar'; // Importe o componente Navbar corretamente
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar tarefas:', error);
      });
  }, []);

  const addTask = (task) => {
    axios.post('http://localhost:3001/tasks', { text: task })
      .then(response => {
        setTasks([...tasks, response.data]);
      })
      .catch(error => {
        console.error('Erro ao adicionar tarefa:', error);
      });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:3001/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      })
      .catch(error => {
        console.error('Erro ao deletar tarefa:', error);
      });
  };

  const toggleTaskCompletion = (id) => {
    const task = tasks.find(task => task.id === id);
    axios.put(`http://localhost:3001/tasks/${id}`, { completed: !task.completed })
      .then(() => {
        setTasks(tasks.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ));
      })
      .catch(error => {
        console.error('Erro ao atualizar tarefa:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Gerenciador de Tarefas</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;
