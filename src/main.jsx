import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//  Import the ThemeProvider
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*  Global Theme Provider wraps the entire app */}
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <App />
      </div>
    </ThemeProvider>
  </StrictMode>
);
