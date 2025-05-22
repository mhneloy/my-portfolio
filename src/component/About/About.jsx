// import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import SectionTitle from "../../ShareComponent/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import { services } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { Tilt } from "react-tilt";
import Container from "../../ShareComponent/Container/Container";
import PropTypes from "prop-types";
import neloy from "../../assets/neloy.png";
import { useContext } from "react";
import { AuthContext } from "../../ShareComponent/AuthContext/ContextProvider";

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
  const { aboutRef } = useContext(AuthContext);
  return (
    <div
      id="about"
      ref={aboutRef}
      className="bg-hero-animate bg-no-repeat bg-cover bg-center"
    >
      <Container>
        <SectionTitle title={"About Me"} />

        <div className="flex flex-wrap justify-between mt-5">
          <div className="w-full md:w-[70%] flex flex-col items-start justify-center">
            <motion.p
              variants={fadeIn("", "", 0.2, 0.75)} //first direction, type, delay, duration
              className="w-full md:w-[70%] text-secondary font-semibold text-xl !opacity-100"
            >
              Hi, I&apos;m Md Mahmudul Hassan, a dedicated MERN Stack Developer
              with a strong foundation in Computer Science and Engineering
              (CSE). I am passionate about building high-performance, scalable,
              and user-friendly web applications using MongoDB, Express.js,
              React, and Node.js. I love solving complex problems, writing clean
              and efficient code, and creating seamless user experiences. My
              approach to development focuses on scalability, best practices,
              and performance optimization. Always eager to learn new
              technologies and collaborate, I thrive in dynamic environments
              where innovation and creativity drive success. I am actively
              looking for opportunities to work on exciting projects and
              contribute to meaningful solutions. Let’s connect and build
              something impactful together!
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
          <div className="w-full md:w-[30%] flex justify-center">
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
