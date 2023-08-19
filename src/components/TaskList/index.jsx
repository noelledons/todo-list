"use client";

import React, { useContext } from "react";
import { TaskListData } from "@/context/tasklistContext";
import TaskInput from "../TaskInput";
import "./styles.scss";

const TaskList = () => {
  const { tasks,  checkedTasks  } = useContext(TaskListData);
  return (
    <div className="tasklist">
      {tasks.length ? (
        <ul className="tasklist_todos">
          {tasks.map((task) => {
            const isTaskChecked = checkedTasks.includes(task.id);
            return <TaskInput task={task} key={task.id} isChecked={isTaskChecked}/>;
          })}
        </ul>
      ) : (
        <div className="tasklist_notasks"> No Tasks </div>
      )}
    </div>
  );
};

export default TaskList;
