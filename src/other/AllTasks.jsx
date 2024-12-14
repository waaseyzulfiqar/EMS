import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);
  console.log('userData --> ', userData);

  return (
    <div id="tasklist" className="bg-[#1c1c1c] p-5 mt-8 flex flex-col gap-y-3">
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded text-center">
        <h2 className="w-1/5 md:text-xl font-semibold">Employee</h2>
        <h3 className="w-1/5 md:text-xl font-semibold">New Task</h3>
        <h5 className="w-1/5 md:text-xl font-semibold">
          Active Task
        </h5>
        <h5 className="w-1/5 md:text-xl font-semibold">Completed</h5>
        <h5 className="w-1/5 md:text-xl font-semibold">Failed</h5>
      </div>

      <div>
        {userData &&
          userData.map((elem, idx) => {
            return (
              <div key={idx} className="bg-black-400 py-2 px-4 flex justify-between rounded text-center border border-emerald-400 mb-3">
                <h2 className=" md:text-lg font-medium w-1/5">{elem.firstName}</h2>
                <h3 className=" md:text-lg font-medium w-1/5 text-blue-500">{elem.taskNumbers.active}</h3>
                <h5 className=" md:text-lg font-medium w-1/5 text-yellow-400">{elem.taskNumbers.newTask}</h5>
                <h5 className=" md:text-lg font-medium w-1/5 text-green-500">{elem.taskNumbers.completed}</h5>
                <h5 className=" md:text-lg font-medium w-1/5 text-red-500">{elem.taskNumbers.failed}</h5>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllTasks;
