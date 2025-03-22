import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import IssueComponent from "./IssueComponent";

const IssuesList = ({ userRole }) => {
    const [issues, setIssues] = useState([]);
    const [filteredIssues, setFilteredIssues] = useState([]);
    const [statusFilter, setStatusFilter] = useState("all");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const response = await axios.get("http://localhost:8080/v1/check-issues");
                setIssues(response.data);
            } catch (error) {
                console.error("Error fetching issues:", error);
            }
        };
        fetchIssues();
    }, []);

    useEffect(() => {
        let filtered = issues;
        if (userRole === "volunteer") {
            filtered = filtered.filter((issue) => issue.status !== "active");
        }
        if (statusFilter !== "all") {
            filtered = filtered.filter((issue) => issue.status === statusFilter);
        }
        setFilteredIssues(filtered);
    }, [issues, statusFilter, userRole]);

    return (
        <div className="container mx-auto p-6 flex-col w-[80%]">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-4">Issues List</h1>

                <select
                    className="mb-4 p-2 border rounded-md"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            <div className="grid gap-4">
                {filteredIssues.length > 0 ? (
                    filteredIssues.map((issue) => <IssueComponent key={issue.id} issue={issue} />)
                ) : (
                    <p className="mx-auto">No issues found.</p>
                )}
            </div>
        </div>
    );
};

export default IssuesList;
