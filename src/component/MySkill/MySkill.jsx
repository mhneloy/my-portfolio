import { FaCss3, FaHtml5, FaJsSquare, FaNode, FaReact } from "react-icons/fa";
import firebase from "../../assets/Firebase.png";
import express from "../../assets/Express.png";
import mongodb from "../../assets/MongoDB.png";
import Container from "../../ShareComponent/Container/Container";
import SectionTitle from "../../ShareComponent/SectionTitle/SectionTitle";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  // const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden">
      <motion.div
        className="scroller flex  text-center"
        initial={{ x: baseVelocity > 2 ? "100%" : "0%" }}
        animate={{ x: baseVelocity > 2 ? "0%" : "100%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          easeInOut: "linear",
        }}
      >
        <div className="flex items-center justify-center gap-4">{children}</div>
      </motion.div>
    </div>
  );
}

const MySkill = () => {
  return (
    <Container>
      <SectionTitle title={"My Skill"} />
      <ParallaxText baseVelocity={-5}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* React */}
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <FaReact className="text-blue-500 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">React</h2>
            </div>
          </div>{" "}
          {/* Node.js */}
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <FaNode className="text-green-500 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Node.js</h2>
            </div>
          </div>
          {/* MongoDB */}
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={mongodb}
                className="text-green-500 w-24 h-24" // Match image size to icon size
                alt="MongoDB Logo"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">MongoDB</h2>
            </div>
          </div>
          {/* Firebase */}
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={firebase}
                className="text-green-500 w-24 h-24" // Match image size to icon size
                alt="Firebase Logo"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Firebase</h2>
            </div>
          </div>
        </div>
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* HTML5 */}
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <FaHtml5 className="text-orange-500 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">HTML</h2>
            </div>
          </div>

          {/* CSS3 */}
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <FaCss3 className="text-blue-400 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">CSS3</h2>
            </div>
          </div>

          {/* JavaScript */}
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <FaJsSquare className="text-yellow-500 text-6xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">JavaScript</h2>
            </div>
          </div>

          {/* Express.js */}
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={express}
                className="text-green-500 w-24 h-24" // Match image size to icon size
                alt="Express.js Logo"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Express.js</h2>
            </div>
          </div>
        </div>
      </ParallaxText>
    </Container>
  );
};

export default MySkill;
