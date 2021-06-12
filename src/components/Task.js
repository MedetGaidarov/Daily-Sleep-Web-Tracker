import React from 'react'
import {FaTimes } from 'react-icons/fa'
const Task = ({task, onDelete}) => {
    return (
      <div className = 'tasks'>
        <h5>
          {task.text}{" "}
          <FaTimes style = {{
              color : 'red',
              cursor : 'pointer'
          }} onClick = {() => onDelete(task.id)}/>

        </h5>
      </div>
    );
}

export default Task
