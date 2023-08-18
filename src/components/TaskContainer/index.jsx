"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./styles.scss";

const TaskContainer = () => {
  const router = useRouter();
  const { username } = router.query || {};
  console.log(username);

  return (
    <div className="taskcontainer">
      <div className="taskcontainer__headercontainer" >
        <h1 className="taskcontainer__header">{username} To-do List</h1>
      </div>
    </div>
  );
};

export default TaskContainer;
