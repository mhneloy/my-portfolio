import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import Footer from "../ShareComponent/footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-5 items-start min-h-[calc(100vh-84px)]">
        <SideNav />
        <div className="w-full ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
