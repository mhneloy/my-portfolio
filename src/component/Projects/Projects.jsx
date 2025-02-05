import SectionTitle from "../../ShareComponent/SectionTitle/SectionTitle";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { github } from "../../assets";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { textVariant } from "../../utils/motion";
import Container from "../../ShareComponent/Container/Container";
import PropTypes from "prop-types";
import { image } from "framer-motion/client";
// import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectCard = ({ project, index }) => {
  const { tags, name, image, description, source_code_link, live_link } =
    project;
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl  w-full"
      >
        <div className="relative w-full ">
          <img
            src={image}
            alt=""
            className="w-full h-64 md:h-96  rounded-2xl"
          />
          <div className="absolute top-5 right-5">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient  flex justify-center items-center w-10 h-10  rounded-full hover:cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          <div className="mt-5">
            <h3>{name}</h3>
            <p>{description}</p>
            <button
              className="btn mt-3"
              onClick={() => window.open(live_link, "_blank")}
            >
              view Project
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div>
      <Container>
        <SectionTitle title={"My Project"} />
        <div className="flex justify-center items-center w-full  ">
          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl"
          >
            Follwing project showcase my skills and experience through
            reat-world examples of my work. Each project is briefly described of
            my work. Each project is briefly described with links to code
            repositories and live demos in it. It reflects my ability to solve
            complex problems, work with different technologies, and manage
            projects effectively.
          </motion.p>
        </div>
        {/* project cards */}
        <div className=" w-full mt-6 ">
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => {
              return (
                <ProjectCard key={index} index={index} project={project} />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
ProjectCard.propTypes = {
  project: PropTypes.any,
  index: PropTypes.any,
};
