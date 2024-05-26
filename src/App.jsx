import { useState, useEffect } from "react"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import ShowTask from "./components/ShowTask"
import './App.css'


export default function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({});
  // useEffect is important when you have a list/object/infos that changes from time to time and you have a piece of code that you want to work on that list whenver when the list has been changed. use useEffect when one is changed, another thing is changed
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList))
  }, [taskList])
  return (
    <div className="App">
      <Header />
      <AddTask task={task} setTask={setTask} taskList={taskList} setTaskList={setTaskList} />
      <ShowTask task={task} setTask={setTask} taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
