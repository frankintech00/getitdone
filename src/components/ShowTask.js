import React from "react";

const ShowTask = ({
  tasklist,
  setTasklist,
  handleEdit,
  handleDelete,
  theme,
}) => {
  return (
    <section className={`showTask ${theme}`}>
      {/* Display the total number of tasks and provide a clear all button */}
      <p className="head">
        <span>
          <span className={`title ${theme}`}>Todo</span>
          <span className={`count ${theme}`}>{tasklist.length}</span>
        </span>
        <span className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </span>
      </p>
      {/* Loop through each task in tasklist and display its name and time */}
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            {/* Provide buttons for editing and deleting a task */}
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(task.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
