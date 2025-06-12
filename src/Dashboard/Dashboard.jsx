import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import Footer from "../ShareComponent/footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-rows-[238px_1fr] lg:grid-rows-none lg:grid-cols-[13%_87%]  lg:min-h-[calc(100vh-84px)]">
        <SideNav />
        <div className="w-full bg-hero-animate bg-cover bg-no-repeat overflow-y-scroll min-h-[calc(100vh-84px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
