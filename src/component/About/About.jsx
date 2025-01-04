import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import SectionTitle from "../../ShareComponent/SectionTitle/SectionTitle";

const About = () => {
  return (
    <div>
      <section className="container mx-auto p-8">
        <SectionTitle title={"About Me"} />
        <p className="text-lg">
          I&apos;m a frontend developer skilled in building beautiful and
          responsive web applications. I also have experience with backend
          technologies such as Node.js, Express.js, and MongoDB.
        </p>
        <div className="flex space-x-4 mt-4">
          <FaReact className="text-blue-500 text-3xl" />
          <FaNodeJs className="text-green-500 text-3xl" />
          <FaDatabase className="text-yellow-500 text-3xl" />
        </div>
      </section>
    </div>
  );
};

export default About;
