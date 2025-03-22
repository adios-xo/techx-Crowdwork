import React from "react";
import { useState } from "react";
import { UserPlus } from "lucide-react";
import { Link } from "react-router";

import Card from "../components/Card";

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

    const CardLists = [
        {id : 1, title: "feat_1", desc : "about feat 1", imgSRC: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAh7sqNHz1gzzTRfYAKcPMIaGIogj54heDg&s"},
        {id : 2, title: "feat_2", desc : "about feat 2", imgSRC: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAh7sqNHz1gzzTRfYAKcPMIaGIogj54heDg&s"},
        {id : 3, title: "feat_3", desc : "about feat 3", imgSRC: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAh7sqNHz1gzzTRfYAKcPMIaGIogj54heDg&s"},
        {id : 4, title: "feat_4", desc : "about feat 4", imgSRC: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAh7sqNHz1gzzTRfYAKcPMIaGIogj54heDg&s"},
        {id : 5, title: "feat_5", desc : "about feat 5", imgSRC: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAh7sqNHz1gzzTRfYAKcPMIaGIogj54heDg&s"},
        {id : 5, title: "feat_6", desc : "about feat 6", imgSRC: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAh7sqNHz1gzzTRfYAKcPMIaGIogj54heDg&s"},
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

            <div className="flex items-center justify-center mt-20 text-xl p-10">

                {/* Left section: Step-by-step instructions */}
                <div className="w-1/2">
                    <h2 className="text-2xl font-bold mb-4">How it works</h2>
                    <div className="space-y-4">

                        {/* Step 1: Find a project */}
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-bold">1</div>
                            <div>
                                <h3 className="font-bold">Find a project</h3>
                                <p className="text-gray-500">Browse through hundreds of local projects that need your help.</p>
                            </div>
                        </div>

                        {/* Step 2: Volunteer your skills */}
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-bold">2</div>
                            <div>
                                <h3 className="font-bold">Volunteer your skills</h3>
                                <p className="text-gray-500">Sign up to contribute your time, skills, or resources to projects you care about.</p>
                            </div>
                        </div>

                        {/* Step 3: Make an impact */}
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-bold">3</div>
                            <div>
                                <h3 className="font-bold">Make an impact</h3>
                                <p className="text-gray-500">Work together with organizations and other volunteers to create positive change.</p>
                            </div>
                        </div>
                    </div>

                    {/* Get Started Button - CTA to engage users */}
                    <button className="bg-black text-white px-6 py-2 rounded-lg mt-6">Get Started</button>
                </div>

                {/* Right section: Placeholder for an image or illustration */}
                <div className="w-1/2 flex items-center justify-center">
                    <div className="w-96 h-96 bg-gray-200 flex items-center justify-center rounded-lg">
                        <span className="text-gray-400">[Image Placeholder]</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
                {CardLists.map((card) => (
                    <Card key={card.id} title={card.title} desc={card.desc} imgSRC={card.imgSRC} />
                ))}
            </div>

            <div className="bg-gray-300 w-full mt-8 py-6 items-center">
                <h1 className="font-bold text-2xl mb-6">
                    Sign Up as a Volunteer? Register now!!
                </h1>

                <Link
                    to={"/register"}
                    className="flex items-center w-32 mx-auto px-4 py-2 bg-black text-white rounded-md hover:cursor-pointer"
                    onClick={() => { }}
                >
                    <UserPlus size={16} className="mr-2" /> Sign up
                </Link>
            </div>
        </div>
    );
}

export default CommunityProjects;