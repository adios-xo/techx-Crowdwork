import React from "react";
import { useNavigate } from "react-router-dom";

const IssueComponent = ({ issue }) => {
    const navigate = useNavigate();

    return (
        <div className="p-4 border rounded-md shadow-md cursor-pointer hover:bg-gray-100">
            <h2 className="text-lg font-semibold">{issue.title}</h2>
            <p className="text-gray-600 truncate">{issue.description}</p>
            <button
                className="mt-2 text-blue-600 hover:underline"
                onClick={() => navigate(`/issues/${issue.id}`)}
            >
                See More
            </button>
        </div>
    );
};

export default IssueComponent;
