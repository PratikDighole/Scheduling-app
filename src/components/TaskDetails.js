import React from 'react';

const TaskDetails = ({ task }) => {
  return (
    <div>
      <h2>Task Details</h2>
      <p>id : {task.ID}</p>
      <p>Title: {task.Title}</p>
      <p>Day: {task.DayTime}</p>
      <p>Description: {task.Description}</p>
      <p>StartTime: {task.Timestart}</p>
      <p>EndTime: {task.TimeEnd}</p>
    </div>
  );
};

export default TaskDetails;