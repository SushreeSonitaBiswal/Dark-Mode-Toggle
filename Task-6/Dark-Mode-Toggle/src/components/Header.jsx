/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`w-full p-4 border-b-2 ${
        theme === "Light" ? "bg-blue-100 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h1>{title}</h1>
      <ul className="flex justify-around text-lg font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

// Define PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired, // Title must be a string and is required
};

export default Header;


