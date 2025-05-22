import profileImg from "../../assets/neloy.png";
import Navbar from "../../ShareComponent/Navbar/Navbar";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { styles } from "../../styles";
import "./style.css";
const Banner = () => {
  return (
    <section className="bg-hero-animate bg-no-repeat bg-cover bg-center">
      {/* navbar */}
      <Navbar />
      <div className="flex justify-between items-center h-screen">
        <div
          className={`${styles.paddingX} mx-auto flex flex-row items-start w-[62%] `}
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
            <div className="flex gap-5 mt-6">
              <a
                href="#"
                className="btn bg-[#7cf03d] text-[#1f242d] text-[16px] font-semibold hover:shadow-[0_0_10px_#7cf03d] hover:bg-transparent hover:text-[#7cf03d]"
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
        </div>

        {/* images division */}
        <div className="w-[38%] ">
          <div
            className={`relative flex  w-[32vw] h-[32vw]  p-2 rounded-full img-box overflow-hidden`}
          >
            <div className=" relative w-full h-full rounded-full bg-red-500 flex justify-center items-center overflow-hidden z-10">
              <img
                src={profileImg}
                alt="profile_image"
                className="absolute block object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
