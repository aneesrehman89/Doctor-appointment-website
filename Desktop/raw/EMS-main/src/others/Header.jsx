import React from "react";
import TaskListNumbers from "./TaskListNumbers";

const Header = ({ user, data }) => {  
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-2 bg-white shadow-md rounded-b-xl">
      {user === "admin" ? (
        <h1 className="text-xl sm:text-2xl font-medium text-black">
          Welcome Back, <br />
          <span className="text-1xl sm:text-3xl font-semibold text-emerald-600">
            Admin 👋
          </span>
        </h1>
      ) : (
        <h1 className="text-xl sm:text-2xl font-medium text-black">
          Hello, <br />
          <span className="text-1xl sm:text-3xl font-semibold text-emerald-600">
            {data.firstName} 👋
          </span>
        </h1>
      )}

      <button className="bg-red-600 text-sm sm:text-base font-medium text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm md:rounded-md shadow-md hover:bg-red-700 transition-all">
        Log Out
      </button>
    </div>
  );
};

export default Header;
