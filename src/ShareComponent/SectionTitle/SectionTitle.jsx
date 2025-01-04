import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold py-4 text-center">{title}</h2>
    </div>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string,
};
