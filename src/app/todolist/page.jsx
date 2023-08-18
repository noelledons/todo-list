"use client";

import TaskContainer from "@/components/TaskContainer";
import TaskContext from "@/context/tasklistContext";
import "./styles.scss";

const TodoPage = () => {
  return (
    <TaskContext>
      <div className="todopage">
        <TaskContainer />
      </div>
    </TaskContext>
  );
};

export default TodoPage;
