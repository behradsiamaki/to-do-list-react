import styles from "./Filters.module.css";

function Filters({ handleOnclickStatus, selectedStatus }) {
  return (
    <ul className={styles.statusList}>
      <li
        onClick={() => handleOnclickStatus("all")}
        className={selectedStatus === "all" ? styles.selectedStatus : ""}
      >
        All
      </li>
      <li
        onClick={() => handleOnclickStatus("completed")}
        className={selectedStatus === "completed" ? styles.selectedStatus : ""}
      >
        Completed
      </li>
      <li
        onClick={() => handleOnclickStatus("pending")}
        className={selectedStatus === "pending" ? styles.selectedStatus : ""}
      >
        Pending
      </li>
    </ul>
  );
}

export default Filters;
