import { useState } from "react";
import styles from "./Todo.module.css";

const List = (props) => {
  return (
    <div className={styles.tasks}>
      <ul>
        <li>
          {props.task}
          <button onClick={() => props.onDelete(props.task)}>❌</button>
        </li>
      </ul>
    </div>
  );
};

const Todo = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  const [high, setHigh] = useState(["Giving Interviews", "Coding"]);
  const [medium, setMedium] = useState(["Learning Dancing"]);
  const [low, setLow] = useState(["Joining Gym"]);

  const handleAdd = () => {
    if (!task || !priority) {
      alert("You cannot add an empty task or without priority");
      return; // Exit early
    }

    if (priority === "high") {
      setHigh([...high, task]);
    } else if (priority === "medium") {
      setMedium([...medium, task]);
    } else if (priority === "low") {
      setLow([...low, task]);
    }

    // Clear input after adding
    setTask("");
    setPriority("");
  };

  const handleDeleteHigh = (taskToDelete) => {
    setHigh(high.filter((t) => t !== taskToDelete));
  };

  const handleDeleteMedium = (taskToDelete) => {
    setMedium(medium.filter((t) => t !== taskToDelete));
  };

  const handleDeleteLow = (taskToDelete) => {
    setLow(low.filter((t) => t !== taskToDelete));
  };

  return (
    <div className={styles.container}>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        ----To Do List----
      </h1>
      <div className={styles.inputField}>
        <input
          type="text"
          name="newTask"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={handleAdd}>Add Task</button>
      </div>

      {/* High */}
      <h1 className={styles.highHeader}>High Priority Tasks</h1>
      {high.length === 0 ? (
        <p>No High Priority Tasks</p>
      ) : (
        high.map((task) => (
          <List task={task} key={task} onDelete={handleDeleteHigh} />
        ))
      )}

      {/* Medium */}
      <h1 className={styles.mediumHeader}>Medium Priority Tasks</h1>
      {medium.length === 0 ? (
        <p>No Medium Priority Tasks</p>
      ) : (
        medium.map((task) => (
          <List task={task} key={task} onDelete={handleDeleteMedium} />
        ))
      )}

      {/* Low */}
      <h1 className={styles.lowHeader}>Low Priority Tasks</h1>
      {low.length === 0 ? (
        <p>No Low Priority Tasks</p>
      ) : (
        low.map((task) => (
          <List task={task} key={task} onDelete={handleDeleteLow} />
        ))
      )}
    </div>
  );
};

export default Todo;
