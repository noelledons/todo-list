"use client";

import React, { useContext } from "react";
import { TaskListData } from "@/context/tasklistContext";
import "./styles.scss";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const TaskInput = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListData);

  return (
    <div className="taskinput">
      <div className="taskinput__section checkbox">
        <input type="checkbox" />
        <li className="taskinput__listitems">
          <span className="taskinput__listitemstitle">{task.title}</span>
          <div className="taskinput__buttons"></div>
        </li>
      </div>

      <div className="taskinput__section">
        <button onClick={() => removeTask(task.id)} className="taskinput__icon">
          <FaTrashAlt />
        </button>
        <button className="taskinput__icon" onClick={() => findItem(task.id)}>
          <FaPencilAlt />
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
