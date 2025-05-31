import { FaCss3, FaHtml5, FaJsSquare, FaNode, FaReact } from "react-icons/fa";
import firebase from "../../assets/Firebase.png";
import express from "../../assets/Express.png";
import mongodb from "../../assets/MongoDB.png";
import Container from "../../ShareComponent/Container/Container";
import SectionTitle from "../../ShareComponent/SectionTitle/SectionTitle";
import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";

const MySkill = () => {
  return (
    <section id="myskill">
      <Container>
        <SectionTitle title={"My Skill"} />

        <Marquee
          speed={80}
          direction="left"
          pauseOnHover="true"
          className="w-full"
        >
          <div className=" flex gap-5 w-full">
            {/* React */}
            <SkillCard logo={FaReact} title={"React"} rating={8} />
            {/* Node.js */}

            <SkillCard logo={FaNode} title={"NODE.JS"} rating={6} />

            {/* MongoDB */}
            <div className="card bg-base-100 w-full md:w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={mongodb}
                  className="flex-1 w-24 h-24"
                  alt="MongoDB Logo"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">MongoDB</h2>
              </div>
            </div>
            {/* Firebase */}
            <div className="card bg-base-100 w-full md:w-96 shadow-xl mr-5">
              <figure className="flex-1 px-10 pt-10">
                <img src={firebase} className="w-24 h-24" alt="Firebase Logo" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Firebase</h2>
              </div>
            </div>
          </div>
        </Marquee>
        {/* <marquee behavior="scroll" direction="left">
      </marquee> */}

        {/* skill show  */}
        <Marquee
          speed={80}
          direction="right"
          pauseOnHover="true"
          className="w-full mt-5"
        >
          <div className="flex gap-5 w-full">
            {/* HTML */}
            <SkillCard logo={FaHtml5} title={"HTML"} rating={9} />
            {/* CSS3 */}
            <SkillCard logo={FaCss3} title={"CSS3"} rating={9.5} />

            {/* JavaScript */}
            <SkillCard logo={FaJsSquare} title={"JS"} rating={8} />
            {/* Firebase */}
            <SkillCard logo={FaJsSquare} title={"CSS3"} rating={8} />
            <div className="card  bg-base-100 w-full md:w-96 shadow-xl mr-5">
              <figure className="flex-1 px-10 pt-10">
                <img
                  src={express}
                  className="text-green-500 w-24 h-24"
                  alt="Express.js Logo"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Express.js</h2>
              </div>
            </div>
          </div>
        </Marquee>
      </Container>
    </section>
  );
};

export default MySkill;
