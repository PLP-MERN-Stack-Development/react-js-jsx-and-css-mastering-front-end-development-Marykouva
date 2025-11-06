import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // It import theme hook

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // It access theme + toggle function

  return (
    <nav
      className={`${
        theme === "light"
          ? "bg-blue-600 text-white"
          : "bg-gray-900 text-gray-100"
      } px-6 py-4 flex justify-between items-center shadow transition-colors duration-300`}
    >
      <h1 className="text-xl font-bold">TaskManager App</h1>

      <ul className="flex gap-4 items-center">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/tasks" className="hover:underline">
            Tasks
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/api" className="hover:underline">
            API Data
          </Link>
        </li>

        {/*  Theme Toggle Button */}
        <li>
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded-lg bg-white text-blue-600 font-semibold shadow hover:scale-105 hover:bg-gray-200 transition-all duration-300 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
