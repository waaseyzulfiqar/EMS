import React from "react";

const NewTask = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-full w-[300px] rounded-xl bg-blue-400 flex-shrink-0 p-5 overflow-auto"
    >
      <div className="flex justify-between items-center">
        <p className="bg-red-700 px-3 py-1 font-semibold rounded-md text-sm">
        {data.taskCategory}
        </p>
        <p className="font-bold text-sm tracking-tighter">{data.taskDate}</p>
      </div>
      <h2 className="font-bold mt-7 text-2xl tracking-tighter">{data.taskTitle}</h2>
      <p className="mt-3 text-xl tracking-tighter">{data.taskDescription}</p>
      <div className="mt-4">
        <button className="bg-blue-600 text-white px-2 py-1 text-sm rounded font-medium">Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
