import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployDashboard from "./components/Dashboard/EmployDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import AllTask from "./others/AllTask";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import Header from "./others/Header";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);
  const AuthData = useContext(AuthContext);
  // console.log(AuthData.employee[0].email);
  // useEffect(() => {

  //   if(AuthData) {
  //     const LoggedInuser = localStorage.getItem("LoggedInUser")
  //     if(LoggedInuser){
  //       setUser(LoggedInuser.user)
  //     }
  //   }
  // }, [AuthData]);

  useEffect(()=>{
    setLocalStorage()
  })

  const handleLogin = (email, password) => {
    // Check for admin login
    if (email === "admin@mail" && password === "123") {
      setUser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
    } 
    // Check for employee login
    else if (AuthData && AuthData.employee) {
      const employee = AuthData.employee.find(
        (e) => e.email === email && e.password === password
      );
      // If employee is found, proceed with login
      if (employee) {
        setUser("user");
        setLoggedInUserData(employee);
        localStorage.setItem("LoggedInUser", JSON.stringify({ role: "user" }));
      } else {
        alert("Invalid user");
      }
    } 
    // If neither admin nor employee found
    else {
      alert("Invalid user");
    }
  };
  
  return (
    <>
      <div>
        {!user ? (
          <Login handleLogin={handleLogin} />
        ) : (
          <>
            <Header user={user} data={LoggedInUserData} />
            {user === "user" ? (
              <EmployDashboard data={LoggedInUserData} />
            ) : user === "admin" ? (
              <AdminDashboard />
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </>
  );
};

export default App;
