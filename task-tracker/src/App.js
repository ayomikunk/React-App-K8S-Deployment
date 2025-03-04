import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./index.css"; // Import the CSS file

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Deploy on GitHub Pages", completed: false },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};

export default App;
