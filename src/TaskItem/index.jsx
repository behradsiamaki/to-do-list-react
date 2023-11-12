import styles from "./TaskItem.module.css";

function TaskItem({ taskItem }) {
    
  return (
    <div className={styles.taskItem}>
      <h2>
        {taskItem.title} <span>{new Date(taskItem.date).toDateString()}</span>
      </h2>
    </div>
  );
}

export default TaskItem;
