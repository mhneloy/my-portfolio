import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MySkill from "../MySkill/MySkill";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Experience />
      <MySkill />
      <Projects />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
