import { FaDownload } from "react-icons/fa";
import Container from "../../ShareComponent/Container/Container";
import profileImg from "../../assets/photo.png";
const Banner = () => {
  return (
    <Container>
      <div className="hero bg-base-200 ">
        <div className="flex  overflow-hidden h-[950px] justify-around items-center px-4">
          <div className="w-[665px]">
            <h1 className="text-5xl font-bold">
              Hi! I&apos;m Md Mahmudul Hassan
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-xl btn-outline icon-space-left">
              Get Resume <FaDownload />
            </button>
          </div>
          <div className="flex-1 h-fit">
            <img src={profileImg} className=" w-full h-full" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
