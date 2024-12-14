import React from "react";

const AcceptTask = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-full w-[300px] rounded-xl bg-red-400 flex-shrink-0 p-5 overflow-auto"
    >
      <div className="flex justify-between items-center">
        <p className="bg-red-700 px-3 py-1 font-semibold rounded-md text-sm">
          {data.taskCategory}
        </p>
        <p className="font-bold text-sm tracking-tighter">{data.taskDate}</p>
      </div>
      <h2 className="font-bold mt-7 text-2xl tracking-tighter">{data.taskTitle}</h2>
      <p className="mt-3 text-xl tracking-tighter">{data.taskDescription}</p>

      <div className="flex flex-between mt-5 gap-3">
        <button className="bg-green-500 py-1 text-white rounded font-medium active:scale-95 px-2 text-sm">Mark as Completed</button>
        <button className="bg-red-500 text-white rounded font-medium active:scale-95 py-1 px-2 text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
