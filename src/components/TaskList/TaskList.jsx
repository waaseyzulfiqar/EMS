import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-64 w-full mt-10 flex gap-x-5 items-center justify-start overflow-x-auto"
    >
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
        <h2 className="font-bold mt-7 text-2xl tracking-tighter">
          Ek aur Task
        </h2>
        <p className="mt-3 text-xl tracking-tighter">
          Kuch karan hy jindagi mein Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aperiam, sequi, consequatur error exercitationem
          nisi delectus quos nam earum officiis corrupti.
        </p>
      </div>
      <div
        id="tasklist"
        className="h-full w-[300px] rounded-xl bg-blue-400 flex-shrink-0 p-5 overflow-auto"
      >
        <div className="flex justify-between items-center">
          <p className="bg-red-700 px-3 py-1 font-semibold rounded-md text-sm">
            MEDIUM
          </p>
          <p className="font-bold text-sm tracking-tighter">14 Dec 2024 </p>
        </div>
        <h2 className="font-bold mt-7 text-2xl tracking-tighter">
          Ek aur Task
        </h2>
        <p className="mt-3 text-xl tracking-tighter">
          Kuch karan hy jindagi mein Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aperiam, sequi, error exercitationem nisi delectus.
        </p>
      </div>
      <div
        id="tasklist"
        className="h-full w-[300px] rounded-xl bg-emerald-400 flex-shrink-0 p-5 overflow-auto"
      >
        <div className="flex justify-between items-center">
          <p className="bg-red-700 px-3 py-1 font-semibold rounded-md text-sm">
            High
          </p>
          <p className="font-bold text-sm tracking-tighter">15 Dec 2024 </p>
        </div>
        <h2 className="font-bold mt-7 text-2xl tracking-tighter">
          Ek aur Task
        </h2>
        <p className="mt-3 text-xl tracking-tighter">
          Kuch karan hy jindagi mein Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aperiam, sequi, consequatur error exercitationem.
        </p>
      </div>
      <div
        id="tasklist"
        className="h-full w-[300px] rounded-xl bg-yellow-400 flex-shrink-0 p-5 overflow-auto text-black"
      >
        <div className="flex justify-between items-center">
          <p className="bg-red-700 px-3 py-1 font-semibold rounded-md text-sm text-white">
            LOW
          </p>
          <p className="font-bold text-sm tracking-tighter">16 Dec 2024 </p>
        </div>
        <h2 className="font-bold mt-7 text-2xl tracking-tighter">
          Ek aur Task
        </h2>
        <p className="mt-3 text-xl tracking-tighter">
          Kuch karan hy jindagi mein Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aperiam, sequi, consequatur error exercitationem
          nisi delectus quos nam earum officiis corrupti ab mollitia omnis
          repudiandae. Sequi asperiores cumque ratione repellat ullam.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
