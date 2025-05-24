import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MySkill from "../MySkill/MySkill";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import "./style.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="bg-hero-animate bg-no-repeat bg-cover bg-center about-gradient relative z-10">
        <About />
        <Experience />
      </div>
      <div className="bg-hero-animate bg-no-repeat bg-cover bg-center about-gradient relative z-10">
        <MySkill />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
