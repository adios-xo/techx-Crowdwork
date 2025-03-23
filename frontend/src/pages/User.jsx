import React, { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/v1/current-user", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                        "Content-Type": "application/json",
                    },
                });
                setUser(response.data.user);
                console.log("User data:", response.data.user);

            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem("userToken");
        navigate("/", { replace: true });
    };

    if (!user) {
        return <p className="text-center text-gray-500">Loading user data...</p>;
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            {/* Top Section - User Info */}
            <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 mt-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                            alt="User Profile"
                            className="w-16 h-16 rounded-full border-2 border-gray-300"
                        />
                        <div>
                            <h1 className="text-2xl font-semibold">{user.fname} {user.lname || ""}</h1>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                    </div>
                    <button
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        onClick={() => setIsEdit(!isEdit)}
                    >
                        <Pencil size={18} />
                        Edit
                    </button>
                </div>
            </div>

            {/* User Information Fields */}
            <div className={`w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 mt-4`}>
                <div className="grid grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-600 text-sm">Full Name</label>
                            <input
                                type="text"
                                className={`w-full border px-4 py-2 rounded-lg mt-1 ${isEdit ? "opacity-100 cursor-default" : "opacity-50 cursor-not-allowed"}`}
                                value={user.fname}
                                disabled={!isEdit}
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm">Gender</label>
                            <select className={`w-full border px-4 py-2 rounded-lg mt-1 ${isEdit ? "opacity-100 cursor-default" : "opacity-50 cursor-not-allowed"}`} disabled={!isEdit}>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm">Skills</label>
                            <input
                                type="text"
                                className={`w-full border px-4 py-2 rounded-lg mt-1 ${isEdit ? "opacity-100 cursor-default" : "opacity-50 cursor-not-allowed"}`}
                                value={user.skills?.join(", ") || "N/A"}
                                disabled={!isEdit}
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-600 text-sm">Phone</label>
                            <input
                                type="text"
                                className={`w-full border px-4 py-2 rounded-lg mt-1 ${isEdit ? "opacity-100 cursor-default" : "opacity-50 cursor-not-allowed"}`}
                                value={user.phone}
                                disabled={!isEdit}
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm">Location</label>
                            <input
                                type="text"
                                className={`w-full border px-4 py-2 rounded-lg mt-1 ${isEdit ? "opacity-100 cursor-default" : "opacity-50 cursor-not-allowed"}`}
                                value={user.location}
                                disabled={!isEdit}
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm">Role</label>
                            <input
                                type="text"
                                className={`w-full border px-4 py-2 rounded-lg mt-1 ${isEdit ? "opacity-100 cursor-default" : "opacity-50 cursor-not-allowed"}`}
                                value={user.role}
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Email Section */}
            <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 mt-4">
                <h2 className="text-lg font-semibold mb-2">My Email Address</h2>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <div>
                        <p className="text-gray-700">{user.email}</p>
                        <p className="text-gray-500 text-sm">Account created at: {new Date(user.createdAt).toDateString()}</p>
                    </div>
                </div>
            </div>

            {/* Sign Out Button */}
            <div className="w-full max-w-5xl flex justify-center mt-6">
                <button
                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default User;
