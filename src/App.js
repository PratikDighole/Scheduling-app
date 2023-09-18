import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm';
import './App.css';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  // Function to fetch tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks(); // Fetch tasks when the component mounts
  }, []);

  // Function to delete a task
  const handleTaskDelete = async (task) => {
    try {
      console.log(task)
      await axios.delete(`http://localhost:5000/tasks/${task.ID}`);
      setTasks(tasks.filter((task) => task.ID !== task.ID));
      setSelectedTask(null);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };


  // Function to save a task (both create and update)
  const handleTaskSave = async (newTask) => {
    try {
      const isTaskPresent = tasks.find((task) => task.ID == newTask.ID);
      if (isTaskPresent) {
        // Edit existing task
        console.log("if")
        await axios.put(`http://localhost:5000/tasks/${newTask.ID}`, newTask);
        setTasks(tasks.map((task) => (task.ID === newTask.ID ? newTask : task)));
      } else {
       // Add new task
       const response = await axios.post('http://localhost:5000/task', newTask);
       // Assuming your backend returns 'ID' for the new task
       newTask.ID = response.data.ID;
       setTasks([...tasks, newTask]);
     }
     setSelectedTask(null);
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <TaskList tasks={tasks} onDelete={handleTaskDelete} />
          </div>
          <div className="col-md-4">
            {selectedTask ? (
              <TaskDetails task={selectedTask} />
            ) : (
              <TaskForm onSave={handleTaskSave} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
