import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { useContext, useState } from "react";

import { menu, close, brandLogo } from "../../assets";
import { AuthContext } from "../AuthContext/ContextProvider";

const Navbar = () => {
  const { aboutRef, experienceRef, projectRef } = useContext(AuthContext);
  const [Active, setActive] = useState();
  const [toggle, setToggle] = useState(false);
  const handleScroll = (section) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={`bg-transparent shadow-md sticky top-0 z-50 py-4 w-full`}>
      <Container>
        <nav className="flex justify-between items-center">
          <Link to={"/"}>
            <div className="text-2xl font-bold text-blue-500">
              <img src={brandLogo} alt="" className="w-40 md:w-60" />
            </div>
          </Link>
          <ul className="hidden sm:flex space-x-4 items-center">
            <li>
              <NavLink
                to="/"
                className={`hover:text-white text-[18px] ${(isActive) =>
                  isActive ? "text-white" : "text-secondary"}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <a
                className={`hover:text-white text-[18px] cursor-pointer ${(
                  isActive
                ) => (isActive ? "text-white" : "text-secondary")}`}
                onClick={() => handleScroll(aboutRef)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`hover:text-white text-[18px] cursor-pointer ${(
                  isActive
                ) => (isActive ? "text-white" : "text-secondary")}`}
                onClick={() => handleScroll(experienceRef)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className={`hover:text-white text-[18px] cursor-pointer ${(
                  isActive
                ) => (isActive ? "text-white" : "text-secondary")}`}
                onClick={() =>
                  document
                    .getElementById("myskill")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                My Skill
              </a>
            </li>
            <li>
              <NavLink
                className={`hover:text-white text-[18px] ${(isActive) =>
                  isActive ? "text-white" : "text-secondary"}`}
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`hover:text-white text-[18px] ${(isActive) =>
                  isActive ? "text-white" : "text-secondary"}`}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a
                href="https://drive.google.com/uc?export=download&id=1EC1TRmNRZGSDelfqt2prL1BKw0TAuhoB"
                download
                className="btn"
              >
                Download Resume
              </a>
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
                    onClick={() =>
                      document
                        .getElementById("home")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  {() =>
                    document
                      .getElementById("myskill")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  <NavLink
                    // to="/about"
                    className={`hover:text-white text-[18px] ${(isActive) =>
                      isActive ? "text-white" : "text-secondary"}`}
                    onClick={() =>
                      document
                        .getElementById("about")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    // to="/projects"
                    className={`hover:text-white text-[18px] ${(isActive) =>
                      isActive ? "text-white" : "text-secondary"}`}
                    onClick={() =>
                      document
                        .getElementById("experience")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    // to="/projects"
                    className={`hover:text-white text-[18px] ${(isActive) =>
                      isActive ? "text-white" : "text-secondary"}`}
                    onClick={() =>
                      document
                        .getElementById("myskill")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    My Skill
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    // to="/projects"
                    className={`hover:text-white text-[18px] ${(isActive) =>
                      isActive ? "text-white" : "text-secondary"}`}
                    onClick={() =>
                      document
                        .getElementById("projects")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    // to="/contact"
                    className={`hover:text-white text-[18px] ${(isActive) =>
                      isActive ? "text-white" : "text-secondary"}`}
                    onClick={() =>
                      document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1EC1TRmNRZGSDelfqt2prL1BKw0TAuhoB"
                    download
                    className="btn"
                  >
                    Download Resume
                  </a>
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
