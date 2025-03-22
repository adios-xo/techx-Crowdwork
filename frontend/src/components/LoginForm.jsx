import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';


const LoginForm = ({ title, placeholder }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/v1/login", data);
            let curToken = response.data.token;
            localStorage.setItem('userToken', curToken);
            navigate('/home', { replace: true });
        } catch (error) {
            console.error("Login error: ", error.response?.data || error.message);
            setIsError(true);
            setError("Invalid Credentials!");
        }
    };

    return (
        <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-500 text-sm">Access your dashboard</p>

            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="mt-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input type="email" placeholder={placeholder} className="w-full p-2 border rounded mt-1" {...register("email", { required: "Email is required" })} />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium">Password</label>
                    <input type="password" className="w-full p-2 border rounded mt-1" {...register("password", { minLength: { value: 6, message: "Min length of password is 6" } })} />
                    <a href="#" className="text-sm text-blue-600 float-right mt-1">Forgot password?</a>
                </div>

                <div className="flex items-center mt-4">
                    <input type="checkbox" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-sm">Remember me</label>
                </div>

                <button className="w-full bg-black text-white p-2 mt-4 rounded">Log In</button>
            </form>
        </div>
    )
}

export default LoginForm