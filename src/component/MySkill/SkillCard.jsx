import PropTypes from "prop-types";

const SkillCard = ({ logo: Icon, title, rating }) => {
  const colorPersentage = (rating / 10) * 100;
  return (
    <div className="flex flex-col gap-4 justify-center items-center  bg-[rgb(4_4_2/57%)] border-[1px] border-brand  w-full md:w-96 shadow-xl p-2 rounded-2xl">
      <figure className="h-20 mt-10">
        <Icon className="text-orange-500 text-6xl" />
      </figure>
      <div className="flex flex-col gap-4 justify-center items-center w-full text-center">
        <h2 className="card-title">{title}</h2>
        <div className="w-full bg-red-400 h-2 rounded-full shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${colorPersentage}%` }}
          ></div>
        </div>
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
