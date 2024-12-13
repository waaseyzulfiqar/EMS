import React from "react";
import Header from "../../other/Header";
import CreateTask from "../../other/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full bg-[#1c1c1c] p-7">
        <Header />
        <CreateTask />
    </div>
  );
};

export default AdminDashboard;
