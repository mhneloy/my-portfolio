import profileImg from "../../assets/neloy.png";
import Navbar from "../../ShareComponent/Navbar/Navbar";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { styles } from "../../styles";
import "./style.css";
import Container from "../../ShareComponent/Container/Container";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
const Banner = () => {
  const [scrolly, setScrolly] = useState(false);
  useEffect(() => {
    const handleScrolly = () => {
      if (window.scrollY > 150) {
        setScrolly(true);
      } else {
        setScrolly(false);
      }
    };

    window.addEventListener("scroll", handleScrolly);
    return () => window.removeEventListener("scroll", handleScrolly);
  }, []);
  return (
    <section
      id="home"
      className="bg-hero-animate bg-no-repeat bg-cover bg-center relative xl:h-screen"
    >
      {/* navbar */}
      <div
        className={`bg-transparent ${
          scrolly ? "fixed" : "static"
        } top-0 z-50 py-4 w-full backdrop-blur-0 transition-all duration-500`}
      >
        <Navbar />
      </div>

      <Container>
        <div className="flex justify-between items-center z-10 ">
          <motion.div
            variants={fadeIn("left", "spring", 0.5 * 0.3, 0.75)}
            className={` mx-auto flex flex-row items-start gap-4 md:w-[62%] `}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#7cf03d]" />
              <div className="w-1 h-40 sm:h-96 green-gradient " />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} lg:text-[60px]`}>
                Hi, I&apos;m <br />
                <span className={`text-[#7cf03d] lg:text-[80px]`}>
                  Md Mahmudul Hassan
                </span>{" "}
              </h1>
              <h2 className={`${styles.heroSubText} inline-block`}>
                I&apos;m a{" "}
                <span
                  className="span"
                  style={{ "--i": 4 }}
                  data-text="Web Developer"
                >
                  Web Developer
                </span>
                <span
                  className="span"
                  style={{ "--i": 3 }}
                  data-text="Front-End Developer"
                >
                  Front-End Developer
                </span>
                <span
                  className="span"
                  style={{ "--i": 2 }}
                  data-text="Back-End Developer"
                >
                  Back-End Developer
                </span>
                <span
                  className="span"
                  style={{ "--i": 1 }}
                  data-text="Full-Stack Developer"
                >
                  Full-Stack Developer
                </span>
              </h2>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I&apos;m a MERN Developer, user{" "}
                <br className="hidden sm:block" /> interfaces and web
                applications
              </p>
              {/* social media & cv download button */}
              <div className="flex gap-5 flex-col-reverse mt-6">
                <a
                  href="#"
                  className="btn bg-[#7cf03d] text-[#1f242d] text-[16px] font-semibold hover:shadow-[0_0_10px_#7cf03d] hover:bg-transparent hover:text-[#7cf03d] w-fit"
                >
                  Download CV
                </a>
                <div className="flex gap-4 items-center text-[20px] text-[#7cf03d]">
                  <a
                    href="https://www.linkedin.com/in/mhneloy/"
                    className="p-2 border-[2px] border-solid rounded-full border-[#7cf03d] hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] "
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/mhneloy"
                    className="p-2 border-[2px] border-solid border-[#7cf03d] rounded-full  hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.facebook.com/mhneloy01/"
                    className="p-2 border-[2px] border-solid border-[#7cf03d] rounded-full  hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]"
                  >
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* images division */}
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * 0.3, 0.75)}
            className="w-[38%] justify-center items-center hidden md:flex"
          >
            <div
              className={`relative flex justify-center w-[32vw] h-[32vw] rounded-full img-box overflow-hidden`}
            >
              <div className=" relative w-full h-full rounded-full  flex justify-center items-center overflow-hidden z-10">
                <img
                  src={profileImg}
                  alt="profile_image"
                  className="absolute block object-cover w-full rounded-full -mt-2 mix-blend-lighten"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
