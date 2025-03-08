// import { FaDownload } from "react-icons/fa";
// import Container from "../../ShareComponent/Container/Container";
// import profileImg from "../../assets/photo.png";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputersCanvas } from "../canvas";
const Banner = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[20px]  mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient " />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I&apos;m{" "}
            <span className="text-[#915eff]">Md Mahmudul Hassan</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I&apos;m a MERN Developer, user <br className="hidden sm:block" />{" "}
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      {/* framer motion */}
      <div className="hidden md:absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <span className="w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
            <motion.div
              animate={{
                y: [-16, 24, -16],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Banner;
