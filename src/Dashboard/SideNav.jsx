import { FaHome, FaUser } from "react-icons/fa";
import { MdEmail, MdLibraryAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-full bg-brand">
      <ul className=" text-[#000000]">
        <li>
          {" "}
          <NavLink
            to="/dashboard/addproject"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 ${
                isActive
                  ? "bg-[#2A323C] text-white"
                  : "text-black hover:bg-gray-100"
              }`
            }
          >
            {" "}
            <MdLibraryAdd />
            Add Projects
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/dashboard/email"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 ${
                isActive
                  ? "bg-[#2A323C] text-white"
                  : "text-black hover:bg-gray-100"
              }`
            }
          >
            {" "}
            <MdEmail />
            Emails
          </NavLink>
        </li>
      </ul>
      {/* share common NavLink */}
      <div className="divider"></div>
      <ul className=" text-[#000000]">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 ${
                isActive
                  ? "bg-[#2A323C] text-white"
                  : "text-black hover:bg-gray-100"
              }`
            }
          >
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 ${
                isActive
                  ? "bg-[#2A323C] text-white"
                  : "text-black hover:bg-gray-100"
              }`
            }
          >
            <FaUser /> Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
