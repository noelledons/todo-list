import { createContext, useState, useEffect } from "react";

export const TaskListData = createContext(null);

function TaskContext({ children }) {
  const [tasks, setTasks] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const initialState = JSON.parse(localStorage.getItem("tasks")) || [];  
  /* 
    localStorage.getItem('tasks') = retrieves the value associated with the key tasks from the browser's local storage
    purpose: retrieve an array of tasks from the browser's local storage if it exists & if not, initialise an empty array
    */
   setTasks(initialState)
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
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
      }}
    >
      {children}
    </TaskListData.Provider>
  );
}

export default TaskContext;
