import Task from "./Task";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </ul>
  );
};

export default TaskList;
