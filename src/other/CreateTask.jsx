import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [newTask, setNewTask] = useState({});

  const [userData, setUserData] = useContext(AuthContext);

  function submitHandler(e) {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDate,
      assignTo,
      taskCategory,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });
  }

  useEffect(() => {
    if (Object.keys(newTask).length > 0) {

      userData && userData.forEach((elem) => {
        if (assignTo === elem.firstName) {
          elem.tasks.push(newTask);
        }
      });

      setUserData(userData)

      console.log(userData);
      // Reset form fields
      setTaskTitle("");
      setTaskDate("");
      setAssignTo("");
      setTaskCategory("");
      setTaskDescription("");
    }
  }, [newTask, assignTo]);

  return (
    <div className="w-full bg-[#1c1c1c] flex mt-4 justify-center items-center flex-col">
      <div className="flex w-full md:justify-around flex-col sm:justify-center sm:items-center md:flex-row px-10 py-7 bg-slate-700 rounded">
        <div className="flex flex-col w-full md:w-1/3">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="flex flex-col">
              <label htmlFor="title" className="text-slate-300 mb-2">
                Task Title
              </label>
              <input
                onChange={(e) => setTaskTitle(e.target.value)}
                value={taskTitle}
                type="text"
                id="title"
                className="bg-slate-600 px-4 py-2 rounded-md w-full outline-none border border-slate-400"
                placeholder="Enter Title"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="date" className="text-slate-300 mb-2 mt-4">
                Date
              </label>
              <input
                onChange={(e) => setTaskDate(e.target.value)}
                value={taskDate}
                type="date"
                id="date"
                className="bg-slate-600 px-4 py-2 rounded-md w-full outline-none border border-slate-400"
                placeholder="Enter Title"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="assignTo" className="text-slate-300 mb-2 mt-4 ">
                Assign To
              </label>
              <input
                onChange={(e) => setAssignTo(e.target.value)}
                value={assignTo}
                type="text"
                id="assignTo"
                className="bg-slate-600 px-4 py-2 rounded-md w-full outline-none border border-slate-400"
                placeholder="Employee name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="category" className="text-slate-300 mb-2 mt-4">
                Category
              </label>
              <input
                onChange={(e) => setTaskCategory(e.target.value)}
                value={taskCategory}
                type="text"
                id="category"
                className="bg-slate-600 px-4 py-2 rounded-md w-full outline-none border border-slate-400"
                placeholder="design, dev, etc"
              />
            </div>
          </form>
        </div>

        <div className="flex flex-col w-full md:w-1/3">
          <div className="flex flex-col">
            <label htmlFor="taskDescription" className="text-slate-300 mb-2">
              Description
            </label>
            <textarea
              onChange={(e) => setTaskDescription(e.target.value)}
              value={taskDescription}
              id="taskDescription"
              className="bg-slate-600 px-4 py-2 rounded-md outline-none border border-slate-400"
              rows={9}
              cols={10}
              placeholder="Description"
            ></textarea>
          </div>

          <form onSubmit={submitHandler}>
            <input
              type="submit"
              value="Create Task"
              className="w-full bg-emerald-500 text-white font-semibold py-2 mt-4 rounded-md cursor-pointer active:scale-95"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
