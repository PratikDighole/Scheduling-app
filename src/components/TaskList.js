import React, { useState } from 'react';
const TaskList = ({ tasks, onDelete ,onEdit}) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            ID: {task.ID} <br />
            Title: {task.Title} <br />
            Date: {new Date(task.DayTime).toLocaleDateString()} <br />
            Description: {task.Description} <br />
            StartTime: {task.Timestart} <br />
            EndTime: {task.TimeEnd} <br />
            <button onClick={() => onDelete(task)}>Delete</button>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default TaskList;
