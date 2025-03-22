import React from "react";
import { useState } from "react";

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
    {
      id: 1,
      title: "Volunteer Matching",
      desc: "Our intelligent matching system connects volunteers with projects that align with their skills and interests.",
      imgSRC:
        "data:image/png;base64,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",
    },
    {
      id: 2,
      title: "Issue Raising ",
      desc: "General public can raise issues about problems in their surroundings.",
      imgSRC:
        "data:image/png;base64,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",
    },
    {
      id: 3,
      title: "Easy Problem Identification",
      desc: "NGOs/Government bodies can easily identify local issues and work towards a resolution.",
      imgSRC:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAACmpqZFRUVCQkLa2totLS3y8vJlZWUfHx9xcXHIyMgpKSnx8fE/Pz+Pj49VVVUJCQnCwsLq6uoUFBSurq7R0dH4+PhRUVFfX1+VlZWBgYEyMjKIiIhra2t5eXmgoKAZGRm2trbZ2dk3Nzfj4+M48jMoAAAEBklEQVR4nO3d6XqiMBSAYW1r3RcUt45t1er93+JMRwkawulRJI34fT95Auk7TF0wxVqNiIiIiIh+ve2Tp8a/JRzUPbX8LeGzL2ELIUKEPwijqgsHjfKa9UIQvpQ4w/y16sImwpJDWDyEZZcRzvcTof08GSeN+ld6wOCE3XokVH9Kxo2kcfVe3xwwQKHYiVCqjdBfCBHer7D1ZvXpFMZDe9zLvQi39sCGU9jLHLBzL8KpPXDmFLbn9jiE3kNoQpiE0HsITQiTEHoPoQlhEkLvqd89fbmFmQPejfC9Oz6r++QWju1xoxzhYnx13VKEeV19FaNAu8oLnxEiRHjW+nzH3AIW9uVHbvOx2Uz7AH8UjmZXtCtDePOKPOM/V174glARwuIhlEKoKStsipl3vHN53MnxMkL1ruUIu3FPaGPe+7fa0rhd+nNmhduNtGt88mqhHKH8Ckr5unQjvcefylOc/N1CwELxKgZChAh1wsWnVcspjDr2uJVauLR3HXkVXr3a5FMtnNm7dr0Ky7zmfRRmLoOOEV4VQhPCJIQ1hAgvDaEJYRLCGkKEl1Z0tcn9Ct/21p9kb93CL2vYvqUWTu1dn7wK86rOVQyECBGGK1wn4xbyuICFE/l2T41k3FgcNk2fJ7PChjzFvmThzQvvE9Jbh1AKoSaExUMohVBTRjhbDYRW5p1xZyeNW4irTcQpXkNZbSK/amO1CUKECBXC3Whx1ujZKYwWVqO2Wjiwpxh4FbLa5P6vCCNEiBDhIYSaEJoQJiGsIUR4aY8rrP5qk7V9c+exW2jfObr/oRZu7SmmXoWO+zu7hPXYGhVHamHeFFynQYjw4YXrZJz8uUUUsHD/PhR6N5cAp9Kw4Zu02mQmT8FqkwtDWDyEUgg1ISweQqlyhOvFSCp5Pu63llJDczyHcChOsUxXqpQj/CO/pkqW0E7kYSnIIWzJ+6av+H5XGJcljBEiRHgUvq6sNk5hvLPHqYWRvecq9imMJvbId6ewYw9rtrXC18y11g+v5/BaYV8vbNr7IrwqhGkIjyH8DqHZgFATwjSExxB+h9BsQKjpcYVRw7pj8/zPzYUT+z7TfoWZN+DtWwvzpgjsOk0BYV4IESL0IVzKU5QtnHbEkufJIsK1OMNn2Z89KSsiVIdQU1nCD7OhqkLOoa6QhdU/hwh1IdTEI01unEOzoarC6p9DhLpCFvJ7qAuhJoS5PbyQRxpdIQs5h7oQauJ/aW6Pew6b9jmc+xfOT74X5Otwr8JB4+K6m8MPbn+XyewgXKYbetaGCzr+dKdfhJJZHO5ocrw7w2mOTT+Ut0fu9suncB0ru8LeJbx8qoBSCa/41wwm3TlEGHL8Hv6vKX9FSOBlFsMREREREZGX/gIAA/VAN9vp3wAAAABJRU5ErkJggg==",
    },
    {
      id: 4,
      title: "Volunteer Recognition",
      desc: "Volunteers will recieve medals/badges for their continous efforts to make a change in society.",
      imgSRC:
        "data:image/jpeg;base64,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",
    },
    {
      id: 5,
      title: "Categorisation of Issues ",
      desc: "All the problems will be categorised into different categorie to make it easier for volunteers to choose from different campgains.",
      imgSRC:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSHQbF3bWWlDpuDFNwU7VGnKKyNJ44Sz9qw&s",
    },
    {
      id: 6,
      title: "Verification System",
      desc: "Rigorous verification process ensures the authenticity and credibility of organizations.",
      imgSRC:
        "https://img.freepik.com/premium-vector/shield-shape-icon-vector-template_917138-361.jpg",
    },
  ];

  // State to handle the search input
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col items-center justify-center text-center p-10">
      {/* Header section with title and description */}
      <h1 className="text-4xl font-bold mb-4">
        Make a difference in your community
      </h1>
      <p className="text-gray-500 mb-6 max-w-lg">
        Connect with local projects, volunteer your skills, and collaborate with
        NGOs and government bodies to solve community challenges.
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
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Find Projects
        </button>
      </div>

      {/* Display the list of categories as buttons */}
      <div className="flex gap-4">
        {categories.map((category) => (
          <span
            key={category}
            className="px-4 py-2 bg-gray-200 rounded-full font-semibold"
          >
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
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold">Find a project</h3>
                <p className="text-gray-500">
                  Browse through hundreds of local projects that need your help.
                </p>
              </div>
            </div>

            {/* Step 2: Volunteer your skills */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold">Volunteer your skills</h3>
                <p className="text-gray-500">
                  Sign up to contribute your time, skills, or resources to
                  projects you care about.
                </p>
              </div>
            </div>

            {/* Step 3: Make an impact */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold">Make an impact</h3>
                <p className="text-gray-500">
                  Work together with organizations and other volunteers to
                  create positive change.
                </p>
              </div>
            </div>
          </div>

          {/* Get Started Button - CTA to engage users */}
          <button className="bg-black text-white px-6 py-2 rounded-lg mt-6">
            Get Started
          </button>
        </div>

        {/* Right section: Placeholder for an image or illustration */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-96 h-96 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-400">[Image Placeholder]</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-10">
  {/* Title */}
  <h2 className="text-3xl font-bold tracking-tight mb-4">Platform Features</h2>

  {/* Description */}
  <p className="text-muted-foreground max-w-[800px] mb-8">
    Our comprehensive platform connects volunteers, NGOs, and government bodies with powerful tools to create meaningful change.
  </p>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
    {CardLists.map((card) => (
      <Card key={card.id} title={card.title} desc={card.desc} imgSRC={card.imgSRC} />
    ))}
  </div>
</div>

    </div>
  );
};

export default CommunityProjects;
