import styles from "./AddTask.module.css";

function AddTask({ handleOnChangeInput, newTaskTitle, onClickSubmit }) {
  return (
    <div className={styles.addTaskWrapper}>
      <input
        type="text"
        className={styles.addTaskInput}
        onChange={handleOnChangeInput}
        value={newTaskTitle}
      />
      <button
        onClick={onClickSubmit}
        className={styles.addTaskSubmit}
        type="button"
      >
        Submit
      </button>
    </div>
  );
}

export default AddTask;
