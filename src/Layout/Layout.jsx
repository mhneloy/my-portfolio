import { Outlet } from "react-router-dom";
import Navbar from "../ShareComponent/Navbar/Navbar";
import Footer from "../ShareComponent/footer/Footer";

const Layout = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-current">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
