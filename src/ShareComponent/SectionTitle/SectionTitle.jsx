import PropTypes from "prop-types";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div>
      <h3 className="text-2xl font-normal mt-2 text-center">{subTitle}</h3>
      <h2 className="text-4xl font-bold py-4 text-center">{title}</h2>
    </div>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
