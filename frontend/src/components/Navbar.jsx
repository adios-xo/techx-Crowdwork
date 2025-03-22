import { LogIn, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 border-b shadow-sm">
            <div className="text-xl font-bold">
                <span className="text-black">Community</span>
                <span className="text-black font-bold">Force</span>
            </div>
            <div className="flex space-x-6">
                <a href="#" className="text-black hover:underline">Projects</a>
                <a href="#" className="text-black hover:underline">Organizations</a>
                <a href="#" className="text-black hover:underline">Impact</a>
            </div>
            <div className="flex space-x-4">
                <Link
                    to={"/login"}
                    className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-100 hover:cursor-pointer"
                    onClick={() => { }}
                >
                    <LogIn size={16} className="mr-2" /> Log in
                </Link>
                <Link
                    to={"/register"}
                    className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:cursor-pointer"
                    onClick={() => { }}
                >
                    <UserPlus size={16} className="mr-2" /> Sign up
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
