import styles from "./Layout.module.css";

function Layout({ title, children }) {
  return (
    <div className={styles.layout}>
      <header>
        <h1 className={styles.title}>{title}</h1>
      </header>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
