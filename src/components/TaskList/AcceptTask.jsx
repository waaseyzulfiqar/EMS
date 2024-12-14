import React from "react";

const AcceptTask = () => {
  return (
    <div
      id="tasklist"
      className="h-full w-[300px] rounded-xl bg-red-400 flex-shrink-0 p-5 overflow-auto"
    >
      <div className="flex justify-between items-center">
        <p className="bg-red-700 px-3 py-1 font-semibold rounded-md text-sm">
          High
        </p>
        <p className="font-bold text-sm tracking-tighter">13 Dec 2024 </p>
      </div>
      <h2 className="font-bold mt-7 text-2xl tracking-tighter">Ek aur Task</h2>
      <p className="mt-3 text-xl tracking-tighter">
        Kuch karan hy jindagi mein Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Aperiam, sequi, consequatur error exercitationem nisi
        delectus quos nam earum officiis corrupti.
      </p>

      <div className="flex flex-between mt-5 gap-3">
        <button className="bg-green-500 py-1 text-white rounded font-medium active:scale-95 px-2 text-sm">Mark as Completed</button>
        <button className="bg-red-500 text-white rounded font-medium active:scale-95 py-1 px-2 text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
