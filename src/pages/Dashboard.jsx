import React from "react";
import Sidebar from "../components/Sidebar";
import Mainbar from "../components/Mainbar";

const Dashboard = () => {
  return (
    <div className="h-screen max-w-screen">
      <div className="flex content-around h-full w-full">
        <div className="w-[400px] max-h-screen border-r-1 bg-grey-300  border-gray-700 rounded">
          <div className="avatar   w-full p-2">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2 ">
              <img src="" />
            </div>
            <p className="m-1 p-1">User</p>
          </div>
          <Sidebar />
          <h2>Chat Users</h2>
        </div>
        <div className="w-screen">
          <Mainbar />

          <label className="input w-full h-14 flex items-center gap-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              className="text-gray-500"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-6c.83 0 1.5-.67 1.5-1.5S9.33 11 8.5 11 7 11.67 7 12.5 7.67 14 8.5 14zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 11 15.5 11 14 11.67 14 12.5s.67 1.5 1.5 1.5zM12 17c2.33 0 4.31-1.46 5.11-3.5h-2.16c-.63 1.13-1.84 2-3.29 2s-2.66-.87-3.29-2H6.89C7.69 15.54 9.67 17 12 17z" />
            </svg>
            <input
              type="text"
              placeholder="Type a message"
              className="w-full bg-transparent focus:outline-none "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2v7z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
