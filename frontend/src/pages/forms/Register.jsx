import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("volunteer");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // State for error messages

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const tkn = localStorage.getItem('userToken');
        if (tkn) {
            navigate('/home');
        }
    }, [navigate]);

    const handleRegister = async (data) => {
        try {
            // const response = await axios.post("http://localhost:8080/v1/register", data);
            console.log(data)
            /*
                if (response.data.success) {
                    localStorage.setItem("userToken", response.data.token);
                    navigate("/home", { replace: true });
                }
                else {
                    throw new Error("Username or Email already exists");
                }
            */
        } catch (error) {
            console.error("Registration failed:", error.message || error);
            setErrorMessage(error.message || "Something went wrong!");
        }
    };

    const skillsList = [
        { id: 'teaching', label: 'Teaching' },
        { id: 'technology', label: 'Technology' },
        { id: 'cooking', label: 'Cooking' },
        { id: 'administration', label: 'Administration' },
        { id: 'design', label: 'Design' },
        { id: 'construction', label: 'Construction' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'gardening', label: 'Gardening' },
        { id: 'marketing', label: 'Marketing' },
        { id: 'eventPlanning', label: 'Event Planning' }
    ];

    return (
        <>
            <nav className="flex justify-between items-center p-4 border-b shadow-sm">
                <Link to={"/home"} className="text-xl font-bold">
                    <span className="text-black">Community</span>
                    <span className="text-black font-bold">Force</span>
                </Link>
            </nav>

            <div className="flex flex-col items-center justify-center p-6">
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

                <div className="mt-6 p-6 border rounded-lg min-w-96 shadow-lg">
                    {activeTab === "volunteer" ?
                        <>
                            <div className="max-w-2xl mx-auto p-6">
                                <h1 className="text-3xl font-bold mb-1">Volunteer Registration</h1>
                                <p className="text-gray-600 mb-6">Create an account to find and apply for volunteer opportunities</p>

                                <form onSubmit={handleSubmit(handleRegister)}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label htmlFor="firstName" className="block font-medium mb-1">First name</label>
                                            <input
                                                id="firstName"
                                                type="text"
                                                className="w-full border border-gray-300 rounded p-2"
                                                placeholder="John"
                                                {...register('firstName', { required: true })}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName" className="block font-medium mb-1">Last name</label>
                                            <input
                                                id="lastName"
                                                type="text"
                                                className="w-full border border-gray-300 rounded p-2"
                                                placeholder="Doe"
                                                {...register('lastName', { required: true })}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email" className="block font-medium mb-1">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full border border-gray-300 rounded p-2"
                                            placeholder="john.doe@example.com"
                                            {...register('email', {
                                                required: true,
                                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                            })}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="password" className="block font-medium mb-1">Password</label>
                                        <input
                                            id="password"
                                            type="password"
                                            className="w-full border border-gray-300 rounded p-2"
                                            {...register('password', { required: true, minLength: 6 })}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="location" className="block font-medium mb-1">Location</label>
                                        <input
                                            id="location"
                                            type="text"
                                            className="w-full border border-gray-300 rounded p-2"
                                            placeholder="City"
                                            {...register('location', { required: true })}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="pincode" className="block font-medium mb-1">Pincode</label>
                                        <input
                                            id="pincode"
                                            type="text"
                                            className="w-full border border-gray-300 rounded p-2"
                                            placeholder="XXXXXX"
                                            {...register('pincode', { required: true, minLength: 6, maxLength: 6 })}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <p className="block font-medium mb-2">Skills (Select all that apply)</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {skillsList.map((skill) => (
                                                <div key={skill.id} className="flex items-center">
                                                    <input
                                                        id={skill.id}
                                                        type="checkbox"
                                                        className="mr-2"
                                                        {...register('skills')}
                                                        value={skill.id}
                                                    />
                                                    <label htmlFor={skill.id}>{skill.label}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-center">
                                            <input
                                                id="terms"
                                                type="checkbox"
                                                className="mr-2"
                                                {...register('termsAgreed', { required: true })}
                                            />
                                            <label htmlFor="terms">
                                                I agree to the <a href="#" className="text-blue-600 underline">terms of service</a> and <a href="#" className="text-blue-600 underline">privacy policy</a>
                                            </label>
                                        </div>
                                        {errors.termsAgreed && <p className="text-red-500 text-sm mt-1">You must agree to the terms</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                                    >
                                        Register
                                    </button>
                                </form>
                            </div>
                        </>
                        : activeTab === "ngo" ?
                            <>
                                <div className="max-w-2xl mx-auto p-6">
                                    <h1 className="text-3xl font-bold mb-1">NGO Registration</h1>
                                    <p className="text-gray-600 mb-6">Create an account to post projects and recruit volunteers</p>

                                    <form onSubmit={handleSubmit(handleRegister)}>
                                        <div>
                                            <label htmlFor="organizationName" className="block font-medium mb-1">Organization Name</label>
                                            <input
                                                id="organizationName"
                                                type="text"
                                                className="w-full border border-gray-300 rounded p-2"
                                                placeholder="NGO Name"
                                                {...register('organizationName', { required: true })}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="organizationEmail" className="block font-medium mb-1">Organization Email</label>
                                            <input
                                                id="organizationEmail"
                                                type="email"
                                                className="w-full border border-gray-300 rounded p-2"
                                                placeholder="ngo@mail.com"
                                                {...register('organizationEmail', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="password" className="block font-medium mb-1">Password</label>
                                            <input
                                                id="password"
                                                type="password"
                                                className="w-full border border-gray-300 rounded p-2"
                                                {...register('password', { required: true, minLength: 6 })}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="headquartersLocation" className="block font-medium mb-1">Location</label>
                                            <input
                                                id="headquartersLocation"
                                                type="text"
                                                className="w-full border border-gray-300 rounded p-2"
                                                placeholder="City"
                                                {...register('headquartersLocation', { required: true })}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="pincode" className="block font-medium mb-1">Pincode</label>
                                            <input
                                                id="pincode"
                                                type="text"
                                                className="w-full border border-gray-300 rounded p-2"
                                                placeholder="XXXXXX"
                                                {...register('pincode', { required: true, minLength: 6, maxLength: 6 })}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="org-category" className="block font-medium mb-1">
                                                Organization Category
                                            </label>
                                            <select
                                                id="org-category"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="" disabled selected>
                                                    Select category
                                                </option>
                                                <option value="environment">Environment</option>
                                                <option value="education">Education</option>
                                                <option value="health">Healthcare</option>
                                                <option value="housing">Housing</option>
                                                <option value="food">Food Security</option>
                                                <option value="arts">Arts & Culture</option>
                                                <option value="animals">Animal Welfare</option>
                                                <option value="disaster">Disaster Relief</option>
                                            </select>
                                        </div>


                                        <div className="mb-6">
                                            <div className="flex items-center">
                                                <input
                                                    id="terms"
                                                    type="checkbox"
                                                    className="mr-2"
                                                    {...register('termsAgreed', { required: true })}
                                                />
                                                <label htmlFor="terms">
                                                    I agree to the <a href="#" className="text-blue-600 underline">terms of service</a> and <a href="#" className="text-blue-600 underline">privacy policy</a>
                                                </label>
                                            </div>
                                            {errors.termsAgreed && <p className="text-red-500 text-sm mt-1">You must agree to the terms</p>}
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                                        >
                                            Register
                                        </button>
                                    </form>
                                </div>
                            </> :
                            <>
                            </>}
                </div>

                <p className="mt-4 text-sm text-gray-500">
                    Already have an account? <Link to={"/login"} className="text-blue-600">Login</Link>
                </p>
            </div >
        </>
    )
}

export default Register