import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-all duration-500 ease-in-out">
      {/* Navbar (includes theme toggle) */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow container mx-auto px-4 py-6 transition-colors duration-500">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
