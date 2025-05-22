// import { FaDownload } from "react-icons/fa";
// import Container from "../../ShareComponent/Container/Container";
// import profileImg from "../../assets/photo.png";
// import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { styles } from "../../styles";
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
          <h2 className={`${styles.heroSubText}`}>
            I&apos;m a Frontend Developer
          </h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I&apos;m a MERN Developer, user <br className="hidden sm:block" />{" "}
            interfaces and web applications
          </p>
          {/* social media & cv download button */}
          <div className="flex">
            <a
              href="#"
              className="btn bg-[#7cf03d] text-[#1f242d] text-[16px] font-semibold hover:shadow-[0_0_10px_#7cf03d] hover:bg-[#7cf03d]"
            >
              Download CV
            </a>
            <div className="flex items-center text-[32px]">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
