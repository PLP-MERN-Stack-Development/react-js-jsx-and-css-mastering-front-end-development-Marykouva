import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import Home from "./pages/Home";
import About from "./pages/About";
import ApiData from "./pages/ApiData";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Layout>
          <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<TaskManager />} />
              <Route path="/about" element={<About />} />
              <Route path="/api" element={<ApiData />} />
            </Routes>
          </main>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
