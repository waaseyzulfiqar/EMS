import React from "react";

const CreateTask = () => {
  return (
    <div className="w-full bg-[#1c1c1c] flex mt-5 justify-center items-center flex-col">
      <h1 className="text-3xl font-semibold tracking-tight mb-5">
        Create Task
      </h1>
      <div className="flex w-full justify-around px-10 py-7 bg-slate-700">
        <div className="flex flex-col w-1/3">
          <form>
            <div className="flex flex-col">
              <label htmlFor="title" className="text-slate-300 mb-2">
                Task Title
              </label>
              <input
                type="text"
                id="title"
                className="bg-slate-600 px-4 py-2 rounded-md w-full outline-none"
                placeholder="Enter Title"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="date" className="text-slate-300 mb-2 mt-4">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="bg-slate-600 px-4 py-2 rounded-md w-full outline-none"
                placeholder="Enter Title"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="assignTo" className="text-slate-300 mb-2 mt-4">
                Assign To
              </label>
              <input
                type="text"
                id="assignTo"
                className="bg-slate-600 px-4 py-2 rounded-md w-full outline-none"
                placeholder="Employee name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="category" className="text-slate-300 mb-2 mt-4">
                Category
              </label>
              <input
                type="text"
                id="category"
                className="bg-slate-600 px-4 py-2 rounded-md w-full outline-none"
                placeholder="design, dev, etc"
              />
            </div>
          </form>
        </div>

        <div className="flex flex-col w-1/3">
          <div className="flex flex-col">
            <label htmlFor="description" className="text-slate-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="bg-slate-600 px-4 py-2 rounded-md outline-none"
              rows={4}
              cols={10}
              placeholder="Description"
            ></textarea>
          </div>

          <input
            type="submit"
            value="Create Task"
            className="w-full bg-emerald-500 text-white font-semibold py-2 mt-4 rounded-md cursor-pointer active:scale-95"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
