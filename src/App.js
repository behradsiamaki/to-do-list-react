import "./App.css";
import Layout from "./Layout";
import { useState } from "react";
import TaskItem from "./TaskItem";
import AddTask from "./Layout/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Lorem ipsum is placeholder pending",
      date: "2020-08-22",
      status: "pending",
    },
    {
      id: 2,
      title: "Lorem ipsum is placeholder pending",
      date: "2023-08-22",
      status: "pending",
    },
    {
      id: 3,
      title: "Lorem ipsum is placeholder",
      date: "2012-04-22",
      status: "completed",
    },
    {
      id: 4,
      title: "Lorem ipsum is placeholder",
      date: "2022-08-20",
      status: "completed",
    },
  ]);

  const [selectedStatus, setSelectedStatus] = useState("all");
  const [newAddTask, setNewAddTask] = useState("");

  function handleOnclickStatus(status) {
    setSelectedStatus(status);
  }

  function filterTask(tasks) {
    if (selectedStatus === "pending" || selectedStatus === "completed") {
      return tasks.filter(function (item) {
        return item.status === selectedStatus;
      });
    } else {
      return tasks;
    }
  }

  function handleOnChangeInput(e) {
    const { value } = e.target;
    setNewAddTask(value);
  }

  function onClickSubmit() {
    if (newAddTask.trim().length >= 3) {
      const newTasks = [...tasks];
      newTasks.push({
        id: Math.floor(Math.random() * 1000),
        title: newAddTask,
        date: new Date(),
        status: "pending",
      });
      setTasks(newTasks);
    }
  }

  return (
    <Layout
      title="to do list"
      selectedStatus={selectedStatus}
      handleOnclickStatus={handleOnclickStatus}
      handleOnChangeInput={handleOnChangeInput}
      newTaskTitle={newAddTask}
      onClickSubmit={onClickSubmit}
    >
      {filterTask(tasks).map(function (item) {
        return <TaskItem key={item.id} taskItem={item} />;
      })}
    </Layout>
  );
}

export default App;
