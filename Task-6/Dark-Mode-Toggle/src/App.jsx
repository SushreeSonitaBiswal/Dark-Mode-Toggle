/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider
import ThemeContext from "./context/ThemeContext"; // Relative to components/


function App() {
  return (
    <ThemeProvider initialTheme="Dark"> {/* Pass the initialTheme as a prop */}
      <div className="min-h-screen flex flex-col items-center justify-start p-4">
        <h1 className="text-3xl font-bold underline mb-6">React Context Project</h1>
        <Header />
        <Content message="This is the first content block!" />
        <ThemeButton />
        <Content message="This is the second content block!" />
      </div>
    </ThemeProvider>
  );
}

export default App;



