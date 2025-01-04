const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="btn btn-secondary">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
