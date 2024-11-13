// Section 3
export default function TaskList({
    tasks
  }) {
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task
              task={task}
            />
          </li>
        ))}
      </ul>
    );
  }
  
  function Task({ task }) {
    return (
      <label>
          {task.text}
      </label>
    );
  }