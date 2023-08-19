import React from "react";
import { useSearchParams } from "next/navigation";
import "./styles.scss";
import TaskForm from "../TaskForm";
import TaskList from "../TaskList";

const TaskContainer = () => {
  const searchParams = useSearchParams();
  const user = searchParams.get("username");

  return (
    <div className="taskcontainer">
      <div className="taskcontainer__headercontainer">
        <h1 className="taskcontainer__header"> {user}{`'s`} To-do List</h1>
      </div>
      <div>
        <TaskForm />
      </div>
      <div>
        <TaskList />
      </div>
    </div>
  );
};

export default TaskContainer;
