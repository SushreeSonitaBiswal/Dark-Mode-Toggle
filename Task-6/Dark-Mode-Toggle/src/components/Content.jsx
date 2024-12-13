/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import PropTypes from "prop-types";

const Content = ({ message }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full p-6 text-center ${
        theme === "Light" ? "bg-blue-300 text-black" : "bg-green-900 text-white"
      }`}
    >
      <p>{message}</p>
    </div>
  );
};

// Define PropTypes
Content.propTypes = {
  message: PropTypes.string.isRequired,
};

// Define Default Props
Content.defaultProps = {
  message: "This is the default content message!",
};

export default Content;


