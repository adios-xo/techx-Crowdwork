import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const IssuePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <p className="text-center text-red-500">Project not found.</p>;
    }

    return (
        <>
        </>
    );
};

export default IssuePage;
