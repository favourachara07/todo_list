/* eslint-disable react/prop-types */
const AddTask = ({ taskList, setTaskList, task, setTask }) => {

  const handleSubmit = (e) => {

    e.preventDefault();
    if (task.id) {
      const date = new Date()
      const updateTaskList = taskList.map((todo) => (
        todo.id === task.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo)
      )
      setTaskList(updateTaskList)
      setTask({})
    } else {
      const date = new Date()
      const newTask = { id: date.getTime(), name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` };
      setTaskList([...taskList, newTask]);
      setTask({})
    }
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          placeholder="Add Task"
          maxLength='25' autoComplete="off"
          onChange={e=> setTask({...task, name: e.target.value})}
        />
        <button type="submit">{task.id ? 'Update': 'Add Task'}</button>
      </form>
    </section>
  );
};

export default AddTask;
