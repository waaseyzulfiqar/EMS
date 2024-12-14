import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  function handleLogin(email, password) {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const isEmployee = authData.employeesData.find(
        (e) => email == e.email && password == e.password
      );
      if (isEmployee) {
        setUser("employee");
        setLoggedInUserData(isEmployee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: isEmployee })
        );
      }
      console.log("employee -->", isEmployee);
    } else {
      alert("Invalid Credentials");
    }
  }

  function handleLogout() {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  }

  console.log("user -->", user);

  return (
    <div className="h-screen bg-slate-900 text-white">
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          {user === "admin" ? (
            <AdminDashboard />
          ) : user === "employee" ? (
            <EmployeeDashboard data={loggedInUserData} />
          ) : null}
        </>
      )}
    </div>
  );
}

export default App;