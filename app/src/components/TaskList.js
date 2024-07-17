// src/TaskList.js
import React from "react";

function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
