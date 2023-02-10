import React from "react";

// AddTask component is a functional component
// It receives the props of handleSubmit, task, setTask and isEditing
const AddTask = ({ handleSubmit, task, setTask, isEditing, theme }) => (
  // A section element with className "addTask"
  <section className={`addTask ${theme}`}>
    {/* A form element with an onSubmit event handler */}
    <form onSubmit={handleSubmit}>
      {/* An input element for adding the task */}
      <input
        type="text"
        value={task}
        placeholder="add task"
        onChange={(e) => setTask(e.target.value)}
      />
      {/* A submit button, that says either "Update" or "Add" */}
      <button type="submit">{isEditing ? "Update" : "Add"}</button>
    </form>
  </section>
);

// Exporting the component
export default AddTask;

// This component is a functional component in React that provides a form for adding a task to the to-do list in the getitidone application. The component receives the props of handleSubmit, task, setTask and isEditing and uses these props to render a form with an input field for entering a task and a submit button for either adding the task or updating an existing task, depending on the value of isEditing.
