import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete, onToogle, showTask}) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToogle={onToogle} />
      ))}
    </>
  );
}

export default Tasks
