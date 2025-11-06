import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // posts per page

  // Fetch data from JSONPlaceholder
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter posts by search text
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Handlers for pagination
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Loading and error handling
  if (loading)
    return <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">📦 API Data</h2>

      {/* Search bar */}
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        placeholder="Search posts..."
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
      />

      {/* Posts list */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {paginatedData.map((item) => (
          <Card key={item.id} title={item.title}>
            <p className="text-gray-600 dark:text-gray-300">{item.body}</p>
          </Card>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          variant="secondary"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="primary"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>

      {/* Refresh button */}
      <div className="flex justify-center mt-4">
        <Button variant="success" onClick={() => window.location.reload()}>
          Refresh Data
        </Button>
      </div>
    </div>
  );
};

export default ApiData;
