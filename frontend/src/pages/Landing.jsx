import React from "react";

import { useState } from "react";

const CommunityProjects = () => {
  // Define the available categories for projects
  const categories = [
    "Climate Action",
    "Education",
    "Healthcare",
    "Food Security",
    "Housing",
    "Others",
  ];

  // State to handle the search input
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col items-center justify-center text-center p-10">
      {/* Header section with title and description */}
      <h1 className="text-4xl font-bold mb-4">Make a difference in your community</h1>
      <p className="text-gray-500 mb-6 max-w-lg">
        Connect with local projects, volunteer your skills, and collaborate with NGOs
        and government bodies to solve community challenges.
      </p>
      
      {/* Search bar section with input and button */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search for projects or causes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 p-2 border rounded-lg"
        />
        <button className="bg-black text-white px-4 py-2 rounded-lg">Find Projects</button>
      </div>
      
      {/* Display the list of categories as buttons */}
      <div className="flex gap-4">
        {categories.map((category) => (
          <span key={category} className="px-4 py-2 bg-gray-200 rounded-full font-semibold">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CommunityProjects;