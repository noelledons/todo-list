"use client";

import React, { useContext, useState, useEffect } from "react";
import { TaskListData } from "@/context/tasklistContext";
import "./styles.scss"

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask, title, setTitle } = useContext(TaskListData);
  

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle(" ");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle(" ");
    }
  }, [editItem, setTitle]);

  return (
    <div className="taskform">
      <input
        type="text"
        onChange={handleChange}
        value={title}
        placeholder="Add Task..."
        required
        className="taskform__input"
      />
      <div className="taskform__buttons">
        <button type="submit" className={`taskform__buttons-styling ${title.trim() === "" ? "disabled" : ""}`} onClick={handleSubmit} disabled={title.trim() === ""}> 
          {editItem ? "Save" : "Add Task"}
        </button>
        <button className="taskform__buttons-styling" onClick={clearList}>
          Clear All
        </button>
      </div>
   </div>
  );
};

export default TaskForm;
