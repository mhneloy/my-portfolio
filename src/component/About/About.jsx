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
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./style.css";

const ServiceCard = ({ index, icon, title }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-black/40 border border-[#00ff9c] backdrop-blur-md rounded-2xl shadow-[0_0_20px_#00ff88] p-5"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-xl font-semibold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { aboutRef } = useContext(AuthContext);

  return (
    <div id="about" ref={aboutRef} className="py-20">
      <Container>
        <SectionTitle title="About Me" />

        <div className="mt-12 flex  flex-col md:flex-row justify-center items-start gap-14">
          {/* Image */}
          <motion.div
            variants={fadeIn("left", "spring", 0.3, 0.75)}
            className="md:w-[30%] w-full flex justify-center"
          >
            <div className="bg-black/20 border border-green-400 p-3 rounded-full shadow-[0_0_25px_#00ff88]">
              <img
                src={neloy}
                alt="neloy"
                className="rounded-full object-cover w-ful h-full border-4 border-[#00ff9c]"
              />
            </div>
          </motion.div>

          {/* Description */}
          <div className="md:w-[70%] w-full">
            <motion.div
              variants={fadeIn("right", "spring", 0.5, 0.75)}
              className=" text-white"
            >
              <p className="text-lg leading-relaxed text-gray-300">
                Hi, I&apos;m{" "}
                <span className="text-[#00ff9c] font-bold">
                  Md Mahmudul Hassan
                </span>
                , a passionate MERN Stack Developer with a solid background in
                Computer Science and Engineering. I specialize in building fast,
                scalable, and modern web applications using{" "}
                <span className="text-[#00ff9c] font-semibold">MongoDB</span>,{" "}
                <span className="text-[#00ff9c] font-semibold">Express.js</span>
                , <span className="text-[#00ff9c] font-semibold">React</span>,
                and{" "}
                <span className="text-[#00ff9c] font-semibold">Node.js</span>.
                <br />
                <br />I thrive in dynamic environments, love writing clean code,
                and enjoy collaborating with teams to solve challenging
                problems. I’m eager to contribute to impactful projects and
                always open to learning new technologies.
              </p>

              <Link to="">
                <div className=" flex gap-4 justify-center items-center w-fit mt-6 px-6 py-3 border border-[#00ff9c] text-[#00ff9c] hover:bg-[#00ff9c] hover:text-black rounded-lg transition duration-300">
                  Learn More{" "}
                  <span className=" relative animate-arrowTrail">
                    <FaArrowRight />
                  </span>
                </div>
              </Link>
            </motion.div>
            {/* Services */}
            <div className="mt-24 flex flex-wrap justify-start items-center gap-8">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} index={idx} />
              ))}
            </div>
          </div>
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
