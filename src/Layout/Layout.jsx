import { Outlet } from "react-router-dom";
import Footer from "../ShareComponent/footer/Footer";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [topPosition, setTopPosition] = useState("2.5rem");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setIsVisible(true);
        setTopPosition("50%");
      } else {
        setIsVisible(false);
        setTopPosition("2.5rem");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);
  return (
    <div className="relative overflow-hidden ">
      {/* Social Icons Sidebar */}
      <div
        className={`fixed  flex left-0 transform -translate-y-1/2 ${
          isVisible ? "opacity-100" : "opacity-0"
        } flex-col space-y-4 bg-transparent rounded-r-lg z-50 transition-all duration-500 `}
        style={{ top: topPosition }}
      >
        <a
          href="https://www.facebook.com/profile.php?id=100010785578689"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 w-fit bg-transparent border-2 border-solid border-[#7cf03d] text-[#7cf03d] hover:text-[#1f242d] rounded-lg hover:shadow-[0_0_10px_#7cf03d] hover:bg-[#7cf03d] transition"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-mahmudul-hassan-neloy-43867a211/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 w-fit bg-transparent border-2 border-solid border-[#7cf03d] text-[#7cf03d] hover:text-[#1f242d] rounded-lg hover:shadow-[0_0_10px_#7cf03d] hover:bg-[#7cf03d] transition"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="https://github.com/md-neloy"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 w-fit bg-transparent border-2 border-solid border-[#7cf03d] text-[#7cf03d] hover:text-[#1f242d] rounded-lg hover:shadow-[0_0_10px_#7cf03d] hover:bg-[#7cf03d] transition"
        >
          <FaGithub size={18} />
        </a>
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
