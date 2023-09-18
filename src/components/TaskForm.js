import React, { useState } from 'react';

const TaskForm = ({ onSave }) => {
  const [task, setTask] = useState( {ID:'', Title: '', DayTime: '', Description: '', Timestart: '', TimeEnd: '' });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    setTask({
      ID: '',
      Title: '', 
      DayTime: '', 
      Description: '', 
      Timestart: '', 
      TimeEnd: ''
    });
  };
  

  return (
    <div>
      <h2>Add/Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="ID"
            value={task.ID}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="Title"
            value={task.Title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date: </label>
          <input
            type="date"
            name="DayTime"
            value={task.DayTime}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            name="Description"
            value={task.Description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>StartTime: </label>
          <input
            type="time"
            name="Timestart"
            value={task.Timestart}
            onChange={handleInputChange}
          />
          </div><br/>
          <div>
            <label>EndTime: </label>
          <input
            type="time"
            name="TimeEnd"
            value={task.TimeEnd}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;


