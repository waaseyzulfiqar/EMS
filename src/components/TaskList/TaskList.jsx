import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = (props) => {
  const { firstName } = props.data;

  return (
    <div
      id="tasklist"
      className="h-64 w-full mt-10 flex gap-x-5 items-center justify-start overflow-x-auto"
    >
      <AcceptTask />

      <NewTask />

      <CompleteTask />

      <FailedTask />
    </div>
  );
};

export default TaskList;
