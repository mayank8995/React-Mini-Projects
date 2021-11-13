import React, { useState } from "react";
import './Todo.css'
const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTask(value)
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter a title for this task…"
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

const Todo = () => {

  const [tasks, setTasks] = useState([{
      text: "Like",
      isCompleted: false
    },{
      text: "Comment",
      isCompleted: false
    },{
      text: "Subscribe",
      isCompleted: false
    }]);

  const addTask = text => setTasks([...tasks, { text }]);
  const removeTask = (index) => {
    let newList = [...tasks];
    newList.splice(index,1);
    console.log(newList)
    setTasks(newList);
  }

  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <div className="todo">
          <span >
            {task.text}
          </span>
          <span>
              <button onClick={()=>removeTask(index)}>Delete</button>
          </span>
        </div>
      ))}
      <AddTaskForm addTask={addTask} />
    </div>
  );
}

export default Todo