import { useState, useEffect } from "react";
import { Header, AddTask, ShowTask, Footer } from "./components";

// App component that renders the to-do app
function App() {
  // State to store the current task the user is typing
  const [task, setTask] = useState("");

  // State to store the list of tasks
  const [tasklist, setTasklist] = useState(
    // Get the tasklist from local storage, or an empty array if there is no data in local storage
    JSON.parse(localStorage.getItem("tasklist")) || []
  );

  // State to store the id of the task that is being edited
  const [isEditing, setIsEditing] = useState(0);

  // State to store the theme of the app
  const [theme, setTheme] = useState(
    // Get the theme from local storage, or the default value "medium" if there is no data in local storage
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );

  // Function to handle adding or updating a task
  const handleSubmit = (event) => {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // If the user is editing a task
    if (isEditing) {
      // Get the current time
      const date = new Date();

      // Find the task that the user is editing
      const selectedTask = tasklist.find((task) => task.id === isEditing);

      // Create an updated tasklist with the edited task
      const updateTask = tasklist.map((e) =>
        e.id === selectedTask.id
          ? (e = {
              id: e.id,
              name: task,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            })
          : { id: e.id, name: e.name, time: e.time }
      );

      // Set the updated tasklist
      setTasklist(updateTask);

      // Reset the editing state
      setIsEditing(0);
      setTask("");
      return;
    }

    // If the user is not editing a task and there is a task to add
    if (task) {
      // Get the current time
      const date = new Date();

      // Add the new task to the tasklist
      setTasklist([
        ...tasklist,
        {
          id: date.getTime(),
          name: task,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        },
      ]);
      setTask("");
    }
  };

  // Function to handle editing a task
  const handleEdit = (id) => {
    // Find the task that the user wants to edit
    const selectedTask = tasklist.find((task) => task.id === id);

    // Set the task and the editing state
    setTask(selectedTask.name);
    setIsEditing(id);
  };

  // Handle the deletion of a task
  const handleDelete = (id) => {
    // Create an updated version of the task list without the deleted task
    const updatedTasklist = tasklist.filter((task) => task.id !== id);
    // Update the task list state
    setTasklist(updatedTasklist);
  };

  // The first useEffect hook updates the localStorage with the tasklist data whenever the tasklist state changes.
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  // The second useEffect hook updates the localStorage with the theme data whenever the theme state changes.
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  // The return statement of the functional component that renders the UI.
  return (
    <div className={"App " + theme}>
      <div className="container">
        {/* The header component receives the setTheme and theme state values as props to control the application theme */}
        <Header setTheme={setTheme} theme={theme}>
          GetItDone!
        </Header>
        {/* The AddTask component receives the handleSubmit, isEditing, task, and setTask state values as props to add a task */}
        <AddTask
          handleSubmit={handleSubmit}
          isEditing={isEditing}
          task={task}
          setTask={setTask}
          theme={theme}
        />
        {/* The ShowTask component receives the tasklist, setTasklist, handleEdit, and handleDelete functions as props to display the list of tasks */}
        <ShowTask
          theme={theme}
          tasklist={tasklist}
          setTasklist={setTasklist}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default App;

// The app.js file is the root component of the React Todo application. It uses the useState hook to manage the state of the application, such as the list of tasks, the current task being edited, and the current theme. The component uses useEffect hooks to save the tasklist and theme to local storage so that the data can persist between sessions. The component returns the JSX for the overall structure of the application, including the header component, the add task component, and the show task component. The component also passes data and functions to its child components through props
