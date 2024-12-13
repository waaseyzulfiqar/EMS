import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {
  return <div className="h-screen bg-slate-900 text-white">
    {/* <Login /> */}
    {/* <EmployeeDashboard /> */}
    <AdminDashboard />
  </div>;
}

export default App;
