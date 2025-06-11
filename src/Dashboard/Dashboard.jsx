import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      we are in dashboard
      <Outlet />
    </div>
  );
};

export default Dashboard;
