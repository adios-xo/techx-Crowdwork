import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../../components/LoginForm";
import { Link } from "react-router";

const LoginPage = () => {
    const [activeTab, setActiveTab] = useState("volunteer");
    const navigate = useNavigate();

    useEffect(() => {
        const tkn = localStorage.getItem('userToken');
        if (tkn) {
            navigate('/home');
        }
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-500">Log in to your account to continue</p>

            <div className="flex mt-6 space-x-4 border-b">
                {["volunteer", "ngo", "government"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            <div className="mt-6 p-6 border rounded-lg w-96 shadow-lg">
                {activeTab === "volunteer" && <LoginForm title="Volunteer Login" placeholder="john.doe@example.com" />}
                {activeTab === "ngo" && <LoginForm title="NGO Login" placeholder="contact@organization.org" />}
                {activeTab === "government" && <LoginForm title="Government Login" placeholder="contact@agency.gov" />}
            </div>

            <p className="mt-4 text-sm text-gray-500">
                Don't have an account? <Link to={"/register"} className="text-blue-600">Sign up</Link>
            </p>
        </div>
    );
};

export default LoginPage;
