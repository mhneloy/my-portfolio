import { Outlet } from "react-router-dom";
import Navbar from "../ShareComponent/Navbar/Navbar";
import Footer from "../ShareComponent/footer/Footer";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Layout = () => {
  return (
    <div className="relative  overflow-hidden bg-hero-animate-bg">
      {/* Full-Page Lottie Background */}

      {/* Social Icons Sidebar */}
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col space-y-4 bg-gray-800 p-2 rounded-r-lg z-50">
        <a
          href="https://www.facebook.com/profile.php?id=100010785578689"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-mahmudul-hassan-neloy-43867a211/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          href="https://github.com/md-neloy"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
        >
          <FaGithub size={24} />
        </a>
      </div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
