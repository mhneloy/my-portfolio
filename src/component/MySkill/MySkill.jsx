import { FaCss3, FaHtml5, FaJsSquare, FaNode, FaReact } from "react-icons/fa";
import firebase from "../../assets/Firebase.png";
import express from "../../assets/Express.png";
import mongodb from "../../assets/MongoDB.png";
import Container from "../../ShareComponent/Container/Container";
import SectionTitle from "../../ShareComponent/SectionTitle/SectionTitle";
import Marquee from "react-fast-marquee";

const MySkill = () => {
  return (
    <Container>
      <SectionTitle title={"My Skill"} />

      <Marquee
        speed={80}
        direction="left"
        pauseOnHover="true"
        className="w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {/* React */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <FaReact className="text-blue-500 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">React</h2>
            </div>
          </div>
          {/* Node.js */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <FaNode className="text-green-500 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Node.js</h2>
            </div>
          </div>
          {/* MongoDB */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={mongodb} className="w-24 h-24" alt="MongoDB Logo" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">MongoDB</h2>
            </div>
          </div>
          {/* Firebase */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
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
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <FaHtml5 className="text-orange-500 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">HTML</h2>
            </div>
          </div>
          {/* CSS3 */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <FaCss3 className="text-blue-400 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">CSS3</h2>
            </div>
          </div>
          {/* JavaScript */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <FaJsSquare className="text-yellow-500 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">JavaScript</h2>
            </div>
          </div>
          {/* Firebase */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
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
      {/* <marquee behavior="scroll" direction="right" scrollamount="20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <FaHtml5 className="text-orange-500 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">HTML</h2>
            </div>
          </div>
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <FaCss3 className="text-blue-400 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">CSS3</h2>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <FaJsSquare className="text-yellow-500 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">JavaScript</h2>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
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
      </marquee> */}
    </Container>
  );
};

export default MySkill;
