import React from "react";
import PropTypes from "prop-types";

const MainTitle = ({ title }) => {
  return (
    <h2 className="text-3xl font-bold text-blue-600 text-center my-6">
      {title}
    </h2>
  );
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainTitle;
