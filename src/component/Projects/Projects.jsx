import SectionTitle from "../../ShareComponent/SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div>
      <section className="container mx-auto p-8">
        <SectionTitle title={"My Project"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Crowdfunding Website"
            description="A platform to raise money for various causes."
            link="#"
          />
          <ProjectCard
            title="Winter Donation App"
            description="An app to help people donate winter clothing."
            link="#"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
