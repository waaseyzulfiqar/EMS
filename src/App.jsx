import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {

const [user, setUser] = useState(null) 

function handleLogin(email, password){
  if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
  }else if(email == 'user@me.com' && password == '123'){
    setUser('Employee')
  }else{
      alert('Invalid Credentials')
  }
}
// console.log(user);

const data = useContext(AuthContext)
console.log(data);

  return <div className="h-screen bg-slate-900 text-white">
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
  </div>;
}

export default App;
