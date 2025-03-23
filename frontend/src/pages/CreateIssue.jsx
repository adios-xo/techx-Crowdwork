import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateIssue = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("userToken"); // Get userToken from localStorage

      const response = await axios.post(
        "http://localhost:8080/v1/issue-post",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach Bearer token
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);

      navigate("/home"); // Redirect to home or issues list
    } catch (error) {
      console.error("Error creating issue:", error);
    }
  };

  const categories = [
    "Climate Action",
    "Education",
    "Healthcare",
    "Food Security",
    "Housing",
    "Others",
  ];

  return (
    <div className="container mx-auto p-6 w-[60%]">
      <h1 className="text-3xl font-bold mb-4 text-center">Create a New Issue</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            {...register("desc", { required: "Description is required" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.desc && <p className="text-red-500">{errors.desc.message}</p>}
        </div>

        {/* Type (Dropdown) */}
        <div>
          <label className="block font-medium mb-1">Type</label>
          <select
            {...register("type", { required: "Type is required" })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.type && <p className="text-red-500">{errors.type.message}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            {...register("location", { required: "Location is required" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.location && <p className="text-red-500">{errors.location.message}</p>}
        </div>

        {/* Pin Code */}
        <div>
          <label className="block font-medium mb-1">Pin Code</label>
          <input
            {...register("pin", { required: "Pin Code is required" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.pin && <p className="text-red-500">{errors.pin.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default CreateIssue;
