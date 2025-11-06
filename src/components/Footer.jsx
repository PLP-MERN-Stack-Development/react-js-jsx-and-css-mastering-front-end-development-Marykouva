import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 dark:bg-gray-800 text-white dark:text-gray-300 py-4 text-center mt-10 transition-all duration-300">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">TaskManager App</span> — All Rights Reserved.
      </p>
      <p className="text-xs mt-1 text-blue-100 dark:text-gray-400">
        Built with 🤍 React + Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
