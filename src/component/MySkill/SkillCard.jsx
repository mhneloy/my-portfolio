import PropTypes from "prop-types";

const SkillCard = ({ logo: Icon, title, rating }) => {
  const colorPersentage = (rating / 10) * 100;
  return (
    <div className="card  bg-base-100 opacity-50 w-full md:w-96 shadow-xl">
      <figure className=" flex-1 px-10 pt-10">
        <Icon className="text-orange-500 text-6xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
      </div>
      <div className="w-full bg-gray-800 h-2 rounded-full shadow-inner">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
          style={{ width: `${colorPersentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
SkillCard.propTypes = {
  logo: PropTypes.any,
  title: PropTypes.string,
  rating: PropTypes.number,
};
