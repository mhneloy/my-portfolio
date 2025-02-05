// import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import SectionTitle from "../../ShareComponent/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import { services } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { Tilt } from "react-tilt";
import Container from "../../ShareComponent/Container/Container";
import PropTypes from "prop-types";
import neloy from "../../assets/neloy.png";

const ServiceCard = ({ index, icon, title }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-2xl shadow-card"
        >
          <div className="bg-tertiary rounded-2xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};
const About = () => {
  return (
    <div>
      <Container>
        <SectionTitle title={"About Me"} />
        {/* <p className="text-lg">
          I&apos;m a frontend developer skilled in building beautiful and
          responsive web applications. I also have experience with backend
          technologies such as Node.js, Express.js, and MongoDB.
        </p>
        <div className="flex space-x-4 mt-4">
          <FaReact className="text-blue-500 text-3xl" />
          <FaNodeJs className="text-green-500 text-3xl" />
          <FaDatabase className="text-yellow-500 text-3xl" />
        </div> */}
        <div className="flex flex-wrap justify-between mt-5">
          <div className="w-full md:w-[50%] flex flex-col items-center justify-center">
            <motion.p
              variants={fadeIn("", "", 0.2, 0.75)} //first direction, type, delay, duration
              className="w-[70%] text-secondary font-semibold text-xl"
            >
              I&apos;m a skilled software developer with experience in
              TypeScript and JavaScript, and experstise in frameworks like
              React, Node.js, and Three.js. I&apos;m a quick learner and
              collaborate closely with clients to create efficient, scalable,
              and user-friendly solutions that solve real-world problems.
              Let&apos;s work together to bring your ideas to life!
            </motion.p>
            <a
              href="https://drive.google.com/uc?export=download&id=1EC1TRmNRZGSDelfqt2prL1BKw0TAuhoB
"
              className="btn mt-5"
              download
            >
              DownLoad Resume
            </a>
          </div>
          <div className="w-full md:w-[50%] flex justify-center">
            <img src={neloy} alt="neloy" />
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-6">
          {services.map((service, idx) => {
            return <ServiceCard key={idx} {...service} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default About;
ServiceCard.propTypes = {
  index: PropTypes.any,
  title: PropTypes.string,
  icon: PropTypes.any,
};
