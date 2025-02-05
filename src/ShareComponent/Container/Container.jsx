import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
const Container = ({ children, idName }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"
    >
      {children}
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
    </motion.section>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  idName: PropTypes.string,
};
