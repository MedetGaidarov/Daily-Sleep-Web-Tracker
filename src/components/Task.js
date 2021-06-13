import React from 'react'
import {FaTimes } from 'react-icons/fa'
const Task = ({task, onDelete, onToogle}) => {
    return (
      <div
        className={`task ${task.reminder && "reminder"}`}
        onDoubleClick={() => onToogle(task.id)}
      >
        <h5>
          {task.text}{" "}
          <FaTimes
            style={{
              color: "red",
              cursor: "pointer",
            }}
            onClick={() => onDelete(task.id)}
          />
        </h5>
      </div>
    );
}

export default Task
