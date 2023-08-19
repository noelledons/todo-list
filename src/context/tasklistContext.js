"use client"

import { createContext, useState, useEffect, useCallback } from "react";
import {v4 as uuidv4} from "uuid";

export const TaskListData = createContext();

function TaskContext({ children }) {
  const [tasks, setTasks] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [checkedTasks, setCheckedTasks] = useState([]); 
  const [title, setTitle] = useState("");

  useEffect(() => {
    const initialState = JSON.parse(localStorage.getItem("tasks")) || [];  
  /* 
    localStorage.getItem('tasks') = retrieves the value associated with the key tasks from the browser's local storage
    purpose: retrieve an array of tasks from the browser's local storage if it exists & if not, initialise an empty array
    */
   setTasks(initialState)
   //using tasks
  }, []);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([])
    setEditItem(null)
    setTitle("")
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };

  const toggleChecked = (id) => {
    setCheckedTasks((prevCheckedTasks) => {
      if (prevCheckedTasks.includes(id)) {
        return prevCheckedTasks.filter((taskId) => taskId !== id);
      } else {
        return [...prevCheckedTasks, id];
      }
    });
  };

  return (
    <TaskListData.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
        toggleChecked, 
        checkedTasks,
        title,
        setTitle,
      }}
    >
      {children}
    </TaskListData.Provider>
  );
}

export default TaskContext;
