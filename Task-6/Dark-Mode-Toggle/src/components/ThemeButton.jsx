/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import PropTypes from "prop-types";

const ThemeButton = ({ buttonText }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="mt-4 px-4 py-2 border rounded flex items-center gap-2 
      bg-gray-900 text-white hover:bg-gray-700 transition"
    >
      {theme === "Light" ? <MdDarkMode /> : <CiLight />}
      {buttonText}
    </button>
  );
};

// Define PropTypes
ThemeButton.propTypes = {
  buttonText: PropTypes.string, // Optional string prop
};

// Default props if none are provided
ThemeButton.defaultProps = {
  buttonText: "Toggle Theme",
};

export default ThemeButton;



