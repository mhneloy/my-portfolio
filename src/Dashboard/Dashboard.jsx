import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import Footer from "../ShareComponent/footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-rows-[13%_1fr] lg:grid-rows-none lg:grid-cols-[13%_87%] overflow-y-scroll lg:min-h-[calc(100vh-84px)]">
        <SideNav />
        <div className="w-full h-max ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
