import styles from "./TaskItem.module.css";

function TaskItem({ taskItem, handelOnclickDeleteItem }) {
    
  return (
    <div className={styles.taskItem}>
      <h2>
        {taskItem.title} <span>{new Date(taskItem.date).toDateString()}</span>
      </h2>
      <button onClick={() => handelOnclickDeleteItem(taskItem.id)} className={styles.deleteBtn}>Delete</button>
    </div>
  );
}

export default TaskItem;
