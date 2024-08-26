import React from "react";
import PropTypes from "prop-types";

const MainTitle = ({ title }) => {
  return <h2>{title}</h2>;
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainTitle;
