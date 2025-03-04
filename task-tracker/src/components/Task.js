const Task = ({ task, toggleTask }) => {
    return (
      <li
        className={`task-item ${task.completed ? "completed" : ""}`}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </li>
    );
  };
  
  export default Task;
  