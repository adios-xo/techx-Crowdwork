import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import IssueComponent from "./IssueComponent";

const IssuesList = ({ userRole }) => {
    const [issues, setIssues] = useState([]);
    const [filteredIssues, setFilteredIssues] = useState([]);
    const [statusFilter, setStatusFilter] = useState("all");
    const [pinFilter, setPinFilter] = useState(""); // Pincode filter state
    const navigate = useNavigate();

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const response = await axios.get("http://localhost:8080/v1/check-issues", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                        "Content-Type": "application/json",
                    },
                });
                setIssues(response.data);
            } catch (error) {
                console.error("Error fetching issues:", error);
            }
        };
        fetchIssues();
    }, []);

    useEffect(() => {
        let filtered = issues;

        // If user is a volunteer, filter out "Active" issues
        if (userRole === "volunteer") {
            filtered = filtered.filter((issue) => issue.status !== "Active");
        }

        // Apply status filter
        if (statusFilter !== "all") {
            filtered = filtered.filter((issue) => issue.status === statusFilter);
        }

        // Apply pincode filter if user has entered a value
        if (pinFilter.trim() !== "") {
            filtered = filtered.filter((issue) => issue.pin.includes(pinFilter));
        }

        setFilteredIssues(filtered);
    }, [issues, statusFilter, pinFilter, userRole]);

    return (
        <div className="container mx-auto p-6 w-[80%] flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Issues List</h1>

                {/* Pincode Filter Input */}
                <input
                    type="text"
                    name="pin"
                    placeholder="Search for pincode"
                    className="p-2 border rounded-md"
                    value={pinFilter}
                    onChange={(e) => setPinFilter(e.target.value)}
                />

                {/* Status Filter Dropdown */}
                <select
                    className="p-2 border rounded-md"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div className="grid gap-4">
                {filteredIssues.length > 0 ? (
                    filteredIssues.map((issue) => <IssueComponent key={issue.id} issue={issue} />)
                ) : (
                    <p className="text-center text-gray-500">No issues found.</p>
                )}
            </div>
        </div>
    );
};

export default IssuesList;
