import { Outlet } from "react-router-dom";
import Navbar from "../ShareComponent/Navbar/Navbar";
import Footer from "../ShareComponent/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
