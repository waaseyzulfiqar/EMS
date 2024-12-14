import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = (props) => {
  if (!props || !props.data || !props.data.tasks) {
    return (
      <div id="tasklist" className="h-64 w-full mt-10 flex justify-center items-center">
        <p>Error: Task data not available.</p>
      </div>
    );
  }

  if (!Array.isArray(props.data.tasks)) {
    return (
      <div id="tasklist" className="h-64 w-full mt-10 flex justify-center items-center">
        <p>Error: Task data is not an array.</p>
      </div>
    );
  }

  return (
    <div
      id="tasklist"
      className="h-64 w-full mt-10 flex gap-x-5 items-center justify-start overflow-x-auto"
    >
      {props.data.tasks.map((elem, index) => {
        if (typeof elem !== "object") {
          return null;
        }

        if (elem.active) {
          return <AcceptTask key={index} data={elem} />;
        }

        if (elem.newTask) {
          return <NewTask key={index} data={elem}/>;
        }

        if (elem.completed) {
          return <CompleteTask key={index} data={elem}/>;
        }

        if (elem.failed) {
          return <FailedTask key={index} data={elem}/>;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;