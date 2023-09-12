import { useState } from "react";
import uuid from "react-uuid";
import TaskForm from "../../components/forms/TaskForm";
import TaskList from "./TaskList";

function AllTasks({ title }) {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("empty");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTaskList(() => {
      return [...taskList, { id: uuid(), taskName: task }];
    });
    console.log(taskList);
    setTask("");
    setStatus("submitting");
  }
  function handleOnTextChange(e) {
    setTask(e.target.value);
    setStatus("typing");
  }
  function handleDelete(id) {
    const newTask = taskList.filter((taskId) => taskId.id !== id);
    setTaskList(newTask);
  }
  function handleOnUpdate() {}
  return (
    <>
      <div className="w-full px-8 pt-10">
        <h1 className="text-2xl font-medium">{title}</h1>

        <TaskForm
          value={task}
          onSubmit={handleSubmit}
          status={status}
          placeholder="Add a new task to the 'All Category'"
          onTextChange={handleOnTextChange}
        />
        <TaskList
          tasks={taskList}
          onDelete={handleDelete}
          onUpdate={handleOnUpdate}
        />
      </div>
    </>
  );
}

export default AllTasks;
