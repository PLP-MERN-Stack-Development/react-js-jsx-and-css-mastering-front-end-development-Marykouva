import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
