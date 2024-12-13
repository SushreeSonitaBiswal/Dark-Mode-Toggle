import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create ThemeContext
const ThemeContext = createContext();

// ThemeProvider Component
export const ThemeProvider = ({ children, initialTheme = "Light" }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || initialTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme.toLowerCase();
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialTheme: PropTypes.string,
};

export default ThemeContext;







