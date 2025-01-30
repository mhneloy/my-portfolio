import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { useEffect, useState } from "react";

import { menu, close, brandLogo } from "../../assets";

const Navbar = () => {
  const [Active, setActive] = useState();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className={`bg-transparent shadow-md sticky top-0 z-50 py-4 w-full`}>
      <Container>
        <nav className="flex justify-between items-center">
          <Link to={"/"}>
            <div className="text-2xl font-bold text-blue-500">
              <img src={brandLogo} alt="" className="w-40 md:w-60" />
            </div>
          </Link>
          <ul className="hidden sm:flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={`hover:text-white text-[18px] ${(isActive) =>
                  isActive ? "text-white" : "text-secondary"}`}
                onClick={() => {
                  setActive("Home");
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`hover:text-white text-[18px] ${(isActive) =>
                  isActive ? "text-white" : "text-secondary"}`}
                onClick={() => {
                  setActive("About");
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={`hover:text-white text-[18px] ${(isActive) =>
                  isActive ? "text-white" : "text-secondary"}`}
                onClick={() => {
                  setActive("Projects");
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={`hover:text-white text-[18px] ${(isActive) =>
                  isActive ? "text-white" : "text-secondary"}`}
                onClick={() => {
                  setActive("Contact");
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* mobile view */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-4 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="">
                <li>
                  <NavLink
                    to="/"
                    className={`hover:text-white text-[18px] ${(isActive) =>
                      isActive ? "text-white" : "text-secondary"}`}
                    onClick={() => {
                      setActive("Home");
                      setToggle(!toggle);
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    // to="/about"
                    className={`hover:text-white text-[18px] ${(isActive) =>
                      isActive ? "text-white" : "text-secondary"}`}
                    onClick={() => {
                      setActive("About");
                      setToggle(!toggle);
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    // to="/projects"
                    className={`hover:text-white text-[18px] ${(isActive) =>
                      isActive ? "text-white" : "text-secondary"}`}
                    onClick={() => {
                      setActive("Projects");
                      setToggle(!toggle);
                    }}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    // to="/contact"
                    className={`hover:text-white text-[18px] ${(isActive) =>
                      isActive ? "text-white" : "text-secondary"}`}
                    onClick={() => {
                      setActive("Contact");
                      setToggle(!toggle);
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
