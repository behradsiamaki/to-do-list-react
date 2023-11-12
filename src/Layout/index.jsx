import AddTask from "./AddTask";
import styles from "./Layout.module.css";

function Layout({
  title,
  children,
  selectedStatus,
  handleOnclickStatus,
  handleOnChangeInput,
  newTaskTitle,
  onClickSubmit
}) {
  return (
    <div className={styles.layout}>
      <header>
        <h1 className={styles.title}>{title}</h1>
        <AddTask handleOnChangeInput={handleOnChangeInput} newTaskTitle={newTaskTitle} onClickSubmit={onClickSubmit} />
        <ul className={styles.statusList}>
          <li
            onClick={() => handleOnclickStatus("all")}
            className={selectedStatus === "all" ? styles.selectedStatus : ""}
          >
            All
          </li>
          <li
            onClick={() => handleOnclickStatus("completed")}
            className={
              selectedStatus === "completed" ? styles.selectedStatus : ""
            }
          >
            Completed
          </li>
          <li
            onClick={() => handleOnclickStatus("pending")}
            className={
              selectedStatus === "pending" ? styles.selectedStatus : ""
            }
          >
            Pending
          </li>
        </ul>
      </header>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
