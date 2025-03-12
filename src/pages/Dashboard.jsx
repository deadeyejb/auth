import React from "react";
import Sidebar from "../components/Sidebar";
import Mainbar from "../components/Mainbar";

const Dashboard = () => {
  return (
    <div className="h-screen max-w-screen">
      <div className="flex content-around h-full w-full">
        <div className="w-[400px] max-h-screen border-r-1 bg-grey-300  border-gray-700 rounded">
          <h2 className="text-White text-lg p-2">Messages</h2>
          <Sidebar />
        </div>
        <div className="w-screen">
          <Mainbar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
