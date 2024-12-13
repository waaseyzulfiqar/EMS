import React from "react";
import Header from "../../other/Header";
import CreateTask from "../../other/CreateTask";
import AllTasks from "../../other/AllTasks";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-[#1c1c1c] p-5">
        <Header />
        <CreateTask />
        <AllTasks />
    </div>
  );
};

export default AdminDashboard;
