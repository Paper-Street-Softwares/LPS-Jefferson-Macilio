import { motion } from "framer-motion";
import { Children } from "react";
import PropTypes from "prop-types";

export default function MotionDivDownToUp({ children, className }) {
  const childrenArray = Children.toArray(children);

  MotionDivDownToUp.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`${className}`}
    >
      {childrenArray}
    </motion.div>
  );
}
