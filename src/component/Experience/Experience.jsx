import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import { textVariant } from "../../utils/motion";
import Container from "../../ShareComponent/Container/Container";
import SectionTitle from "../../ShareComponent/SectionTitle/SectionTitle";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../ShareComponent/AuthContext/ContextProvider";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { experienceRef } = useContext(AuthContext);
  return (
    <section id="experience" ref={experienceRef} className="pt-8 ">
      <Container>
        <motion.div variants={textVariant()}>
          <SectionTitle
            title={"Experience"}
            subTitle="What I have done so far"
          />
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => {
              return <ExperienceCard key={index} experience={experience} />;
            })}
          </VerticalTimeline>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
ExperienceCard.propTypes = {
  experience: PropTypes.any,
};
